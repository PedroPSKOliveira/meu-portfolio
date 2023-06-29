import './App.css'
import {Outlet} from "react-router-dom";
import {inject} from "@vercel/analytics";

function App() {

  return (
    <>
      <Outlet />
    </>
  )
}


inject();

export default App
