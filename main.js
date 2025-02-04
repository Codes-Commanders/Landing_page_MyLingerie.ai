const mailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegEx = /^[A-Za-zА-Яа-яЁё]+([ '-][A-Za-zА-Яа-яЁё]+)*$/;
const phoneRegEx =
  /^\+?[0-9]{1,4}?[ -]?\(?[0-9]{2,4}\)?[ -]?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const openFormBtns = document.querySelectorAll('.open-form-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const inputCheckbox = document.querySelector('.form__input-checkbox');
const customCheckbox = document.querySelector('.form__checkbox');
const form = document.querySelector('.form');
const inputWraps = form.querySelectorAll('.form__field');
const spanCheckbox = form.querySelector('.form__checkbox');
const formBtn = form.querySelector('.btn_form');

const inputsError = {
  nameError: false,
  phoneError: false,
  emaiError: false,
  ckeckboxError: false,
};

let formError = false;

const toggleChecked = () => {
  inputCheckbox.checked = !inputCheckbox.checked;
  spanCheckbox.classList.remove('error');

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

const closeContactUsForm = (e) => {
  if (
    e.target.classList.contains('overlay') ||
    e.target.closest('.close-modal') ||
    e.key === 'Escape'
  ) {
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  }
};

const submitForm = (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const checkbox = formData.get('checkbox');

  if (!nameRegEx.test(name)) {
    inputsError.nameError = true;
    inputWraps[0].classList.add('error');
  } else {
    inputsError.nameError = false;
  }

  if (!phoneRegEx.test(phone)) {
    inputsError.phoneError = true;
    inputWraps[1].classList.add('error');
  } else {
    inputsError.phoneError = false;
  }

  if (!mailRegEx.test(email)) {
    inputsError.emaiError = true;
    inputWraps[2].classList.add('error');
  } else {
    inputsError.emaiError = false;
  }

  if (!checkbox) {
    inputsError.ckeckboxError = true;
    spanCheckbox.classList.add('error');
  } else {
    inputsError.ckeckboxError = false;
  }

  if (
    inputsError.nameError ||
    inputsError.phoneError ||
    inputsError.emaiError ||
    inputsError.ckeckboxError
  ) {
    formError = true;
  } else {
    formError = false;
  }

  if (formError) {
    return;
  }

  alert('Form was submited');
  form.reset();
  customCheckbox.classList.remove('active');
};

openFormBtns.forEach((btn) => btn.addEventListener('click', openContactUsForm));

customCheckbox.addEventListener('click', toggleChecked);
overlay.addEventListener('click', closeContactUsForm);
closeBtn.addEventListener('click', closeContactUsForm);
document.addEventListener('keydown', closeContactUsForm);

inputWraps.forEach((wrap) => {
  const input = wrap.querySelector('input');
  if (!input) return;
  input.addEventListener('input', () => {
    wrap.classList.remove('error');
  });
});

form.addEventListener('submit', submitForm);
