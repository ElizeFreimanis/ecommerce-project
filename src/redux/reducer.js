const initialState = { products: [] };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
}
