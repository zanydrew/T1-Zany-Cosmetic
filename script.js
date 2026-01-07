// Database of products
const productData = {
    lips: [
        { name: "rosy ray", price: 15.00, img: "assets/images/RosyRay.webp", desc: "lip gloss" },
        { name: "crimson charm", price: 22.00, img: "assets/images/crimsonCharm.webp", desc: "Vibrant red lipstick." },
        { name: "rose and chill", price: 15.00, img: "assets/images/Underestimated.webp", desc: "Glossy and hydrating." },
        { name: "besitos", price: 15.00, img: "assets/images/Besitos.webp", desc: "Glossy and hydrating." },
        { name: "nude nectar", price: 17.00, img: "assets/images/nudenectar.webp", desc: "Perfect nude lipstick." },
        { name: "matte magic", price: 20.00, img: "assets/images/matteMagic.webp", desc: "Long-lasting matte lipstick." },
        { name: "berry bliss", price: 18.00, img: "assets/images/berrybliss.webp", desc: "Rich berry shade." },
        { name: "pink passion", price: 19.00, img: "assets/images/pinkpassion.webp", desc: "Bright pink lipstick." },
        { name: "coral crush", price: 16.00, img: "assets/images/coralcrushwebp.webp", desc: "Fresh coral shade." },
        { name: "plum perfection", price: 21.00, img: "assets/images/plumperfection.webp", desc: "Deep plum lipstick." },
        { name: "satin shine", price: 18.00, img: "assets/images/satinshine.webp", desc: "Satin finish lipstick." },
        { name: "glossy glow", price: 15.00, img: "assets/images/glossyglow.webp", desc: "High-shine lip gloss." },
        { name: "velvet vibe", price: 20.00, img: "assets/images/velvetvibe.webp", desc: "Velvety smooth lipstick." },
    ],
    face: [
        { name: "Dewy Foundation", price: 35.00, img: "assets/images/dewy.webp", desc: "Full coverage foundation." },
        { name: "Matte Powder", price: 25.00, img: "assets/images/mattepowder.webp", desc: "Oil-absorbing setting powder." },
        { name: "Blush Duo", price: 30.00, img: "assets/images/blushduowebp.webp", desc: "Peach and pink shades." },
        { name: "Highlighter Stick", price: 28.00, img: "assets/images/highlighterstick.webp", desc: "Creamy highlighter." },
        { name: "Contour Kit", price: 40.00, img: "assets/images/contourkit.webp", desc: "Sculpting contour palette." },
        { name: "Setting Spray", price: 22.00, img: "assets/images/settingspray.webp", desc: "Long-lasting finish." },
        { name: "BB Cream", price: 32.00, img: "assets/images/bbcream.webp", desc: "Lightweight coverage." },
        { name: "Concealer Pen", price: 27.00, img: "assets/images/concealerpen.webp", desc: "Brightening concealer." },
        { name: "Highighter", price: 29.00, img: "assets/images/highlighter.webp", desc: "Pore-minimizing primer." },
        { name: "Bronzer Powder", price: 26.00, img: "assets/images/bronzerpower.webp", desc: "Sun-kissed glow." },
        { name: "Brush", price: 20.00, img: "assets/images/brush.webp", desc: "Refreshing facial mist." },
        { name: "Illuminating Cream", price: 34.00, img: "assets/images/illuminatingCream.webp", desc: "Radiant skin cream." },

    ],
    eyes: [
        { name: "Volumn Macara", price: 35.00, img: "assets/images/eye_n_brow.webp", desc: "0.41 fl oz | VOLUME + LIFT", details: "Get fuller, lifted, and defined lashes with my Kylash volume mascara. Featuring a clean and vegan formula...",
            ingredients: "Aqua/water/eau, synthetic beeswax, copernicia cerifera cera/copernicia cerifera (carnauba) wax...", colors: [
                { name: "Black", hex: "#000000" },
                { name: "Brown", hex: "#4b2810" }
            ] },
        { name: "Winged Eyeliner", price: 18.00, img: "assets/images/eye_n_brow.webp", desc: "Waterproof precision." },
        { name: "Volumn Macara", price: 35.00, img: "assets/images/eye_n_brow.webp", desc: "Waterproof precision." },
        { name: "Brow Pencil", price: 22.00, img: "assets/images/eye_n_brow.webp", desc: "Define and shape brows." },
        { name: "Eyeshadow Palette", price: 45.00, img: "assets/images/eye_n_brow.webp", desc: "12 versatile shades." },
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
    // document.querySelectorAll('.page-section').forEach(section => {
    //     section.style.display = 'none';
    // });
    
    // Show the requested page
    // const page = document.getElementById(pageId);
    // if (page) {
    //     page.style.display = 'block';
    // }

    document.querySelectorAll('.page-section').forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });

    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = 'block';
        page.classList.add('active');
    }

    window.scrollTo(0,0);
    
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
    
    //Basic info
    document.getElementById('det-name').innerText = product.name;
    document.getElementById('det-price').innerText = product.price.toFixed(2);
    document.getElementById('det-img').src = product.img;
    document.getElementById('det-img').alt = product.name;
    document.getElementById('det-desc').innerText = product.desc;

    //Additional info
    document.getElementById('det-details').innerText = product.details || "";
    document.getElementById('det-ingredients').innerText = product.ingredients || "";

    // color swatches
    const colorContainer = document.getElementById('color-swatches');
    colorContainer.innerHTML = ''; // Clear old colors

    if(product.colors){
        product.colors.forEach((color, index) => {
            const swatch = document.createElement('div');
            swatch.className = `swatch ${index === 0 ? 'active' : ''}`;
            swatch.style.backgroundColor = color.hex;
            swatch.onclick = () => {
                document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                document.getElementById('selected-color-name').innerText = color.name;
            };
            colorContainer.appendChild(swatch);
        });
        document.getElementById('selected-color-name').innerText = product.colors[0].name;
    }

    // Quantity logic
    const qtyInput = document.getElementById('det-quantity');
    const plusBtn = document.getElementById('det-plus-btn');
    const minusBtn = document.getElementById('det-minus-btn');

    // Always reset quantity to 1 when opening a new product
    qtyInput.value = 1;

    plusBtn.onclick = () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    };

    minusBtn.onclick = () => {
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
        }
    };
    
    // Update add to cart button
    const addToCartBtn = document.getElementById('detail-add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.onclick = () => {
            const finalQty = parseInt(qtyInput.value);
            // pass a modified product object with the selected quantity
            addToCart({ ...product, quantity: finalQty });
        };
    }

    // Update wishlist button
    const wishlistBtn = document.getElementById('detail-wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.onclick = () => addToWishlist(product);
    }
}

