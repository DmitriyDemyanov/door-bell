

const INITIAL_STATE = {
  allCameras: [
    {
      name: 'camera',
      title: 'Main Entrance camera',
      url: 'https://cdn.pixabay.com/photo/2023/03/06/20/35/fish-7834256_1280.jpg',
      id: 'c-main-entrance',
      date: '02.06.2023 | 12:34',
    },
    {
      name: 'camera',
      title: 'Main Exit camera',
      url: 'https://cdn.pixabay.com/photo/2017/12/31/06/16/boats-3051610_1280.jpg',
      id: 'c-exit-entrance',
      date: '09.09.2022 | 19:23',
    },
    {
      name: 'camera',
      title: 'Back Entrance camera',
      url: '',
      id: 'c-back-entrance',
      date: '09.12.2023 | 18:45',
    },
    {
      name: 'camera',
      title: 'Window camera',
      url: 'https://cdn.pixabay.com/photo/2018/03/27/15/04/women-3266211_1280.jpg',
      id: 'c-window',
      date: '11.16.2022 | 19:05',
    },
  ]
};

export const camerasReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;

  // switch (type) {
  //   case   :
  //   return {
  //     ...state
  //   }
  // }
  // default:
  //   return state
}