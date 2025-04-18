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
    }
  ];
  
  let cart = [];
  const productList = document.getElementById("product-list");
  const modal = document.getElementById("product-modal");
  const checkoutModal = document.getElementById("checkout-modal");
  const confirmationModal = document.getElementById("confirmation-modal");
  
  let selectedProduct = null;
  let selectedServing = 0;
  
  // initialize the app
  function init() {
    renderItem();
    document.getElementById("cart").addEventListener("click", openCart);
  }
  
  // render product list
  function renderItem() {
    productList.innerHTML = '';
    item.forEach((item, index) => {
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
      el.addEventListener("click", () => openModal(index));
      productList.appendChild(el);
    });
  }
  
  // open product modal
  function openModal(index) {
    selectedProduct = item[index];
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
  
  // close product modal
  function closeModal() {
    modal.classList.add("hidden");
  }
  
  // add item to cart
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
  
  // open cart modal
  function openCart() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
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
      const itemDiv = document.createElement("div");
      itemDiv.className = "checkout-item";
      itemDiv.style.display = "flex";
      itemDiv.style.alignItems = "center";
      itemDiv.style.justifyContent = "space-between";
      itemDiv.style.padding = "10px 0";
      itemDiv.style.borderBottom = "1px solid #eee";
  
      const detailsDiv = document.createElement("div");
      detailsDiv.style.color = "#ffffff"; 
      detailsDiv.style.fontSize = "16px";
      detailsDiv.textContent = `${item.name} - ${item.servings} servings - $${item.price.toFixed(2)}`;
  
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
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeFromCart(index);
      });
  
      itemDiv.appendChild(detailsDiv);
      itemDiv.appendChild(deleteBtn);
      checkoutItems.appendChild(itemDiv);
      total += item.price;
    });
  
    document.getElementById("total-price").textContent = total.toFixed(2);
    document.getElementById("total-price").style.color = "#ffffff"; // Matching dark gray
    document.getElementById("total-price").style.fontWeight = "bold";
  }
  
  // remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    
    if (cart.length === 0) {
      closeCheckout();
    } else {
      renderCheckoutItems();
    }
  }
  
  // update cart count display
  function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  // close checkout modal
  function closeCheckout() {
    checkoutModal.classList.add("hidden");
  }
  
  // confirm payment
  function confirmPayment() {
    cart = [];
    updateCartCount();
    checkoutModal.classList.add("hidden");
    confirmationModal.classList.remove("hidden");
  }
  
  // close confirmation modal
  function closeConfirmation() {
    confirmationModal.classList.add("hidden");
  }
  
document.addEventListener("DOMContentLoaded", init);