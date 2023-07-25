import axios from "axios";
import React, { useContext, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

import "./askin.css";

function Askin() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [newQuestion, setNewQuestion] = useState(null);

  const [form, setForm] = useState({
    questionTitle: "",
    questionDescription: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post(
        "http://localhost:4000/api/questions/ask",
        {
          questionTitle: form.questionTitle,
          questionDescription: form.questionDescription,
        },
        {
          headers: { "x-auth-token": userData.token },
        }
      );

      console.log(loginRes.data);
      setNewQuestion(loginRes.data.data);
      // Set the new question data
      navigate("/");
    } catch (err) {
      console.log("problems", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

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
          <button className="postButton" onClick={handleSumbit}>
            Post your question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Askin;
