const item = [
  {
    name: "Whey Protein Gold",
    description: "High-quality whey for muscle recovery",
    servings: [30, 50],
    pricePerServing: 1.5,
    offer: "<br>",
    image: "https://www.stack3d.com/cdn-cgi/image/w=640,q=50,f=auto/wp-content/uploads/2024/01/optimum-nutrition-salted-caramel-gold-standard-uk.jpg"
  },
  {
    name: "Plant-Based Protein",
    description: "Vegan protein made from peas and rice",
    servings: [20, 40],
    pricePerServing: 1.2,
    offer: "15% OFF",
    image: "https://topathlete.com.au/cdn/shop/files/plantproteinvanillablissflavour.jpg?v=1734406268&width=2000"
  },
  {
    name: "Mass Gainer",
    description: "High-calorie formula for bulking",
    servings: [15, 30],
    pricePerServing: 2.0,
    offer: "<br>",
    image: "https://dymatize.imgix.net/a/products/Super_Mass_Gainer_Rich_Chocolate_Hero_Product_Line_Page_Dymatize_Website_3840x2156.jpg?ar=3840%3A2156&auto=format%2Ccompress&fit=crop&ixlib=php-3.1.0&w=2000&s=6caca47f5a31af4ab96ec4e0650036ae"
  },
  {
    name: "Isolate Protein",
    description: "Fast-absorbing protein isolate",
    servings: [25, 50],
    pricePerServing: 1.8,
    offer: "<br>",
    image: "https://m.media-amazon.com/images/I/713dMOET0EL.jpg"
  },
  {
    name: "Casein Protein",
    description: "Slow-digesting night protein",
    servings: [30, 60],
    pricePerServing: 1.3,
    offer: "<br>",
    image: "https://www.vssalford.co.uk/cdn/shop/files/Strawberry-Cream100_-Casein-Protein-900g-Bag_600x600_a1c1f7ea-37df-423a-94f0-fc29de379d0c_480x480.jpg?v=1728633870"
  },
  {
    name: "Pre-Workout Energy",
    description: "Boosts energy and focus",
    servings: [20, 40],
    pricePerServing: 1.1,
    offer: "<br>",
    image: "https://www.energie9.com/wp-content/uploads/2022/01/energy9-Pre-Workout-300g_Blueberry123.png"
  },
  {
    name: "BCAA Blend",
    description: "Essential amino acids for recovery",
    servings: [30, 60],
    pricePerServing: 1.4,
    offer: "25% OFF",
    image: "https://static.thcdn.com/images/large/original//productimg/1600/1600/10830553-1635199715531221.jpg"
  },
  {
    name: "Hydro Whey",
    description: "Hydrolyzed whey for quick absorption",
    servings: [25, 50],
    pricePerServing: 2.2,
    offer: "<br>",
    image: "https://www.body-supplies.nl/images/500x500/r/products/pure.-hydro-whey-pro-750gr.jpg"
  },
  {
    name: "Creatine Monohydrate",
    description: "Pure creatine for strength and power",
    servings: [30, 60],
    pricePerServing: 0.8,
    offer: "10% OFF",
    image: "https://www.myprotein.com.my/images?url=https://static.thcdn.com/productimg/original/15010401-1955217809672481.jpg"
  },
  {
    name: "Glutamine Powder",
    description: "Supports muscle recovery and immune system",
    servings: [30, 60],
    pricePerServing: 0.9,
    offer: "<br>",
    image: "https://www.myprotein.com.my/images?url=https://static.thcdn.com/productimg/original/10530124-2195186715678768.jpg"
  },
  {
    name: "Post-Workout Recovery",
    description: "Optimize recovery after intense workouts",
    servings: [20, 40],
    pricePerServing: 1.2,
    offer: "<br>",
    image: "https://www.lacworldwide.com.my/dw/image/v2/BCXD_PRD/on/demandware.static/-/Sites-masterCatalog_SITES/en_MY/dw5562d5e0/product-images/03903800_Nitrotech_Creactor_unflavoured_front_1635x1227_web_2022_low.jpg"
  },
  {
    name: "Testosterone Booster",
    description: "Natural ingredients to support testosterone",
    servings: [30, 60],
    pricePerServing: 1.5,
    offer: "20% OFF",
    image: "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/600x600/602f0fa2c1f0d1ba5e241f914e856ff9/t/e/test_hd_elite_120_capsules_1.jpg"
  },
  {
    name: "Fat Burner",
    description: "Supports fat loss and energy",
    servings: [30, 60],
    pricePerServing: 1.3,
    offer: "<br>",
    image: "https://cdn.salla.sa/ArAEy/F2p7oRbRNgYN172r6bXpmcscMFUykSMSr2ASg9jh.jpg"
  },
  {
    name: "Electrolyte Mix",
    description: "Replenish electrolytes after workout",
    servings: [20, 40],
    pricePerServing: 0.7,
    offer: "<br>",
    image: "https://m.media-amazon.com/images/I/71sAHzcSZtL._AC_SL1500_.jpg"
  },
  {
    name: "Collagen Protein",
    description: "Supports joints, skin and hair",
    servings: [30, 60],
    pricePerServing: 1.4,
    offer: "<br>",
    image: "https://www.myprotein.com.my/images?url=https://static.thcdn.com/productimg/original/11067704-4395180485904754.jpg"
  },
  {
    name: "Energy Gel",
    description: "Quick energy during workouts",
    servings: [24, 48],
    pricePerServing: 1.0,
    offer: "<br>",
    image: "https://styrkr.com/cdn/shop/files/Gel30NitroFront_6279a382-c8a6-4bf4-909c-f06a547190a9.jpg"
  }
];

