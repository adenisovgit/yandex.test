class PopupImage extends Popup {
  constructor(node) {
    super(node);
    const crossButtonBigImage = this.node.querySelector(".popup__close");
    const res = crossButtonBigImage.addEventListener("click", () => this.close());
  }

  setImageSrc(imageSrc) {
    const popupImage = this.node.querySelector('.popup__image');
    popupImage.src = imageSrc;
  }
}
