class Commands extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="myTable">
        <div class="features">
          <h1>COMMANDS</h1>
        </div>
        <div class="features" onclick="showHideRow('hidden_row9');">
          <h3>/setup</h3>
        </div>
        <div class="features-open" id="hidden_row9" class="hidden_row">
          <p>Sets the bot up with some base counters.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row12');">
          <h3>/counter</h3>
        </div>
        <div class="features-open" id="hidden_row12" class="hidden_row">
          <p>Create and manage the counters in your server.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row14');">
          <h3>/members</h3>
        </div>
        <div class="features-open" id="hidden_row14" class="hidden_row">
          <p>Exports your members to a text file.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row20');">
          <h3>/social</h3>
        </div>
        <div class="features-open" id="hidden_row20" class="hidden_row">
          <p>Create and manage social counters in your server.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row19');">
          <h3>/game</h3>
        </div>
        <div class="features-open" id="hidden_row19" class="hidden_row">
          <p>Create and manage game counters in your server.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row1');">
          <h3>/help</h3>
        </div>
        <div class="features-open" id="hidden_row1" class="hidden_row">
          <p>Shows a list of commands or information about a certain command.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row2');">
          <h3>/ping</h3>
        </div>
        <div class="features-open" id="hidden_row2" class="hidden_row">
          <p>Shows the latency for the client and the shard.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row3');">
          <h3>/invite</h3>
        </div>
        <div class="features-open" id="hidden_row3" class="hidden_row">
          <p>Shows a list of invite links for our bots.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row4');">
          <h3>/vote</h3>
        </div>
        <div class="features-open" id="hidden_row4" class="hidden_row">
          <p>Shows information about voting for the bot.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row5');">
          <h3>/donate</h3>
        </div>
        <div class="features-open" id="hidden_row5" class="hidden_row">
          <p>Shows information about donate/premium tiers and perks.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row6');">
          <h3>/support</h3>
        </div>
        <div class="features-open" id="hidden_row6" class="hidden_row">
          <p>Shows information about how to get support.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row7');">
          <h3>/partners</h3>
        </div>
        <div class="features-open" id="hidden_row7" class="hidden_row">
          <p>Shows information about our partners.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row8');">
          <h3>/customize</h3>
        </div>
        <div class="features-open" id="hidden_row8" class="hidden_row">
          <p>Shows information about changing the counters.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row10');">
          <h3>/premium</h3>
        </div>
        <div class="features-open" id="hidden_row10" class="hidden_row">
          <p>Manage your premium servers.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row11');">
          <h3>/reset</h3>
        </div>
        <div class="features-open" id="hidden_row11" class="hidden_row">
          <p>Completely resets the bot and counters.</p>
        </div> 
        <div class="features" onclick="showHideRow('hidden_row13');">
          <h3>/data</h3>
        </div>
        <div class="features-open" id="hidden_row13" class="hidden_row">
          <p>Gives you an export of all stored data from your server.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row15');">
          <h3>/category</h3>
        </div>
        <div class="features-open" id="hidden_row15" class="hidden_row">
          <p>Create and manage the category used to place counters under.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row16');">
          <h3>/welcome</h3>
        </div>
        <div class="features-open" id="hidden_row16" class="hidden_row">
          <p>Create and manage the welcome channel in your server.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row17');">
          <h3>/goal</h3>
        </div>
        <div class="features-open" id="hidden_row17" class="hidden_row">
          <p>Create and manage the goal counters in your server.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row18');">
          <h3>/command</h3>
        </div>
        <div class="features-open" id="hidden_row18" class="hidden_row">
          <p>Manage who can use and/or run slash commands.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row21');">
          <h3>/bot</h3>
        </div>
        <div class="features-open" id="hidden_row21" class="hidden_row">
          <p>Shows information about the bot itself.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row22');">
          <h3>/serverinfo</h3>
        </div>
        <div class="features-open" id="hidden_row22" class="hidden_row">
          <p>Shows information about your server.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row23');">
          <h3>/userinfo</h3>
        </div>
        <div class="features-open" id="hidden_row23" class="hidden_row">
          <p>Shows information about a member.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row24');">
          <h3>/roleinfo</h3>
        </div>
        <div class="features-open" id="hidden_row24" class="hidden_row">
          <p>Shows information about a role.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row25');">
          <h3>/channelinfo</h3>
        </div>
        <div class="features-open" id="hidden_row25" class="hidden_row">
          <p>Shows information about a channel or category.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row26');">
          <h3>/inviteinfo</h3>
        </div>
        <div class="features-open" id="hidden_row26" class="hidden_row">
          <p>Shows information about an invite link or invite creators.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row27');">
          <h3>/emojiinfo</h3>
        </div>
        <div class="features-open" id="hidden_row27" class="hidden_row">
          <p>Shows information about an emoji.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row28');">
          <h3>/avatar</h3>
        </div>
        <div class="features-open" id="hidden_row28" class="hidden_row">
          <p>Shows the avatar for you or another member.</p>
        </div>
        <div class="features" onclick="showHideRow('hidden_row29');">
          <h3>/check</h3>
        </div>
        <div class="features-open" id="hidden_row29" class="hidden_row">
          <p>Check all counters and permissions for common mistakes.</p>
        </div>
        <div class="features_last" onclick="showHideRow('hidden_row30');">
          <h3>/debug</h3>
        </div>
        <div class="features-open" id="hidden_row30" class="hidden_row">
          <p>Shows debug information for support.</p>
        </div>
      </section>
    `;
  }
}

customElements.define('commands-component', Commands);