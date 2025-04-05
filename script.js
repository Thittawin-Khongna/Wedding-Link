const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messagesDiv.appendChild(messageElement);
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // เลื่อนไปข้อความล่าสุด
    }
});

const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const weddingDate = new Date('November 3, 2025 09:00:00').getTime(); // แก้ไขวันที่และเวลาตามงานแต่งของคุณ

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = String(days).padStart(2, '0');
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    } else {
        daysSpan.textContent = '00';
        hoursSpan.textContent = '00';
        minutesSpan.textContent = '00';
        secondsSpan.textContent = '00';
    }
};

updateCountdown();
setInterval(updateCountdown, 1000);