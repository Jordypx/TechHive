export const initialState = {
    basket: [],
    baskets: [],
    user: null
};

// slector

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };


            case "ADD_BASKET":
                return {
                    ...state,
                    baskets: [...state.baskets, action.item],
                };


            case "EMPTY_BASKET":
                return {
                    ...state,
                    basket: []
                }

            case "REMOVE_FROM_BASKET":
               const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
               );
               let newBasket = [...state.basket];

               if ( index >= 0) {
                newBasket.splice(index, 1);
               } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in the basket! `
                )
               }

               return {
                ...state,
                basket: newBasket,
               }

      case "SET_USER":
        return {
            ...state,
            user: action.user
        };

        case "SET_SELECTED_BASKET":
            return {
              ...state,
              baskets: [action.item],
            };

            default:
                return state
    }
};

export default reducer;