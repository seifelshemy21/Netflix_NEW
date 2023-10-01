import './App.scss';
import Header from "./components/Header";
import Enjoy from "./components/Enjoy";
import Download from "./components/Download";
import Everywhere from './components/Everywhere';
import Kids from './components/Kids';
import Questions from './components/Questions';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
        <Header/>
        <Enjoy/>
        <Download/>
        <Everywhere/>
        <Kids/>
        <Questions/>
        <Footer/>
    </div>
  );
}

export default App;
