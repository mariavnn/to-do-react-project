/* eslint-disable no-unused-vars */

import React from "react";
import './main.css';
import AppUI from "./UI/AppUI";
import { TodoProvider } from "./Context/AppContext";


function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}






export default App
