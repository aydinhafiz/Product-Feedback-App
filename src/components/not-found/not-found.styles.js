import styled from "styled-components";

export const SContentNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 111px;

  .not-found-img {
    margin-bottom: 53px;
  }

  .no-feedback-yet {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.333333px;

    color: #3a4374;
    margin-bottom: 16px;
    max-width: 276px;
  }

  .not-found-info {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;

    color: #647196;
    max-width: 410px;
    margin-bottom: 48px;
  }

  .add-feedback-button {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    color: #f2f4fe;
    border: none;
    padding: 12.5px 25px 11.5px 24px;
    background: #ad1fea;
    border-radius: 10px;
    margin-bottom: 110px;
  }

  .add-feedback-button:hover {
    background: #c75af6;
    border-radius: 10px;
  }
`;
export const SContainerNotFound = styled.div`
  margin-left: 30px;
  background: #ffffff;
  border-radius: 10px;

`;

export const SNotFoundDesigns = { SContentNotFound, SContainerNotFound };
