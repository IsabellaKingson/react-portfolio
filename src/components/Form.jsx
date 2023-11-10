import { useState } from "react";

import { validateEmail } from "../utils/helpers";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    } else if (!name) {
      setErrorMessage("Please enter a name");
      return;
    } else if (!message) {
      setErrorMessage("Please enter a message");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="John Doe"
          />
        </label>
        <label>
          Email address:
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="johndoe@yahoo.com"
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Your message here"
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
