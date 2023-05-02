export const unitReducer = (state = "metric", action: any) => {
  switch (action.type) {
    case "SET_UNIT":
      return action.payload;
  }
  return state;
};
