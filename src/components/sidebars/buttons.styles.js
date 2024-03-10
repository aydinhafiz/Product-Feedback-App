import styled from "styled-components";

export const SCategories = styled.div`
  max-width: 255px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 24px;

  padding: 24px;

  @media only screen and (max-width: 950px) {
    max-width: 223px;
  }

  @media only screen and (max-width: 800px) {
    max-height: 170px;
    width: 180px;
  }

  @media only screen and (max-width: 680px) {
    max-height: 150px;
    width: 150px;
  }

  .logout-button {
    margin-top: 30px;
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
  }
  .logout-button:hover {
    background: #c75af6;
    border-radius: 10px;
  }

  .category {
    background: #ffffff;
    border-radius: 10px;

    /* padding-bottom: 24px;
    padding-right: 50px;
    padding-left: 24px;
    padding-top: 24px; */

    padding: 5px 10px;

    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    border-radius: 10px;

    font-family: "Jost";
    font-style: normal;
    color: #4661e6;
    background: #f2f4ff;
    border: none;
    cursor: pointer;

    @media only screen and (max-width: 680px) {
      padding: 5px 10px;
      font-size: 10px;
      margin-bottom: 10px;
      margin-right: 2px;
    }
  }

  .category:hover {
    background: #cfd7ff;
  }

  .category--active {
    color: #ffffff;
    background: #4661e6;
  }

  .category--active:hover {
    background: #4661e6;
  }
`;
