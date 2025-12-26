// Database of products
const productData = {
    lips: [
        { name: "rosy ray", price: 15.00, img: "RosyRay.webp", desc: "lip gloss" },
        { name: "crimson charm", price: 22.00, img: "crimsonCharm.webp", desc: "Vibrant red lipstick." },
        { name: "rose and chill", price: 15.00, img: "Underestimated.webp", desc: "Glossy and hydrating." },
        { name: "besitos", price: 15.00, img: "Besitos.webp", desc: "Glossy and hydrating." },
        { name: "nude nectar", price: 17.00, img: "nudenectar.webp", desc: "Perfect nude lipstick." },
        { name: "matte magic", price: 20.00, img: "matteMagic.webp", desc: "Long-lasting matte lipstick." },
        { name: "berry bliss", price: 18.00, img: "berrybliss.webp", desc: "Rich berry shade." },
        { name: "pink passion", price: 19.00, img: "pinkpassion.webp", desc: "Bright pink lipstick." },
        { name: "coral crush", price: 16.00, img: "coralcrushwebp.webp", desc: "Fresh coral shade." },
        { name: "plum perfection", price: 21.00, img: "plumperfection.webp", desc: "Deep plum lipstick." },
        { name: "satin shine", price: 18.00, img: "satinshine.webp", desc: "Satin finish lipstick." },
        { name: "glossy glow", price: 15.00, img: "glossyglow.webp", desc: "High-shine lip gloss." },
        { name: "velvet vibe", price: 20.00, img: "velvetvibe.webp", desc: "Velvety smooth lipstick." },
    ],
    face: [
        { name: "Dewy Foundation", price: 35.00, img: "dewy.webp", desc: "Full coverage foundation." },
        { name: "Matte Powder", price: 25.00, img: "mattepowder.webp", desc: "Oil-absorbing setting powder." },
        { name: "Blush Duo", price: 30.00, img: "blushduowebp.webp", desc: "Peach and pink shades." },
        { name: "Highlighter Stick", price: 28.00, img: "highlighterstick.webp", desc: "Creamy highlighter." },
        { name: "Contour Kit", price: 40.00, img: "contourkit.webp", desc: "Sculpting contour palette." },
        { name: "Setting Spray", price: 22.00, img: "settingspray.webp", desc: "Long-lasting finish." },
        { name: "BB Cream", price: 32.00, img: "bbcream.webp", desc: "Lightweight coverage." },
        { name: "Concealer Pen", price: 27.00, img: "concealerpen.webp", desc: "Brightening concealer." },
        { name: "Highighter", price: 29.00, img: "highlighter.webp", desc: "Pore-minimizing primer." },
        { name: "Bronzer Powder", price: 26.00, img: "bronzerpower.webp", desc: "Sun-kissed glow." },
        { name: "Brush", price: 20.00, img: "brush.webp", desc: "Refreshing facial mist." },
        { name: "Illuminating Cream", price: 34.00, img: "illuminatingCream.webp", desc: "Radiant skin cream." },

    ],
    eyes: [
        { name: "Winged Eyeliner", price: 18.00, img: "eye_n_brow.webp", desc: "Waterproof precision." },
        { name: "Volumn Macara", price: 35.00, img: "eye_n_brow.webp", desc: "Waterproof precision." },
        { name: "Brow Pencil", price: 22.00, img: "eye_n_brow.webp", desc: "Define and shape brows." },
        { name: "Eyeshadow Palette", price: 45.00, img: "eye_n_brow.webp", desc: "12 versatile shades." },
        { name: "Liquid Eyeliner", price: 20.00, img: "eye_n_brow.webp", desc: "Intense black liner." },
        { name: "Brow Gel", price: 24.00, img: "eye_n_brow.webp", desc: "Tame and set brows." },
        { name: "Smokey Eye Kit", price: 50.00, img: "eye_n_brow.webp", desc: "Complete smokey eye set." },
        { name: "Eyelash Curler", price: 15.00, img: "eye_n_brow.webp", desc: "Lift and curl lashes." },
        { name: "Cream Eyeshadow", price: 28.00, img: "eye_n_brow.webp", desc: "Long-lasting cream shadow." },
        { name: "Brow Powder", price: 21.00, img: "eye_n_brow.webp", desc: "Natural brow fill." },
        { name: "Glitter Eyeliner", price: 23.00, img: "eye_n_brow.webp", desc: "Sparkling eye liner." },
        { name: "False Lashes", price: 30.00, img: "eye_n_brow.webp", desc: "Dramatic lash look." },

    ]
};

