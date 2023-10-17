import logo from './logo.svg';
import './App.css';
import Header from './components/Header-sec/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Earning from './components/earning/Earning';
import Graph from './components/Graph/Graph';
import Product from './components/Product/Product';

function App() {
  return (
  <div className="App"> 

   <div className="dashboard-wrapper">
    <Sidebar/>
    <div className="dashboard-right">
   <Header/>
   <Earning/>
   <Graph/>
   <Product/>
   </div>
    </div>   
     
    </div>
  );
}

export default App;
