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
    const employmentStatus = formData.get("employmentStatus");
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");

    // console.log(email, password);
    console.log(dietaryRestrictions);
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

        <fieldset>
          <legend>Employment Status:</legend>
          <label htmlFor="description">
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>

          <label htmlFor="">
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>

          <label htmlFor="">
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietery restrictions:</legend>
          <label htmlFor="description">
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>

          <label htmlFor="">
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>

          <label htmlFor="">
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </section>
  );
}
