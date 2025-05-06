import { LitElement, html, css } from 'lit';

class PortfolioSidebarTheme extends LitElement {
  static properties = {
    activeScreen: { type: String },
  };

  constructor() {
    super();
    this.activeScreen = 'screen-1';
  }

  static styles = css`
    :host {
      display: flex;
      height: 100vh;
      overflow: hidden;
      flex-direction: row;
    }
    nav {
      width: 200px;
      background: #222;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2em 1em;
      gap: 1.5em;
    }
    nav button {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      width: 100%;
      padding: 0.8em;
      font-size: 1em;
    }
    nav button:hover {
      background: #444;
    }
    main {
      flex: 1;
      overflow-y: auto;
      scroll-snap-type: y mandatory;
    }
    section {
      height: 100vh;
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2em;
      text-align: center;
    }
    .profile-pic {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 1em;
    }
    .scroll-top-btn {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      background: #222;
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
      cursor: pointer;
    }
    .download-resume-btn {
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: #222;
      color: white;
      text-decoration: none;
      font-size: 1rem;
      padding: 0.5em 1em;
      border-radius: 20px;
      border: 1px solid white;
      transition: background 0.3s;
    }
    .download-resume-btn:hover {
      background: #444;
    }
    iframe {
      border: none;
      max-width: 90%;
      height: 600px;
    }
    .about-text {
      max-width: 700px;
      font-size: 1.2rem;
      line-height: 1.8;
      padding: 0 1rem;
    }

    @media screen and (max-width: 768px) {
      :host {
        flex-direction: column;
      }
      nav {
        flex-direction: row;
        width: 100%;
        padding: 1em;
        gap: 1em;
        overflow-x: auto;
      }
      nav button {
        font-size: 0.8em;
        padding: 0.6em;
        white-space: nowrap;
      }
      section {
        height: auto;
        padding: 2em 1em;
      }
    }
  `;

  firstUpdated() {
    this._handleHashScroll();
    window.addEventListener('hashchange', () => this._handleHashScroll());
  }

  _scrollTo(id) {
    const el = this.renderRoot.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
      this.activeScreen = id;
    }
  }

  _handleHashScroll() {
    const id = location.hash.replace('#', '');
    if (id) {
      setTimeout(() => {
        this._scrollTo(id);
        this.activeScreen = id;
      }, 100);
    }
  }

  _scrollToTop() {
    const main = this.renderRoot.querySelector('main');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState(null, '', '#screen-1');
    }
  }

  render() {
    return html`
      <nav>
        <button @click="${() => this._scrollTo('screen-1')}">HOME</button>
        <button @click="${() => this._scrollTo('screen-2')}">SHORT RESUME</button>
        <button @click="${() => this._scrollTo('screen-3')}">EXPERIENCE</button>
        <button @click="${() => this._scrollTo('screen-4')}">ABOUT ME</button>
        <button @click="${() => this._scrollTo('screen-5')}">CONTACT</button>
      </nav>
      <main>
      <section id="screen-1">
  <img class="profile-pic" src="IMG_3125.JPG" alt="Antonio Daiute" />
  <h1>Antonio Daiute</h1>
  <p>Cybersecurity Operations and Analytics | The Pennsylvania State University</p>
  <p>Naval ROTC | Scabbard and Blade | Penn State Club Water Polo</p>
</section>

<section id="screen-2">
  <h2>Resume</h2>
  <h3>Antonio Daiute</h3>
  <p>University Park, PA | (570) 599-5261</p>
  <p>Email: azd5816@psu.edu</p>
  <h4>Value Offered</h4>
  <p>Cybersecurity operations leader with experience in naval systems, radar operations, and technical systems management. Strong foundation in computer science and defense technologies.</p>
  
  <h4>Work Experience</h4>
  <p><strong>USS Franklin D. Roosevelt (DDG-80):</strong> Operated weapons and radar systems, supported cyber intelligence and undersea replenishments, involved in humanitarian aid missions near Israel.</p>

  <h4>Education</h4>
  <p>The Pennsylvania State University — B.S. Cybersecurity Operations and Analytics (Expected June 2026)</p>
  <p>GPA: 3.33</p>

  <h4>Skills</h4>
  <p>Java | Python | SQL | Linux & Windows | Naval Intelligence Systems | Android Studio | Microsoft Excel</p>
</section>

<section id="screen-3">
  <h2>Leadership & Involvement</h2>
  <div>
    <h3>Leadership Roles:</h3>
    <p><strong>Penn State Naval ROTC (Platoon Commander):</strong> Leading midshipmen in training and operations.</p>
    <p><strong>Operation Blue and Gold (Finance Chair):</strong> Managed budgeting and financial planning.</p>
    <p><strong>Penn State Club Water Polo (Secretary):</strong> Handled communications and logistics (2022–2024).</p>

    <h3>Clubs & Affiliations:</h3>
    <p>Scabbard and Blade Honor Society</p>
    <p>Naval ROTC Aviation Club</p>
    <p>Penn State Competitive Cybersecurity Organization</p>
  </div>
</section>


        <section id="screen-4">
          <h2>About Me</h2>
          <div class="about-text">
            I am a Cybersecurity Analytics and operations student at Penn State University, with a minor in Naval Science.
            I plan to commission as a Naval Intelligence Officer when I graduate, and hope to work with the Aegis Combat System, 
            SPY radar detection system, and the missile defense systems on Naval Vessels.
          </div>
        </section>

        <section id="screen-5">
          <h2>Contact</h2>
          <iframe 
            src="https://docs.google.com/forms/d/1aA370BYNAlKXabDbAIIJU4sjiONWC6KCY-aAQIfilYY/edit" 
            title="Contact Form">
            Loading…
          </iframe>

          <div style="margin-top:2rem;">
            <p>Contact Me</p>
            <p>Personal Email: amdaiute127@outlook.com</p>
            <p>School Email: azd5816@psu.edu</p>
            <p>Phone: (570) 599-5261</p>
          </div>
        </section>
      </main>

      <button class="scroll-top-btn" @click="${this._scrollToTop}">↑</button>
${this.activeScreen === 'screen-2' ? html`
  <a class="download-resume-btn" href="./Antonio%20Daiute%20Lockheed%20Resume.pdf" download>Download Resume</a>
` : ''}
`;
  }
}

customElements.define('portfolio-sidebar-theme', PortfolioSidebarTheme);
