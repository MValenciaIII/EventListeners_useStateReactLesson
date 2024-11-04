import React from "react";


function TernaryPractice() {
    const murderIf = false;
    const murderName = "Jim Crawford"


    //? LEFT SIDE IS TRUE VALUE and right side is False value
    let answer = murderIf ? "Yes" : "No"
    let styleCondition = murderIf ? "col-12" : "col-1"

    return(
        <div className="row">
            <div className="col-12">
                <h1>Ternary Practice</h1>
            </div>
            <div className={`${styleCondition} col-sm-6`}>
                <h2>Was there a murder in Savannah?</h2>
                <h4>{answer}</h4>
            </div>
        </div>
    )
}

export default TernaryPractice;