let cart = [];
const productList = document.getElementById("product-list");
const modal = document.getElementById("product-modal");
const checkoutModal = document.getElementById("checkout-modal");
const confirmationModal = document.getElementById("confirmation-modal");

let selectedProduct = null;
const PRODUCTS_PER_PAGE = 8;
let currentPage = 1;
let filteredItems = [...item];


function init() {
  renderItem();
  document.getElementById("cart").addEventListener("click", openCart);
  
  // search functionality
  document.getElementById("search-input").addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      filteredItems = item.filter(product => 
          product.name.toLowerCase().includes(searchTerm) || 
          product.description.toLowerCase().includes(searchTerm)
      );
      currentPage = 1;
      renderItem();
      renderPagination();
  });
  
  // pagination event listeners
  document.getElementById("prev-page").addEventListener("click", () => {
      if (currentPage > 1) {
          currentPage--;
          renderItem();
          renderPagination();
      }
  });
  
  document.getElementById("next-page").addEventListener("click", () => {
      if (currentPage < Math.ceil(filteredItems.length / PRODUCTS_PER_PAGE)) {
          currentPage++;
          renderItem();
          renderPagination();
      }
  });
}

// render product list
function renderItem() {
  productList.innerHTML = '';
  
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const itemsToDisplay = filteredItems.slice(startIndex, endIndex);
  
  if (itemsToDisplay.length === 0) {
      productList.innerHTML = '<p class="no-results">No products found</p>';
      return;
  }
  
  itemsToDisplay.forEach((item, index) => {
      const el = document.createElement("div");
      el.className = "product";
      el.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="product-image">
          <div class="product-info">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <h2 style="color:rgb(0, 212, 195)">${item.offer}</h2>
              <h5 class="product-price">From $${(item.servings[0] * item.pricePerServing).toFixed(2)}</h5>
          </div>
      `;
      el.addEventListener("click", () => openModal(startIndex + index));
      productList.appendChild(el);
  });
  
  renderPagination();
}


function renderPagination() {
  const pageNumbers = document.getElementById("page-numbers");
  pageNumbers.innerHTML = '';
  
  const totalPages = Math.ceil(filteredItems.length / PRODUCTS_PER_PAGE);
  

  document.getElementById("prev-page").disabled = currentPage === 1;   // previous button state

  document.getElementById("next-page").disabled = currentPage === totalPages || totalPages === 0;   // next button state
  
  // page numbers
  for (let i = 1; i <= totalPages; i++) {
      const pageNumber = document.createElement("div");
      pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
      pageNumber.textContent = i;
      pageNumber.addEventListener("click", () => {
          currentPage = i;
          renderItem();
          renderPagination();
      });
      pageNumbers.appendChild(pageNumber);
  }
}

function openModal(index) {
  selectedProduct = filteredItems[index];
  document.getElementById("modal-name").textContent = selectedProduct.name;
  document.getElementById("modal-description").textContent = selectedProduct.description;
  
  const select = document.getElementById("serving-select");
  select.innerHTML = "";
  
  selectedProduct.servings.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = `${s} servings - $${(s * selectedProduct.pricePerServing).toFixed(2)}`;
      select.appendChild(opt);
  });
  
  modal.classList.remove("hidden");
}

// close modal
function closeModal() {
  modal.classList.add("hidden");
}

function addToCart() {
  const servings = parseInt(document.getElementById("serving-select").value);
  cart.push({
    name: selectedProduct.name,
    servings,
    price: servings * selectedProduct.pricePerServing,
    id: Date.now() // we use for unique id 
  });
  updateCartCount();
  closeModal();
}

// open modal
function openCart() {
  if (cart.length === 0) {
    alert("Your cart is empty! 😒");
    return;
  }
  renderCheckoutItems();
  checkoutModal.classList.remove("hidden");
}

function renderCheckoutItems() {
  const checkoutItems = document.getElementById("checkout-items");
  checkoutItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemCon = document.createElement("div");
    itemCon.className = "checkout-item";
    itemCon.style.display = "flex";
    itemCon.style.alignItems = "center";
    itemCon.style.justifyContent = "space-between";
    itemCon.style.padding = "10px 0";
    itemCon.style.borderBottom = "1px solid #eee";

    const detailCon = document.createElement("div");
    detailCon.style.color = "#ffffff"; 
    detailCon.style.fontSize = "16px";
    detailCon.textContent = `${item.name} - ${item.servings} servings - $${item.price.toFixed(2)}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.style.background = "none";
    deleteBtn.style.width = "10px";
    deleteBtn.style.border = "none";
    deleteBtn.style.color = "#fffff";
    deleteBtn.style.fontSize = "16px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.padding = "0 2px";
    deleteBtn.style.position = "relative";
    deleteBtn.style.left = "-20px";
    deleteBtn.addEventListener("click", (ei) => {
      ei.stopPropagation();
      removeFromCart(index);
    });

    itemCon.appendChild(detailCon);
    itemCon.appendChild(deleteBtn);
    checkoutItems.appendChild(itemCon);
    total += item.price;
  });

  document.getElementById("total-price").textContent = total.toFixed(2);
  document.getElementById("total-price").style.color = "#ffffff";
  document.getElementById("total-price").style.fontWeight = "bold";
}


function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  
  if (cart.length === 0) {
    closeCheckout();
  } else {
    renderCheckoutItems();
  }
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function closeCheckout() {
  checkoutModal.classList.add("hidden");
}

function confirmPayment() {
  cart = [];
  updateCartCount();
  checkoutModal.classList.add("hidden");
  confirmationModal.classList.remove("hidden");
}

function closeConfirmation() {
  confirmationModal.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", init);