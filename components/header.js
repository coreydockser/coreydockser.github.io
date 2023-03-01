const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
<style>


h1 {
    text-align: center;
  margin: 0 0 auto auto;

  padding: 20px 0;
 
  

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
      <li><a href="/index.html">Work</a></li>
      <li><a href="html/contact.html">Contact</a></li>
    </ul>
  </nav>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }



    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
