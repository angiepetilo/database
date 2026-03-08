import Api from './api';

const POS = {
    cart: [],

    addToCart(product) {
        const existing = this.cart.find(item => item.product_id === product.product_id);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.renderCart();
    },

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.product_id !== productId);
        this.renderCart();
    },

    updateQuantity(productId, delta) {
        const item = this.cart.find(i => i.product_id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) this.removeFromCart(productId);
            else this.renderCart();
        }
    },

    renderCart() {
        const container = document.getElementById('pos-cart-items');
        if (!container) return;

        container.innerHTML = this.cart.map(item => `
            <div class="flex items-center justify-between p-3 mb-2 bg-white/50 rounded-xl border border-white/50">
                <div>
                    <h4 class="font-semibold text-gray-800">${item.product_name}</h4>
                    <p class="text-sm text-gray-500">₱${item.price} x ${item.quantity}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="POS.updateQuantity(${item.product_id}, -1)" class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">-</button>
                    <span class="w-8 text-center font-bold">${item.quantity}</span>
                    <button onclick="POS.updateQuantity(${item.product_id}, 1)" class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">+</button>
                </div>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalEl = document.getElementById('pos-total');
        if (totalEl) totalEl.innerText = `₱${total.toFixed(2)}`;
    },

    async checkout() {
        if (this.cart.length === 0) return alert('Cart is empty');

        try {
            const result = await Api.createSale({
                customer_id: 1, // Default customer
                payment_method: 'cash',
                items: this.cart.map(item => ({
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: item.price
                }))
            });

            if (result) {
                alert('Sale completed successfully!');
                this.cart = [];
                this.renderCart();
            }
        } catch (error) {
            alert('Checkout failed: ' + error.message);
        }
    }
};

export default POS;
