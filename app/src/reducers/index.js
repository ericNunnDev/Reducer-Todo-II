import React, { useReducer } from 'react';

export const initialState = {
    id: 1,
    item: 'Get my life together.',
    completed: false
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                id: Date.now(),
                item: action.payload,
                completed: false
            }
            default:
                return state;
    }
}

reducer(initialState, { type: 'ADD_TODO'});