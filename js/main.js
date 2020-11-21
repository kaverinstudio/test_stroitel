// Сайдбар на мобильных устройствах

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-activ')
}

// Показать еще 3 карточки

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function() {

    hiddenCards.forEach(function(card) {
        card.classList.remove('card-link--hidden');
    })
})

// Показать-скрыть виджеты

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function(widget) {

    widget.addEventListener('click', function(e) {

        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active')
            e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
})

// Кнопка любая

// Клик по кнопке любая и отключение других чекбоксов
const checkboxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');
checkboxAny.addEventListener('change', function() {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function(item) {
            item.checked = false
        })

    }
})

// Клик по другим кнопкам в location кроме кнопки Любая

topLocationCheckboxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if (checkboxAny.checked) {
            checkboxAny.checked = false
        }
    })
})

// Показать еще 3 доп опции в фильтре

const showMoreOptions = document.querySelector('.widget__show-hidden');

const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.addEventListener('click', function(e) {

    e.preventDefault();

    // Если блоки были скрыты - показываем
    if (showMoreOptions.dataset.options == "hidden") {

        hiddenCheckboxes.forEach(function(item) {
            item.style.display = 'block';

        })
        showMoreOptions.innerText = "Скрыть дополнительные опции"
        showMoreOptions.dataset.options = "visible";

        // Если блоки были видны - скрываем
    } else if (showMoreOptions.dataset.options == "visible") {
        hiddenCheckboxes.forEach(function(item) {
            item.style.display = 'none';

        })
        showMoreOptions.innerText = "Показать еще"
        showMoreOptions.dataset.options = "hidden";

    }




})