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

  @media only screen and (max-width: 950px) {
  }

  @media only screen and (max-width: 800px) {
  }

  @media only screen and (max-width: 680px) {
    padding: 15px 20px;
  }

  @media only screen and (max-width: 600px) {
    border-radius: 0;
  }

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

    @media only screen and (max-width: 800px) {
      padding: 10.5px 10px;
    }

    @media only screen and (max-width: 680px) {
      display: flex;
      align-items: center;

      padding: 5.5px 8px;
      font-size: 10px;
      max-width: 100px;
      flex: 1;
    }

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
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .left-side img {
    padding-right: 16px;

    padding-left: 24px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
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

  .log-out-header {
    padding: 12.5px 25px;
    border: none;
    background: #ad1fea;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    color: #f2f4fe;
    display: none;

    @media only screen and (max-width: 800px) {
      padding: 10.5px 10px;
    }

    @media only screen and (max-width: 950px) {
      display: grid;
    }

    @media only screen and (max-width: 680px) {
      padding: 5.5px 8px;
      font-size: 10px;
      max-width: 100px;
    }

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .log-out-header:hover {
    background: #c75af6;
    border-radius: 10px;
  }

  .right-header span {
    margin-left: 5px;
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
