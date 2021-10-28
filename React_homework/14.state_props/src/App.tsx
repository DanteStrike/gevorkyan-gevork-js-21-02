import React, {useState} from 'react';
import './App.css';


const mapStateToProps = {
  nums: []
}

const mapDispToProps = {
  add: (nums: number[]) => {
    const arr = nums.slice();
    arr.push(nums.length);
    return arr;
  },
  del: (nums: number[]) => {
    const arr = nums.slice();
    arr.pop();
    return arr;
  }
}


function App() {
  const [nums, setNum] = useState<number[]>([]);

  return (
    <div className="App">
      <h1>Список</h1>
      {nums.map((num, index) =>
        <li key={index}>{num}</li>
      )}
      <button onClick={() => setNum(prevNums => {
          const arr = prevNums.slice();
          arr.push(prevNums.length);
          return arr;
        })
      }>ADD</button>
      <button onClick={() => setNum(prevNums => {
        const arr = prevNums.slice();
        arr.pop();
        return arr;
      })
      }>DEL</button>
    </div>
  );
}



export default App;
