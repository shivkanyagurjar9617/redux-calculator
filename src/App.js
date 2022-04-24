import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { additionCreator, closeCreator, divisionCreator, multiplicationtionCreator, numberCreator, resultCreator, subtractionCreator } from './actionCreator';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  // state 
  let state = useSelector((state)=>{
    return state
  })
  let dispatch = useDispatch()
  // function defination

  let addition = (e)=>{
    //console.log(e)
    dispatch(additionCreator())
  }
  let subtraction = (e)=>{
    console.log(e)
    dispatch(subtractionCreator())
  }
  let multiplication = (e)=>{
    console.log(e)
    dispatch(multiplicationtionCreator())
  }
  let division = (e)=>{
    console.log(e)
    dispatch(divisionCreator())
  }
  let close= (e)=>{
    console.log(e)
    dispatch(closeCreator())
  }
  let result= (e)=>{
    console.log(e)
    dispatch(resultCreator())
  }
  //return statement

  return (
          <>
            <div className="calculator">

            <input type="text" className="calculator-screen" value={state.result} disabled />

            <div className="calculator-keys">
              
              <button onClick={(e)=>{addition(e.target.value)}} type="button" className="operator" value="+">+</button>
              <button onClick={(e)=>{subtraction(e)}} type="button" className="operator" value="-">-</button>
              <button onClick={(e)=>{multiplication(e)}} type="button" className="operator" value="*">&times;</button>
              <button onClick={(e)=>{division(e)}} type="button" className="operator" value="/">&divide;</button>

              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="7">7</button>
              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="8">8</button>
              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="9">9</button>


              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="4">4</button>
              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="5">5</button>
              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="6">6</button>


              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="1">1</button>
              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="2">2</button>
              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="3">3</button>


              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" value="0">0</button>
              <button onClick={(e)=>{dispatch(numberCreator(e.target.value))}} type="button" className="decimal" value=".">.</button>
              <button onClick={(e)=>{close(e)}}type="button" className="all-clear" value="all-clear">AC</button>

              <button onClick={(e)=>{result(e)}}type="button" className="equal-sign" value="=">=</button>

            </div>
            </div>
          
          </>
  );
}

export default App;
