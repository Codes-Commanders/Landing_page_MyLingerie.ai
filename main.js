const inputCheckbox = document.querySelector('.form__input-checkbox');
const customCheckbox = document.querySelector('.form__checkbox');
const openFormBtns = document.querySelectorAll('.open-form-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const toggleChecked = () => {
  inputCheckbox.checked = !inputCheckbox.checked;

  if (inputCheckbox.checked) {
    customCheckbox.classList.add('active');
  } else {
    customCheckbox.classList.remove('active');
  }
};

const openContactUsForm = () => {
  overlay.classList.add('active');
  document.body.classList.add('lock');
};

const closeontactUsForm = (e) => {
  if (
    e.target.classList.contains('overlay') ||
    e.target.closest('.close-modal') ||
    e.key === 'Escape'
  ) {
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  }
};

openFormBtns.forEach(btn => btn.addEventListener('click', openContactUsForm))

customCheckbox.addEventListener('click', toggleChecked);
overlay.addEventListener('click', closeontactUsForm);
closeBtn.addEventListener('click', closeontactUsForm);
document.addEventListener('keydown', closeontactUsForm);
