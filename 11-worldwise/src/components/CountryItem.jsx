import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";
/* eslint-disable */

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.array.isRequired,
};

export default CountryItem;
