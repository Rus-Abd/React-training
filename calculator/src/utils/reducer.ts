// type inputState = {
//   input: string;
// };
// type inputAction = {
//   type: string;
//   payload: String;
// };

// export default function reducer(state: inputState, action: inputAction) {
//   switch (action.type) {
//     case 'update':
//       return { input: state.input + action.payload };
//     case 'clear':
//       return { input: state.input };
//     default:
//       return state;
//   }
// }

interface displayState {
  displayText: string;
}
const initState = {
  displayText: '',
};

type actionType = {
  payload: string;
  type: 'UPDATE_DISPLAY';
};
// const ACTION_1 = 'asdasd';

// const update = {
//   type: 'UPDATE_DISPLAY',
// };

function reducer(state: displayState = initState, action: actionType) {
  if (action.type === 'UPDATE_DISPLAY') {
    return { ...state, displaytext: action.payload };
  } else {
    return state;
  }
}
export default reducer;
