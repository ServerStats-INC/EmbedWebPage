class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <a href="./index.html"><img src="./images/ss_logo_big.png" alt="ServerStats big logo"></a>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
