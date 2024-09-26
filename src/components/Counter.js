import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterAction";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Counter: {counter} </p>
      <button type="button" onClick={() => dispatch(increment(1))}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch(increment(10))}>
        Increment +10
      </button>
    </>
  );
};

export default Counter;
