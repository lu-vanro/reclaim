const path = window.location.pathname;

if (path.includes('index.html')) {
  document.body.addEventListener('click', () => {
    window.location.href = 'log-in-create-account.html';
  });
}

if (path.includes('log-in-create-account.html')) {
  const agreeCheckbox = document.getElementById('agreeCheckbox');
  const createAccountBtn = document.getElementById('createAccountBtn');
  const loginBtn = document.getElementById('loginBtn');

  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', (event) => {
      if (!agreeCheckbox.checked) {
        alert('You must accept the Terms & Conditions and Privacy Policy to proceed.');
        event.preventDefault();
      } else {
        window.location.href = 'onboarding-1.html';
      }
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      window.location.href = 'onboarding-1.html';
    });
  }
}

if (path.includes('onboarding-1.html')) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'onboarding-2.html';
    });
  }
}

if (path.includes('onboarding-2.html')) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'onboarding-3.html';
    });
  }
}

if (path.includes('onboarding-3.html')) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'onboarding-4.html';
    });
  }
}

if (path.includes('onboarding-4.html')) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'onboarding-5.html';
    });
  }
}

if (path.includes('onboarding-5.html')) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'splash-screen.html';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const splashVideo = document.querySelector('.splash-video');
  if (splashVideo) {
    splashVideo.play();
    splashVideo.onloadedmetadata = () => {
      setTimeout(() => {
        window.location.href = 'homepage.html';
      }, splashVideo.duration * 1000);
    };
  }

  const buttons = document.querySelectorAll('.toggle-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected');
      const selectedButtons = document.querySelectorAll('.toggle-button.selected');
      if (selectedButtons.length > 5) {
        button.classList.remove('selected');
        alert('You can only select up to 5 goals.');
      }
    });
  });

  if (path.includes('selected-rest-goal.html')) {
    const roundButton = document.querySelector('.round-button');
    if (roundButton) {
      roundButton.addEventListener('click', () => {
        window.location.href = 'resting.html';
      });
    } else {
      console.warn('.round-button not found on selected-rest-goal.html');
    }
  }

  if (path.includes('resting.html')) {
    setTimeout(() => {
      window.location.href = 'resting-done.html';
    }, 5000);
  }

  const doneButton = document.querySelector('.done-button');
  if (doneButton) {
    doneButton.addEventListener('click', () => {
      window.location.href = 'done.html';
    });
  }
});

if (window.location.pathname.includes('done.html')) {
  window.addEventListener('load', () => {
    const confettiCanvas = document.getElementById('confetti-canvas');
    if (confettiCanvas) {
      const myConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true,
      });
      
      myConfetti({
        particleCount: 800,
        spread: 200,
        origin: { x: 0.5, y: 0.6 },
        colors: ['#839A6B', '#D16B5C', '#4C3D67', '#C2D8E6'],
      });
      
      setTimeout(() => {
        window.location.href = 'homepage.html';
      }, 4000);
    } else {
      console.warn('Confetti canvas not found.');
    }
  });
}