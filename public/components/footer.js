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
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <img class="h-20" src="../assets/img/stok-logo.svg" alt="Company name">
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Product</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="/" class="text-sm leading-6 text-gray-300 hover:text-white">Home</a>
                </li>
                <li>
                  <a href="/public/services.html" class="text-sm leading-6 text-gray-300 hover:text-white">Services</a>
                </li>

                <li>
                  <a href="#process" class="text-sm leading-6 text-gray-300 hover:text-white">How It Works</a>
                </li>
                <li>
                  <a href="/public/contact.html" class="text-sm leading-6 text-gray-300 hover:text-white">Get In Touch</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Our Partners</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="/public/stock-locations.html" class="text-sm leading-6 text-gray-300 hover:text-white">Stock Forwarding Locations</a>
                </li>

                <li>
                  <a href="//erp.stokdirect.africa/login#login" class="text-sm leading-6 text-gray-300 hover:text-white">Manufacturers</a>
                </li>

                <li>
                  <a href="//erp.stokdirect.africa/login#login" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Buyers</a>
                </li>

                <li>
                  <a href="//erp.stokdirect.africa/login#login" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Drivers</a>
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
                  <a href="/public/privacy-policy.html" class="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</a>
                </li>
                
                <li>
                  <a href="/public/buyer-protection.html" class="text-sm leading-6 text-gray-300 hover:text-white">Buyer Protection</a>
                </li>
                <li>
                  <a href="/public/returns-and-refunds.html" class="text-sm leading-6 text-gray-300 hover:text-white">Returns & Refunds Policy</a>
                </li>
                <li>
                  <a href="/public/delivery-instruction.html" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank">Delivery Instructions</a>
                </li>
                <li>
                  <a href="/public/docs/Stokdirect-Independent-Owner-Driver-Contract.pdf" class="text-sm leading-6 text-gray-300 hover:text-white" target="_blank" download>Driver Contract</a>
                </li>


              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="/public/about.html" class="text-sm leading-6 text-gray-300 ">About Us</a>
                </li>

                <li>
                  <a href="/public/faqs.html" class="text-sm leading-6 text-gray-300 hover:text-white">FAQs</a>
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

    `;
  }
}

customElements.define("footer-component", Footer);