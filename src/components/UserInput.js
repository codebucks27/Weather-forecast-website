import React, { useRef } from 'react'

const UserInput = ({value, addInput}) => {

    const inputRef = useRef("");
const handleSubmit = (e) => {
e.preventDefault();
let val = inputRef.current.value;

if(val === ""){
alert("Input is empty!")
}else{
    addInput(val);
    inputRef.current.value = "";
}
}
    return (
        <>
        <form>
            <label htmlFor="user-input">Your City: </label>
        <input type="text" name="user-input" ref={inputRef} placeholder="Enter city name"/>   
         <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        </>
    )
}

export default UserInput