// Cart data (stored in localStorage)
let cart = JSON.parse(localStorage.getItem('zanyCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('zanyWishlist')) || [];

// Category banner images
const categoryBanners = {
    lips: {
        title: "Lips",
        bannerClass: "lips-banner",
        breadcrumb: "Lips"
    },
    face: {
        title: "Face",
        bannerClass: "face-banner",
        breadcrumb: "Face"
    },
    eyes: {
        title: "Eyes & Brows",
        bannerClass: "eye-and-brows-banner",
        breadcrumb: "Eyes & Brows"
    }
};

// Function to initialize mobile menu
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
}

// Function to switch between "pages"
function showPage(pageId) {
    // Hide all page sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the requested page
    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = 'block';
    }
    
    // Clear search results if we leave the search page
    if (pageId !== 'search-page') {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        if (searchInput) searchInput.value = "";
        if (searchResults) searchResults.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #888;'>Start typing to find products...</p>";
    }
    
    // Update cart count on navbar when switching pages
    updateCartCount();
    
    // Load cart page if needed
    if (pageId === 'cart-page') {
        loadCartPage();
    }

    if (pageId === 'wishlist-page') {
        loadWishlistPage();
    }
    
    // Load profile page if needed
    if (pageId === 'profile-page') {
        loadProfilePage();
    }
    
    // Close mobile menu
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('active');
    
    window.scrollTo(0,0);
}

// Function to populate Category page
function showCategory(category) {
    showPage('category-view');
    
    const list = document.getElementById('product-list');
    const catTitle = document.getElementById('cat-title');
    const bannerTitle = document.getElementById('banner-title');
    const categoryBanner = document.getElementById('category-banner');
    const breadcrumbSpan = document.querySelector('.breadcrumbs span');
    
    // Set category information
    const categoryInfo = categoryBanners[category];
    if (categoryInfo) {
        catTitle.innerText = categoryInfo.breadcrumb;
        bannerTitle.innerText = categoryInfo.title;
        categoryBanner.className = `category-banner ${categoryInfo.bannerClass}`;
        if (breadcrumbSpan) {
            breadcrumbSpan.innerText = categoryInfo.breadcrumb;
        }
    }
    
    // Clear existing products
    list.innerHTML = "";
    
    // Check if category exists in product data
    if (productData[category]) {
        productData[category].forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.onclick = () => openProduct(item);
            card.innerHTML = `
                <div class="product-image-container">
                    <img src="${item.img}" alt="${item.name}">
                    <a href="#" class="wishlist-icon" onclick="event.stopPropagation(); addToWishlist(${JSON.stringify(item).replace(/"/g, '&quot;')})">&#x2661;</a>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">Add to cart</button>
                </div>
                <div class="product-details">
                    <div class="product-rating">
                        <span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span>
                    </div>
                    <p>${item.name}</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                </div>
            `;
            list.appendChild(card);
        });
    } else {
        list.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>No products found in this category.</p>";
    }
}

// Function to show product details
function openProduct(product) {
    showPage('product-detail');
    
    document.getElementById('det-name').innerText = product.name;
    document.getElementById('det-price').innerText = product.price.toFixed(2);
    document.getElementById('det-img').src = product.img;
    document.getElementById('det-img').alt = product.name;
    document.getElementById('det-desc').innerText = product.desc;
    
    // Update add to cart button
    const addToCartBtn = document.getElementById('detail-add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.onclick = () => addToCart(product);
    }
}

// Function to handle Real-Time Search
function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    
    if (!resultsContainer) return;
    
    resultsContainer.innerHTML = ""; // Clear current results

    if (query.length < 1) {
        resultsContainer.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #888;'>Start typing to find products...</p>";
        return;
    }

    // Combine all products from all categories
    let allProducts = [];
    Object.keys(productData).forEach(key => {
        productData[key].forEach(p => {
            allProducts.push({ ...p, category: key });
        });
    });

    // Filter based on name or category
    const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'shop-product-card';
            card.onclick = () => openProduct(item);
            card.innerHTML = `
                <div class="shop-product-image-container">
                    <img src="${item.img}" alt="${item.name}">
                    <a href="#" class="shop-wishlist-icon" onclick="event.stopPropagation(); addToWishlist(${JSON.stringify(item).replace(/"/g, '&quot;')})">&#x2661;</a>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">Add to cart</button>
                </div>
                <div class="product-details">
                    <div class="category-tag">${item.category}</div>
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price.toFixed(2)}</p>
                </div>
            `;
            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>No products found matching '" + query + "'</p>";
    }
}

