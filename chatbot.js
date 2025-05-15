const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-message');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotTyping = document.getElementById('chatbot-typing');
const sendBtn = document.getElementById('sendBtn');

// Show chatbot after 3 seconds
setTimeout(() => {
    chatbotContainer.style.display = 'flex';
    setTimeout(() => {
        chatbotContainer.classList.add('visible');
    }, 100);
}, 3000);

// Close chatbot
chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('visible');
    setTimeout(() => {
        chatbotContainer.style.display = 'none';
    }, 300);
});

// Enhanced responses with more natural language and portfolio-specific answers
const responses = {
    "hello": "Hello there! 👋 How can I assist you with Michael's portfolio today?",
    "hi": "Hi! 😊 What would you like to know about Michael's work?",
    "hey": "Hey there! How can I help you explore this portfolio?",
    "how are you": "I'm functioning at optimal capacity! 🤖 How about you?",
    "what is your name": "I'm Mic-Bot, your virtual guide to Michael's portfolio!",
    "exit": "Goodbye! Feel free to return if you have more questions. Have a great day! 🚀",
    "what is your purpose": "I'm here to help you understand Michael's portfolio, skills, and projects. Ask me anything!",
    "skills": "Michael has skills in: Python, Java, JavaScript, HTML/CSS, .NET Core, React, Docker, and more! Check the skills section for details.",
    "projects": "Michael has worked on several projects including: E-commerce API, CI/CD Pipeline, ML Chatbot, and more. See the projects section!",
    "contact": "You can contact Michael through the contact form or via email at your.email@example.com.",
    "experience": "Michael is a Software Engineering graduate with experience in full-stack development and DevOps. Check the about section!",
    "thank you": "You're welcome! 😊 Let me know if you need anything else.",
    "thanks": "No problem! Happy to help. Is there anything else you'd like to know?",
    "default": "I'm not sure I understand. Could you rephrase that? You can ask about Michael's skills, projects, or experience."
};

// Function to add a message to the chat
function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to process user input
function processUserInput() {
    const userMessage = chatbotInput.value.trim().toLowerCase();
    if (!userMessage) return;
    
    addMessage('You', userMessage);
    chatbotInput.value = '';
    
    // Show typing indicator
    chatbotTyping.textContent = "Mic-Bot is typing...";
 // Simulate thinking delay
 setTimeout(() => {
    chatbotTyping.textContent = "";
    
    let botMessage = responses.default;
    for (const key in responses) {
        if (userMessage.includes(key)) {
            botMessage = responses[key];
            break;
        }
    }
    addMessage('Mic-Bot', botMessage);
        
    if (userMessage === 'exit') {
        setTimeout(() => {
            chatbotContainer.classList.remove('visible');
            setTimeout(() => {
                chatbotContainer.style.display = 'none';
            }, 300);
        }, 1000);
    }
}, 1000 + Math.random() * 1000); // Random delay for more natural feel
}

// Event listeners
sendBtn.addEventListener('click', processUserInput);

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processUserInput();
    }
});

// Add some personality with random status messages
const statusMessages = [
    "Exploring the portfolio...",
    "Analyzing projects...",
    "Scanning skills section...",
    "Ready to assist!",
    "Preparing helpful responses..."
];

setInterval(() => {
    if (chatbotTyping.textContent === "" && Math.random() > 0.7) {
        chatbotTyping.textContent = statusMessages[Math.floor(Math.random() * statusMessages.length)];
        setTimeout(() => {
            chatbotTyping.textContent = "";
        }, 2000);
    }
}, 5000);
