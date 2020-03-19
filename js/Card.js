class Card {
  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.node = this.create();
  }

  getCardNode() {
    return this.node;
  }

  like() {

  }

  remove() {

  }

  create() {
    //формируем все элементы
    const oneCard = document.createElement("div");
    oneCard.classList.add("place-card");

    const imgCard = document.createElement("div");
    imgCard.classList.add("place-card__image");
    imgCard.style.backgroundImage = `url(${this.imageUrl})`;

    const btnImgCard = document.createElement("button");
    btnImgCard.classList.add("place-card__delete-icon");

    const descCard = document.createElement("div");
    descCard.classList.add("place-card__description");

    const h3Card = document.createElement("h3");
    h3Card.classList.add("place-card__name");
    h3Card.textContent = this.name;

    const btnLike = document.createElement("button");
    btnLike.classList.add("place-card__like-icon");

    //сливаем их в один
    oneCard.appendChild(imgCard);
      imgCard.appendChild(btnImgCard);
    oneCard.appendChild(descCard);
      descCard.appendChild(h3Card);
      descCard.appendChild(btnLike);

    //добавляем карточку на страницу
    // cards.appendChild(oneCard);
    // возвращаем созданный элемент
    return oneCard;
  }
}
