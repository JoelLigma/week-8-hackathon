import { useState } from "react";
import NumberField from "../NumberField/NumberField";
import OptionsField from "../OptionsField/OptionsField";
import { API_URL } from "../../config";
import "./AssessmentForm.scss";
import axios from "axios";

const fieldTypes = {
  number: NumberField,
  options: OptionsField,
};

export default function AssessmentForm(props) {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  function onSubmit(event) {
    event.preventDefault();

    console.log(answers);
    const questionsWithAndwers = props.questions.map(
      (question, questionIndex) => {
        return {
          ...question,
          answer: answers[questionIndex],
        };
      }
    );

    axios
      .post(`${API_URL}/assessment`, questionsWithAndwers)
      .then((response) => {
        setResults(response.data);
      });
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

        {results && (
          <div className="assessment-results">
            <div className="assessment-results__risk">
              Your breast cancer risk is{" "}
              <span
                className={`assessment-results__risk-text assessment-results__risk-text--${results.risk.toLowerCase()}`}
              >
                {results.risk}
              </span>
            </div>
            <div className="assessment-results__download">
              <a
                href={`${API_URL}/assessment/${results.uuid}`}
                download
                className="assessment-results__download-link"
              >
                Download your assessment
              </a>
            </div>
          </div>
        )}

        <input type="submit" className="cta-btn" value="Submit" />
      </form>
    </div>
  );
}
