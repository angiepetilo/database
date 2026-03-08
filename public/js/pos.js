/**
 * ERISMS POS Logic
 */
const POS = {
    cart: [],

    addToCart(product, quantity = 1) {
        const existing = this.cart.find(item => item.product_id === product.product_id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.cart.push({ ...product, quantity });
        }
        this.updateUI();
    },

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.product_id !== productId);
        this.updateUI();
    },

    calculateTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    updateUI() {
        // This will be called to refresh the POS display
        console.log('Cart updated:', this.cart);
    }
};

window.POS = POS;
