import './App.scss';
import Banner from './components/Banner';
import Cards from './components/Card/Cards';

function App() {
  return (
    <div className="App">
       <div className='c-AppContainer'>
        <Banner />
        <Cards/>
       </div>
    </div>
  );
}

export default App;
