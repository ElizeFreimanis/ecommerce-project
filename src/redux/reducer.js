const initialState = { products: [], cartProducts: [] };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return { ...state, products: action.payload };
        case "ADD_TO_CART":
            return { ...state, cartProducts: [...state.cartProducts, { ...action.payload }] };
        case "REMOVE_FROM_CART":
            return { ...state, cartProducts: state.cartProducts.filter((product) => product !== action.payload) };
        case "REMOVE_ALL_FROM_CART":
            return { ...state, cartProducts: state.cartProducts.filter((product) => product.id !== action.payload) };
        default:
            return state;
    }
}
