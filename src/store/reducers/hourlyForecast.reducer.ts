// import { SET_COUNTRIES } from "../actionsTypes";

const initialState = {
  isLoading: false,
  hourlyForecast: null,
};

export const hourlyForecastReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_HOURLY_FORECAST":
      return { ...state, hourlyForecast: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
  }
  return state;
};
