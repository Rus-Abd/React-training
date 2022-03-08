// import { createAction, createReducer } from '@reduxjs/toolkit';
// const initialState = {
//   displayText: '',
// };
// export const updateDisplay = createAction('UPDATE_DISPLAY');
// export const reducer = createReducer(initialState, {
//   [updateDisplay]: (state: state, action) => {
//     state.displayText = action.payload;
//   },
// });

type actionType = {
  type: string;
  payload: string;
};

const initialState = {
  displayText: '0',
};

export const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      return { ...state, displayText: action.payload };
    default:
      return state;
  }
};

export {};
