// document.addEventListener('DOMContentLoaded', function () {
//   // Находим все popup формы
//   document.querySelectorAll('.popup__form').forEach(form => {
//     // Маска для телефона (имя поля phone)
//     const phoneInput = form.querySelector('input[name="phone"]');
//     if (phoneInput && window.IMask) {
//       IMask(phoneInput, {
//         mask: [
//           '{0} (000) 000-00-00',
//           '7 (000) 000-00-00',
//           '8 (000) 000-00-00',
//           '9 (000) 000-00-00',
//           '+0 (000) 000-00-00'
//         ]
//       });
//     }

//     // Валидация поля Имя (name)
//     const nameInput = form.querySelector('input[name="name"]');
//     if (nameInput) {
//       nameInput.addEventListener('input', function () {
//         this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\-\' ]/g, '');
//         removeErrorBorder(this);
//       });
//     }

//     // Для всех input и textarea убираем ошибку при вводе
//     form.querySelectorAll('input, textarea').forEach(input => {
//       input.addEventListener('input', function () {
//         removeErrorBorder(this);
//       });
//     });

//     form.addEventListener('submit', function (e) {
//       e.preventDefault();
//       let valid = true;
//       clearErrors(form);
//       // Валидация всех input[type='text'] и textarea (обязательны)
//       form.querySelectorAll('input[type="text"], textarea').forEach(input => {
//         if (!input.value.trim()) {
//           showErrorBorder(input);
//           valid = false;
//         } else if (input === nameInput) {
//           if (!/^[-' a-zA-Zа-яА-ЯёЁ]+$/.test(input.value.trim())) {
//             showErrorBorder(input);
//             valid = false;
//           }
//         } else if (input === phoneInput) {
//           // Проверка номера: должно быть 11 цифр
//           let x = input.value.replace(/\D/g, '');
//           if (x.length !== 11) {
//             showErrorBorder(input);
//             valid = false;
//           }
//         }
//       });

//       if (valid) {
//         // Отправляем форму через AJAX
//         const formData = new FormData(form);

//         fetch(form.action, {
//           method: 'POST',
//           body: formData
//         })
//           .then(response => response.text())
//           .then(data => {
//             if (data.trim() === 'success') {
//               // Показываем модальное окно благодарности
//               showThankYouModal();

//               // Закрываем модальное окно формы
//               const popupBg = form.closest('.popup__bg');
//               const popup = form.closest('.popup');
//               if (popupBg) popupBg.classList.remove('active');
//               if (popup) popup.classList.remove('active');

//               // Очищаем форму
//               form.reset();
//             } else if (data.startsWith('rate_limit:')) {
//               const wait = data.split(':')[1];
//               alert(`С этого IP уже была отправка недавно. Пожалуйста, подождите ${wait} секунд.`);
//             } else if (data.startsWith('validation_error:')) {
//               const error = data.split(':')[1];
//               alert(`Ошибка валидации: ${error}`);
//             } else {
//               alert('Произошла ошибка при отправке формы. Попробуйте позже.');
//             }
//           })
//           .catch(error => {
//             console.error('Ошибка при отправке формы:', error);
//             alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
//           });
//       }
//     });
//   });

//   function showErrorBorder(input) {
//     if (input) input.style.border = '1px solid #e74c3c';
//   }
//   function removeErrorBorder(input) {
//     if (input) input.style.border = '';
//   }
//   function clearErrors(form) {
//     form.querySelectorAll('input, textarea').forEach(input => {
//       input.style.border = '';
//     });
//   }

