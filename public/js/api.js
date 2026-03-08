/**
 * ERISMS API Client
 */
const Api = {
    baseUrl: '/api',
    token: localStorage.getItem('erisms_token'),

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...options.headers
        };

        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, { ...options, headers });
            
            if (response.status === 401) {
                this.logout();
                return;
            }

            const data = await response.json();
            
            if (!response.ok) {
                throw data;
            }

            return data;
        } catch (error) {
            console.error(`API Error (${endpoint}):`, error);
            throw error;
        }
    },

    setToken(token) {
        this.token = token;
        localStorage.setItem('erisms_token', token);
    },

    logout() {
        this.token = null;
        localStorage.removeItem('erisms_token');
        localStorage.removeItem('erisms_user');
        window.location.href = '/login';
    },

    // Auth
    login: (credentials) => Api.request('/login', { method: 'POST', body: JSON.stringify(credentials) }),
    getMe: () => Api.request('/me'),

    // Products & Inventory
    getProducts: () => Api.request('/products'),
    getProduct: (id) => Api.request(`/products/${id}`),
    getCategories: () => Api.request('/categories'),
    getUnits: () => Api.request('/units'),
    getInventory: () => Api.request('/inventory'),
    
    // Transactions
    saveSale: (data) => Api.request('/sales', { method: 'POST', body: JSON.stringify(data) }),
    savePurchase: (data) => Api.request('/purchases', { method: 'POST', body: JSON.stringify(data) }),
    getSuppliers: () => Api.request('/suppliers'),
    getCustomers: () => Api.request('/customers'),
};

window.Api = Api;
