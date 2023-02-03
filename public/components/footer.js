class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-[#122B60]" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <img class="h-20" src="../assets/img/stok-logo.svg" alt="Company name">
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Product</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Home</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Services</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">How It Works</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Get In Touch</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Our Partners</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="/public/stock-locations.html" class="text-sm leading-6 text-gray-300 hover:text-white">Stock Forwarding locations</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Manufactures</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Retailers</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Drivers</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Resources</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="/public/terms-and-conditions.html" class="text-sm leading-6 text-gray-300 hover:text-white">Terms and Conditions</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Refund Policy</a>
                </li>
                
                <li>
                  <a href="/public/privacy-policy.html" class="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</a>
                </li>
                
                <li>
                  <a href="/public/user-policy.html" class="text-sm leading-6 text-gray-300 hover:text-white">User Policy</a>
                </li>
                
                <li>
                  <a href="/public/cookie-policy.html" class="text-sm leading-6 text-gray-300 hover:text-white">Cookie Policy</a>
                </li>

                <li>
                  <a href="/public/buyer-protection.html" class="text-sm leading-6 text-gray-300 hover:text-white">Buyer Protection</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Registration</a>
                </li>


              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 ">About Us</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Teams</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Careers</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">FAQs</a>
                </li>

                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

    `;
  }
}

customElements.define("footer-component", Footer);
