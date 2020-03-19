const cards = document.querySelector('.places-list');
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const formPopupAddCard = document.querySelector("#add-card");
const formPopupProfile = document.querySelector("#profile");
const bigSizeImage = document.querySelector("#big-size-image");


function initCallback(){
    // нажатие на кнопку +
    const button = document.querySelector(".user-info__button");
    button.addEventListener("click", addCardForm.open.bind(addCardForm));

    // нажатие на кнопку Edit
    const buttonEdit = document.querySelector(".button.user-info__edit");
    buttonEdit.addEventListener("click", profileForm.open.bind(profileForm));
}


const profileForm = new PopupProfile(formPopupProfile);
const addCardForm = new PopupAddCard(formPopupAddCard);
const popupImage = new PopupImage(bigSizeImage);
const cardList = new CardList(cards, initialCards);

cardList.render();
initCallback();
