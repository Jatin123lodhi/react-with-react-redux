import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount,getUser} from '../actions/action';  
function Account() {
  const {amount} = useSelector(state => state.account)
  const [value, setValue] = useState(0);
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={()=>dispatch(increment())}>Increment +</button>
        <button onClick={()=>dispatch(decrement())}>Decrement -</button>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={() => {dispatch(incrementByAmount(value));setValue(0)}}>
          Increment By {value} +
        </button>
        <button onClick={() => dispatch(getUser(1))}>
          Initialize Account
        </button>
        
      </div>
    </div>
  );
}

export default Account;
