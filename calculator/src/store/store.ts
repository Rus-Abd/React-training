// import { store } from './store';
// import { createStore } from 'redux';
// import reducer from '../utils/reducer';
// const initState = {
//   displaytext: '',
// };

// type actionType = {
//   value: string;
//   type: string;
// };
// const ACTION_1 = 'asdasd';
// // const store = createStore(reducer);

// const update = {
//   type: 'UPDATE_DISPLAY',
// };

// function reducer(state = initState, action: actionType) {
//   if (action.type === 'UPDATE') {
//   }
// }
// export const store = createStore(reducer);
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// const middleWare = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   thunk: true,
// });
import { reducer } from './reducer';
import { createStore } from 'redux';
export const store = createStore(reducer);
