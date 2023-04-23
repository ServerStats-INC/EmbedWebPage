class Features extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section>
        <div class="features">
          <h1>FEATURES</h1>
        </div>
        <div class="features">
          <h3>Server counters</h3>
          <hr>
          <p>ServerStats supports multiple counters that automatically updates (<b>every 10 minutes</b>). We currently have 32 available counters in total (with more coming in the future) and 12 of them are premium only.</p>
        </div>
        <div class="features">
          <h3>Easy to setup</h3>
          <hr>
          <p>Some bots are a pain to set up but not ServerStats, just type <b>/setup</b> and the bot will run the setup (<b>creates the default counters</b>, other counter can be created with <b>/counter create</b>).</p>
        </div>
        <div class="features">
          <h3>Special functions</h3>
          <hr>
          <p>ServerStats also supports a couple if special counters and functions, the currently exists of social counter, game counter, welcome messages, goal counter and message, and members list exporter.</p>
        </div>
        <div class="features">
          <h3>Fully customizable</h3>
          <hr>
          <p>You can change the counter in every single way, you don't like the text or you don't want them under a category? no problem. it's also easy to change because most thinks can be done through the channel edit page (right click > edit channel).</p>
        </div>
        <div class="features_last">
          <h3>Information commands</h3>
          <hr>
          <p>ServerStats can show you server info, user info, role info, channel info, emoji info, and invite info, all information command show advanced information in a nice looking embed.</p>
        </div>
      </section>
    `;
  }
}

customElements.define('features-component', Features);