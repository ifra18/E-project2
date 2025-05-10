// Get all the FAQ question elements
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const toggleIcon = item.querySelector('.toggle-icon');

  // Add click event to each question
  question.addEventListener('click', () => {
    // Accordion-style behavior (only one FAQ answer is shown at a time)
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-answer').classList.remove('show');
        otherItem.querySelector('.toggle-icon').textContent = '+';
      }
    });

    // Toggle the current answer visibility and icon
    answer.classList.toggle('show');
    toggleIcon.textContent = answer.classList.contains('show') ? '-' : '+';
  });
});
