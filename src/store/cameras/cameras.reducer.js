import { CAMERAS_ACTION_TYPES } from "./cameras.types";

const INITIAL_STATE = {
  allCameras: [
    {
      type: 'camera',
      title: 'Main Entrance camera',
      url: 'https://cdn.pixabay.com/photo/2023/03/06/20/35/fish-7834256_1280.jpg',
      id: 'c-0001',
      date: '1675679640000',
    },
    {
      type: 'camera',
      title: 'Main Exit camera',
      url: 'https://cdn.pixabay.com/photo/2017/12/31/06/16/boats-3051610_1280.jpg',
      id: 'c-0002',
      date: '1662740580000',
    },
    {
      type: 'camera',
      title: 'Back Entrance camera',
      url: '',
      id: 'c-0003',
      date: '1694533500000',
    },
    {
      type: 'camera',
      title: 'Window camera',
      url: 'https://cdn.pixabay.com/photo/2018/03/27/15/04/women-3266211_1280.jpg',
      id: 'c-type',
      date: '1668618300000',
    },
  ],
  detailsCamera: {},
};

export const camerasReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;

  switch (type) {

    case CAMERAS_ACTION_TYPES.SET_DETAILS_CAMERA:
      return {
        ...state,
        detailsCamera:payload
      }
    
    default:
      return state
  }
}