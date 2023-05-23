class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
    <!--Modal form-->
  <div class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="modal-id">
    <div class="relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
          <h3 class="text-3xl font-semibold">
            Registration Form
          </h3>
          <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onclick="toggleModal('modal-id')">
            <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        <!--body-->
        <div class="relative p-6 flex-auto">
        
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form action="/public/register.php" method="POST" id="register">
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                  <input type="text" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    
                    
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:
                     focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                    aria-describedby="emailHelp123" placeholder="First name" name="first_name">
                </div>
                <div class="form-group mb-6">
                  <input type="text" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    
                    
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:
                     focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                    aria-describedby="emailHelp124" placeholder="Last name" name="last_name">
                </div>
              </div>
              <div class="form-group mb-6">
                <input type="email" class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  
                  
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:
                   focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                  placeholder="Email address" name="email">
              </div>
              <div class="form-group mb-6">
                <input type="number" class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  
                  
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:
                   focus:bg-white focus:border-blue-600 focus:outline-none" id="contact_number"
                  placeholder="Contact Number" name="phone">
              </div>
              <div class="flex justify-start">
                <div class="mb-3 xl:w-96">
                  <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    
                    
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:
                     focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="registration_type" name="registration_type">
                      <option selected>Registration Role</option>
                      <option value="buyer">Buyer</option>
                      <option value="driver">Driver</option>
                      <option value="manufacturer">Manufacturer</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Register</button>
            </form>
          </div>
        
        </div>
        <!--footer-->
        <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onclick="toggleModal('modal-id')">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden opacity-25 fixed inset-0 z-40 bg-black" id="modal-id-backdrop"></div>

  <!--End Modal-->

    <footer class="bg-[#122B60]" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 py-6 sm:py-10 lg:px-8 lg:py-12">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="">
        <a href="/">
          <img class="h-20" src="../assets/img/stok-logo.svg" alt="Stokdirect">
        </a>
          <!-- Social Media Links -->
        <div class="flex mt-0">
          <a href="https://www.facebook.com/StokDirect.Africa" target="_blank" rel="noopener noreferrer" class="mr-4 text-[#fff] hover:text-[#E2BF17]">
          <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="44px" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="44px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z" style="fill:#fff;fill-rule:nonzero;"/></g></svg>
          </a>
          <!-- Add more social media icons/links here -->
        </div>
        </div>

        
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Services</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="/" class="text-sm leading-6 text-gray-300 hover:text-white">Home</a>
                </li>
                <li>
                  <a href="/public/services.html#e-commerce" class="text-sm leading-6 text-gray-300 hover:text-white">E-Commerce Platform</a>
                </li>
                <li>
                <a href="/public/services.html#stock-handling" class="text-sm leading-6 text-gray-300 hover:text-white">Stock Handling</a>
              </li>
              <li>
                <a href="/public/services.html#distribution" class="text-sm leading-6 text-gray-300 hover:text-white">Last-Mile Distribution</a>
              </li>
              <li>
                <a href="/public/services.html#insights" class="text-sm leading-6 text-gray-300 hover:text-white">Consumer Insights</a>
              </li>
                <li>
                  <a href="#how-we-do-it" class="text-sm leading-6 text-gray-300 hover:text-white">How We Do It</a>
                </li>
                <li>
                  <a href="/public/faqs.html" class="text-sm leading-6 text-gray-300 hover:text-white">FAQs</a>
                </li>
                
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Our Partners</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="/public/stock-locations.html" class="text-sm leading-6 text-gray-300 hover:text-white">Forward Stock Locations</a>
                </li>

                <li>
                  <a href="//erp.stokdirect.africa/login#login" class="text-sm leading-6 text-gray-300 hover:text-white">Manufacturers</a>
                </li>

                <li>
                  <a href="/public/buyers.html" class="text-sm leading-6 text-gray-300 hover:text-white">Buyers</a>
                </li>

                <li>
                  <a href="/public/drivers.html" class="text-sm leading-6 text-gray-300 hover:text-white">Drivers</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Resources</h3>
              <ul role="list" class="mt-6 space-y-4">
              <li>
              <a href="/public/docs/Stodirect-Privacy-Policy.pdf" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Privacy Policy</a>
            </li>  
              <li>
                  <a href="/public/docs/Stokdirect-Terms-of-Use-&-Stokdirect-User-Policy.pdf" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Terms and Conditions</a>
                </li>
                
                <li>
                  <a href="/public/docs/Stokdirect-Buyer-Protection.pdf" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Buyer Protection</a>
                </li>
                <li>
                <a href="/public/docs/Stokdirect-Independent-Owner-Driver-Contract.pdf" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Driver Contract</a>
              </li>
                <li>
                  <a href="/public/docs/Stokdirect-Returns-&-Refunds-Policy.pdf" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Returns & Refunds Policy</a>
                </li>
                <li>
                  <a href="/public/docs/Stokdirect-Delivery-Instructions.pdf" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Delivery Instructions</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">About Us</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>                   
                </li>
                <li>
                  <a href="/public/about.html" class="text-sm leading-6 text-gray-300 ">Who We Are</a>
                </li>
                <li>
                <a href="/public/about.html#team" class="text-sm leading-6 text-gray-300 ">Our Team</a>
              </li>    
                <li>
                  <a href="/public/about.html#careers" class="text-sm leading-6 text-gray-300 ">Careers</a>
                </li>
                <li>
                  <a href="/public/contact.html" class="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <button class="btn btn-primary scroll-top" data-scroll="up" type="button">
    <i class="fa fa-chevron-up"></i>
  </button>

    `;
  }
}

customElements.define("footer-component", Footer);