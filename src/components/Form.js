import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Newsletter from "./NewsletterForm"
function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }
  console.log("FirstName "+firstName+" Lastname "+lastName)
  return (
    <>
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <Newsletter/>
    <DisplayData firstname={firstName} lastname={lastName} subscribed={Newsletter.newsletter} />
    </>
  );
}

export default Form;
