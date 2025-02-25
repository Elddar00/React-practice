import React from "react";
import ReactDOM from "react-dom/client";
import "./practice.css";

/**
 * Challenge: add another label and input for the password field
 */

export default function Practice() {
  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    console.log(data);

    //my way
    // const newData = { ...data, dietaryRestrictions: dietaryData };
    // console.log(newData);

    //better way
    const allData = { ...data, dietaryRestrictions };
    console.log(allData);
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

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>
            Choose a color
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}
