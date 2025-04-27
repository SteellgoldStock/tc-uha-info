class Navbar extends HTMLElement {
  constructor() {
  	super();
  }
  
  connectedCallback() {
  	this.innerHTML = `
    	<nav class="bg-white shadow-md">
      	<div class="container mx-auto px-4 py-3">
        	<div class="flex justify-between items-center">
          	<a href="index.html" class="flex items-center">
            	<img src="assets/images/logo.png" alt="Mon Informatique" class="h-10 w-auto">
            </a>
            <div class="hidden md:flex space-x-6">
            	<a href="index.html" class="text-gray-700 hover:text-blue-500">Accueil</a>
              <a href="about.html" class="text-gray-700 hover:text-blue-500">Notre Histoire</a>
              <a href="products.html" class="text-gray-700 hover:text-blue-500">Produits</a>
              <a href="contact.html" class="text-gray-700 hover:text-blue-500">Contact</a>
            </div>
            <div class="md:hidden">
            	<button id="mobile-menu-button" class="text-gray-700 hover:text-blue-500">
              	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div id="mobile-menu" class="md:hidden hidden pt-4">
          	<div class="flex flex-col space-y-3">
            	<a href="index.html" class="text-gray-700 hover:text-blue-500">Accueil</a>
              <a href="about.html" class="text-gray-700 hover:text-blue-500">Notre Histoire</a>
              <a href="products.html" class="text-gray-700 hover:text-blue-500">Produits</a>
              <a href="contact.html" class="text-gray-700 hover:text-blue-500">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  
    const mobileMenuButton = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');
  
    if (mobileMenuButton && mobileMenu) {
			mobileMenuButton.addEventListener('click', () => {
				mobileMenu.classList.toggle('hidden');
    	});
    }
  }
}

customElements.define('nav-component', Navbar);