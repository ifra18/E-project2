document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.toggle-icon');
  
      answer.classList.toggle('show');
      icon.textContent = answer.classList.contains('show') ? '-' : '+';
    });
  });
  