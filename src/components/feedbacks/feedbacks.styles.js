import styled from "styled-components";

export const SCommentsCount = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.222222px;
  color: #3a4374;

  ${(props) => {
    return props.isZero
      ? `mix-blend-mode: normal;
  opacity: 0.5;`
      : "";
  }}
`;

export const SFeedback = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background: #ffffff;
  border-radius: 10px;
  /* padding: 28px 32px 64px 32px; */
  padding: 28px 32px;
  @media only screen and (max-width: 800px) {
    padding: 18px 25px;
  }
  @media only screen and (max-width: 680px) {
    padding: 15px 20px;
    max-width: 600px;
  }

  @media only screen and (max-width: 375px) {
  }
  /* margin-left: 30px; */
  flex: 1;
  max-width: 825px;
  width: 100%;

  .title h2 {
    margin-bottom: 4px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    cursor: pointer;
    text-decoration: none;

    @media only screen and (max-width: 680px) {
      font-size: 16px;
    }

    /* @media only screen and (max-width: 375px) {
      margin-bottom: 10px;
    } */
  }

  .title :hover {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #4661e6;
  }

  .info-bar p {
    margin-bottom: 12px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;

    @media only screen and (max-width: 680px) {
      font-size: 14px;
      margin-bottom: 8px;
    }

    /* @media only screen and (max-width: 375px) {
      margin-bottom: 10px;
    } */
  }

  .btn-category {
    border: none;
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #4661e6;
    background: #f2f4ff;
    border-radius: 10px;
    padding: 5px 16px 5px 16px;

    @media only screen and (max-width: 680px) {
      padding: 3px 14px;
      font-size: 12px;
    }
  }

  .comments-bar {
    display: flex;
    align-items: center;
  }

  .comments-bar img {
    margin-right: 8px;
    width: 18px;
    height: 16px;

    @media only screen and (max-width: 680px) {
      width: 16px;
      height: 14px;
    }
  }

  .info-bar {
    margin-right: auto;
  }

  .likes-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 8px;
    max-width: 40px;
    margin-right: 40px;
    background: #f2f4fe;
    border-radius: 10px;
    cursor: pointer;
    min-width: 40px;
    border: none;
    :hover {
      color: #3a4374;
      background: #cfd7ff;
    }

    img {
      width: 8px;
      height: 4px;
    }

    span {
      display: inline-block;
      font-family: "Jost";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.180556px;
      color: #3a4374;
    }

    /* @media only screen and (max-width: 375px) {
      padding: 5px 30px;
      margin-right: 0;
      width: 100px;
      margin-bottom: 10px;
    } */
  }

  .upvoted {
    border-radius: 10px;
    background: #4661e6;
  }

  .likes-bar-upvote {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 8px;
    max-width: 40px;
    margin-right: 40px;
    cursor: pointer;
    min-width: 40px;

    border-radius: 10px;
    background: #4661e6;
    border: none;
    :hover {
      color: #3a4374;
      background: #cfd7ff;
    }

    img {
      width: 8px;
      height: 4px;
    }

    span {
      display: inline-block;
      text-align: center;

      color: #fff;
      text-align: center;
      font-family: Jost;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.181px;
    }
    /* 
    @media only screen and (max-width: 375px) {
      padding: 5px 30px;
      margin-right: 0;
      width: 100px;
      margin-bottom: 10px;
    } */
  }

  a {
    text-decoration: none;
  }

  .title {
    margin-top: 0px;

    @media only screen and (max-width: 375px) {
    }
  }
`;

// export const SInfobar = styled.div`
//   margin-right: auto;

//   .p {
//     margin-bottom: 12px;
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 23px;
//     color: #647196;
//   }

//   .button {
//     border: none;
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 13px;
//     line-height: 19px;
//     color: #4661e6;
//     background: #f2f4ff;
//     border-radius: 10px;
//     padding: 5px 16px 5px 16px;
//   }

//   .title {
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 26px;
//     letter-spacing: -0.25px;
//     color: #3a4374;
//     margin-bottom: 4px;
//   }

//   .title h2 {
//     margin-bottom: 4px;
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 26px;
//     letter-spacing: -0.25px;
//     color: #3a4374;
//     cursor: pointer;
//     text-decoration: none;
//   }

//   .title :hover {
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 26px;
//     letter-spacing: -0.25px;
//     color: #4661e6;
//   }

//   .feedbacks {
//     flex: 1;
//     max-width: 825px;
//     width: 100%;
//   }

//   .info-bar button {
//     border: none;
//     font-family: "Jost";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 13px;
//     line-height: 19px;
//     color: #4661e6;
//     background: #f2f4ff;
//     border-radius: 10px;
//     padding: 5px 16px 5px 16px;
//   }
// `;
