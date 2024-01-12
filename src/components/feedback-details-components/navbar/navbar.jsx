import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  .go-back {
    display: flex;
    align-items: center;
  }

  .go-back-button {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
    border: none;
    background: none;
    margin-right: 512px;
    padding-left: 15px;
    width: 76px;
    cursor: pointer;
  }

  .go-back-button:hover {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #647196;
  }

  .edit-feedback-button {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #f2f4fe;
    border: none;
    background: #4661e6;
    border-radius: 10px;
    width: 142px;
    height: 44px;
    cursor: pointer;
  }

  .edit-feedback-button:hover {
    background: #7c91f9;
    border-radius: 10px;
  }

  /////////////////////////////////////////////////////////////////////////
`;

function Navbar() {
  const Navigate = useNavigate();
  return (
    <SNavbar>
      <div className="go-back">
        <img src="" alt="" className="left-arrow-img" />
        <button
          onClick={() => {
            Navigate(-1);
          }}
          className="go-back-button"
        >
          Go Back
        </button>
      </div>
      <Link to="/edit-feedback">
        <button className="edit-feedback-button">Edit Feedback</button>
      </Link>
    </SNavbar>
  );
}
export default Navbar;
