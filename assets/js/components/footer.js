class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-100 text-black py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center mb-6">
            <div class="flex items-center mb-4 md:mb-0">
              <img src="assets/images/logo.png" alt="Mon Informatique" class="h-12 w-auto mr-4">
            </div>
            <div class="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="index.html" class="text-gray-800 hover:text-gray-700 transition">Accueil</a>
              <a href="about.html" class="text-gray-800 hover:text-gray-700 transition">Notre Histoire</a>
              <a href="products.html" class="text-gray-800 hover:text-gray-700 transition">Produits</a>
              <a href="contact.html" class="text-gray-800 hover:text-gray-700 transition">Contact</a>
              <a href="legal.html" class="text-gray-800 hover:text-gray-700 transition">Mentions légales</a>
            </div>
          </div>
          <div class="border-t border-gray-700 pt-6 text-center text-gray-800">
            <p>© ${new Date().getFullYear()} Mon Informatique. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);