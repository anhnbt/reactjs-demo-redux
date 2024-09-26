export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Action creator
export const increment = (data) => {
  return { type: INCREMENT, payload: data };
};

export const decrement = () => {
  return { type: DECREMENT };
};
