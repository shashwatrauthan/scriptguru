import './App.css';
import './tailwindcss/output.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeComp from './components/HomeComp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
