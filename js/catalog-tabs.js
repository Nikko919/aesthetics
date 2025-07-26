// // document.addEventListener('DOMContentLoaded', function () {
// //   const tabButtons = document.querySelectorAll('.hero-catalog-item-btn');
// //   const tabContents = document.querySelectorAll('.hero-catalog-tab-content-list-box');

// //   // Присваиваем data-индексы для универсальности
// //   tabButtons.forEach((btn, idx) => {
// //     btn.setAttribute('data-tab', idx);
// //   });
// //   tabContents.forEach((content, idx) => {
// //     content.setAttribute('data-tab-content', idx);
// //   });

// //   function activateTab(idx) {
// //     tabButtons.forEach((btn, i) => {
// //       btn.classList.toggle('active', i === idx);
// //     });
// //     tabContents.forEach((content, i) => {
// //       content.style.display = (i === idx) ? '' : 'none';
// //     });
// //   }

// //   // Инициализация: показываем первый таб
// //   activateTab(0);

// //   tabButtons.forEach((btn, idx) => {
// //     btn.addEventListener('click', function () {
// //       activateTab(idx);
// //     });
// //   });

// //   // Открытие/закрытие меню каталога
// //   // Кнопка открытия
// //   const openCatalogBtn = document.querySelector('.open-catalog-btn');
// //   // Само меню
// //   const catalogPopupBox = document.querySelector('.hero-catalog-popup-box');
// //   // Кнопка закрытия (крестик)
// //   const closeCatalogBtn = document.querySelector('.hero-catalog-popup-close-box');

// //   if (openCatalogBtn && catalogPopupBox) {
// //     openCatalogBtn.addEventListener('click', function (e) {
// //       e.stopPropagation();
// //       catalogPopupBox.style.display = 'flex';
// //     });
// //   }

// //   if (closeCatalogBtn && catalogPopupBox) {
// //     closeCatalogBtn.addEventListener('click', function (e) {
// //       e.stopPropagation();
// //       catalogPopupBox.style.display = 'none';
// //     });
// //   }

// //   // Клик вне меню — закрыть меню
// //   if (catalogPopupBox) {
// //     document.addEventListener('click', function (e) {
// //       if (
// //         catalogPopupBox.style.display === 'flex' &&
// //         !catalogPopupBox.contains(e.target) &&
// //         e.target !== openCatalogBtn
// //       ) {
// //         catalogPopupBox.style.display = 'none';
// //       }
// //     });
// //   }
// // }); 





// document.addEventListener('DOMContentLoaded', function () {
//   const tabButtons = document.querySelectorAll('.hero-catalog-item-btn');
//   const tabContents = document.querySelectorAll('.hero-catalog-tab-content-list-box');

//   // Присваиваем data-индексы для универсальности
//   tabButtons.forEach((btn, idx) => {
//     btn.setAttribute('data-tab', idx);
//   });
//   tabContents.forEach((content, idx) => {
//     content.setAttribute('data-tab-content', idx);
//   });

//   function activateTab(idx) {
//     tabButtons.forEach((btn, i) => {
//       btn.classList.toggle('active', i === idx);
//     });
//     tabContents.forEach((content, i) => {
//       content.style.display = (i === idx) ? '' : 'none';
//     });
//   }

//   // Инициализация: показываем первый таб
//   activateTab(0);

//   tabButtons.forEach((btn, idx) => {
//     btn.addEventListener('click', function () {
//       activateTab(idx);
//     });
//   });

//   // Открытие/закрытие меню каталога
//   // Все кнопки открытия
//   const openCatalogBtns = document.querySelectorAll('.open-catalog-btn');
//   // Все меню (каждое соответствует своей кнопке, если они в одной группе)
//   const catalogPopups = document.querySelectorAll('.hero-catalog-popup-box');

//   openCatalogBtns.forEach((btn, index) => {
//     const catalogPopupBox = catalogPopups[index];
//     const closeCatalogBtn = catalogPopupBox?.querySelector('.hero-catalog-popup-close-box');

//     if (btn && catalogPopupBox) {
//       // Открытие
//       btn.addEventListener('click', function (e) {
//         e.stopPropagation();
//         // Закрываем все открытые
//         catalogPopups.forEach(box => box.style.display = 'none');
//         // Открываем соответствующий
//         catalogPopupBox.style.display = 'flex';
//       });
//     }

//     if (closeCatalogBtn && catalogPopupBox) {
//       closeCatalogBtn.addEventListener('click', function (e) {
//         e.stopPropagation();
//         catalogPopupBox.style.display = 'none';
//       });
//     }

//     // Клик вне меню — закрыть его
//     document.addEventListener('click', function (e) {
//       if (
//         catalogPopupBox.style.display === 'flex' &&
//         !catalogPopupBox.contains(e.target) &&
//         e.target !== btn
//       ) {
//         catalogPopupBox.style.display = 'none';
//       }
//     });
//   });
// });




document.addEventListener('DOMContentLoaded', function () {
  // Табы каталога
  const tabButtons = document.querySelectorAll('.hero-catalog-item-btn');
  const tabContents = document.querySelectorAll('.hero-catalog-tab-content-list-box');

  // Присваиваем data-индексы для универсальности
  tabButtons.forEach((btn, idx) => {
    btn.setAttribute('data-tab', idx);
  });
  tabContents.forEach((content, idx) => {
    content.setAttribute('data-tab-content', idx);
  });

  function activateTab(idx) {
    tabButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
    });
    tabContents.forEach((content, i) => {
      content.style.display = (i === idx) ? '' : 'none';
    });
  }

  // Инициализация: показываем первый таб
  if (tabButtons.length > 0) {
    activateTab(0);

    tabButtons.forEach((btn, idx) => {
      btn.addEventListener('click', function () {
        activateTab(idx);
      });
    });
  }

  // Открытие/закрытие меню каталога
  const openCatalogBtns = document.querySelectorAll('.open-catalog-btn');
  const catalogPopups = document.querySelectorAll('.hero-catalog-popup-box');

  openCatalogBtns.forEach((btn) => {
    // Находим ближайший popup для текущей кнопки
    // Это предполагает, что popup находится в той же области DOM, что и кнопка
    // Если структура другая, нужно адаптировать этот селектор
    const catalogPopupBox = btn.closest('.bottom-box')?.nextElementSibling?.querySelector('.hero-catalog-popup-box') ||
      document.querySelector('.hero-catalog-popup-box');

    if (!catalogPopupBox) return;

    const closeCatalogBtn = catalogPopupBox.querySelector('.hero-catalog-popup-close-box');

    // Открытие
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      // Закрываем все открытые popup
      catalogPopups.forEach(box => {
        box.style.display = 'none';
      });
      // Открываем текущий
      catalogPopupBox.style.display = 'flex';
    });

    // Закрытие
    if (closeCatalogBtn) {
      closeCatalogBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        catalogPopupBox.style.display = 'none';
      });
    }

    // Клик вне меню — закрыть его
    document.addEventListener('click', function (e) {
      if (
        catalogPopupBox.style.display === 'flex' &&
        !catalogPopupBox.contains(e.target) &&
        !btn.contains(e.target)
      ) {
        catalogPopupBox.style.display = 'none';
      }
    });
  });
});