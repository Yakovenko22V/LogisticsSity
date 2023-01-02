import './App.css'
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';
import { DriversInfo } from './ForDrivers/DriversInfo';
import { Header } from './Header/Header.js'
import { Services } from './Services/Index.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <DriversInfo />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
