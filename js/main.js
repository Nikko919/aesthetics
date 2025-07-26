// document.addEventListener('DOMContentLoaded', function () {
//   DG.then(function () {
//     const map = DG.map('map', {
//       center: [55.75, 37.62],
//       zoom: 10
//     });

//     // Используем salePoints, который должен быть определён в шаблоне WordPress
//     if (typeof salePoints !== 'undefined' && Array.isArray(salePoints)) {
//       salePoints.forEach(function (point) {
//         if (point.lat && point.lng) {
//           DG.marker([parseFloat(point.lat), parseFloat(point.lng)]).addTo(map);
//         }
//       });
//     }
//   });
// });


/*
document.addEventListener('DOMContentLoaded', function () {
  DG.then(function () {
    const map = DG.map('map', {
      center: [55.75, 37.62],
      zoom: 10
    });

    // Используем salePoints, который должен быть определён в шаблоне WordPress
    if (typeof salePoints !== 'undefined' && Array.isArray(salePoints)) {
      salePoints.forEach(function(point) {
        if (point.lat && point.lng) {
          DG.marker([parseFloat(point.lat), parseFloat(point.lng)]).addTo(map);
        }
      });
    }

    // --- ВАРИАНТ: ручной массив точек (закомментирован) ---
    // var points = [
    //   { lat: 55.7558, lng: 37.6176 },
    //   { lat: 55.7415, lng: 37.6209 },
    //   { lat: 55.7495, lng: 37.5372 }
    // ];
    // points.forEach(function(point) {
    //   if (point.lat && point.lng) {
    //     DG.marker([parseFloat(point.lat), parseFloat(point.lng)]).addTo(map);
    //   }
    // });
  });
});
*/

// document.addEventListener('DOMContentLoaded', function () {
//   DG.then(function () {
//     const map = DG.map('map', {
//       center: [53.195878, 50.100202],

//       zoom: 10
//     });

//     // --- РУЧНОЙ ВВОД ТОЧЕК ПРОДАЖ ---
//     // Добавьте свои точки в этот массив:
//     var points = [
//       { lat: 53.216276, lng: 50.164010, title: 'Точка продаж 1' },
//       // { lat: 55.7558, lng: 37.6176, title: 'Точка продаж 1' },
//     ];

