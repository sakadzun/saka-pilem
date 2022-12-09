class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search-bar").value;
  };

  render() {
    this.innerHTML = 

      `<nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand"
            <h1 class="fs-2 my-auto">Pilem</h1>
          </a>
          <form class="d-flex">
            <input class="form-control me-2" type="search" id="search-bar" placeholder="Search by title...">
            <button class="btn btn-custom" id="search-button" type="button">Search</button>
          </form>
        </div>
      </nav>`;

    this.querySelector("#search-button").addEventListener("click", this._clickEvent);
  }
};

customElements.define("nav-bar", Navbar);