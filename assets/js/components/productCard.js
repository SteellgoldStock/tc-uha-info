class ProductCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const product = JSON.parse(this.getAttribute('product'));
    
    this.innerHTML = `
      <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
          <div class="p-4">
            <p class="text-xs text-gray-500 mb-1">Réf: ${product.reference}</p>
            <h3 class="font-bold text-lg text-gray-800 mb-2">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.shortDescription}</p>
            <div class="flex justify-between items-center">
              <span class="font-bold text-lg text-blue-600">${product.price} €</span>
              <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                Voir détails
              </button>
            </div>
          </div>
        </a>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);