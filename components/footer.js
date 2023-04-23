class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentYear = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        Copyright &copy; 2018 - ${currentYear} ServerStats INC. - All rights reserved.
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
