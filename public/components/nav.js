class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <nav class="bg-[#3768b100] z-40 absolute left-0 right-0 top-0">
  <div class="w-full px-2 sm:px-4 lg:px-8">
    <div class="flex h-16 justify-between">
      <div class="flex items-center px-2 lg:px-0">
        <button type="button" onclick="openNav()"
          class="inline-flex dropbtn lg:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mr-3 -ml-3"
          aria-controls="myDropdown" aria-expanded="false">
          <span class="sr-only">Open main menu</span>

          <img src="../assets/img/menu-white.png" alt="menu icon" />
        </button>

        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <img src="../assets/img/stok-logo.svg" class="h-18" alt="stokdirect logo" />
        </div>
        <!-- Sidebar Navigation -->
        <div id="mySidenav" class="sidenav z-40 flex flex-col">
          <div class="flex items-center">
          <div class="lg:ml-4 lg:flex lg:items-center w-3/4">
            <img src="../assets/img/stok-logo.svg" class="h-18" alt="stokdirect logo" />
          </div>
          <a href="javascript:void(0)" class="closebtn w-1/4" onclick="closeNav()">&times;</a>
          </div>
          <a href="/" class="flex items-center">

            <span>Home</span>
          </a>
          <a href="/public/about.html" class="flex items-center">

            <span>About Us</span>
          </a>
          <a href="/public/services.html" class="flex items-center">

            <span>Services</span>
          </a>
          
          <a href="/public/contact.html" class="flex items-center">

            <span>Contact</span>
          </a>
        </div>
      </div>
      <div class="lg:flex flex-1 hidden items-center justify-center px-2 lg:ml-6 lg:justify-end">
        <div class="max-w-lg lg:max-w-md flex items-center justify-evenly w-full">
          <a class="text-white hover:text-gray-200" href="/">Home</a>
          <a class="text-white hover:text-gray-200" href="/public/about.html">About Us</a>
          <a class="text-white hover:text-gray-200" href="/public/services.html">Services</a>    
          <a class="text-white hover:text-gray-200" href="/public/contact.html">Contact</a>
        </div>
      </div>

    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
</nav>

  `;
  }
}

customElements.define("nav-component", NavBar);
