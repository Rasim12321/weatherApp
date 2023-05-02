// import { SET_COUNTRIES } from "../actionsTypes";

const initialState = {
  isLoading: false,
  dailyForecast: null,
};

export const dailyForecastReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_DAILY_FORECAST":
      return { ...state, dailyForecast: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
  }
  return state;
};
