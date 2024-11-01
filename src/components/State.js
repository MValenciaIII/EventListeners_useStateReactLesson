import React, {useState} from "react";

function State() {

    //? 1st wat to CALL STATE
    // const [result, setResult] = React.useState()
 
    //const result = useState('No')
    //? 2nd way to CALL STATE
    const [result, setResult] = useState('No');
    const [food, setFood] = useState('Pizza')
    const [sports, setSports] = useState('Soccer')
    //? result is variable name of DEFAULT VALUE
    //? setResult is a function
    console.log(result)


    function changeAnswer() {
        setResult('Stop clicking me!')
    }

    return(
        <div className="row">
            <div className="col-12">
                <h3 onClick={changeAnswer}>Is State important?</h3>
            </div>
            <div className="col-12">
                <h4>{result}</h4>
            </div>
        </div>
    )
}

export default State;