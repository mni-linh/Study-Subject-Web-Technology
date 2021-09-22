import './App.css';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { About } from './components/About';
import { ClickMe } from './components/ClickMe';
import { News } from './components/News';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { DanhSachThanhPho } from './components/ThanhPho';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Menu/>
          <Switch>
            <Route path="/thanh-pho" component={DanhSachThanhPho}/>
            <Route path="/home" component = {Home}/>
            <Route path="/about" component = {About}/>
            <Route path="/clickme" component = {ClickMe}/>
            <Route path="/news" component = {News}/>
          </Switch>
    </BrowserRouter>
            
    </div>
  );
}

export default App;
