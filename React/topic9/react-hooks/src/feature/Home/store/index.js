export const initialState = {
    basketCount: 0,
    aboutData: [],
    team: null,
    user: null,
    isShow: false,
  };
  
  export const reducer = (state, action) => {
    console.log("reducerin ici", action);
    switch (action.type) {
      case "BASKET_COUNT":
        return { ...state, basketCount: action.payload };
      case "PANEL_SHOW":
        return { ...state, isShow: !state.isShow };
  
      case "ABOUT_DATA":
        return { ...state, aboutData: action.payload };
  
      default:
        return state;
    }
  };