// Simple Accordion Toggle Logic
document.querySelectorAll('.accordion-header').forEach(header => {
    header.onclick = () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        header.querySelector('.icon').innerText = content.style.display === 'block' ? '−' : '+';
    };
});

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

    // Determine the amount to add: 
    // Use product.quantity if it exists (from detail page), otherwise default to 1 (from shop cards)
    const quantityToAdd = product.quantity || 1;

    if (existingItem) {
        // Add the chosen quantity to the existing quantity
        existingItem.quantity += quantityToAdd;
    } else {
        // Add new item with the chosen quantity
        cart.push({
            name: product.name,
            price: product.price,
            img: product.img.startsWith('assets/')
                ? product.img
                : `assets/images/${product.img}`,
            quantity: quantityToAdd
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
    if (!cartItems) return;

    cartItems.innerHTML = '';
    let subtotal = 0;

    if (!Array.isArray(cart) || cart.length === 0) {
        cartItems.innerHTML =
            '<tr><td colspan="4" style="padding: 50px; text-align:center;">Your cart is empty</td></tr>';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        cartItems.innerHTML += `
            <tr class="cart-row">
                <td style="width: 40%;">
                    <div class="product-cell">
                        <img src="${item.img}" alt="${item.name}">
                        <div>
                            <p class="p-name">${item.name}</p>
                            <p class="p-color">Color: ${item.color || 'Default'}</p>
                            <button class="remove-link" onclick="removeFromCart(${index})">✕ Remove</button>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="qty-control" style="margin: 0 auto;">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td>$${item.price.toFixed(2)}</td>
                <td style="font-weight: 600;">$${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    document.getElementById('subtotal-val').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-total-val').textContent = `$${subtotal.toFixed(2)}`;
}


// Central Navigation Function
function switchView(viewId, stepNum) {
    // 1. Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    // 2. Show the one we want
    const activeView = document.getElementById(viewId);
    if (activeView) activeView.classList.add('active');

    // 3. Update all steppers
    document.querySelectorAll('.stepper').forEach(stepper => {
        const steps = stepper.querySelectorAll('.step');
        steps.forEach((step, index) => {
            if (index === stepNum - 1) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    });

    // 4. Update data if moving to checkout
    if (viewId === 'checkout-view') renderMiniSummary();
    
    window.scrollTo(0, 0);
}

// Button-specific functions
function showCheckout() {
    if (cart.length === 0) return alert("Your cart is empty");
    switchView('checkout-view', 2);
}

function showComplete() {
    // Set final total text
    document.getElementById('final-total-display').textContent = document.getElementById('cart-total-val').textContent;
    
    // Create images list
    const itemsDiv = document.getElementById('complete-items');
    itemsDiv.innerHTML = cart.map(item => `
        <div style="position:relative;">
            <img src="${item.img}" width="65" style="border-radius:4px;">
            <span style="position:absolute; top:-5px; right:-5px; background:#000; color:#fff; border-radius:50%; width:20px; height:20px; font-size:11px; display:flex; align-items:center; justify-content:center;">${item.quantity}</span>
        </div>
    `).join('');

    switchView('complete-view', 3);
}

function renderMiniSummary() {
    const mini = document.getElementById('mini-summary');
    let subtotal = 0;
    let itemsHtml = cart.map(item => {
        subtotal += (item.price * item.quantity);
        // return `<div style="display:flex; justify-content:space-between; margin-bottom:10px;">
        //             <span>${item.name} x${item.quantity}</span>
        //             <span>$${(item.price * item.quantity).toFixed(2)}</span>
        //         </div>`;
        return `
        <div style="display:flex; gap:12px; margin-bottom:12px;">
            <img src="${item.img}" width="50" style="border-radius:6px;">
            <div style="flex:1;">
                <p style="margin:0;font-weight:600;">${item.name}</p>
                <small>x${item.quantity}</small>
            </div>
            <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
        `;

    }).join('');

    mini.innerHTML = `
        <h4>Order summary</h4>
        <div style="margin: 20px 0;">${itemsHtml}</div>
        <div style="border-top:1px solid #eee; padding-top:15px; font-weight:bold; display:flex; justify-content:space-between;">
            <span>Total</span><span>$${subtotal.toFixed(2)}</span>
        </div>
    `;
}

// Call your initial cart load here
loadCartPage();

// Core Cart Functions (Updated to use your logic)
function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    saveAndRefresh();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('zanyCart', JSON.stringify(cart));
    loadCartPage();
    if(typeof updateCartCount === 'function') updateCartCount();
}

