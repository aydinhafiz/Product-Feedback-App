import styled from "styled-components";

export const SContentNewFeedback = styled.form`
  position: relative;
  background: #ffffff;
  border-radius: 10px;

  .group-image {
    position: absolute;
    left: 40px;
    top: -20px;
  }
  padding: 52px 42px 40px 42px;
`;

export const SNewFeedbackTitle = styled.h2`
  margin-bottom: 40px;

  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: #3a4374;
`;

export const SWriteFeedbackTitle = styled.div`
  margin-bottom: 24px;

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
  input {
    border: none;
    background: #f7f8fd;
    border-radius: 5px;
    width: 100%;
    height: 48px;
    outline: none;

    color: #3a4374;
    font-family: "Jost";
    font-size: 15px;
    font-weight: 400;

    padding: 13px 0px 13px 24px;
  }

  .feedback-detail-textarea {
    color: #8c92b3;
    font-family: "Jost";
    font-size: 15px;
    font-weight: 400;

    width: 456px;

    outline: none;
    resize: none;
    border: none;

    padding: 16px 23px;

    border-radius: 5px;
    background: #f7f8fd;
  }
`;

export const SAddFeedbackDetail = styled.div`
  margin-bottom: 32px;

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

  input {
    border: none;
    background: #f7f8fd;
    border-radius: 5px;
    width: 100%;
    height: 48px;
    outline: none;
  }

  .feedback-detail-textarea {
    color: #8c92b3;
    font-family: "Jost";
    font-size: 15px;
    font-weight: 400;

    width: 456px;

    outline: none;
    resize: none;
    border: none;

    padding: 16px 23px;

    border-radius: 5px;
    background: #f7f8fd;
  }
`;

export const SCancelButton = styled.button`
  cursor: pointer;
  margin-right: 16px;
  background: #3a4374;
  border-radius: 10px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  padding: 12.5px 24px;
  border: none;
  &:hover {
    background: #656ea3;
    border-radius: 10px;
  }
`;
export const SAddFeedbackButton = styled.button`
  cursor: pointer;
  background: #ad1fea;
  border-radius: 10px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  padding: 12.5px 24px;
  border: none;
  &:hover {
    background: ${(props) => props.theme.primary};
    border-radius: 10px;
  }
`;

export const SCancelOrAddFeedback = styled.div`
  display: flex;
  justify-content: end;
`;
