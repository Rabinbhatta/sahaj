#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9
#define BUZZER_PIN 8

MFRC522 rfid(SS_PIN, RST_PIN);
MFRC522::MIFARE_Key key;

const byte balanceBlock = 4; // store balance
const int deduction = 20;    // deduct on each scan

LiquidCrystal_I2C lcd(0x27, 16, 2);  // Set the LCD address to 0x27  display

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
  pinMode(BUZZER_PIN, OUTPUT);

  lcd.init();  // Initialize the LCD(I2C)
  lcd.backlight();   
  lcd.setCursor(0, 0);
  lcd.print("Scan here");

  // Initialize the key to 0xFF
  for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }
}

void loop() {
  int balance;

  // Check for a card
  if (!rfid.PICC_IsNewCardPresent()) {
    return;
  }

  // Select the card
  if (!rfid.PICC_ReadCardSerial()) {
    return;
  }

  // Read the balance
  if (!readBalance(balance) || balance < deduction) {
    // If balance is less than deduction or read fails
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Not sufficient");
    lcd.setCursor(0, 1);
    lcd.print("balance");
  } else {
    // Deduct amount if balance is sufficient
    balance -= deduction;
    if (storeBalance(balance)) {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Payment Success!");
      lcd.setCursor(0, 1);
      lcd.print("Balance: ");
      lcd.print(balance);

      // uzzer for successful payment
      digitalWrite(BUZZER_PIN, HIGH);
      delay(1000);
      digitalWrite(BUZZER_PIN, LOW);
    }
  }

  delay(3000); // 3 seconds delay
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Scan here");

  // Halt PICC
  rfid.PICC_HaltA();
  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();
}

bool storeBalance(int balance) {
  byte buffer[18];
  buffer[0] = balance >> 24;
  buffer[1] = balance >> 16;
  buffer[2] = balance >> 8;
  buffer[3] = balance;

  byte status = rfid.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, balanceBlock, &key, &(rfid.uid));
  if (status != MFRC522::STATUS_OK) {
    Serial.print("PCD_Authenticate() failed at block ");
    Serial.print(balanceBlock);
    Serial.print(": ");
    Serial.println(rfid.GetStatusCodeName(status));
    return false;
  }

  status = rfid.MIFARE_Write(balanceBlock, buffer, 16);
  if (status != MFRC522::STATUS_OK) {
    Serial.print("MIFARE_Write() failed at block ");
    Serial.print(balanceBlock);
    Serial.print(": ");
    Serial.println(rfid.GetStatusCodeName(status));
    return false;
  }

  Serial.print("MIFARE_Write() succeeded at block ");
  Serial.println(balanceBlock);
  return true;
}

bool readBalance(int &balance) {
  byte buffer[18];
  byte size = sizeof(buffer);

  // Authenticating before reading garnu vanda pahila
  byte status = rfid.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, balanceBlock, &key, &(rfid.uid));
  if (status != MFRC522::STATUS_OK) {
    Serial.print("PCD_Authenticate() failed at block ");
    Serial.print(balanceBlock);
    Serial.print(": ");
    Serial.println(rfid.GetStatusCodeName(status));
    return false;
  }

  status = rfid.MIFARE_Read(balanceBlock, buffer, &size);
  if (status != MFRC522::STATUS_OK) {
    Serial.print("MIFARE_Read() failed at block ");
    Serial.print(balanceBlock);
    Serial.print(": ");
    Serial.println(rfid.GetStatusCodeName(status));
    return false;
  }

  balance = (buffer[0] << 24) | (buffer[1] << 16) | (buffer[2] << 8) | buffer[3];
  return true;
}
