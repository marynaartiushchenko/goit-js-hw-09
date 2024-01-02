document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('input[name="email"]');
  const messageInput = feedbackForm.querySelector('textarea[name="message"]');
  const localStorageKey = 'feedback-form-state';

  const savedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  emailInput.value = savedState.email || '';
  messageInput.value = savedState.message || '';

  feedbackForm.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
      const currentState = {
        email: emailInput.value,
        message: messageInput.value,
      };
      localStorage.setItem(localStorageKey, JSON.stringify(currentState));
    }
  });

  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please fill in both email and message fields.');
      return; 
    }

    
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);


    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(localStorageKey);
  });
});