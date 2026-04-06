// Dữ liệu sản phẩm mẫu (Product Data) mở rộng với 6 danh mục
const products = [
    // Điện tử
    { id: 1, categoryId: 'electronics', name: "Tai nghe chống ồn Sony WH-1000XM5", brand: "Sony", price: 8990000, image: "https://loremflickr.com/500/500/headphones?lock=1" },
    { id: 2, categoryId: 'electronics', name: "Đồng hồ thông minh Apple Watch Series 8", brand: "Apple", price: 9990000, image: "https://loremflickr.com/500/500/smartwatch?lock=2" },
    { id: 5, categoryId: 'electronics', name: "Điện thoại Samsung Galaxy S23 Ultra", brand: "Samsung", price: 25990000, image: "https://loremflickr.com/500/500/smartphone?lock=3" },
    { id: 7, categoryId: 'electronics', name: "Loa Bluetooth JBL Flip 6 Không Dây", brand: "JBL", price: 2690000, image: "https://loremflickr.com/500/500/speaker?lock=4" },
    { id: 11, categoryId: 'electronics', name: "Bàn phím cơ Keychron K8 Pro", brand: "Keychron", price: 2150000, image: "https://loremflickr.com/500/500/keyboard?lock=5" },

    // Thời trang
    { id: 3, categoryId: 'fashion', name: "Giày Sneaker Nike Air Max 270", brand: "Nike", price: 3500000, image: "https://loremflickr.com/500/500/sneakers?lock=6" },
    { id: 8, categoryId: 'fashion', name: "Áo Thun Cổ Tròn Basic Cotton", brand: "Uniqlo", price: 250000, image: "https://loremflickr.com/500/500/tshirt?lock=7" },
    { id: 12, categoryId: 'fashion', name: "Quần Jean Nam Ống Đứng cao cấp", brand: "Levis", price: 1200000, image: "https://loremflickr.com/500/500/jeans?lock=8" },
    { id: 13, categoryId: 'fashion', name: "Áo Khoác Da Nữ Mẫu Mới", brand: "Zara", price: 2500000, image: "https://loremflickr.com/500/500/jacket?lock=9" },
    { id: 14, categoryId: 'fashion', name: "Giày Cao Gót Mũi Nhọn Trắng", brand: "Charles & Keith", price: 1800000, image: "https://loremflickr.com/500/500/heels?lock=10" },

    // Phụ kiện
    { id: 4, categoryId: 'accessories', name: "Balo Thời Trang Nam Nữ Chống Nước", brand: "Local Brand", price: 450000, image: "https://loremflickr.com/500/500/backpack?lock=11" },
    { id: 6, categoryId: 'accessories', name: "Kính mát Unisex Ray-Ban Aviator", brand: "Ray-Ban", price: 2100000, image: "https://loremflickr.com/500/500/sunglasses?lock=12" },
    { id: 15, categoryId: 'accessories', name: "Nhẫn Bạc Đính Đá Elegant", brand: "PNJ", price: 850000, image: "https://loremflickr.com/500/500/ring?lock=13" },
    { id: 16, categoryId: 'accessories', name: "Ví Da Nam Cao Cấp", brand: "Leonardo", price: 650000, image: "https://loremflickr.com/500/500/wallet?lock=14" },
    { id: 17, categoryId: 'accessories', name: "Dây Chuyền Mặt Trăng Khuyết", brand: "Swarovski", price: 3200000, image: "https://loremflickr.com/500/500/necklace?lock=15" },

    // Mỹ phẩm
    { id: 9, categoryId: 'cosmetics', name: "Nước hoa Chanel No.5 Eau De Parfum", brand: "Chanel", price: 3450000, image: "https://loremflickr.com/500/500/perfume?lock=16" },
    { id: 10, categoryId: 'cosmetics', name: "Kem dưỡng da ẩm La Mer", brand: "La Mer", price: 4500000, image: "https://loremflickr.com/500/500/skincare?lock=17" },
    { id: 18, categoryId: 'cosmetics', name: "Son Môi MAC Ruby Woo", brand: "MAC", price: 650000, image: "https://loremflickr.com/500/500/lipstick?lock=18" },
    { id: 19, categoryId: 'cosmetics', name: "Kem Chống Nắng Anessa", brand: "Anessa", price: 490000, image: "https://loremflickr.com/500/500/sunscreen?lock=19" },
    { id: 20, categoryId: 'cosmetics', name: "Sữa Rửa Mặt Cetaphil", brand: "Cetaphil", price: 350000, image: "https://loremflickr.com/500/500/lotion?lock=20" },

    // Sách
    { id: 21, categoryId: 'books', name: "Nhà Giả Kim - Paulo Coelho", brand: "NXB Hội Nhà Văn", price: 79000, image: "https://loremflickr.com/500/500/book?lock=21" },
    { id: 22, categoryId: 'books', name: "Đắc Nhân Tâm", brand: "First News", price: 86000, image: "https://loremflickr.com/500/500/novel?lock=22" },
    { id: 23, categoryId: 'books', name: "Sapiens - Lược sử loài người", brand: "Yuval Noah Harari", price: 250000, image: "https://loremflickr.com/500/500/library?lock=23" },
    { id: 24, categoryId: 'books', name: "Tâm Lý Học Tội Phạm", brand: "Nhiều Tác Giả", price: 150000, image: "https://loremflickr.com/500/500/reading?lock=24" },

    // Thể thao
    { id: 25, categoryId: 'sports', name: "Vợt Cầu Lông Yonex Astrox", brand: "Yonex", price: 1550000, image: "https://loremflickr.com/500/500/badminton?lock=25" },
    { id: 26, categoryId: 'sports', name: "Bóng Đá Adidas World Cup", brand: "Adidas", price: 890000, image: "https://loremflickr.com/500/500/football?lock=26" },
    { id: 27, categoryId: 'sports', name: "Thảm Tập Yoga Định Tuyến", brand: "Liforme", price: 3500000, image: "https://loremflickr.com/500/500/yoga?lock=27" },
    { id: 28, categoryId: 'sports', name: "Tạ Đơn Điều Chỉnh Bowflex", brand: "Bowflex", price: 4200000, image: "https://loremflickr.com/500/500/dumbbell?lock=28" }
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

// Thanh tìm kiếm Elements
const searchInputs = document.querySelectorAll('.search-bar input');
const searchBtns = document.querySelectorAll('.search-bar button');

// Hàm định dạng tiền tệ Việt Nam
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

// Hiển thị danh sách sản phẩm
const renderProducts = () => {
    if (!productGrid) return;
    
    // Check url params for category filtering or searching
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('type');
    const searchQuery = urlParams.get('q');
    
    // Change section title dynamically based on category or search
    const sectionTitle = document.querySelector('.section-title');
    if (searchQuery) {
        if (sectionTitle) sectionTitle.textContent = 'Kết quả tìm kiếm cho: "' + searchQuery + '"';
        document.title = 'Tìm kiếm: ' + searchQuery + ' - ShopVip';
    } else if (categoryFilter) {
        if (sectionTitle) {
            const categoryNames = {
                'electronics': 'Điện tử',
                'fashion': 'Thời trang',
                'accessories': 'Phụ kiện',
                'cosmetics': 'Mỹ phẩm',
                'books': 'Sách',
                'sports': 'Thể thao'
            };
            sectionTitle.textContent = "Danh mục - " + (categoryNames[categoryFilter] || 'Tất cả');
            document.title = (categoryNames[categoryFilter] || 'Sản phẩm') + " - ShopVip";
        }
    }

    let productsToRender = products;
    
    // Áp dụng bộ lọc
    if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        productsToRender = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query)
        );
    } else if (categoryFilter) {
        productsToRender = products.filter(p => p.categoryId === categoryFilter);
    }
    
    // Hiển thị
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #6b7280;">Không tìm thấy sản phẩm nào phù hợp.</p>';
        return;
    }
    
    productGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/500x500/f3f4f6/6b7280?text=ShopVip';">
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

