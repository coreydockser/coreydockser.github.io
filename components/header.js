class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
      <style>

      h1 {
        margin: 0;
        padding: 20px 0;
        text-shadow: 2px 2px 1px lightgray;
    
      }
        nav {
          height: 40px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:  #0a0a23;
        }
        

        ul {
          padding: 0;
        }
        ul li{
            list-style: none;
            display: inline;
        }
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
      </style>
      <header>
      <h1>
      Corey Dockser, Data Journalist
      </h1>
        <nav>
          <ul>
            <li><a href="html/about.html">About</a></li>
            <li><a href="index.html">Work</a></li>
            <li><a href="html/contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

  customElements.define('header-component', Header);
