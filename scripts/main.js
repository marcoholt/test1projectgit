// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Web application initialized');
    
    // Chatbot functionality
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const minimizeBtn = document.querySelector('.minimize-btn');
    const chatbotContainer = document.querySelector('.chatbot-container');
    
    // Simple responses for the chatbot
    const botResponses = {
        'hello': 'Hi there! How can I help you today?',
        'hi': 'Hello! What can I do for you?',
        'help': 'I can help you with general questions about this website. What would you like to know?',
        'bye': 'Goodbye! Have a great day!',
        'default': "I'm not sure I understand. Could you rephrase that?"
    };
    
    // Function to add a message to the chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        
        messageDiv.appendChild(messageText);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to get bot response
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        for (const [key, value] of Object.entries(botResponses)) {
            if (lowerMessage.includes(key)) {
                return value;
            }
        }
        
        return botResponses.default;
    }
    
    // Handle send button click
    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            
            // Simulate bot thinking
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response);
            }, 500);
        }
    });
    
    // Handle Enter key in input
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
    
    // Handle minimize button
    minimizeBtn.addEventListener('click', () => {
        chatbotContainer.classList.toggle('minimized');
        if (chatbotContainer.classList.contains('minimized')) {
            minimizeBtn.textContent = '+';
            chatMessages.style.display = 'none';
            document.querySelector('.chat-input').style.display = 'none';
        } else {
            minimizeBtn.textContent = '−';
            chatMessages.style.display = 'flex';
            document.querySelector('.chat-input').style.display = 'flex';
        }
    });
    
    // Add any interactive functionality here
    const heroSection = document.querySelector('.hero');
    
    heroSection.addEventListener('click', () => {
        console.log('Hero section clicked');
    });
}); 