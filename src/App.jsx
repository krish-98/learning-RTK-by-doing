import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./features/counter/counter-slice"
import "./App.css"

function App() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter App: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App
