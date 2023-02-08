import { useState } from "react";
import AddHabit from "./components/addhabit";
import HabitList from "./components/HabitList";
import Navbar from "./components/navbar";
import WeekSelector from "./components/WeekSelector";
import Detail from "./pages/Detail";
import Week from "./pages/Week";

function App() {

  let pathname = window.location.pathname;
  let detailView = pathname === "/detail" ? true : false;
  return (<>
    <div className="container">
      <Navbar></Navbar>
      {detailView && (<Detail></Detail>)}
      {!detailView && ( <Week></Week>)}

    </div>

  </>
  );
}

export default App;
