import "./NumberField.scss";

export default function NumberField(props) {
  return (
    <input
      className="assessment-form__input assessment-form__input--number"
      type="number"
      onInput={(event) => {
        props.onChange(event.target.value);
      }}
    />
  );
}
