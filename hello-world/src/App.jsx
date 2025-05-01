import logo from './logo.svg';
import './Chef.css';
import HeaderChef from './components/HeaderChef';
import MainChef from './components/MainChef';
import Entry from './components/Entry';
import data from './data'
import State from './components/stateComponent'
import MemeHeader from './components/MemeHeader'
import MemeBody from './components/MemeBody'
import React from 'react';
function App() {
  // const jsxElement = data.map(item=>{
  //   return <Entry
  //   key= {item.id}
  //   {...item}
  //   />
  // })
  // console.log(jsxElement);
  
  // return (
  //   <div className="App">
  //     <MemeHeader/>
  //     <MemeBody/>
  //     {/* {jsxElement} */}
  //   </div>
  // );
  const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    /**
     * Challenge part 1:
     * Fetch the data from this url: "https://swapi.dev/api/people/1"
     * and save it in the starWarsData state. Make sure you don't
     * get stuck in an infinite rendering loop!
     */
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default App;
