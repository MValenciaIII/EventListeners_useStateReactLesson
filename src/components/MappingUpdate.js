import React from "react";


function MappingUpdate() {

    //? React doesn't keep track of local variables, so it doesn't update/re-render the page
    // const thingsArray = ['Thing 1', 'Thing 2'];

    //? A "useState" variable is another way to track information/data, but if React see's a change, It will re-render/update this functional component
    const [things, setThings] = React.useState(['Thing 1', 'Thing 2'])
    //* left side of use state is to show the DATA being Stored! ex. "things"
    //* right side of use state variable is a function to change/manipulate the DATA being stored! ex. "setThings"
    console.log(things);
    console.log(setThings);

    //!OLD
    // const thingsElement = thingsArray.map(
    //     (thing) => {
    //         return <p>{thing}</p>
    //     }
    // )

    //* Use state version
    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        //! "..." is the spread operator
        //? prevstate is arrow function parameter name
        setThings(prevState => [...prevState, newThingText]);
    }

    const thingsElement = things.map(
        (thing) => {return <p>{thing}</p>}
    )


    // function addItem() {
    //     const newThingText = `Thing ${thingsArray.length + 1}`
    //     thingsArray.push(newThingText);
    //     console.log(thingsArray);
    // }


    return(
        <div className="row">
            <div className="col-12">
                <button onClick={addItem}>Add Item</button>
                {thingsElement}
            </div>
        </div>
    )
}

export default MappingUpdate;