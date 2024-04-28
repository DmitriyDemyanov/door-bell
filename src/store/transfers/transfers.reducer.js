
import { TRANSFERS_ACTION_TYPES } from "./transfers.types";


const INITIAL_STATE = {
  transfersItems: [
    {
      from: '0 Main Entrance',
      to: '595 Wohnung 5.10',
      elevatorName: 'a33',
      id: 'tr-1'
    },
    {
      from: '0 Side Entrance ',
      to: '505 street 8.21',
      elevatorName: 'b55',
      id: 'tr-2'
    },
    {
      from: '-1 Parking Entrance',
      to: '225 garage 18 / 2',
      elevatorName: 'c44',
      id: 'tr-3'
    },
    {
      from: '-2 Main Entrance',
      to: '148 metro 178',
      elevatorName: 'd66',
      id: 'tr-4'
    },
  ],
  showModal: false,
};

export const transfersReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case TRANSFERS_ACTION_TYPES.SET_SHOW_MODAL:
      return {
        ...state,
        showModal: payload
      }
    default:
      return state;
  }
};