//   // Функция для показа модального окна благодарности
//   function showThankYouModal() {
//     // Создаем HTML для модального окна
//     const modalHTML = `
//       <div id="thankYouModal" style="
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100vh;
//         background: rgba(0, 0, 0, 0.5);
//         backdrop-filter: blur(10px);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         z-index: 1000;
//         opacity: 0;
//         transition: opacity 0.3s ease;
//       ">
//         <div style="
//           background: #fff;
//           padding: 40px;
//           border-radius: 12px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//           text-align: center;
//           max-width: 400px;
//           width: 90%;
//           transform: scale(0.8);
//           transition: transform 0.3s ease;
//         ">
//           <div style="
//             width: 60px;
//             height: 60px;
//             background: #4CAF50;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin: 0 auto 20px;
//             color: white;
//             font-size: 30px;
//           ">✓</div>
//           <h2 style="
//             font-size: 24px;
//             font-weight: 600;
//             color: #333;
//             margin-bottom: 10px;
//           ">Успешно!</h2>
//           <p style="
//             font-size: 16px;
//             color: #666;
//             line-height: 1.5;
//             margin-bottom: 15px;
//           ">Спасибо! Ваша заявка отправлена.</p>
//           <div style="
//             font-size: 14px;
//             color: #999;
//           ">Окно закроется автоматически через <span id="timer">2</span> сек</div>
//         </div>
//       </div>
//     `;

//     // Добавляем модальное окно в body
//     document.body.insertAdjacentHTML('beforeend', modalHTML);

//     const modal = document.getElementById('thankYouModal');
//     const timerElement = document.getElementById('timer');

//     // Показываем модальное окно
//     setTimeout(() => {
//       modal.style.opacity = '1';
//       modal.querySelector('div').style.transform = 'scale(1)';
//     }, 10);

//     // Таймер обратного отсчета
//     let timeLeft = 2;
//     const timerInterval = setInterval(() => {
//       timeLeft--;
//       if (timerElement) {
//         timerElement.textContent = timeLeft;
//       }

//       if (timeLeft <= 0) {
//         clearInterval(timerInterval);
//         hideThankYouModal();
//       }
//     }, 1000);

//     // Автоматическое скрытие через 2 секунды
//     setTimeout(() => {
//       hideThankYouModal();
//     }, 2000);
//   }

//   // Функция для скрытия модального окна благодарности
//   function hideThankYouModal() {
//     const modal = document.getElementById('thankYouModal');
//     if (modal) {
//       modal.style.opacity = '0';
//       modal.querySelector('div').style.transform = 'scale(0.8)';
//       setTimeout(() => {
//         if (modal.parentNode) {
//           modal.parentNode.removeChild(modal);
//         }
//       }, 300);
//     }
//   }
// }); 








// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('.popup__form').forEach(form => {
//     const phoneInput = form.querySelector('input[name="phone"]');
//     const nameInput = form.querySelector('input[name="name"]');
//     const policyCheckbox = form.querySelector('input.policy-checkbox');

//     if (phoneInput && window.IMask) {
//       IMask(phoneInput, {
//         mask: [
//           '{0} (000) 000-00-00',
//           '7 (000) 000-00-00',
//           '8 (000) 000-00-00',
//           '9 (000) 000-00-00',
//           '+0 (000) 000-00-00'
//         ]
//       });
//     }

//     if (nameInput) {
//       nameInput.addEventListener('input', function () {
//         this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\-\' ]/g, '');
//         removeErrorBorder(this);
//       });
//     }

//     form.querySelectorAll('input, textarea').forEach(input => {
//       input.addEventListener('input', function () {
//         removeErrorBorder(this);
//       });
//     });

//     if (policyCheckbox) {
//       policyCheckbox.addEventListener('change', function () {
//         removeErrorBorder(this);
//       });
//     }

//     form.addEventListener('submit', function (e) {
//       e.preventDefault();
//       let valid = true;
//       clearErrors(form);

//       form.querySelectorAll('input[type="text"], textarea').forEach(input => {
//         if (!input.value.trim()) {
//           showErrorBorder(input);
//           valid = false;
//         } else if (input === nameInput) {
//           if (!/^[-' a-zA-Zа-яА-ЯёЁ]+$/.test(input.value.trim())) {
//             showErrorBorder(input);
//             valid = false;
//           }
//         } else if (input === phoneInput) {
//           let x = input.value.replace(/\D/g, '');
//           if (x.length !== 11) {
//             showErrorBorder(input);
//             valid = false;
//           }
//         }
//       });

//       // Валидация чекбокса политики
//       if (policyCheckbox && !policyCheckbox.checked) {
//         showErrorBorder(policyCheckbox);
//         valid = false;
//       }

//       if (valid) {
//         const formData = new FormData(form);

