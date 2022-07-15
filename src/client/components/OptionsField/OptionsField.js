export default function OptionsField(props) {
  const fieldName = props.question.question;

  return (
    <div onChange={(event) => props.onChange(event.target.value)}>
      {props.question.options.map((option, id) => {
        return (
          <>
            <input
              className="assessment-form__option"
              key={id}
              type="radio"
              name={fieldName}
              value={option}
            />{" "}
            {option}
          </>
        );
      })}
    </div>
  );
}