// Function to add product to cart
function addToCart(product) {
    // Check if product already in cart
    const existingItem = cart.find(item => item.name === product.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('zanyCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show success message
    showNotification(`${product.name} added to cart!`);
}

// Function to update cart count in navbar
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart count text
    const cartCountText = document.getElementById('cart-count-text');
    if (cartCountText) {
        cartCountText.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart`;
    }
}

// Function to load cart page
function loadCartPage() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    cartItems.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                       onchange="updateQuantityInput(${index}, this.value)">
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
            <button class="remove-item" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Update summary
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Function to update quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    
    localStorage.setItem('zanyCart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

// Function to update quantity from input
function updateQuantityInput(index, value) {
    const newQuantity = parseInt(value);
    
    if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
        localStorage.setItem('zanyCart', JSON.stringify(cart));
        loadCartPage();
        updateCartCount();
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('zanyCart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
    showNotification('Item removed from cart');
}

// Function to add product to wishlist
function addToWishlist(product) {
    const existingItem = wishlist.find(item => item.name === product.name);
    
    if (!existingItem) {
        wishlist.push({
            name: product.name,
            price: product.price,
            img: product.img,
            desc: product.desc
        });
        
        localStorage.setItem('zanyWishlist', JSON.stringify(wishlist));
        showNotification(`${product.name} added to wishlist!`);
        
        // Update wishlist tab if open
        if (document.getElementById('wishlist-tab').classList.contains('active')) {
            loadWishlistTab();
        }
    } else {
        showNotification(`${product.name} is already in your wishlist`);
    }
}


// Function to load profile page
function loadProfilePage() {
    // Load wishlist tab by default
    loadWishlistTab();
    
    // Update dashboard stats
    const totalOrders = document.querySelectorAll('.stat-card h3')[0];
    const wishlistItems = document.querySelectorAll('.stat-card h3')[1];
    const reviews = document.querySelectorAll('.stat-card h3')[2];
    
    if (totalOrders) totalOrders.textContent = '0';
    if (wishlistItems) wishlistItems.textContent = wishlist.length;
    if (reviews) reviews.textContent = '0';
}

// Function to show profile tab
function showProfileTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.profile-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected tab
    const tab = document.getElementById(`${tabId}-tab`);
    if (tab) {
        tab.classList.add('active');
    }
    
    // Add active class to clicked nav link
    event.target.classList.add('active');
    
    // Load specific tab data
    if (tabId === 'wishlist') {
        loadWishlistTab();
    }
}

// Function to load wishlist tab
function loadWishlistTab() {
    const wishlistGrid = document.getElementById('wishlist-items');
    const emptyWishlist = document.getElementById('empty-wishlist');
    
    if (wishlist.length === 0) {
        if (emptyWishlist) emptyWishlist.style.display = 'block';
        if (wishlistGrid) wishlistGrid.innerHTML = '';
        return;
    }
    
    if (emptyWishlist) emptyWishlist.style.display = 'none';
    
    wishlistGrid.innerHTML = '';
    
    wishlist.forEach((item, index) => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p class="price">$${item.price.toFixed(2)}</p>
            <button class="btn-primary" onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')}); showNotification('${item.name} added to cart!')">Add to Cart</button>
            <button class="remove-wishlist" onclick="removeFromWishlist(${index})">Remove</button>
        `;
        wishlistGrid.appendChild(wishlistItem);
    });
}

// Function to remove from wishlist
function removeFromWishlist(index) {
    const itemName = wishlist[index].name;
    wishlist.splice(index, 1);
    localStorage.setItem('zanyWishlist', JSON.stringify(wishlist));
    loadWishlistTab();
    showNotification(`${itemName} removed from wishlist`);
    
    // Update dashboard stats
    const wishlistItems = document.querySelectorAll('.stat-card h3')[1];
    if (wishlistItems) wishlistItems.textContent = wishlist.length;
}

// Function to show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function loadWishlistPage() {
    const wishlistGrid = document.getElementById('wishlist-grid');
    const emptyWishlist = document.getElementById('empty-wishlist');
    
    if (wishlist.length === 0) {
        if (emptyWishlist) emptyWishlist.style.display = 'block';
        if (wishlistGrid) wishlistGrid.innerHTML = '';
        return;
    }
    
    if (emptyWishlist) emptyWishlist.style.display = 'none';

    wishlistGrid.innerHTML = '';

wishlist.forEach((item, index) => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p class="price">$${item.price.toFixed(2)}</p>
            <button class="btn-secondary" onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')}); showNotification('${item.name} added to cart!')">Add to Cart</button>
            <button class="btn-secondary" onclick="removeFromWishlist(${index})">Remove</button>
        `;
        wishlistGrid.appendChild(wishlistItem);
    });
}



// Function for logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear user data (in a real app, this would clear authentication)
        showNotification('Logged out successfully');
        showPage('home-section');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Set default page
    showPage('home-section');
    
    // Update cart count on load
    updateCartCount();
    
    // Add event listener for Enter key in search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Initialize category filter dropdown
    const categoryFilter = document.getElementById('categories');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const selectedCategory = this.value.toLowerCase();
            if (selectedCategory !== 'all products') {
                showCategory(selectedCategory);
            }
        });
    }
    
    // Add event listener for checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Checkout functionality would be implemented here. In a real store, this would redirect to payment.');
            }
        });
    }
});