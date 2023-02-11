const emailInput = document.querySelector(".autorization-e-mail");
const emailCheck = document.querySelector(".emailCheck");

const regExp = /^(([a-zа-я0-9_-]+\.)*[a-zа-я0-9_-]+@[a-zа-я0-9-]+(\.[a-zа-я0-9-]+)*\.[a-zа-я]{2,6})?$/;

emailCheck.addEventListener("click", (e) => {
  console.log(regExp.test(emailInput.value));
  if (regExp.test(emailInput.value)) {
    alert('Всё правильно!')
  } else {
    alert('Укажите правильную форму Email\'a, t.e\n' + 'me@example.com')
  }
});


const passwordInput = document.querySelector(".autorization-password");

const regExp1 = /^[A-Za-z]\w{7,14}$/;

emailCheck.addEventListener("click", (e) => {
  console.log(regExp1.test(passwordInput.value));
  if (regExp1.test(passwordInput.value)) {
    alert('Всё правильно!')
  } else {
    alert('Пароль должен содержать буквы, цифры (0, тоже допускаются) и состоять из 8 - 20 символов')
  }
});