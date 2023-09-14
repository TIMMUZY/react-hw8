import './style.css';
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const spisok = JSON.parse(spisok.getItem("box"));
    if (spisok) {
      setList(spisok);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("box", JSON.stringify(list));
  }, [list]);
  
  return (
    <div className="App">
      <input type="text" onChange={(e) => {
        setText(e.target.value)
      }} />
      <button onClick={() => {
        if (!list.includes(text)) {
          setList([text, ...list])
        }
      }}>change</button>
      <ul>
        {
          list.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
};


export default App;
