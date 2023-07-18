import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./askin.css";
function Askin() {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [form, setForm] = useState({
    questionTitle: "",
    questionDescription: "",
  });
  return (
    <div className="container">
      <div
        className="informationDiv"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>Steps to write a good question</h2>
          <ul style={{ listStylePosition: "inside", textAlign: "left" }}>
            <li>Summarize your problem in one-line title</li>
            <li>Describe your problem in more detail</li>
            <li>Describe what you tried and what you expected to happen</li>
            <li>Review your question and post it on the site</li>
          </ul>
        </div>
      </div>
      <div className="askQuestionContainer">
        <div className="askQuestionDiv">
          <div>
            <h3>Ask public a question</h3>
            <p>Go to question page</p>
          </div>

          <div>
            <FloatingLabel controlId="floatingInput" className="mb-3 ">
              <Form.Control
                type="text"
                placeholder="Title"
                name="questionTitle"
                onChange={handleChange}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" className="textArea ">
              <Form.Control
                name="questionDescription"
                onChange={handleChange}
                placeholder="Question Description"
                style={{
                  height: "100px",
                  alignItems: "center",
                }}
              />
            </FloatingLabel>
          </div>
        </div>
        <div className="postButtonDiv">
          <button className="postButton">Post your question</button>
        </div>
      </div>
    </div>
  );
}

export default Askin;
