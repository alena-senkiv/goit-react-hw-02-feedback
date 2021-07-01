import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={s.feedback}>Good: {good}</p>
      <p className={s.feedback}>Neutral: {neutral}</p>
      <p className={s.feedback}>Bad: {bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.percentage}>Positive feedback: {positivePercentage()}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.func,
};
