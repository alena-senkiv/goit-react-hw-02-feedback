import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      className={s[option]}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {option}
    </button>
  ));
};
