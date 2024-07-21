import React, { useState } from 'react';
import "./styles.css"
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isChat, setIsChat] = useState(false);

  const questions = [
    'How can I get student discount?',
    'How does the payment system work?',
    'Where are the cycle stands located?',
    'What are the benefits of using the smart transportation system?',
    'How can I change my card?',
  ];

  const getBotResponse = (question) => {
    const answers = {
      'How can I get student discount?': 'To get a student discount, you need to provide a valid student ID to our Bus Staffs. Once your student status is verified, the discount will be automatically applied to your RFID card, giving you reduced fares on all transportation services.',
      'How does the payment system work?': 'The payment system uses RFID cards that users can load with credit. These cards can be scanned when using the transportation services to deduct the appropriate fare.',
      'Where are the cycle stands located?': 'Cycle stands are strategically located near major bus stops, parks, and commercial areas to ensure easy access for users.',
      'What are the benefits of using the smart transportation system?': 'Using the smart transportation system offers benefits such as time efficiency through optimized routes, cost reduction via automated payments and discounts, and easy accessibility with conveniently located stops and user-friendly payment methods.',
      'How can I change my card?': 'You can change your card via bus staff by paying a fair fee, especially if your credit score is declined or if there is any issue with your current card.',
    };

    return answers[question] || 'I am sorry, I do not understand the question.';
  };

  const handleQuestionClick = (question) => {
    const userMessage = { text: question, sender: 'user' };
    const botResponse = getBotResponse(question);
    const botMessage = { text: botResponse, sender: 'bot' };
    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <div>
      {!isChat ? (
        <div className='chatbot' onClick={() => setIsChat(true)}>
          <IoChatbubbleEllipsesSharp />
        </div>
      ) : (
        <div style={styles.chatbotContainer}>
          <div style={styles.chatWindow}>
            <div style={styles.messagesContainer}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.message,
                    alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#FFF',
                  }}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div style={styles.questionContainer}>
              {questions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  style={styles.questionButton}
                >
                  {question}
                </button>

              ))}
              <button className="close" onClick={()=>setIsChat(false)} ><IoMdClose/></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '30px',
    right: '20px',
    zIndex: '999',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'fit-content',
    width: 'fit-content',
    backgroundColor: '#F5F5F5',
    borderRadius: '20px',
  },
  chatWindow: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '700px', // Adjust height as needed
    border: '1px solid #CCC',
    borderRadius: '20px',
    backgroundColor: '#FFF',
  },
  messagesContainer: {
    flex: 5, // 50% of the height
    overflowY: 'scroll',
    padding: '20px 10px 10px 30px',
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none', // For Internet Explorer and Edge
  },
  questionContainer: {
    flex: 1, // 50% of the height
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    padding: '10px',
    borderTop: '1px solid #CCC',
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none', // For Internet Explorer and Edge
  },
  message: {
    padding: '10px',
    borderRadius: '10px',
    margin: '5px 0',
    maxWidth: '80%',
  },
  questionButton: {
    padding: '10px 15px',
    margin: '5px 0px',
    border: '1px solid #CCC',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#FFF',
    cursor: 'pointer',
  },
};

export default Chatbot;
