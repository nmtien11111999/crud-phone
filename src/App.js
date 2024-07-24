
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListPhone from "./components/ListPhone";
import AddPhone from "./components/AddPhone";
import EditPhone from "./components/EditPhone";

function App() {
  return (
    <Routes>
        <Route path='/' element={<ListPhone/>}></Route>
        <Route path='/add' element={<AddPhone/>}></Route>
        <Route path='/edit/:id' element={<EditPhone/>}></Route>
    </Routes>
  );
}

export default App;
