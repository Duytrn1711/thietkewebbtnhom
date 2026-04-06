// Dữ liệu sản phẩm mẫu (Product Data)
const products = [
    {
        id: 1,
        categoryId: 'electronics',
        name: "Tai nghe chống ồn Sony WH-1000XM5",
        brand: "Sony",
        price: 8990000,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80"
    },
    {
        id: 2,
        categoryId: 'electronics',
        name: "Đồng hồ thông minh Apple Watch Series 8",
        brand: "Apple",
        price: 9990000,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
    },
    {
        id: 3,
        categoryId: 'fashion',
        name: "Giày Sneaker Nike Air Max 270",
        brand: "Nike",
        price: 3500000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    },
    {
        id: 4,
        categoryId: 'accessories',
        name: "Balo Thời Trang Nam Nữ Chống Nước",
        brand: "Local Brand",
        price: 450000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
    },
    {
        id: 5,
        categoryId: 'electronics',
        name: "Điện thoại Samsung Galaxy S23 Ultra",
        brand: "Samsung",
        price: 25990000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80"
    },
    {
        id: 6,
        categoryId: 'accessories',
        name: "Kính mát Unisex Ray-Ban Aviator",
        brand: "Ray-Ban",
        price: 2100000,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
    },
    {
        id: 7,
        categoryId: 'electronics',
        name: "Loa Bluetooth JBL Flip 6 Không Dây",
        brand: "JBL",
        price: 2690000,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
    },
    {
        id: 8,
        categoryId: 'fashion',
        name: "Áo Thun Cổ Tròn Basic Cotton Cao Cấp",
        brand: "Uniqlo",
        price: 250000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"
    },
    {
        id: 9,
        categoryId: 'cosmetics',
        name: "Nước hoa Chanel No.5 Eau De Parfum",
        brand: "Chanel",
        price: 3450000,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80"
    },
    {
        id: 10,
        categoryId: 'cosmetics',
        name: "Kem dưỡng da ẩm La Mer",
        brand: "La Mer",
        price: 4500000,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80"
    }
];

// Trạng thái giỏ hàng (Cart State)
let cart = [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCountElements = document.querySelectorAll('.cart-count');

// Hàm định dạng tiền tệ Việt Nam
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

// Hiển thị danh sách sản phẩm
const renderProducts = () => {
    if (!productGrid) return;
    
    // Check url params for category filtering
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('type');
    
    // Change section title dynamically based on category
    if (categoryFilter) {
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            const categoryNames = {
                'electronics': 'Điện tử',
                'fashion': 'Thời trang',
                'accessories': 'Phụ kiện',
                'cosmetics': 'Mỹ phẩm'
            };
            sectionTitle.textContent = "Sản phẩm - " + (categoryNames[categoryFilter] || 'Tất cả');
            document.title = (categoryNames[categoryFilter] || 'Sản phẩm') + " - ShopVip";
        }
    }

    let productsToRender = products;
    if (categoryFilter) {
        productsToRender = products.filter(p => p.categoryId === categoryFilter);
    }

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Không tìm thấy sản phẩm nào trong danh mục này.</p>';
        return;
    }
    
    productGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-action">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
            </div>
        </div>
    `).join('');
};

// Bật/Tắt giao diện giỏ hàng
const toggleCart = () => {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
};

if (cartBtn) cartBtn.addEventListener('click', toggleCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

// Thêm sản phẩm vào giỏ hàng
window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Tự động mở giỏ hàng khi thêm sản phẩm
    if(!cartSidebar.classList.contains('active')) toggleCart();
};

// Xóa sản phẩm khỏi giỏ hàng
window.removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

// Cập nhật số lượng sản phẩm
window.updateQuantity = (productId, change) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
};

// Cập nhật giao diện giỏ hàng (UI)
const updateCartUI = () => {
    // Cập nhật thẻ số lượng trên icon giỏ hàng
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalItems);

    // Cập nhật danh sách hiển thị
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Giỏ hàng của bạn đang trống</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">
                                <i class="fa-solid fa-minus" style="font-size: 10px;"></i>
                            </button>
                            <input type="text" class="qty-input" value="${item.quantity}" readonly>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">
                                <i class="fa-solid fa-plus" style="font-size: 10px;"></i>
                            </button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Xóa</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Cập nhật tổng tiền
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = formatPrice(total);
};

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});
