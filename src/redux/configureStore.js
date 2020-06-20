import {createStore} from 'redux';
import {Reducer, initialState} from "./reducer";

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // Reducer pure function
        initialState // initial state
    );
    return store;
}
