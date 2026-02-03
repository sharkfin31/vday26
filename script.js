let noClickCount = 0;
const maxNoClicks = 10;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const celebration = document.getElementById('celebration');

// Messages that appear as the "No" button is clicked
const noMessages = [
    "Are you sure? 🥺",
    "Really? Think about it... 💭",
    "Please? Pretty please? 🙏",
    "Come on, you know you want to! 😊",
    "I'll give you chocolate! 🍫",
    "Don't make me sad! 😢",
    "You're breaking my heart! 💔",
    "Last chance to change your mind! 😅",
    "Okay, one more click... 🤞",
    "Fine! I'll decide for you! 😤"
];

// Handle Yes button click
yesBtn.addEventListener('click', function() {
    showCelebration();
});

// Handle No button click
noBtn.addEventListener('click', function(e) {
    noClickCount++;
    
    if (noClickCount < maxNoClicks) {
        // Show message
        message.textContent = noMessages[noClickCount - 1];
        
        // Make the button move to a random position
        moveButton();
        
        // Make the Yes button slightly bigger each time
        const currentScale = 1 + (noClickCount * 0.1);
        yesBtn.style.transform = `scale(${currentScale})`;
    } else {
        // After 10 clicks, convert the No button to Yes
        noBtn.textContent = "Yes! 💗";
        noBtn.classList.remove('no-btn');
        noBtn.classList.add('yes-btn');
        noBtn.style.position = 'relative';
        noBtn.style.transform = 'scale(1)';
        message.textContent = "I knew you'd come around! 😍";
        
        // Add click handler to the converted button
        noBtn.addEventListener('click', showCelebration);
    }
});

function moveButton() {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    
    // Add the moving class for absolute positioning
    noBtn.classList.add('moving');
    
    // Calculate random position within the container
    const maxX = containerRect.width - noBtn.offsetWidth - 40;
    const maxY = containerRect.height - noBtn.offsetHeight;
    
    // Generate random positions
    const randomX = Math.random() * maxX - (maxX / 2);
    const randomY = Math.random() * maxY - (maxY / 2);
    
    // Apply the new position
    noBtn.style.left = `calc(50% + ${randomX}px)`;
    noBtn.style.top = `${randomY}px`;
}

function showCelebration() {
    celebration.classList.remove('hidden');
    
    // Optional: Create confetti effect
    createConfetti();
}

function createConfetti() {
    // Add extra confetti hearts
    const colors = ['#ff1744', '#ff6b9d', '#ffa8c5', '#ffb3d9', '#ff69b4'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.fontSize = '2em';
            confetti.textContent = ['❤️', '💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 6)];
            confetti.style.zIndex = '1001';
            confetti.style.animation = `rain ${2 + Math.random() * 2}s linear`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 50);
    }
}
