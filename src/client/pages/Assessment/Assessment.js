import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import AssessmentForm from "../../components/AssessmentForm/AssessmentForm";
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
      <div className="assessment__intro">
        <h1 className="assessment__title">Breast Health Assessment</h1>{" "}
        <p className="assessment__text">
          Breast cancer is the most commonly diagnosed cancer in women other
          than skin cancer. The American Cancer Society says the breast cancer
          death rate is declining. This is probably because of earlier detection
          through routine screening and better treatment. Early detection is the
          main way to find breast cancer when it’s small and easier to treat.
        </p>
        <p className="assessment__text">
          This short assessment will help you learn if you have risk factors
          that may raise your breast cancer risk. It is not a complete review of
          all breast cancer risks. For a complete evaluation of your risks, see
          your healthcare provider. Knowing your breast cancer risk is helpful
          when making a breast cancer screening plan.
        </p>
        <p className="assessment__text">
          This tool is not meant for women who have or have had breast cancer.
        </p>
      </div>
      <AssessmentForm questions={questions} />
    </div>
  );
}

export default Assessment;
