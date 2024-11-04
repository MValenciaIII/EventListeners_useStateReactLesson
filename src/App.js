import React from "react";
import '../src/style.css'
import EventListeners from "./components/EventListeners";
import MappingUpdate from "./components/MappingUpdate";
import State from "./components/State";
import CounterPractice from "./components/CounterPractice";
import TernaryPractice from "./components/TernaryPractice";
import StateTernary from "./components/StateTernary";
import ComplexState from "./components/ComplexState";
function App() {

    return(
        <div className="container">
            {/* <EventListeners /> */}
            {/* <MappingUpdate /> */}
            {/* <State /> */}
            {/* <CounterPractice /> */}
            {/* <TernaryPractice /> */}
            {/* <StateTernary /> */}
            <ComplexState />
        </div>
    )
}

export default App;