import { useState } from "react";
import NumberField from "../NumberField/NumberField";
import OptionsField from "../OptionsField/OptionsField";
import "./AssessmentForm.scss";
const fieldTypes = {
  number: NumberField,
  options: OptionsField,
};

export default function AssessmentForm(props) {
  const [answers, setAnswers] = useState({});

  function onSubmit(event) {
    event.preventDefault();

    console.log(answers);
    //const questionsWithAndwers;
    /**
     * const questionsWithAndwers = [...props.questions];
     *
     * for(const question of questionsWithAndwers) {
     *
     * }
     */
  }

  function updateAnswer(id, value) {
    console.log("Answer update", id, value);
    setAnswers({ ...answers, [id]: value });
  }

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit} className="assessment-form">
        {props.questions.map((question, id) => {
          const FieldComponent = fieldTypes[question.type];

          return (
            <label key={id} className="assessment-form__control">
              {question.question}
              <div className="assessment-form__answer">
                <FieldComponent
                  question={question}
                  onChange={(value) => updateAnswer(id, value)}
                />
              </div>
            </label>
          );
        })}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
