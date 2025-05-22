const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');


chooseColor.forEach(function(element) {       // пробегаем по всем кнопкам chooseColor
  element.addEventListener('click', open)       // и слушаем событие click, выполн.ф-я open
})

function open(evt) {

  const target = evt.currentTarget;  // 1) находим в константу target на кого мы кликнули с помощью метода currentTarget. Свойство event.currentTarget содержит элемент, для которого было назначено событие
  const button = target.dataset.button;  // 2) находим в константу button елемент target с data атрибутом button который содержит определенный класс""
  const contentActive = document.querySelectorAll(`.${button}`)  // 3) находим в конст класс"", который содержит по data атрибуту button найденный выше

  chooseColor.forEach(function(item){
    item.classList.remove('choose__color-btn--active')    // 1) удаляем у всех кнопок класс choose__color-btn--active
  })

  target.classList.add('choose__color-btn--active')     // 1) добавляем класс choose__color-btn--active константе target (на кого кликнули)

  contentItem.forEach(function(item){
    item.classList.remove('content-item__active')   // 2) удаляем у всех contentItem класс content-item__active
  });
  
  contentActive.forEach(function(item){   // 3) пробегаем по всем contentActive (найденный класс по data атрибуту button) и для них выполн. ф-я item
    item.classList.add('content-item__active')     // 3) добавляем каждому из них класс content-item__active
  })

}