import Api from './api';
import POS from './pos';

window.Api = Api;
window.POS = POS;

const App = {
    user: JSON.parse(localStorage.getItem('user')),

    async init() {
        this.handleRouting();
        window.addEventListener('popstate', () => this.handleRouting());
        this.hideLoader();
    },

    hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    },

    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRouting();
    },

    handleRouting() {
        const path = window.location.pathname;
        const app = document.getElementById('app');

        if (path === '/login') {
            this.renderLogin(app);
        } else if (path.startsWith('/admin')) {
            if (!this.user || this.user.role_id !== 1) {
                this.navigate('/login');
                return;
            }
            this.renderAdminLayout(app);
        } else if (path === '/pos') {
            if (!this.user) {
                this.navigate('/login');
                return;
            }
            this.renderPOS(app);
        } else {
            this.renderLanding(app);
        }
    },

    renderLanding(container) {
        container.innerHTML = `
            <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <div class="glass-panel p-12 max-w-2xl animate-float">
                    <h1 class="text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        ERISMS
                    </h1>
                    <p class="text-xl text-gray-600 mb-10 leading-relaxed">
                        The ultimate Enterprise Resource & Inventory Stock Management System. 
                        Streamline your operations with our premium POS and advanced back-office tools.
                    </p>
                    <div class="flex gap-4 justify-center">
                        <button onclick="App.navigate('/login')" class="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-200">
                            Get Started
                        </button>
                        <button class="px-8 py-4 bg-white text-gray-700 rounded-2xl font-bold border border-gray-200 hover:bg-gray-50 transition-all transition-all transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderLogin(container) {
        container.innerHTML = `
            <div class="min-h-screen flex items-center justify-center p-6">
                <div class="glass-panel p-10 w-full max-w-md animate-fade-in">
                    <h2 class="text-3xl font-bold mb-8 text-gray-800">Login</h2>
                    <form id="login-form" class="space-y-6">
                        <div>
                            <label class="block text-sm font-semibold text-gray-600 mb-2">Username</label>
                            <input type="text" name="username" class="form-input" required placeholder="admin">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-600 mb-2">Password</label>
                            <input type="password" name="password" class="form-input" required placeholder="••••••••">
                        </div>
                        <button type="submit" class="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        `;

        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            try {
                const data = await Api.login(Object.fromEntries(formData));
                if (data && data.access_token) {
                    Api.setToken(data.access_token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    this.user = data.user;
                    this.navigate(this.user.role_id === 1 ? '/admin' : '/pos');
                }
            } catch (error) {
                alert('Login failed: ' + error.message);
            }
        });
    },

    renderAdminLayout(container) {
        const path = window.location.pathname;
        container.innerHTML = `
            <div class="flex h-screen bg-gray-50 overflow-hidden">
                <!-- Sidebar -->
                <aside class="w-72 bg-white border-r border-gray-100 flex flex-col">
                    <div class="p-8">
                        <h1 class="text-2xl font-black text-blue-600">ERISMS</h1>
                    </div>
                    
                    <nav class="flex-1 px-4 space-y-2">
                        <a href="/admin" onclick="event.preventDefault(); App.navigate('/admin')" class="sidebar-link ${path === '/admin' ? 'active' : ''}">
                            <span class="w-5 h-5">📊</span> Dashboard
                        </a>
                        <a href="/admin/products" onclick="event.preventDefault(); App.navigate('/admin/products')" class="sidebar-link ${path === '/admin/products' ? 'active' : ''}">
                            <span class="w-5 h-5">📦</span> Products
                        </a>
                        <a href="/admin/inventory" onclick="event.preventDefault(); App.navigate('/admin/inventory')" class="sidebar-link ${path === '/admin/inventory' ? 'active' : ''}">
                            <span class="w-5 h-5">🏬</span> Inventory
                        </a>
                        <a href="/admin/sales" onclick="event.preventDefault(); App.navigate('/admin/sales')" class="sidebar-link ${path === '/admin/sales' ? 'active' : ''}">
                            <span class="w-5 h-5">💰</span> Sales Reports
                        </a>
                        <a href="/pos" onclick="event.preventDefault(); App.navigate('/pos')" class="sidebar-link">
                            <span class="w-5 h-5">🛒</span> Go to POS
                        </a>
                    </nav>

                    <div class="p-4 border-t border-gray-50">
                        <button onclick="Api.logout()" class="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all">
                            <span>🚪</span> Logout
                        </button>
                    </div>
                </aside>

                <!-- Main Content -->
                <main id="admin-view" class="flex-1 overflow-y-auto p-10">
                    <!-- Dynamic View Injection -->
                </main>
            </div>
        `;

        const view = document.getElementById('admin-view');
        if (path === '/admin') this.renderAdminDashboard(view);
        else if (path === '/admin/products') this.renderAdminProducts(view);
        else view.innerHTML = '<h1>Page Under Construction</h1>';
    },

    async renderAdminDashboard(container) {
        container.innerHTML = `
            <div class="animate-fade-in">
                <header class="mb-10">
                    <h2 class="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h2>
                    <p class="text-gray-500">Welcome back, ${this.user.username}!</p>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div class="glass-panel p-6 border-l-4 border-blue-500">
                        <p class="text-sm font-semibold text-gray-500 mb-1">Total Sales</p>
                        <h3 class="text-3xl font-bold text-gray-800">₱0.00</h3>
                    </div>
                    <div class="glass-panel p-6 border-l-4 border-emerald-500">
                        <p class="text-sm font-semibold text-gray-500 mb-1">Orders</p>
                        <h3 class="text-3xl font-bold text-gray-800">0</h3>
                    </div>
                    <div class="glass-panel p-6 border-l-4 border-amber-500">
                        <p class="text-sm font-semibold text-gray-500 mb-1">Products</p>
                        <h3 class="text-3xl font-bold text-gray-800">0</h3>
                    </div>
                    <div class="glass-panel p-6 border-l-4 border-purple-500">
                        <p class="text-sm font-semibold text-gray-500 mb-1">Customers</p>
                        <h3 class="text-3xl font-bold text-gray-800">0</h3>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="glass-panel p-8">
                        <h3 class="text-xl font-bold mb-6">Recent Transactions</h3>
                        <div class="space-y-4">
                            <p class="text-gray-400 text-center py-10">No recent sales found.</p>
                        </div>
                    </div>
                    <div class="glass-panel p-8">
                        <h3 class="text-xl font-bold mb-6">Low Stock Alert</h3>
                        <div class="space-y-4">
                            <p class="text-gray-400 text-center py-10">All items are sufficiently stocked.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    async renderPOS(container) {
        container.innerHTML = `
            <div class="h-screen flex flex-col bg-gray-100 overflow-hidden">
                <!-- POS Header -->
                <header class="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <h1 class="text-2xl font-black text-blue-600">ERISMS POS</h1>
                        <div class="h-6 w-px bg-gray-200"></div>
                        <p class="text-gray-500 font-medium">Terminal #01</p>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="text-right">
                            <p class="font-bold text-gray-800">${this.user.username}</p>
                            <p class="text-xs text-gray-500">Cashier</p>
                        </div>
                        <button onclick="App.navigate('/admin')" class="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">Admin Panel</button>
                    </div>
                </header>

                <div class="flex-1 flex overflow-hidden">
                    <!-- Product Selection -->
                    <section class="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                        <div class="flex gap-4">
                            <input type="text" placeholder="Search products or scan barcode..." class="flex-1 p-4 rounded-xl border-0 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 transition-all">
                            <select class="p-4 rounded-xl border-0 shadow-sm ring-1 ring-gray-200 bg-white">
                                <option>All Categories</option>
                            </select>
                        </div>

                        <div id="pos-products" class="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pb-6">
                            <!-- Loading State -->
                            <div class="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                                <span class="animate-spin text-4xl mb-4">⌛</span>
                                <p>Checking inventory...</p>
                            </div>
                        </div>
                    </section>

                    <!-- Cart Sidebar -->
                    <aside class="w-[400px] bg-white border-l border-gray-200 flex flex-col p-6">
                        <h2 class="text-2xl font-bold mb-6 flex items-center justify-between">
                            Order Cart
                            <span class="text-sm font-normal text-gray-400 bg-gray-50 px-3 py-1 rounded-full" id="cart-item-count">0 items</span>
                        </h2>

                        <div id="pos-cart-items" class="flex-1 overflow-y-auto mb-6 pr-2">
                            <div class="h-full flex flex-col items-center justify-center text-gray-400">
                                <span class="text-5xl mb-4">🛒</span>
                                <p>Your cart is empty</p>
                            </div>
                        </div>

                        <div class="space-y-4 pt-6 border-t border-gray-100">
                            <div class="flex justify-between text-gray-500">
                                <span>Subtotal</span>
                                <span id="pos-subtotal">₱0.00</span>
                            </div>
                            <div class="flex justify-between text-gray-500">
                                <span>Tax (0%)</span>
                                <span>₱0.00</span>
                            </div>
                            <div class="flex justify-between text-2xl font-black text-gray-800">
                                <span>Total</span>
                                <span id="pos-total">₱0.00</span>
                            </div>
                            <button onclick="POS.checkout()" class="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 transform">
                                Complete Transaction
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        `;

        this.loadPOSProducts();
    },

    async loadPOSProducts() {
        const container = document.getElementById('pos-products');
        try {
            const products = await Api.getProducts();
            container.innerHTML = products.map(p => `
                <div onclick="POS.addToCart(${JSON.stringify(p).replace(/"/g, '&quot;')})" class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
                    <div class="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                        ${p.category_id === 1 ? '🥤' : p.category_id === 2 ? '🍿' : '📦'}
                    </div>
                    <h3 class="font-bold text-gray-800 truncate">${p.product_name}</h3>
                    <div class="flex items-center justify-between mt-2">
                        <span class="text-blue-600 font-black">₱${p.price}</span>
                        <span class="text-xs text-gray-400">${p.inventory?.quantity || 0} left</span>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            container.innerHTML = '<p class="col-span-full text-center text-red-500">Failed to load products.</p>';
        }
    }
};

window.App = App;

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
