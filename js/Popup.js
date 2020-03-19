class Popup {
  constructor(node) {
    this.node = node;
  }

  open() {
    this.node.classList.add("popup_is-opened");
  }

  close() {
    console.log(this.node);
    this.node.classList.remove("popup_is-opened");
  }

  toggle() {
    this.node.classList.toggle("popup_is-opened");
  }
}
