import React from "react";
import ReactDOM from "react-dom/client";
import "./practice.css";

/**
 * Challenge: add another label and input for the password field
 */

export default function Practice() {
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log(email, password);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
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
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>

        <button>Submit</button>
      </form>
    </section>
  );
}
