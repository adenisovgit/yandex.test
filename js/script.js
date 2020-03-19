const cards = document.querySelector('.places-list');
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const formPopupAddCard = document.querySelector("#add-card");
const formPopupProfile = document.querySelector("#profile");
const bigSizeImage = document.querySelector("#big-size-image");


function toggleFormAdd(){//коллбэк для открытия и закрытия формы добавления карточки
    validateAddCardForm();
    formPopupAddCard.classList.toggle("popup_is-opened");
}

function submitFormAdd(event) {
    const form = event.currentTarget;
    event.preventDefault();

    if(!document.querySelector("#add-card .popup__button").classList.contains("popup__button_enable")){//кнопка "выключена", т.е. данные в форме невалидные
        return;
    }
    cardList.addCard(form.elements.name.value, form.elements.link.value);
    toggleFormAdd();
    form.reset();
}

function initCallback(){

    // нажатие на кнопку +
    const button = document.querySelector(".user-info__button");
    button.addEventListener("click", toggleFormAdd);

    // закрытие формы добавления нового элемента
    const crossButton = document.querySelector("#add-card .popup__close");
    crossButton.addEventListener("click", toggleFormAdd);

    // сабмит формы добавления карточки.
    document.forms.new.addEventListener("submit", submitFormAdd);


    //валидация добавления новой карточки
    document.forms.new.elements.name.addEventListener("input", validateAddCardForm);
    document.forms.new.elements.link.addEventListener("input", validateAddCardForm);

    // нажатие на кнопку Edit
    const buttonEdit = document.querySelector(".button.user-info__edit");
    buttonEdit.addEventListener("click", profileForm.open.bind(profileForm));

}

// 0 - пустая строка
// 1 - ок
// 2 - слишком длинная или короткая

function validateLenghtStr(str, min, max) {
    if(str.length===0)
        return 0;
    if(str.length >= min && str.length <= max)
        return 1;
    return 2;
}
function validateProfileForm() {
    let isOk = true;

    const formProfileName = document.forms.profile.elements.name;
    const formErrorProfileName = document.querySelector("#error-profile-name");
    switch (validateLenghtStr(formProfileName.value, 2, 30)) {
        case 0: formErrorProfileName.textContent = "Это обязательное поле"; isOk = false; break;
        case 1: formErrorProfileName.textContent = ""; break;
        case 2: formErrorProfileName.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    const formProfileJob = document.forms.profile.elements.job;
    const formErrorProfileJob = document.querySelector("#error-profile-job");
    switch (validateLenghtStr(formProfileJob.value, 2, 30)) {
        case 0: formErrorProfileJob.textContent = "Это обязательное поле"; isOk = false; break;
        case 1: formErrorProfileJob.textContent = ""; break;
        case 2: formErrorProfileJob.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    if (isOk){
        document.querySelector("#profile .popup__button").classList.add("popup__button_enable");
    }else{
        document.querySelector("#profile .popup__button").classList.remove("popup__button_enable");
    }
}

function validateAddCardForm() {
    let isOk = true;

    const formNewName = document.forms.new.elements.name;
    const formErrorCardName = document.querySelector("#error-card-name");
    switch (validateLenghtStr(formNewName.value, 2, 30)) {
        case 0: formErrorCardName.textContent = "Это обязательное поле"; isOk = false; break;
        case 1: formErrorCardName.textContent = ""; break;
        case 2: formErrorCardName.textContent = "Должно быть от 2 до 30 символов"; isOk = false; break;
    }

    const formNewLink = document.forms.new.elements.link;
    const formErrorCardLink = document.querySelector("#error-card-link");
    if(validURL(formNewLink.value)){
        formErrorCardLink.textContent = "";
    }else{
        formErrorCardLink.textContent = "Здесь должна быть ссылка";
        isOk = false;
    }

    if (isOk){
        document.querySelector("#add-card .popup__button").classList.add("popup__button_enable");
    }else{
        document.querySelector("#add-card .popup__button").classList.remove("popup__button_enable");
    }
}


function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}



const profileForm = new PopupProfile(formPopupProfile);
const popupImage = new PopupImage(bigSizeImage);
const cardList = new CardList(cards, initialCards);

cardList.render();
initCallback();
