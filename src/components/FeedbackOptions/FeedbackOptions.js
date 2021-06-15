import React from "react";
import PropTypes from "prop-types";
import styles from "../FeedbackOptions/Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const singleButton = Object.keys(options).map((option) => (
    <button
      className={styles.btn}
      type="button"
      key={option}
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
  return singleButton;
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
