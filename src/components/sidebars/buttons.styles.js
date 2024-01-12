import styled from "styled-components";

export const SCategories = styled.div`
  max-width: 255px;
  background: #ffffff;
  border-radius: 10px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 50px;
  margin-bottom: 24px;

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
    padding-bottom: 24px;
    padding-right: 50px;
    padding-left: 24px;
    padding-top: 24px;
    margin-bottom: 24px;
    margin-bottom: 14px;
    margin-right: 8px;
    padding: 6px 16px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #4661e6;
    background: #f2f4ff;
    border-radius: 10px;
    border: none;
    cursor: pointer;
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
