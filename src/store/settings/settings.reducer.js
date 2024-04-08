


const INITIAL_STATE = {
  mainSettings: [
    {
      title: 'General settings',
      link: 'general-settings'
    },
    {
      title: 'Audio preferences',
      link: 'audio-preferences'
    },
    {
      title: 'video-preferences',
      link: 'video-preferences'
    },
    {
      title: 'User manual',
      link: 'user-manual'
    },
    {
      title: 'languages',
      link: 'languages'
    },
  ],
  generalSettings: [
    {
      title: 'Call history',
      link: 'call-history'
    },
    {
      title: 'Sleep mode behavior',
      link: 'Sleep-mode-behavior'
    },
    {
      title: 'Walk speed',
      link: 'walk-speed'
    },
    {
      title: 'System',
      link: 'system'
    },
  ],
  audioPreferences: [
    {
      title: 'General',
      link: 'audio-general'
    },
    {
      title: 'Doorbell',
      link: 'doorbell'
    },
    {
      title: 'Visitor call',
      link: 'visitor-call'
    },
  ]
};


export const settingsReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;

  switch (type) {
    case '':
      return {
      }
    default: {
      return state;
    }
  }
};