//         fetch(form.action, {
//           method: 'POST',
//           body: formData
//         })
//           .then(response => response.text())
//           .then(data => {
//             if (data.trim() === 'success') {
//               showThankYouModal();
//               const popupBg = form.closest('.popup__bg');
//               const popup = form.closest('.popup');
//               if (popupBg) popupBg.classList.remove('active');
//               if (popup) popup.classList.remove('active');
//               form.reset();
//             } else if (data.startsWith('rate_limit:')) {
//               const wait = data.split(':')[1];
//               alert(`С этого IP уже была отправка недавно. Пожалуйста, подождите ${wait} секунд.`);
//             } else if (data.startsWith('validation_error:')) {
//               const error = data.split(':')[1];
//               alert(`Ошибка валидации: ${error}`);
//             } else {
//               alert('Произошла ошибка при отправке формы. Попробуйте позже.');
//             }
//           })
//           .catch(error => {
//             console.error('Ошибка при отправке формы:', error);
//             alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
//           });
//       }
//     });
//   });

//   function showErrorBorder(input) {
//     if (input.type === 'checkbox') {
//       input.style.outline = '2px solid #e74c3c';
//     } else {
//       input.style.border = '1px solid #e74c3c';
//     }
//   }

//   function removeErrorBorder(input) {
//     if (input.type === 'checkbox') {
//       input.style.outline = '';
//     } else {
//       input.style.border = '';
//     }
//   }

//   function clearErrors(form) {
//     form.querySelectorAll('input, textarea').forEach(input => {
//       removeErrorBorder(input);
//     });
//   }

//   function showThankYouModal() {
//     const modalHTML = `
//       <div id="thankYouModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; z-index: 1000; opacity: 0; transition: opacity 0.3s ease;">
//         <div style="background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); text-align: center; max-width: 400px; width: 90%; transform: scale(0.8); transition: transform 0.3s ease;">
//           <div style="width: 60px; height: 60px; background: #4CAF50; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 30px;">✓</div>
//           <h2 style="font-size: 24px; font-weight: 600; color: #333; margin-bottom: 10px;">Успешно!</h2>
//           <p style="font-size: 16px; color: #666; line-height: 1.5; margin-bottom: 15px;">Спасибо! Ваша заявка отправлена.</p>
//           <div style="font-size: 14px; color: #999;">Окно закроется автоматически через <span id="timer">2</span> сек</div>
//         </div>
//       </div>
//     `;

//     document.body.insertAdjacentHTML('beforeend', modalHTML);

//     const modal = document.getElementById('thankYouModal');
//     const timerElement = document.getElementById('timer');

//     setTimeout(() => {
//       modal.style.opacity = '1';
//       modal.querySelector('div').style.transform = 'scale(1)';
//     }, 10);

//     let timeLeft = 2;
//     const timerInterval = setInterval(() => {
//       timeLeft--;
//       if (timerElement) timerElement.textContent = timeLeft;
//       if (timeLeft <= 0) {
//         clearInterval(timerInterval);
//         hideThankYouModal();
//       }
//     }, 1000);

//     setTimeout(() => {
//       hideThankYouModal();
//     }, 2000);
//   }

//   function hideThankYouModal() {
//     const modal = document.getElementById('thankYouModal');
//     if (modal) {
//       modal.style.opacity = '0';
//       modal.querySelector('div').style.transform = 'scale(0.8)';
//       setTimeout(() => {
//         modal.remove();
//       }, 300);
//     }
//   }
// });
















