import React, {useState} from "react";


function ComplexState() {

    return (
        <div className="row">
            <div className="col-12">
                <h1>Complex State</h1>
            </div>
            <ComplexArray />
            <ComplexObjects />
        </div>
    )
}

function ComplexArray() {

    const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2']);



    const thingsElements = thingsArray.map(
        (thing) => <p>{thing}</p>
    )

    function addItem() {
        const newThingText = <p>Thing {thingsArray.length + 1}</p>

        //! NEVER DO THIS TO AN "USESTATE" ARRAY;
        //thingsArray.push("Thing 3")
        //! WE NEVER DIRECTLY MODIFY OUR STATE (index 0 Variable)
        //* Instead USE setNAME variable

        //?when setting new State Value
        //? if we depend on the old version of our State(value/array) we think about callback function
        //? '...' = spread operator, what is does = Gets entire current array.

        setThingsArray(prevThingsArray => [...prevThingsArray, newThingText])

        
        console.log(thingsArray);
    }

    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h2>Complex Array</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button onClick={addItem}>Add Item</button>
                    {thingsArray}
                </div>
            </div>

        </div>
    )
}

function ComplexObjects() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (555) 555-5555",
        email: "jDoe42@yahoo.com",
        isFavorite: true,
        age: 18
    })

    function toggleFavorite() {
        //? ... spread operator does the same as arrays.
        //? ...prevcontact grabs entire object being stored in State variable
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
                /*
                    firstName: "John",
                    lastName: "Doe",
                    phone: "+1 (555) 555-5555",
                    email: "jDoe42@yahoo.com",
                    isFavorite: false
                */
            }
        })
        console.log(contact)
    }


    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h1>Complex Objects!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    {/* 
                        //? contact.isFavorite passing boolean value
                        //? "colored" is the new props name
                        //? handleClick={} is teh way we pass functions to child components and way to call it is by props name (handleClick)
                    
                    */}
                    <ComplexObjectFavorite colored={contact.isFavorite} handleClick={toggleFavorite}/>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
            </div>
        </div>
    )
}

function ComplexObjectFavorite(props) {
    console.log(props)
    
    let favorite = props.colored ? "favoriteTrue" : "favoriteFalse";

    return(
        <div>
            {/* //? TERNARY Operator can be used inside classNames as well!
                //!Don't forget about the template literals to be able to write other classNames insde
            */}
            <div onClick={props.handleClick} className={`text-center ${favorite}`}>X</div>
        </div>
    )
}

export default ComplexState