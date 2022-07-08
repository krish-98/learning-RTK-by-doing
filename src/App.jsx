import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  increment,
  decrement,
  reset,
  amountAdded,
} from "./features/counter/counter-slice"
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice"

function App() {
  const [numDogs, setNumDogs] = useState(10)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs)

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>Counter App: {counter}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(amountAdded(5))}>add</button>
      </div>

      <div>
        <p>Dogs to fetch:</p>
        <select value={numDogs} onChange={(e) => setNumDogs(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>

      <div>
        <p>Number of dogs fetched:{data.length} </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
