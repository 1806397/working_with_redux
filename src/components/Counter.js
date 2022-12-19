import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store";
import classes from "./Counter.module.css";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increseHandler = () => {
    dispatch(counterAction.increase(5)); //{type:SOME_UNIQUE_IDENTIFIER,payload:10}
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
