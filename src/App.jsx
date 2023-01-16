import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import TeacherProfile from "./pages/TeachersProfile";
import Reviews from "./components/Reviews";


function App() {
  return (
    <Home/>
  );
}


export default App;