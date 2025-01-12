import React from "react";
import ReactDOM from "react-dom/client";
import "./practice.css";

/**
 * Challenge: add another label and input for the password field
 */

export default function Practice() {
  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    // Gather the info from the form
    // Submit it to a backend
    formEl.reset();
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}
