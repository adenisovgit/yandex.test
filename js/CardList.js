class CardList {
  constructor(node, initialCards = []) {
    this.node = node;
    this.cards = initialCards;
    this.node.addEventListener("click", this.handleClick);
  }

  addCard(name, imageUrl) {
    const newCard = new Card(name, imageUrl);
    this.node.appendChild(newCard.getCardNode());
  }

  render() {
    this.cards.forEach((item) => {
        this.addCard(item.name, item.link);
    })
  }

  handleClick(event) {
    if (event.target.classList.contains("place-card__like-icon")) {// щёлкнули по лайку
      event.target.classList.toggle("place-card__like-icon_liked");
    } else {
      if (event.target.classList.contains("place-card__delete-icon")) { // щёлкнули по иконке удаления
        cards.removeChild(event.path[2]); //удаляем
      } else {//вся карточка за исключением иконок лайк и удаления
        if (event.target.classList.contains("place-card__image")) {//картинка, а не подписи внизу
          popupImage.setImageSrc(event.target.style.backgroundImage.slice(5, -2));
          popupImage.open();
        }
      }
    }
  }
}