document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.popup__form').forEach(form => {
    const phoneInput = form.querySelector('input[name="phone"]');
    const nameInput = form.querySelector('input[name="name"]');
    const policyCheckbox = form.querySelector('input.policy-checkbox');

    if (phoneInput && window.IMask) {
      IMask(phoneInput, {
        mask: [
          '{0} (000) 000-00-00',
          '7 (000) 000-00-00',
          '8 (000) 000-00-00',
          '9 (000) 000-00-00',
          '+0 (000) 000-00-00'
        ]
      });
    }

    if (nameInput) {
      nameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\-\' ]/g, '');
        removeErrorBorder(this);
      });
    }

    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', function () {
        removeErrorBorder(this);
      });
    });

    if (policyCheckbox) {
      policyCheckbox.addEventListener('change', function () {
        removeErrorBorder(this);
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      clearErrors(form);

      form.querySelectorAll('input[type="text"], textarea').forEach(input => {
        if (!input.value.trim()) {
          showErrorBorder(input);
          valid = false;
        } else if (input === nameInput) {
          if (!/^[-' a-zA-Zа-яА-ЯёЁ]+$/.test(input.value.trim())) {
            showErrorBorder(input);
            valid = false;
          }
        } else if (input === phoneInput) {
          let x = input.value.replace(/\D/g, '');
          if (x.length !== 11) {
            showErrorBorder(input);
            valid = false;
          }
        }
      });

      // Валидация чекбокса политики
      if (policyCheckbox && !policyCheckbox.checked) {
        showErrorBorder(policyCheckbox);
        valid = false;
      }

      if (valid) {
        const formData = new FormData(form);
        formData.delete('policy');

        fetch(form.action, {
          method: 'POST',
          body: formData
        })
          .then(response => response.text())
          .then(data => {
            if (data.trim() === 'success') {
              showThankYouModal();
              const popupBg = form.closest('.popup__bg');
              const popup = form.closest('.popup');
              if (popupBg) popupBg.classList.remove('active');
              if (popup) popup.classList.remove('active');
              form.reset();
            } else if (data.startsWith('rate_limit:')) {
              const wait = data.split(':')[1];
              alert(`С этого IP уже была отправка недавно. Пожалуйста, подождите ${wait} секунд.`);
            } else if (data.startsWith('validation_error:')) {
              const error = data.split(':')[1];
              alert(`Ошибка валидации: ${error}`);
            } else {
              alert('Произошла ошибка при отправке формы. Попробуйте позже.');
            }
          })
          .catch(error => {
            console.error('Ошибка при отправке формы:', error);
            alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
          });
      }
    });
  });

  function showErrorBorder(input) {
    if (input.type === 'checkbox') {
      const customBox = input.closest('label')?.querySelector('.custom-checkbox');
      if (customBox) {
        customBox.style.border = '1px solid #e74c3c';
      }
    } else {
      input.style.border = '1px solid #e74c3c';
    }
  }

  function removeErrorBorder(input) {
    if (input.type === 'checkbox') {
      const customBox = input.closest('label')?.querySelector('.custom-checkbox');
      if (customBox) {
        customBox.style.border = '';
      }
    } else {
      input.style.border = '';
    }
  }

  function clearErrors(form) {
    form.querySelectorAll('input, textarea').forEach(input => {
      removeErrorBorder(input);
    });
    const policy = form.querySelector('input.policy-checkbox');
    if (policy) removeErrorBorder(policy);
  }

  function showThankYouModal() {
    const modalHTML = `
      <div id="thankYouModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; z-index: 1000; opacity: 0; transition: opacity 0.3s ease;">
        <div style="background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); text-align: center; max-width: 400px; width: 90%; transform: scale(0.8); transition: transform 0.3s ease;">
          <div style="width: 60px; height: 60px; background: #4CAF50; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 30px;">✓</div>
          <h2 style="font-size: 24px; font-weight: 600; color: #333; margin-bottom: 10px;">Успешно!</h2>
          <p style="font-size: 16px; color: #666; line-height: 1.5; margin-bottom: 15px;">Спасибо! Ваша заявка отправлена.</p>
          <div style="font-size: 14px; color: #999;">Окно закроется автоматически через <span id="timer">2</span> сек</div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('thankYouModal');
    const timerElement = document.getElementById('timer');

    setTimeout(() => {
      modal.style.opacity = '1';
      modal.querySelector('div').style.transform = 'scale(1)';
    }, 10);

    let timeLeft = 2;
    const timerInterval = setInterval(() => {
      timeLeft--;
      if (timerElement) timerElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        hideThankYouModal();
      }
    }, 1000);

    setTimeout(() => {
      hideThankYouModal();
    }, 2000);
  }

  function hideThankYouModal() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
      modal.style.opacity = '0';
      modal.querySelector('div').style.transform = 'scale(0.8)';
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  }
});
