// document.addEventListener('DOMContentLoaded', function () {
//   // Находим все карточки товаров
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     // Находим элементы внутри карточки
//     const discountTag = card.querySelector('.status-tag-pink .status-top');
//     const priceElement = card.querySelector('.price');

//     // Если есть элемент скидки и цены
//     if (discountTag && priceElement) {
//       // Получаем оригинальную цену (удаляем "р" и пробелы, заменяем запятые на точки)
//       const originalPriceText = priceElement.textContent.replace(/[^\d,]/g, '').replace(',', '.');
//       const originalPrice = parseFloat(originalPriceText);

//       // Получаем значение скидки (удаляем %)
//       const discountText = discountTag.textContent.replace('%', '');
//       const discount = parseFloat(discountText);

//       // Если и цена, и скидка валидные числа
//       if (!isNaN(originalPrice) && !isNaN(discount) && discount > 0) {
//         // Вычисляем цену со скидкой
//         const discountedPrice = originalPrice * (1 - discount / 100);

//         // Форматируем цену (добавляем пробелы между тысячами и "р")
//         const formattedPrice = discountedPrice.toFixed(2)
//           .replace('.', ',')
//           .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + 'р';

//         // Создаем новый элемент для цены со скидкой или используем существующий
//         let oldPriceElement = card.querySelector('.old-price');
//         if (!oldPriceElement) {
//           // Сохраняем оригинальную цену как старую цену
//           priceElement.classList.add('new-price');

//           // Создаем элемент для старой цены
//           oldPriceElement = document.createElement('span');
//           oldPriceElement.className = 'old-price';
//           oldPriceElement.style.textDecoration = 'line-through';
//           oldPriceElement.style.opacity = '0.6';
//           oldPriceElement.style.marginRight = '8px';
//           oldPriceElement.textContent = priceElement.textContent;

//           // Вставляем перед текущим элементом цены
//           priceElement.parentNode.insertBefore(oldPriceElement, priceElement);
//         }

//         // Обновляем цену со скидкой
//         priceElement.textContent = formattedPrice;
//       }
//     }
//   });
// });





















// document.addEventListener('DOMContentLoaded', function () {
//   // Находим все карточки товаров
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     // Находим элементы внутри карточки
//     const discountTag = card.querySelector('.status-tag-pink .status-top');
//     const priceElement = card.querySelector('.price'); // Новая цена
//     const oldPriceElement = card.querySelector('.price-sale'); // Старая цена

//     // Если есть все необходимые элементы
//     if (discountTag && priceElement && oldPriceElement) {
//       // Получаем оригинальную цену (удаляем "р" и пробелы, заменяем запятые на точки)
//       const originalPriceText = priceElement.textContent.replace(/[^\d,]/g, '').replace(',', '.');
//       const originalPrice = parseFloat(originalPriceText);

//       // Получаем значение скидки (удаляем %)
//       const discountText = discountTag.textContent.replace('%', '');
//       const discount = parseFloat(discountText);

//       // Если и цена, и скидка валидные числа и скидка больше 0
//       if (!isNaN(originalPrice) && !isNaN(discount) && discount > 0) {
//         // Вычисляем цену со скидкой
//         const discountedPrice = originalPrice * (1 - discount / 100);

//         // Форматируем цены (добавляем пробелы между тысячами и "р")
//         const formatPrice = (price) => {
//           return price.toFixed(2)
//             .replace('.', ',')
//             .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + 'р';
//         };

//         // Обновляем цены
//         oldPriceElement.textContent = formatPrice(originalPrice);
//         priceElement.textContent = formatPrice(discountedPrice);

//         // Показываем блок со старой ценой
//         oldPriceElement.classList.add('price-sale-block');

//       } else {
//         // Если скидки нет, скрываем блок со старой ценой
//         oldPriceElement.classList.remove('price-sale-block');
//       }
//     }
//   });
// });




























// document.addEventListener('DOMContentLoaded', function () {
//   // Находим все карточки товаров
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     // Находим элементы внутри карточки
//     const discountTag = card.querySelector('.status-tag-pink .status-top');
//     const priceElement = card.querySelector('.price'); // Новая цена
//     const oldPriceElement = card.querySelector('.price-sale'); // Старая цена

