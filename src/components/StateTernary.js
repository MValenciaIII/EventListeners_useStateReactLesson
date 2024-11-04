import React, {useState} from "react";



function StateTernary() {

    const [isGoingOut, setIsGoingOut] = useState(false);

    function changeMind() {
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }

    return(

        <div className="row">
            <div className="col-12">
                <h1>State Ternary Practice</h1>
            </div>
            <div className="col-6">
                <h3 onClick={changeMind}>Am I going out?</h3>
            </div>
            <div className="col-6">
                <h5>{isGoingOut ? "Yes" : "No"}</h5>
            </div>
            {/* //? This is Conditional Rendering!  */}
            {isGoingOut ? <h1>Let's go out!</h1> : <h4>I wanna stay in and play games...</h4>}
        </div>
    )
}


export default StateTernary;