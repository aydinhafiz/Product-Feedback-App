import styled from "styled-components";

export const SLoginContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 187px;

  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 32px;
    background: #ffffff;
    border-radius: 10px;
    max-width: 400px;
  }

  .title-login {
    margin-right: 292px;
    margin-bottom: 40px;
    margin-left: 32px;

    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 26px;
    /* identical to box height */

    letter-spacing: -0.25px;

    color: #3a4374;
  }

  .mb-24 {
    margin-bottom: 24px;
  }

  .primary-input {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3a4374;

    padding: 8px 18px 8px 18px;

    width: 100%;
    border: none;
    background: none;
    border-bottom: 1px solid #4661e6;
    mix-blend-mode: normal;

    outline: none;
  }

  .login-your-account {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    color: #f2f4fe;

    border: none;
    background: #ad1fea;
    border-radius: 10px;
    padding: 14px 96.5px 15px 96.5px;
    margin-top: 40px;
    margin-bottom: 24px;
    cursor: pointer;
  }

  .login-your-account:hover {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #f2f4fe;

    background: #c75af6;
    border-radius: 10px;
  }

  .dont-have-account {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;

    color: #f49f85;
  }

  .sign-up {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    text-decoration-line: underline;

    color: #4661e6;

    padding-left: 9px;
    cursor: pointer;
    text-decoration: none;
  }
`;
