import styled from "styled-components";

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 21px;
  max-width: 825px;
  flex: 1;
  background: #373f68;
  border-radius: 10px;
  padding-top: 23px;
  padding-bottom: 23px;
  padding-right: 24px;

  .add-feedback {
    padding: 12.5px 25px;
    border: none;
    background: #ad1fea;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 5px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    color: #f2f4fe;

    :hover {
      background: #c75af6;
      border-radius: 10px;
    }
  }

  .left-header {
    display: flex;
    align-items: center;
  }

  .left-side {
    display: flex;
    align-items: center;
    margin-right: 38px;
  }

  .left-side img {
    padding-right: 16px;

    padding-left: 24px;
  }

  .suggestions {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #ffffff;
  }

  .right-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sorted {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #f2f4fe;
    cursor: pointer;
  }

  /* .sorted :hover {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  mix-blend-mode: normal;
  opacity: 0.75;
} */

  .right-side img {
    padding-left: 9px;
  }
`;
