import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import AssessmentForm from "../../components/AssessmentForm/AssessmentForm";
import OptionsField from "../../components/OptionsField/OptionsField";
import "./Assessment.scss";

function Assessment() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/assessment`).then((response) => {
      setQuestions(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="assessment">
      <h1>Hi</h1>
      <AssessmentForm questions={questions} />
    </div>
  );
}

export default Assessment;
