class Popup {
  constructor(node) {
    this.node = node;
  }

  open() {
    this.node.classList.add("popup_is-opened");
  }

  close() {
    this.node.classList.remove("popup_is-opened");
  }
}