//     points.forEach(function (point) {
//       if (point.lat && point.lng) {
//         var marker = DG.marker([parseFloat(point.lat), parseFloat(point.lng)]).addTo(map);
//         if (point.title) {
//           marker.bindLabel(point.title, { static: true });
//         }
//       }
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   DG.then(function () {
//     const map = DG.map('map2', {
//       center: [54.710162, 20.510137],

//       zoom: 13
//     });

//     // --- РУЧНОЙ ВВОД ТОЧЕК ПРОДАЖ ---
//     // Добавьте свои точки в этот массив:
//     var points = [
//       { lat: 54.713824, lng: 20.505520, title: 'Точка продаж 1' },
//       // { lat: 55.7558, lng: 37.6176, title: 'Точка продаж 1' },
//     ];

//     points.forEach(function (point) {
//       if (point.lat && point.lng) {
//         var marker = DG.marker([parseFloat(point.lat), parseFloat(point.lng)]).addTo(map);
//         if (point.title) {
//           marker.bindLabel(point.title, { static: true });
//         }
//       }
//     });
//   });
// });






// // === Переключение карт и инициализация двух карт 2GIS ===
// document.addEventListener('DOMContentLoaded', function () {
//   // Переключение карт по кнопкам
//   const mapButtons = document.querySelectorAll('.location-btn');
//   const mapItems = document.querySelectorAll('.map-item');

//   mapButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       mapButtons.forEach(btn => btn.classList.remove('active'));
//       mapItems.forEach(item => item.classList.remove('active'));
//       button.classList.add('active');
//       const mapId = button.dataset.map;
//       const mapToShow = document.getElementById(mapId);
//       if (mapToShow) {
//         mapToShow.classList.add('active');
//       }
//     });
//   });

//   // Инициализация двух карт 2GIS
//   DG.then(function () {
//     // Карта 1
//     if (document.getElementById('map1')) {
//       var map1 = DG.map('map1', {
//         center: [53.195878, 50.100202,], // координаты первой точки (пример)
//         zoom: 13
//       });
//       DG.marker([53.199039, 50.116031,]).addTo(map1).bindPopup('Первая карта');
//       DG.marker([53.198090, 50.117315,]).addTo(map1).bindPopup('Первая карта');
//       DG.marker([53.197637, 50.116579,]).addTo(map1).bindPopup('Первая карта');
//     }
//     // Карта 2
//     if (document.getElementById('map2')) {
//       var map2 = DG.map('map2', {
//         center: [54.710162, 20.510137,], // координаты второй точки (пример)
//         zoom: 13
//       });
//       DG.marker([55.75, 37.61]).addTo(map2).bindPopup('Вторая карта');
//       DG.marker([55.75, 37.61]).addTo(map2).bindPopup('Вторая карта');
//       DG.marker([55.75, 37.61]).addTo(map2).bindPopup('Вторая карта');
//     }
//   });
// });




// === Переключение карт и инициализация двух карт 2GIS ===
let map1, map2;

document.addEventListener('DOMContentLoaded', function () {
  // Переключение карт по кнопкам
  const mapButtons = document.querySelectorAll('.location-btn');
  const mapItems = document.querySelectorAll('.map-item');

  mapButtons.forEach(button => {
    button.addEventListener('click', () => {
      mapButtons.forEach(btn => btn.classList.remove('active'));
      mapItems.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const mapId = button.dataset.map;
      const mapToShow = document.getElementById(mapId);
      if (mapToShow) {
        mapToShow.classList.add('active');
        // invalidateSize для корректного отображения
        if (mapId === 'map1' && map1) map1.invalidateSize();
        if (mapId === 'map2' && map2) map2.invalidateSize();
      }
    });
  });

  // Инициализация двух карт 2GIS
  DG.then(function () {
    // Карта 1
    if (document.getElementById('map1')) {
      map1 = DG.map('map1', {
        center: [53.195878, 50.100202], // координаты первой точки (пример)
        zoom: 13
      });
      DG.marker([53.199039, 50.116031]).addTo(map1).bindPopup('Первая карта');
      DG.marker([53.198090, 50.117315]).addTo(map1).bindPopup('Первая карта');
      DG.marker([53.197637, 50.116579]).addTo(map1).bindPopup('Первая карта');
    }
    // Карта 2
    if (document.getElementById('map2')) {
      map2 = DG.map('map2', {
        center: [47.222109, 39.718813,], // координаты второй точки (пример)
        zoom: 13
      });
      DG.marker([47.230975, 39.709126,]).addTo(map2).bindPopup('Вторая карта');
      DG.marker([47.229281, 39.705895,]).addTo(map2).bindPopup('Вторая карта');
    }
  });
});





// // Функция для обновления цвета кнопки
// function updateButtonColor() {
//   const block = document.querySelector('.hero-slide-bg'); // Замените на ваш блок с фоном
//   const button = document.querySelector('.hero-btn');

//   if (!block || !button) return;

//   // Получаем цвет фона блока
//   const bgColor = getComputedStyle(block).backgroundColor;
//   const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];

//   // Определяем яркость фона (0–255)
//   const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

//   // Если фон тёмный — ставим белый цвет кнопки, иначе — чёрный
//   const btnColor = brightness < 128 ? '#fff' : '#000';

//   // Применяем через CSS-переменную
//   button.style.setProperty('--color-title', btnColor);
// }

// // Запускаем при загрузке и при изменении фона
// updateButtonColor();

// // Следим за изменениями фона (если он меняется динамически)
// const observer = new MutationObserver(updateButtonColor);
// observer.observe(document.querySelector('.hero-slide-bg'), {
//   attributes: true,
//   attributeFilter: ['style', 'class'],
// });











// // Функция для обновления стилей кнопки
// function updateButtonStyles() {
//   const bgBlock = document.querySelector('.hero-slide-bg');
//   const buttons = document.querySelectorAll('.hero-btn-color');

//   if (!bgBlock || buttons.length === 0) return;

//   // Получаем конечный цвет фона (с учётом прозрачности)
//   function getActualBgColor(element) {
//     let color = getComputedStyle(element).backgroundColor;
//     let opacity = 1;

//     // Если цвет прозрачный, поднимаемся по родителям
//     while ((color === 'rgba(0, 0, 0, 0)' || color === 'transparent') && element.parentElement) {
//       element = element.parentElement;
//       color = getComputedStyle(element).backgroundColor;
//     }
//     return color;
//   }

//   const bgColor = getActualBgColor(bgBlock);
//   const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];
//   const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
//   const isDark = brightness < 128;
//   const btnColor = isDark ? '#fff' : '#000';

//   // Обновляем только саму кнопку и её внутренние элементы
//   buttons.forEach(button => {
//     // 1. Бордер кнопки
//     button.style.borderColor = btnColor;

//     // 2. Весь текст внутри кнопки (но только непосредственные дочерние элементы)
//     const textElements = button.querySelectorAll(':scope > .text-btn, :scope > span, :scope > div');
//     textElements.forEach(el => {
//       el.style.color = btnColor;
//     });

//     // 3. Стрелка внутри кнопки
//     const svgPaths = button.querySelectorAll(':scope .btn-svg-box svg path');
//     svgPaths.forEach(path => {
//       path.setAttribute('fill', btnColor);
//     });
//   });
// }

// // Инициализация
// document.addEventListener('DOMContentLoaded', function () {
//   updateButtonStyles();

//   // Hover-эффекты только для кнопок
//   document.querySelectorAll('.hero-btn-color').forEach(button => {
//     button.addEventListener('mouseenter', function () {
//       const currentColor = getComputedStyle(this).borderColor;
//       const hoverColor = currentColor === 'rgb(255, 255, 255)'
//         ? 'rgb(255, 255, 255)' : '';
//       // : 'rgba(0,0,0,0.7)';

//       // Меняем только внутренние элементы кнопки
//       this.querySelectorAll(':scope > .text-btn, :scope > span, :scope > div').forEach(el => {
//         el.style.color = hoverColor;
//       });

//       this.querySelectorAll(':scope .btn-svg-box svg path').forEach(path => {
//         path.setAttribute('fill', hoverColor);
//       });
//     });

//     button.addEventListener('mouseleave', function () {
//       const originalColor = getComputedStyle(this).borderColor;

//       // Восстанавливаем оригинальные цвета
//       this.querySelectorAll(':scope > .text-btn, :scope > span, :scope > div').forEach(el => {
//         el.style.color = originalColor;
//       });

//       this.querySelectorAll(':scope .btn-svg-box svg path').forEach(path => {
//         path.setAttribute('fill', originalColor);
//       });
//     });
//   });
// });

// // Наблюдатель за изменениями
// const bgObserver = new MutationObserver(function (mutations) {
//   updateButtonStyles();
// });

// const bgBlock = document.querySelector('.hero-slide-bg');
// if (bgBlock) {
//   bgObserver.observe(bgBlock, {
//     attributes: true,
//     attributeFilter: ['style', 'class']
//   });
// }

// // Для ручного обновления
// window.updateButtonColors = updateButtonStyles;






// Функция для обновления стилей кнопки
function updateButtonStyles() {
  const bgBlock = document.querySelector('.hero-slide-bg');
  const buttons = document.querySelectorAll('.hero-btn-color');

  if (!bgBlock || buttons.length === 0) return;

  // Получаем цвет фона (с учетом прозрачности)
  let bgColor = getComputedStyle(bgBlock).backgroundColor;
  let el = bgBlock;
  while ((bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') && el.parentElement) {
    el = el.parentElement;
    bgColor = getComputedStyle(el).backgroundColor;
  }

  const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];
  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  const isDark = brightness < 128;
  const btnColor = isDark ? '#fff' : '#000';

  buttons.forEach(button => {
    // Устанавливаем базовые стили
    button.style.borderColor = btnColor;
    button.style.backgroundColor = 'transparent'; // Прозрачный фон по умолчанию

    // Обновляем текст и стрелку
    const textElements = button.querySelectorAll('.text-btn');
    textElements.forEach(text => {
      text.style.color = btnColor;
    });

    const svgPaths = button.querySelectorAll('.btn-svg-box svg path');
    svgPaths.forEach(path => {
      path.setAttribute('fill', btnColor);
    });

    // Удаляем старые обработчики, если они есть
    button.onmouseenter = null;
    button.onmouseleave = null;

    // Добавляем новые обработчики hover
    button.addEventListener('mouseenter', function () {
      if (isDark) {
        this.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Белый фон при наведении на темном фоне
      } else {
        this.style.backgroundColor = 'rgba(0,0,0,0.9)'; // Белый фон при наведении на темном фоне

      }
      // Полупрозрачные бордер и текст при любом hover
      this.style.borderColor = btnColor === '#fff'
        ? 'rgba(0,0,0,0.7)'
        : '#fff';

      this.querySelectorAll('.text-btn').forEach(text => {
        text.style.color = btnColor === '#fff'
          ? 'rgba(0,0,0,0.7)'
          : '#fff';
      });

      this.querySelectorAll('.btn-svg-box svg path').forEach(path => {
        path.setAttribute('fill', btnColor === '#fff'
          ? 'rgba(0,0,0,0.7)'
          : '#fff');
      });
    });

    button.addEventListener('mouseleave', function () {
      // Возвращаем исходные стили
      this.style.backgroundColor = 'transparent';
      this.style.borderColor = btnColor;

      this.querySelectorAll('.text-btn').forEach(text => {
        text.style.color = btnColor;
      });

      this.querySelectorAll('.btn-svg-box svg path').forEach(path => {
        path.setAttribute('fill', btnColor);
      });
    });
  });
}

// Инициализация
document.addEventListener('DOMContentLoaded', updateButtonStyles);

// Наблюдатель за изменениями фона
const observer = new MutationObserver(updateButtonStyles);
const bgBlock = document.querySelector('.hero-slide-bg');
if (bgBlock) {
  observer.observe(bgBlock, {
    attributes: true,
    attributeFilter: ['style', 'class']
  });
}

// Для ручного обновления
window.updateButtonColors = updateButtonStyles;














// // Функция для обновления цвета всех кнопок
// function updateAllButtons() {
//   const block = document.querySelector('.hero-slide-bg'); // Блок с фоном
//   const buttons = document.querySelectorAll('.hero-btn-color'); // Все кнопки

//   if (!block || buttons.length === 0) return;

//   // Получаем цвет фона блока (даже если он полупрозрачный)
//   let bgColor = getComputedStyle(block).backgroundColor;

//   // Обработка прозрачного фона (rgba/transparent)
//   if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
//     bgColor = getComputedStyle(document.body).backgroundColor;
//   }

//   const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255];
//   const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
//   const isDark = brightness < 128;

//   // Обновляем все кнопки
//   buttons.forEach(button => {
//     // Устанавливаем CSS-переменные
//     button.style.setProperty('--btn-text-color', isDark ? '#fff' : '#000');
//     button.style.setProperty('--btn-border-color', isDark ? '#fff' : '#000');

//     // Обновляем SVG стрелку
//     const svgPath = button.querySelector('.btn-svg-box svg path');
//     if (svgPath) {
//       svgPath.setAttribute('fill', isDark ? '#fff' : '#000');
//     }
//   });
// }

// // Инициализация при загрузке
// document.addEventListener('DOMContentLoaded', function () {
//   updateAllButtons();

//   // Добавляем обработчики hover
//   document.querySelectorAll('.hero-btn').forEach(button => {
//     button.addEventListener('mouseenter', function () {
//       const isDark = getComputedStyle(this).getPropertyValue('--btn-text-color') === '#fff';
//       const svgPath = this.querySelector('.btn-svg-box svg path');
//       if (svgPath) {
//         svgPath.setAttribute('fill', isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)');
//       }
//     });

//     button.addEventListener('mouseleave', function () {
//       const textColor = getComputedStyle(this).getPropertyValue('--btn-text-color');
//       const svgPath = this.querySelector('.btn-svg-box svg path');
//       if (svgPath) {
//         svgPath.setAttribute('fill', textColor);
//       }
//     });
//   });
// });

// // Наблюдатель за изменениями
// const observer = new MutationObserver(function (mutations) {
//   mutations.forEach(() => updateAllButtons());
// });

// observer.observe(document.querySelector('.hero-slide-bg'), {
//   attributes: true,
//   attributeFilter: ['style', 'class'],
//   childList: false,
//   subtree: false
// });

// // Для ручного вызова
// window.updateButtons = updateAllButtons;