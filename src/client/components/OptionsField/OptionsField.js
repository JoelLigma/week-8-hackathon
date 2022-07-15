import "./OptionsField.scss";

export default function OptionsField(props) {
  const fieldName = props.question.question;

  return (
    <div onChange={(event) => props.onChange(event.target.value)}>
      {props.question.options.map((option, id) => {
        return (
          <div key={id} className="assessment-form__options">
            <input
              className="assessment-form__option"
              type="radio"
              name={fieldName}
              value={option}
            />{" "}
            {option}
          </div>
        );
      })}
    </div>
  );
}
