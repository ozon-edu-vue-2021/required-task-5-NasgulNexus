export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    product.quantity++;
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map(item => {
        if (item.id === product.id) {
          isProductExists = true;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  SET_SELECT: (state, product) => {
    product.select = true;
    if (state.select.length) {
      let isProductExists = false;
      state.select.map(item => {
        if (item.id === product.id) {
          isProductExists = true;
        }
      });
      if (!isProductExists) {
        state.select.push(product);
      }
    } else {
      state.select.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart[index].quantity = 0;
    state.cart.splice(index, 1);
  },
  REMOVE_FROM_SELECT: (state, index) => {
    state.select[index].select = false;
    state.select.splice(index, 1);
  },
  DICREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  REMOVE_SELECT_CATALOG: (state, product) => {
    product.select = false;
    state.select.map((item, index) => {
      if (item.id === product.id) {
        state.select.splice(index, 1);
      }
    });
  },
  REMOVE_TO_CART_CATALOG: (state, product) => {
    product.quantity = 0;
    state.cart.map((item, index) => {
      if (item.id === product.id) {
        state.cart.splice(index, 1);
      }
    });
  },
  INCREMENT_QANTITY: (state, product) => {
    if (state.cart.length) {
      state.cart.map(item => {
        if (item.id === product.id) {
          product.quantity++;
        }
      });
    }
  },
  DICREMENT_QANTITY: (state, product) => {
    if (state.cart.length) {
      state.cart.map(item => {
        if (item.id === product.id && item.quantity > 1) {
          product.quantity--;
        }
      });
    }
  }
};
