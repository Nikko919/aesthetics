// document.addEventListener('DOMContentLoaded', function () {
//   // --- Логика выпадающего меню ---
//   const filterBtn = document.querySelector('.catalog-filter-btn');
//   const dropdown = document.querySelector('.catalog-dropdown');
//   const items = document.querySelectorAll('.catalog-dropdown-item');

//   filterBtn.addEventListener('click', function (e) {
//     e.stopPropagation();
//     dropdown.classList.toggle('open');
//     items.forEach(item => {
//       item.classList.remove('active');
//     });
//   });

//   document.addEventListener('click', function (e) {
//     if (!dropdown.contains(e.target) && !filterBtn.contains(e.target)) {
//       dropdown.classList.remove('open');
//       items.forEach(item => item.classList.remove('active'));
//     }
//   });

//   items.forEach(item => {
//     const box = item.querySelector('.catalog-dropdown-item-box');
//     box.addEventListener('click', function (e) {
//       e.stopPropagation();
//       if (item.classList.contains('active')) {
//         item.classList.remove('active');
//       } else {
//         items.forEach(i => i.classList.remove('active'));
//         item.classList.add('active');
//       }
//     });
//   });

//   // --- Фильтрация карточек по категориям, включая 'Показать все' ---
//   document.querySelectorAll('.catalog-dropdown-menu-item-link [data-category]').forEach(item => {
//     item.addEventListener('click', function () {
//       const category = this.getAttribute('data-category');
//       const cards = document.querySelectorAll('.catalog-cards-box .card');
//       if (category === 'all') {
//         cards.forEach(card => {
//           card.style.display = '';
//         });
//       } else {
//         cards.forEach(card => {
//           card.style.display = (card.getAttribute('data-category') === category) ? '' : 'none';
//         });
//       }
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   // --- Логика выпадающего меню ---
//   const filterBtn = document.querySelector('.catalog-filter-btn');
//   const dropdown = document.querySelector('.catalog-dropdown');
//   const items = document.querySelectorAll('.catalog-dropdown-item');

//   filterBtn.addEventListener('click', function (e) {
//     e.stopPropagation();
//     dropdown.classList.toggle('open');
//     items.forEach(item => {
//       item.classList.remove('active');
//     });
//   });

//   document.addEventListener('click', function (e) {
//     if (!dropdown.contains(e.target) && !filterBtn.contains(e.target)) {
//       dropdown.classList.remove('open');
//       items.forEach(item => item.classList.remove('active'));
//     }
//   });

//   items.forEach(item => {
//     const box = item.querySelector('.catalog-dropdown-item-box');
//     box.addEventListener('click', function (e) {
//       e.stopPropagation();
//       if (item.classList.contains('active')) {
//         item.classList.remove('active');
//       } else {
//         items.forEach(i => i.classList.remove('active'));
//         item.classList.add('active');
//       }
//     });
//   });

//   // --- Логика фильтрации ---
//   const allCards = Array.from(document.querySelectorAll('.catalog-cards-box .card'));

//   document.querySelectorAll('.catalog-dropdown-menu-item-link [data-category]').forEach(item => {
//     item.addEventListener('click', function () {
//       const category = this.getAttribute('data-category');
//       let filteredCards;
//       let pageSize;

//       if (category === 'all') {
//         filteredCards = allCards;
//       } else {
//         filteredCards = allCards.filter(card => card.getAttribute('data-category') === category);
//       }
//       // Для всех случаев устанавливаем размер страницы 8.
//       // Пагинация автоматически скроется, если карточек будет 8 или меньше.
//       pageSize = 8;

//       if (window.updatePagination) {
//         window.updatePagination(filteredCards, pageSize);
//       }

//       // Закрываем выпадающий список только если выбрана не 'all'
//     });
//   });
// }); 


document.addEventListener('DOMContentLoaded', function () {
  const filterBtn = document.querySelector('.catalog-filter-btn');
  const dropdown = document.querySelector('.catalog-dropdown');
  const items = document.querySelectorAll('.catalog-dropdown-item');

  function isMobile() {
    return window.innerWidth < 1200;
  }

  // Открытие/закрытие меню по кнопке только на мобильных
  if (filterBtn) {
    filterBtn.addEventListener('click', function (e) {
      if (!isMobile()) return;
      e.stopPropagation();
      dropdown.classList.toggle('open');
      items.forEach(item => item.classList.remove('active'));
    });
  }

  // Закрытие меню при клике вне
  document.addEventListener('click', function (e) {
    if (!isMobile()) return;
    if (!dropdown.contains(e.target) && !filterBtn.contains(e.target)) {
      dropdown.classList.remove('open');
      items.forEach(item => item.classList.remove('active'));
    }
  });

  // Аккордеон подкатегорий
  items.forEach(item => {
    const box = item.querySelector('.catalog-dropdown-item-box');
    box.addEventListener('click', function (e) {
      e.stopPropagation();
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  });

  // Фильтрация карточек
  const allCards = Array.from(document.querySelectorAll('.catalog-cards-box .card'));
  document.querySelectorAll('.catalog-dropdown-menu-item-link [data-category]').forEach(item => {
    item.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      let filteredCards;
      let pageSize = 8;
      if (category === 'all') {
        filteredCards = allCards;
      } else {
        filteredCards = allCards.filter(card => card.getAttribute('data-category') === category);
      }
      if (window.updatePagination) {
        window.updatePagination(filteredCards, pageSize);
      }
    });
  });

  // При ресайзе окна: если десктоп — убираем классы "open"
  window.addEventListener('resize', function () {
    if (!isMobile()) {
      dropdown.classList.remove('open');
      items.forEach(item => item.classList.remove('active'));
    }
  });
}); 