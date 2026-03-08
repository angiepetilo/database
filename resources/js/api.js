const Api = {
    baseUrl: '/api',
    token: localStorage.getItem('token'),

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers,
        };

        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, { ...options, headers });
            const data = await response.json();

            if (response.status === 401) {
                this.logout();
                return null;
            }

            if (!response.ok) {
                throw new Error(data.message || 'API Error');
            }

            return data;
        } catch (error) {
            console.error('API Request Failed:', error);
            throw error;
        }
    },

    setToken(token) {
        this.token = token;
        if (token) localStorage.setItem('token', token);
        else localStorage.removeItem('token');
    },

    logout() {
        this.setToken(null);
        localStorage.removeItem('user');
        window.location.href = '/login';
    },

    // Auth
    login: (credentials) => Api.request('/login', { method: 'POST', body: JSON.stringify(credentials) }),
    getProfile: () => Api.request('/me'),

    // Products
    getProducts: () => Api.request('/products'),
    getProduct: (id) => Api.request(`/products/${id}`),
    createProduct: (data) => Api.request('/products', { method: 'POST', body: JSON.stringify(data) }),
    updateProduct: (id, data) => Api.request(`/products/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    deleteProduct: (id) => Api.request(`/products/${id}`, { method: 'DELETE' }),

    // Inventory
    getInventory: () => Api.request('/inventory'),
    updateInventory: (data) => Api.request('/inventory', { method: 'POST', body: JSON.stringify(data) }),

    // Sales
    getSales: () => Api.request('/sales'),
    createSale: (data) => Api.request('/sales', { method: 'POST', body: JSON.stringify(data) }),

    // Categories & Units
    getCategories: () => Api.request('/categories'),
    getUnits: () => Api.request('/units'),
};

export default Api;
