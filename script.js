// Create animated stars in the background
function createStars() {
  const starsContainer = document.getElementById('starsContainer');
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
  }
}

// Create confetti animation
function createConfetti() {
  const colors = ['#00843D', '#CE1126', '#FFFFFF'];
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Countdown and redirect logic
(function() {
  const START = 10; // seconds
  let sec = START;
  const countdown = document.getElementById('countdown');
  const goNow = document.getElementById('goNow');
  const stayBtn = document.getElementById('stayBtn');
  let timerActive = true;

  // Update countdown display
  function update() {
    countdown.innerText = sec;
  }

  update();

  // Start countdown timer
  const timer = setInterval(() => {
    if (!timerActive) return;
    
    sec--;
    if (sec <= 0) {
      clearInterval(timer);
      // Redirect to Instagram
      window.location.href = goNow.href;
    } else {
      update();
    }
  }, 1000);

  // If user clicks "Stay", stop redirect
  stayBtn.addEventListener('click', function(e) {
    timerActive = false;
    clearInterval(timer);
    document.querySelector('.timer-label').innerText = 'تم إلغاء التحويل التلقائي - يمكنك الانتقال للإنستغرام من الزر أعلاه';
    countdown.style.display = 'none';
  });
})();

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
  createStars();
  createConfetti();
  
  // Continue creating confetti every 3 seconds
  setInterval(createConfetti, 3000);
});

// === SHOW MAIN CONTENT AFTER LOGO INTRO ===
setTimeout(() => {
  document.getElementById('logoIntro').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  // Start stars & confetti only after intro
  createStars();
  createConfetti();
  setInterval(createConfetti, 3000);
}, 4000);