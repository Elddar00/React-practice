import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Challenge: add another label and input for the password field
 */

export default function Practice() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
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
