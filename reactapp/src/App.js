import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch("http://localhost:4000/");
        const jsonResult = await result.json();
        setData(jsonResult);
      }
      catch (err) {
        setData({ error: err.message });
      }
    })();
  }, []);

  return (
    <div className="App">
      {data ?
        data.error ?
          <div className='Text'>{data.error}</div> :
          data.map(el => (
            <div key={el.id} className='Text'>{el.title}</div>
          ))
        :
        null
      }
    </div>
  );
}

export default App;
