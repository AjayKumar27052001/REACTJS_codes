import React, { useState } from "react";
const Step1 = ({ next }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <button onClick={next}>Next</button>
    </div>
  );
};
const Step2 = ({ next, previous }) => {
  return (
    <div>
      <h1>Step 2</h1>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};
const Step3 = ({ previous }) => {
  return (
    <div>
      <h1>Step 3</h1>
      <button onClick={previous}>Previous</button>
      <button type="submit">SUBMIT</button>
    </div>
  );
};
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);
  const submithandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <form onSubmit={submithandler}>
      {step === 1 && <Step1 next={nextStep} />}
      {step === 2 && <Step2 next={nextStep} previous={prevStep} />}
      {step === 3 && <Step3 previous={prevStep} />}
    </form>
  );
};

const MultiStepFormAppf = () => <MultiStepForm />;
export default MultiStepFormAppf;
