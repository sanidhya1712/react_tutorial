import logo from './logo.svg';
import './Chef.css';
import HeaderChef from './components/HeaderChef';
import MainChef from './components/MainChef';
import Entry from './components/Entry';
import data from './data'
function App() {
  const jsxElement = data.map(item=>{
    return <Entry
    key= {item.id}
    {...item}
    />
  })
  console.log(jsxElement);
  
  return (
    <div className="App">
      <HeaderChef/>
      <MainChef/>
      {/* {jsxElement} */}
    </div>
  );
}

export default App;
