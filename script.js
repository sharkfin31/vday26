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
        // After 10 clicks, convert the No button to Yes and hide the original Yes button
        yesBtn.style.display = 'none';
        noBtn.textContent = "Yes! 💗";
        noBtn.classList.remove('no-btn');
        noBtn.classList.remove('moving');
        noBtn.classList.add('yes-btn');
        noBtn.style.position = 'relative';
        noBtn.style.left = '';
        noBtn.style.top = '';
        noBtn.style.transform = 'scale(1)';
        message.textContent = "I knew you'd come around! 😍";
        
        // Add click handler to the converted button
        noBtn.addEventListener('click', showCelebration);
    }
});

function moveButton() {
    // Add the moving class for fixed positioning
    noBtn.classList.add('moving');
    
    const padding = 20; // Minimum distance from edges
    const minDistanceFromYes = 150; // Minimum distance from Yes button
    let newX, newY;
    let attempts = 0;
    let validPosition = false;
    
    // Get Yes button position
    const yesRect = yesBtn.getBoundingClientRect();
    const noWidth = noBtn.offsetWidth;
    const noHeight = noBtn.offsetHeight;
    
    // Keep trying until we find a position that doesn't overlap
    while (!validPosition && attempts < 50) {
        // Generate random position within viewport
        newX = padding + Math.random() * (window.innerWidth - noWidth - padding * 2);
        newY = padding + Math.random() * (window.innerHeight - noHeight - padding * 2);
        
        // Calculate center points
        const noCenterX = newX + noWidth / 2;
        const noCenterY = newY + noHeight / 2;
        const yesCenterX = yesRect.left + yesRect.width / 2;
        const yesCenterY = yesRect.top + yesRect.height / 2;
        
        // Calculate distance between centers
        const distance = Math.sqrt(
            Math.pow(noCenterX - yesCenterX, 2) + 
            Math.pow(noCenterY - yesCenterY, 2)
        );
        
        // Check if position is valid (far enough from Yes button)
        if (distance > minDistanceFromYes) {
            validPosition = true;
        }
        
        attempts++;
    }
    
    // Apply the new position
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
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
