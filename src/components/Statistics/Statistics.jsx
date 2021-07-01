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
