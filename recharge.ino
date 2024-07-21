#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9
#define BUZZER_PIN 8 /

MFRC522 rfid(SS_PIN, RST_PIN);
MFRC522::MIFARE_Key key;

const byte balanceBlock = 4; 
const int rechargeAmount = 500; 

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();

  lcd.init(); 
  lcd.backlight(); 
  lcd.setCursor(0, 0);
  lcd.print("Scan to recharge");

  pinMode(BUZZER_PIN, OUTPUT); 

  
  for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }
}

void loop() {
  // Check for a card
  if (!rfid.PICC_IsNewCardPresent()) {
    return;
  }

  // Select the card
  if (!rfid.PICC_ReadCardSerial()) {
    return;
  }

  // Recharge the card
  if (rechargeCard(rechargeAmount)) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Recharged 500");
    lcd.setCursor(0, 1);
    lcd.print("New balance: 500");
    digitalWrite(BUZZER_PIN, HIGH); // Turn on the buzzer
    delay(1000); // Buzzer on for 1 second
    digitalWrite(BUZZER_PIN, LOW); // Turn off the buzzer
  } else {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Recharge failed");
    digitalWrite(BUZZER_PIN, HIGH); // Turn on the buzzer
    delay(500); // Buzzer on for 0.5 second
    digitalWrite(BUZZER_PIN, LOW); // Turn off the buzzer
  }

  delay(3000); // Wait for 3 seconds 
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Scan to recharge");

  // Halt PICC
  rfid.PICC_HaltA();
  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();
}

bool rechargeCard(int amount) {
  byte buffer[18];
  buffer[0] = amount >> 24;
  buffer[1] = amount >> 16;
  buffer[2] = amount >> 8;
  buffer[3] = amount;

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
