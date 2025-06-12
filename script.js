const path = window.location.pathname;

if (path.includes('index.html')) {
  document.body.addEventListener('click', function () {
    window.location.href = 'log-in-create-account.html';
  });
}

if (path.includes('log-in-create-account.html')) {
  const agreeCheckbox = document.getElementById('agreeCheckbox');
  const createAccountBtn = document.getElementById('createAccountBtn');
  const loginBtn = document.getElementById('loginBtn');

  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', function (event) {
      if (!agreeCheckbox.checked) {
        alert('You must accept the Terms & Conditions and Privacy Policy to proceed.');
        event.preventDefault();
      } else {
        window.location.href = 'onboarding-1.html';
      }
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', function () {
      window.location.href = 'onboarding-1.html';
    });
  }
}

if (path.includes('onboarding-1.html')) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', function () {
      window.location.href = 'onboarding-2.html';
    });
  }
}

if (path.includes('onboarding-2.html')) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', function () {
      window.location.href = 'onboarding-3.html';
    });
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key.toLowerCase() === 'r') {
    window.location.href = 'index.html';
  }
});