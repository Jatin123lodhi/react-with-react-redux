import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const {amount,pending,error} = useSelector(state => state.account)
  const points = useSelector(state => state.bonus.points)
  

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {pending ? <p>Loading...</p>: error ? <p>{error}</p>: amount}</h3>
      <h3>Total Bonus : {points}</h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
