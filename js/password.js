        // Встановіть пароль
        const correctPassword = "Я люблю Мар'янку";
  function checkPassword() {
    const userPassword = prompt("Будь ласка, введіть пароль:");

    // Перевірка пароля
    if (userPassword === correctPassword) {
      alert("Пароль правильний. Ви маєте доступ до вмісту сайту.");

      // Показати весь вміст при введенні правильного паролю
      document.body.style.display = "block";
    } else {
      alert("Неправильний пароль. Спробуйте ще раз.");
      // Рекурсивний виклик для нової спроби
      checkPassword();
    }
  }

  // Викликати функцію для перевірки пароля при завантаженні сторінки
  window.onload = checkPassword;
