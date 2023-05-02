// import { SET_COUNTRIES } from "../actionsTypes";

const initialState = {
  isLoading: false,
  cityWeather: null,
};

export const cityWeatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_CITY_WEATHER":
      return { ...state, cityWeather: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
  }
  return state;
};
