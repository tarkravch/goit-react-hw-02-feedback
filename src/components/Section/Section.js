import React from "react";
import PropTypes from "prop-types";
import styles from "../Section/Section.module.css";

const Section = ({ title, children }) => (
  <section className={styles.block}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