//     // Если есть все необходимые элементы
//     if (discountTag && priceElement && oldPriceElement) {
//       // Получаем оригинальную цену (удаляем "р" и пробелы, заменяем запятые на точки)
//       const originalPriceText = priceElement.textContent.replace(/[^\d,]/g, '').replace(',', '.');
//       const originalPrice = parseFloat(originalPriceText);

//       // Получаем значение скидки (удаляем %)
//       const discountText = discountTag.textContent.replace('%', '');
//       const discount = parseFloat(discountText);

//       // Если и цена, и скидка валидные числа и скидка больше 0
//       if (!isNaN(originalPrice) && !isNaN(discount) && discount > 0) {
//         // Вычисляем цену со скидкой
//         const discountedPrice = originalPrice * (1 - discount / 100);

//         // Форматируем цену (добавляем пробелы между тысячами и "р")
//         const formatPrice = (price) => {
//           // Округляем до целых чисел
//           const roundedPrice = Math.round(price);
//           // Форматируем с пробелами между тысячами
//           return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + 'р';
//         };

//         // Обновляем цены
//         oldPriceElement.textContent = formatPrice(originalPrice);
//         priceElement.textContent = formatPrice(discountedPrice);

//         // Показываем блок со старой ценой
//         oldPriceElement.classList.add('price-sale-block');
//       } else {
//         // Если скидки нет, скрываем блок со старой ценой
//         oldPriceElement.classList.remove('price-sale-block');
//       }
//     }
//   });
// });





























// document.addEventListener('DOMContentLoaded', function () {
//   // Находим все карточки товаров
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     // Находим элементы внутри карточки
//     const discountTag = card.querySelector('.status-tag-pink .status-top');
//     const priceElement = card.querySelector('.price'); // Новая цена
//     const oldPriceElement = card.querySelector('.price-sale'); // Старая цена

//     // Если есть все необходимые элементы
//     if (discountTag && priceElement && oldPriceElement) {
//       // Получаем оригинальную цену (удаляем "р" и пробелы, заменяем запятые на точки)
//       const originalPriceText = priceElement.textContent.replace(/[^\d,]/g, '').replace(',', '.');
//       const originalPrice = parseFloat(originalPriceText);

//       // Получаем значение скидки (удаляем %)
//       const discountText = discountTag.textContent.replace('%', '');
//       const discount = parseFloat(discountText);

//       // Если и цена, и скидка валидные числа и скидка больше 0
//       if (!isNaN(originalPrice) && !isNaN(discount) && discount > 0) {
//         // Вычисляем цену со скидкой
//         const discountedPrice = originalPrice * (1 - discount / 100);

//         // Форматируем цену (добавляем пробелы между тысячами и "р")
//         const formatPrice = (price) => {
//           // Округляем до целых чисел
//           const roundedPrice = Math.round(price);
//           // Форматируем с пробелами между тысячами
//           return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + 'р';
//         };

//         // Обновляем цены
//         oldPriceElement.textContent = formatPrice(originalPrice);
//         priceElement.textContent = formatPrice(discountedPrice);

//         // Показываем блок со старой ценой
//         oldPriceElement.classList.add('price-sale-block');

//         // Добавляем класс price_pink к новой цене
//         priceElement.classList.add('price_pink');
//       } else {
//         // Если скидки нет, скрываем блок со старой ценой
//         oldPriceElement.classList.remove('price-sale-block');
//         // Удаляем класс price_pink если скидки нет
//         priceElement.classList.remove('price_pink');
//       }
//     }
//   });
// });




// document.addEventListener('DOMContentLoaded', function () {
//   // Находим все карточки товаров
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     // Находим элементы внутри карточки
//     const discountTag = card.querySelector('.status-tag-pink .status-top');
//     const priceElement = card.querySelector('.price');
//     const oldPriceElement = card.querySelector('.price-sale');
//     const saleTag = card.querySelector('.status-tag-yellow');

