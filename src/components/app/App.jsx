/* eslint-disable max-len */
import React, { useReducer } from 'react';
import { reducer, initialState } from '../../state/reducer';

const useRecord = () => {
  const [{ before, current, after }, dispatch] = useReducer(reducer, initialState);
  
  const undo = () => dispatch({ type:'UNDO' });
  
  const redo = () => {
    dispatch({ type: 'REDO' });
  };

  const record = (val) => {
    dispatch({ type:'RECORD', val });
  };
 
  console.log(before, current, after);
  return {
    before,
    after,
    current,
    undo,
    record,
    redo,
  };
};
function App() {
  const { before, after, current, undo, redo, record } = useRecord();

  return (
    <>
      <button onClick={undo} disabled={ before.length === 0 && true }>undo</button>
      <button onClick={redo} disabled={after.length === 0}>redo</button>
      <input
        type="color"
        role="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        data-testid="display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
