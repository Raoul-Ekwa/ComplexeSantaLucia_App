const initialState = {
  settings: {
    notificationsEnabled: false, // Assurez-vous que 'notificationsEnabled' est ici
  },
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NOTIFICATIONS':
      return {
        ...state,
        settings: {
          ...state.settings,
          notificationsEnabled: !state.settings.notificationsEnabled,
        },
      };
    default:
      return state;
  }
};

export default settingsReducer;

  