import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
// import PropTypes from "prop-types";

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (event) => {
    const { name } = event.currentTarget;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = (totalValue) => {
    return Math.round((this.state.good / totalValue) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalValue = this.countTotalFeedback();
    const positiveFeedbackValue =
      this.countPositiveFeedbackPercentage(totalValue);
    return (
      <>
        <Container>
          <Section title="Please leave your feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleFeedback}
            ></FeedbackOptions>
          </Section>

          <Section title="Statistics">
            {totalValue === 0 ? (
              <Notification message="No feedback given"></Notification>
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalValue}
                positivePercentage={positiveFeedbackValue}
              ></Statistics>
            )}
          </Section>
        </Container>
      </>
    );
  }
}

export default App;
