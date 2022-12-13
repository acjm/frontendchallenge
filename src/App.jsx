import Banner from './components/Banner/Banner';
import Cards from './components/Card/Cards';
import './App.scss';

function App() {
  return (
    <div className="App">
       <div className='c-AppContainer'>
        <h1 data-testid="title">Front-End Test</h1>
        <Banner/>
        <Cards/>
       </div>
    </div>
  );
}

export default App;
