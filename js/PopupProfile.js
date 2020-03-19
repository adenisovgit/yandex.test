class PopupProfile extends Popup {
  constructor(node) {
    super(node);

    const crossButtonEdit = this.node.querySelector(".popup__close");
    crossButtonEdit.addEventListener("click", () => this.close());

    this.form = this.node.querySelector("form");

    this.form.addEventListener("submit", (event) => this.handleSubmit(event));

    //валидация редактирования профиля
    this.form.elements.name.addEventListener("input", validateProfileForm);
    this.form.elements.job.addEventListener("input", validateProfileForm);

  }

  open() {
    this.form.elements.name.value = userInfoName.textContent;
    this.form.elements.job.value = userInfoJob.textContent;
    super.open();
    validateProfileForm();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.node.querySelector(".popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
      return;
    }
    userInfoName.textContent = document.forms.profile.elements.name.value;
    userInfoJob.textContent = document.forms.profile.elements.job.value;

    this.close();
  }
}
