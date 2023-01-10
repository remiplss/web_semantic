import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import './webapp/core.css'

function App() {

const [details, setDetails] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/members`);
      const jsonData = await response.json()
      setDetails(jsonData)
      }
      fetchData();
     
    }, [])
  return (
    <div className="tc bg-white ma0 pa4 min-vh-100" style={{overflow: "hidden"}}>
      <Search details={Object.values(details)}/>
    </div>
  );
}

export default App;
