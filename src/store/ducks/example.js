/**
 * Default Types
 */
export const Types = {
    NEW: '@example/NEW_EXAMPLE',
};

/**
 * Default values
 */
const INITIAL_STATE = {
    data: []
};

/**
 * Creating Reducers
 */
export default function auth(state = INITIAL_STATE, action) {
    console.log("Action: ", action);
    switch (action.type) {
        case Types.NEW:
            return { ...state, data: [...state.data, action.title] };

        default:
            return state;
    }
}

/**
 * Creating actions
 */
export const Creators = {
    addExample: (title) => ({
        type: Types.NEW,
        title
    }),
};