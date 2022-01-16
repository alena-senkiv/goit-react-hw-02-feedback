import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={styles.feedback}>Good: {good}</p>
      <p className={styles.feedback}>Neutral: {neutral}</p>
      <p className={styles.feedback}>Bad: {bad}</p>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.percentage}>
        Positive feedback: {positivePercentage()}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func,
};
