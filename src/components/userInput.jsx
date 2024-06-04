import React from "react";

const UserInput = ({ userInput, handelChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investement</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handelChange("initialInvestement", event.target.value)
            }
            value={userInput.initialInvestement}
          />
        </p>
        <p>
          <label>Annual Investement</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handelChange("annualInvestement", event.target.value)
            }
            value={userInput.annualInvestement}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            onChange={(event) =>
              handelChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            type="number"
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(event) => handelChange("duration", event.target.value)}
            value={userInput.duration}
            type="number"
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
