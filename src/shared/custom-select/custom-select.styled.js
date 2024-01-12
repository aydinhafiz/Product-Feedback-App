import styled from "styled-components";

export const SCustomSelectInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 456px;
  height: 48px;
  background: #f7f8fd;
  border-radius: 5px;

  button {
    border: none;
    background: #f7f8fd;
    margin-left: 24px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3a4374;
  }

  img {
    margin-right: 24px;
    rotate: 180deg;
  }
`;

export const SCustomSelect = styled.div`
  margin-bottom: 24px;
  position: relative;
  span {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3a4374;
  }

  p {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
    margin-bottom: 16px;
  }
`;

export const SSelectItemsBox = styled.div`
  display: flex;
  align-items: start;

  z-index: 20;

  margin-top: 16px;
  width: 456px;
  padding: 0px;
  background: #ffffff;

  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;

  position: absolute;
  flex-direction: column;
  border-bottom: 1px solid rgba(58, 67, 116, 0.15);
`;

export const SSelectItem = styled.button`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  mix-blend-mode: normal;
  color: #647196;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 456px;
  border: none;
  background: none;
  text-align: left;
  padding: 12px 24px;
  cursor: pointer;
  :not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }
`;