// Xử lý Tìm kiếm (Search)
const executeSearch = (query) => {
    if (query.trim() !== '') {
        window.location.href = `category.html?q=${encodeURIComponent(query.trim())}`;
    }
};

searchInputs.forEach((input, index) => {
    // Tìm kiếm bằng phím Enter
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            executeSearch(this.value);
        }
    });
    
    // Tìm kiếm bằng Click chuột vào Icon Kính lúp
    if(searchBtns[index]) {
        searchBtns[index].addEventListener('click', () => {
            executeSearch(input.value);
        });
    }
    
    // Tự động điền lại từ khóa cũ vào ô tìm kiếm theo URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    if(searchQuery) {
        input.value = searchQuery;
    }
});

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
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='https://placehold.co/80x80/f3f4f6/6b7280?text=ShopVip';">
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

// Xử lý tạo Modal Overlay thanh toán bằng QR Code
const initPaymentModal = () => {
    let paymentModal = document.getElementById('paymentModal');
    if(!paymentModal) {
        paymentModal = document.createElement('div');
        paymentModal.id = 'paymentModal';
        paymentModal.className = 'cart-overlay'; // Tái sử dụng CSS từ cart-overlay
        paymentModal.innerHTML = `
            <div style="background: white; width: 90%; max-width: 420px; margin: 10vh auto; padding: 2rem; border-radius: 1rem; text-align: center; position: relative; z-index: 1005; display: flex; flex-direction: column; align-items: center; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);">
                <button onclick="const m = document.getElementById('paymentModal'); m.classList.remove('active'); m.style.visibility = 'hidden'; m.style.opacity = '0';" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #6b7280;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Thanh toán đơn hàng</h3>
                <p style="margin-bottom: 1.5rem; color: #6b7280; font-size: 0.9rem;">Sử dụng App Ngân hàng hoặc Ví điện tử (MoMo, ZaloPay,...) để quét mã QR bên dưới.</p>
                <div id="qrContainer" style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; width: 100%; display: flex; justify-content: center; min-height: 250px;">
                    <!-- Hình ảnh QR Code sẽ được nhúng vào đây -->
                </div>
                <div style="font-size: 1rem; color: #4b5563;">Số tiền cần thanh toán:</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #2563eb; margin-top: 0.5rem;" id="qrTotalAmount">0 ₫</div>
            </div>
        `;
        document.body.appendChild(paymentModal);
    }

    // Lựa chọn nút thanh toán thông qua class dùng chung ở cart-footer
    const checkoutBtn = document.querySelector('.cart-footer button');
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) {
                alert('Giỏ hàng của bạn đang trống!');
                return;
            }
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // API tạo QR Code của VietQR
            // Cấu trúc: https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<DESCRIPTION>&accountName=<ACCOUNT_NAME>
            // Ở đây tôi dùng số Ngân hàng VCB demo
            const qrUrl = `https://img.vietqr.io/image/vcb-0123456789-compact2.png?amount=${total}&addInfo=${encodeURIComponent("SHOPVIP Thanh Toan Don Hang")}&accountName=${encodeURIComponent("SHOP VIP STORE")}`;
            
            document.getElementById('qrContainer').innerHTML = `<img src="${qrUrl}" alt="Mã QR Thanh Toán" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">`;
            document.getElementById('qrTotalAmount').textContent = formatPrice(total);
            
            // Đóng giỏ hàng & Mở Modal thanh toán
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            
            const modal = document.getElementById('paymentModal');
            modal.style.visibility = 'visible';
            modal.style.opacity = '1';
            modal.style.zIndex = '1002'; // Cao hơn overlay giỏ hàng
            modal.classList.add('active'); 
        });
    }
};

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', () => {
    initPaymentModal();
    renderProducts();
    updateCartUI();
});
