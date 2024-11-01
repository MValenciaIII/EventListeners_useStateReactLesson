import React from "react";

function EventListeners() {

    //! You're always going to make functions (NOT FUNCTIONAL COMPONENTS) between return statement and inside the component
    function handleClick() {
        console.log("I'm Clicked!")
    }

    function imgHover() {
        console.log("you have hovered the img!")
    }
    return(
        <div className="row">
            <div className="col-12">
                <h1>Event Listener Section!</h1>
            </div>
            <div className="col-12">
                {/* //! Don't attach "()" to the function name !!It will auto run  */}
                {/* //* Eventlisteners are now going to be attached to HTML elements (CamelCased)  */}
                <img onMouseEnter={imgHover} src="https://picsum.photos/640/360" alt="" />
            </div>
            <div className="col-12">
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    )
}

export default EventListeners;