// Start
loadCartPage();


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
        <div class="wishlist-clickable" style="cursor: pointer;">
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
        </div>
        <p class="price">$${item.price.toFixed(2)}</p>
        <div class="wishlist-actions">
            <button class="btn-secondary" onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')}); showNotification('${item.name} added to cart!')">Add to Cart</button>
            <button class="btn-secondary" onclick="removeFromWishlist(${index})">Remove</button>
        </div>
    `;

    // Add the click event to the clickable wrapper
    const clickableArea = wishlistItem.querySelector('.wishlist-clickable');
    clickableArea.onclick = () => {
        openProduct(item);
    };

    wishlistGrid.appendChild(wishlistItem);
});

// wishlist.forEach((item, index) => {
//         const wishlistItem = document.createElement('div');
//         wishlistItem.className = 'wishlist-item';
//         wishlistItem.innerHTML = `
//             <img src="${item.img}" alt="${item.name}">
//             <h4>${item.name}</h4>
//             <p class="price">$${item.price.toFixed(2)}</p>
//             <button class="btn-secondary" onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')}); showNotification('${item.name} added to cart!')">Add to Cart</button>
//             <button class="btn-secondary" onclick="removeFromWishlist(${index})">Remove</button>
//         `;
//         wishlistGrid.appendChild(wishlistItem);
//     });
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