//     // Проверяем наличие всех необходимых элементов
//     if (!discountTag || !priceElement || !oldPriceElement || !saleTag) return;

//     // Получаем текст скидки
//     const discountText = discountTag.textContent.trim();

//     // Проверяем формат скидки (должно быть число с %)
//     const discountMatch = discountText.match(/^(\d+)%$/);
//     const hasValidDiscount = discountMatch && discountMatch[1];

//     if (hasValidDiscount) {
//       const discountValue = parseInt(discountMatch[1], 10);

//       // Парсим оригинальную цену
//       const originalPrice = parseFloat(
//         priceElement.textContent.replace(/[^\d,]/g, '')
//           .replace(',', '.')
//       );

//       if (!isNaN(originalPrice) && discountValue > 0) {
//         // Вычисляем цену со скидкой
//         const discountedPrice = originalPrice * (1 - discountValue / 100);

//         // Форматируем цены
//         const formatPrice = (price) => {
//           return Math.round(price)
//             .toString()
//             .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + 'р';
//         };

//         // Обновляем цены
//         oldPriceElement.textContent = formatPrice(originalPrice);
//         priceElement.textContent = formatPrice(discountedPrice);

//         // Показываем дополнительные элементы
//         oldPriceElement.classList.add('price-sale-block');
//         saleTag.classList.add('status-tag-yellow-block');
//         priceElement.classList.add('price_pink');
//       }
//     } else {
//       // Скрываем дополнительные элементы если скидка невалидна
//       oldPriceElement.classList.remove('price-sale-block');
//       saleTag.classList.remove('status-tag-yellow-block');
//       priceElement.classList.remove('price_pink');
//     }
//   });
// });






// полностью рабочий код который работает с скидкой 
document.addEventListener('DOMContentLoaded', function () {
  // Находим все карточки товаров
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Находим элементы внутри карточки
    const discountTag = card.querySelector('.status-tag-pink .status-top');
    const priceElement = card.querySelector('.price');
    const oldPriceElement = card.querySelector('.price-sale');
    const saleTag = card.querySelector('.status-tag-yellow');
    const discountContainer = card.querySelector('.status-tag-pink');

    // Проверяем наличие всех необходимых элементов
    if (!discountTag || !priceElement || !oldPriceElement || !saleTag || !discountContainer) return;

    // Получаем текст скидки
    const discountText = discountTag.textContent.trim();

    // Управляем видимостью контейнера скидки
    if (discountText) {
      discountContainer.classList.add('status-tag-pink-block');
    } else {
      discountContainer.classList.remove('status-tag-pink-block');
    }

    // Проверяем формат скидки (должно быть число с %)
    const discountMatch = discountText.match(/^(\d+)%$/);
    const hasValidDiscount = discountMatch && discountMatch[1];

    if (hasValidDiscount) {
      const discountValue = parseInt(discountMatch[1], 10);

      // Парсим оригинальную цену
      const originalPrice = parseFloat(
        priceElement.textContent.replace(/[^\d,]/g, '')
          .replace(',', '.')
      );

      if (!isNaN(originalPrice) && discountValue > 0) {
        // Вычисляем цену со скидкой
        const discountedPrice = originalPrice * (1 - discountValue / 100);

        // Форматируем цены
        const formatPrice = (price) => {
          return Math.round(price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + 'р';
        };

        // Обновляем цены
        oldPriceElement.textContent = formatPrice(originalPrice);
        priceElement.textContent = formatPrice(discountedPrice);

        // Показываем дополнительные элементы
        oldPriceElement.classList.add('price-sale-block');
        saleTag.classList.add('status-tag-yellow-block');
        priceElement.classList.add('price_pink');
      } else {
        // Если скидка 0% или не число
        oldPriceElement.classList.remove('price-sale-block');
        saleTag.classList.remove('status-tag-yellow-block');
        priceElement.classList.remove('price_pink');
      }
    } else {
      // Скрываем дополнительные элементы если скидка невалидна
      oldPriceElement.classList.remove('price-sale-block');
      saleTag.classList.remove('status-tag-yellow-block');
      priceElement.classList.remove('price_pink');
    }
  });
});