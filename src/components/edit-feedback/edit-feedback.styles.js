import styled from "styled-components";

export const SEditFeedbackComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 92px;

  .go-back-button {
    margin-bottom: 68px;
    display: flex;
    align-items: center;
    width: 100px;
  }
  .go-back-button img {
    padding-right: 8px;
  }

  .edit-feedback__content {
    border-radius: 10px;
    background: #fff;
    width: 540px;
    height: 822px;

    padding-right: 42px;
    padding-left: 42px;
  }

  .edit-feedback-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    margin-top: 52px;
  }

  .edit-feedback-title {
    color: #3a4374;
    font-family: Jost;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.333px;

    margin-right: 42px;
  }

  .edit-feedback-header img {
    position: absolute;
    left: 68px;
    top: -75px;
  }

  .edit-feedback-form {
    margin-top: 75px;
  }

  .edit-feedback-title-input {
    margin-bottom: 24px;
  }

  .input-write-info {
    margin-bottom: 16px;
  }

  .input-title {
    color: #3a4374;
    font-family: Jost;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.194px;
  }

  .feedback-description {
    color: #647196;
    font-family: Jost;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .feedback-title-input {
    color: #3a4374;
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 5px;
    background: #f7f8fd;
    border: none;
    outline: none;
    padding: 13px 0px 13px 24px;
    width: 456px;
  }

  .choose-category-button {
    color: #3a4374;
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 5px;
    background: #f7f8fd;
    border: none;
    outline: none;
    padding: 13px 0px 13px 24px;
    width: 456px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .choose-category-button img {
    margin-right: 24px;
  }

  .category-box-div {
    :not(:last-child) {
      border-bottom: 1px solid rgba(58, 67, 116, 0.15);
    }
  }

  .category-box {
    display: flex;
    align-items: start;

    margin-top: 16px;
    width: 456px;
    padding: 0px;
    background: #ffffff;

    box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
    border-radius: 10px;

    position: absolute;
    flex-direction: column;
    z-index: 20;
  }

  .category-choose {
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
  }

  .textarea-feedback {
    color: #3a4374;
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 5px;
    border: none;
    background: #f7f8fd;
    width: 456px;
    height: 96px;
    outline: none;
    resize: none;
    padding: 10px 20px 30px 20px;
  }

  /* .category-box:nth-child(4):not() {
  margin-bottom: 25px;
} */

  /* :not(.category-choose:nth-child(4)){
    margin-top: 12px;
} */
`;
