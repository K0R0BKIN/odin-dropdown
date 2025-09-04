import "./dropdown.css";

export class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector(".dropdown-button");
    this.content = element.querySelector(".dropdown-content");
    this.init();
  }

  init() {
    this.button.addEventListener("click", () => {
      this.toggle();
    });
  }

  toggle() {
    this.content.classList.toggle("dropdown-open");
  }
}
