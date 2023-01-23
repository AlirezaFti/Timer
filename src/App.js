import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import nav from "./nav.css";
import {useState} from 'react'
import { useParams } from 'react-router-dom';

function App() {
  const {id} =useParams();
  const [changeText, setChangeText] = useState(0);
  return (
    <div>
      <Header changeText={changeText} id={id} />
      <Nav setChangeText={setChangeText} changeText={changeText} />

    </div>
  );
}
export default App;