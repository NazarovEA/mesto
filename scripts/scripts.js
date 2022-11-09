const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile-info__edit-button');
const popupClose = document.querySelector('.popup__close');
const nameValue = document.querySelector('.profile-info__name');
const jobValue = document.querySelector('.profile-info__profession');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');
// открываем попап
popupOpen.addEventListener('click', function (event) {
event.preventDefault();
popup.classList.add('popup_opened');
nameInput.value = nameValue.textContent;
jobInput.value = jobValue.textContent;
});
// закрываем попап
popupClose.addEventListener('click', () => {
popup.classList.remove('popup_opened');
});
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
evt.preventDefault();
nameValue.textContent = nameInput.value;
jobValue.textContent = jobInput.value;
popup.classList.remove('popup_opened');
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);




















