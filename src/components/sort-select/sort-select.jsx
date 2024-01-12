import React, { useState } from "react";
import styled from "styled-components";
import arrowDown from "../../components/assets/shared/icon-arrow-down.svg";
import arrowUp from "../../components/assets/shared/icon-arrow-up.svg";
import iconCheck from "../../components/assets/shared/icon-check.svg";

// const SortSelect= styled.div``
const SSelectItemsBox = styled.div`
  display: flex;
  align-items: start;

  max-width: 255px;
  padding: 0px;
  background: #ffffff;

  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;

  position: absolute;
  flex-direction: column;
  top: 198px;
  left: 875 px;
`;

const SSelectItem = styled.button`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
  align-items: center;
  width: 255px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;

  mix-blend-mode: normal;

  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  :not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }
  /* &hover {
    color: #ad1fea;
  } */
  :hover {
    color: #ad1fea;
  }
`;

function SortSelect() {
  const [open, setopen] = useState(false);
  const [currentState, setCurrentState] = useState("Most Upvotes");
  function handleSelectFunction(newState) {
    setCurrentState(newState);
    setopen(false);
  }

  return (
    <div className="right-side">
      <span className="sorted" onClick={() => setopen(!open)}>
        Sort by : <strong>{currentState}</strong>
      </span>
      <img src={open ? arrowDown : arrowUp} alt="" />
      {open ? (
        <SSelectItemsBox>
          <SSelectItem onClick={() => handleSelectFunction("Most Upvotes")}>
            <span>Most Upvotes</span>{" "}
            {currentState === "Most Upvotes" && <img src={iconCheck} alt="" />}
          </SSelectItem>
          <SSelectItem onClick={() => handleSelectFunction("Least Upvotes")}>
            <span>Least Upvotes</span>{" "}
            {currentState === "Least Upvotes" && <img src={iconCheck} alt="" />}
          </SSelectItem>
          <SSelectItem onClick={() => handleSelectFunction("Most Comments")}>
            <span>Most Comments</span>{" "}
            {currentState === "Most Comments" && <img src={iconCheck} alt="" />}
          </SSelectItem>
          <SSelectItem onClick={() => handleSelectFunction("Least Comments")}>
            <span>Least Comments</span>{" "}
            {currentState === "Least Comments" && (
              <img src={iconCheck} alt="" />
            )}
          </SSelectItem>
        </SSelectItemsBox>
      ) : null}
    </div>
  );
}
export default SortSelect;
