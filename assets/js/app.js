function getUrlParams() {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  
  return params;
}

function initProductPage() {
  const params = getUrlParams();
  if (!params.id) {
    window.location.href = "products.html";
    return;
  }
  
  const productId = parseInt(params.id);
  const product = getProductById(productId);
  
  if (!product) {
    window.location.href = "products.html";
    return;
  }
  
  document.getElementById("product-title").textContent = product.name;
  document.getElementById("product-reference").textContent = `Réf: ${product.reference}`;
  document.getElementById("product-price").textContent = `${product.price} €`;
  document.getElementById("product-description").innerHTML = product.description;
  
  const mainImage = document.getElementById("product-main-image");
  if (mainImage) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
  }
  
  const thumbnailsContainer = document.getElementById("product-thumbnails");
  if (thumbnailsContainer && product.images.length > 1) {
    thumbnailsContainer.innerHTML = "";
    product.images.forEach((image, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = image;
      thumbnail.alt = `${product.name} - Image ${index + 1}`;
      thumbnail.className = "w-16 h-16 object-cover cursor-pointer border-2 rounded";
      thumbnail.classList.add(index === 0 ? "border-blue-500" : "border-gray-200");
      
      thumbnail.addEventListener("click", () => {
        mainImage.src = image;
        document.querySelectorAll("#product-thumbnails img").forEach(img => {
          img.classList.remove("border-blue-500");
          img.classList.add("border-gray-200");
        });
        thumbnail.classList.remove("border-gray-200");
        thumbnail.classList.add("border-blue-500");
      });
      
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
}

function initProductsPage() {
  const categories = getAllCategories();
  const productsContainer = document.getElementById("products-container");
  const categoriesContainer = document.getElementById("categories-container");
  
  if (categoriesContainer) {
    categories.forEach(category => {
      const categoryButton = document.createElement("button");
      categoryButton.textContent = category.name;
      categoryButton.className = "px-4 py-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded transition";
      categoryButton.dataset.category = category.id;
      
      categoryButton.addEventListener("click", () => {
        document.querySelectorAll("#categories-container button").forEach(btn => {
          btn.classList.remove("bg-blue-500", "text-white");
          btn.classList.add("bg-gray-200");
        });
        categoryButton.classList.remove("bg-gray-200");
        categoryButton.classList.add("bg-blue-500", "text-white");
        
        displayProductsByCategory(category.id);
      });
      
      categoriesContainer.appendChild(categoryButton);
    });
    
    if (categories.length > 0) {
      const firstCategoryButton = categoriesContainer.querySelector("button");
      firstCategoryButton.classList.remove("bg-gray-200");
      firstCategoryButton.classList.add("bg-blue-500", "text-white");
      displayProductsByCategory(categories[0].id);
    }
  }
  
  function displayProductsByCategory(categoryId) {
    if (!productsContainer) return;
    
    const filteredProducts = categoryId === "all" 
      ? getAllProducts() 
      : getProductsByCategory(categoryId);
    
    productsContainer.innerHTML = "";
    
    filteredProducts.forEach(product => {
      const productCard = document.createElement("product-card");
      productCard.setAttribute("product", JSON.stringify(product));
      productsContainer.appendChild(productCard);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const pageName = path.split("/").pop();
  
  if (pageName === "product.html") {
    initProductPage();
  } else if (pageName === "products.html") {
    initProductsPage();
  }
});