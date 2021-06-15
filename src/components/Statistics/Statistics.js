import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={styles.option}>Good: {good}</p>
    <p className={styles.option}>Neutral: {neutral}</p>
    <p className={styles.option}>Bad: {bad}</p>
    <p className={styles.option}>Total: {total}</p>
    <p className={styles.option}>Positive Feedback: {positivePercentage}%</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
