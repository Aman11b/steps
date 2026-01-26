import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 2;
  const [step, setStep] = useState(1);
  // let [step, setStep] = useState(1);

  // const [test, setTest] = useState({ name: "ho" });

  function handlePrevious() {
    // alert("prev");
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    // alert("next");
    if (step < 3) setStep(step + 1);

    // BAD PRACTICE
    // test.name = "hehe";

    // step = step + 1;
    // nothing happens-> react ahs no way of knowing this is updating state thats way setState is provided as setter function
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}:{messages[step - 1]}
        {/* {test.name} */}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // handlePrevious() is function calling and it will make it run automatically hence just passing the value
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

/**
 * STATE
 * -> data a component can hold over time, ifo that component needs to remember though its life cycle
 * -> its kindoff memory that can be changed
 * -> state variable/peice of state a single variable in a component
 * -> state is an entrire condition at ant point of time > all peices ofm state together
 * #-> updating state re-render component (one single component render its called a view all views together makes final UI)
 * -> with state react keep UI sync with data
 * ->useState retusn a array it takes defaut value and a function
 * -> useState is called hooks(but only in top level of function not in if or loop or something else)
 * ->dont update state manually
 */
