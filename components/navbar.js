class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section>
        <div class="features">
          <h1>MENU</h1>
        </div>
        <a href="http://invite.serverstats.gg/"><div><b>ADD THE BOT</b></div></a>
        <a href="./commands.html"><div><b>ALL COMMANDS</b></div></a>
        <a href="http://support.serverstats.gg/"><div><b>JOIN THE SUPPORT DISCORD</b></div></a>
      </section>
    `;
  }
}

customElements.define('navbar-component', Navbar);
