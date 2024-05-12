import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
    <div className='flex'>
    <Sidebar/>
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default App;
