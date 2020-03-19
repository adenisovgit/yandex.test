class PopupAddCard extends Popup {
  constructor(node) {
    super(node);

    const crossButtonEdit = this.node.querySelector(".popup__close");
    crossButtonEdit.addEventListener("click", () => this.close());

    this.form = this.node.querySelector("form");

    this.form.addEventListener("submit", (event) => this.handleSubmit(event));

    //валидация добавления новой карточки
    this.form.elements.name.addEventListener("input", validateAddCardForm);
    this.form.elements.link.addEventListener("input", validateAddCardForm);
  }

  close() {
    validateAddCardForm();
    super.close();
  }

  open() {
    validateAddCardForm();
    super.open();
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.node.querySelector(".popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
      return;
    }
    cardList.addCard(this.form.elements.name.value, this.form.elements.link.value);
    this.close();
    this.form.reset();
  }
}
