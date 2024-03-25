import styled from "styled-components";

export const SRoadmap = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 19px 24px 40px 24px;

  @media only screen and (max-width: 950px) {
    width: 223px;
    height: 165px;
  }

  @media only screen and (max-width: 800px) {
    max-height: 170px;
    width: 180px;

    padding: 15px 0px 0px 15px;
  }

  @media only screen and (max-width: 680px) {
    max-height: 150px;
    width: 150px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;

    @media only screen and (max-width: 680px) {
      padding-bottom: 10px;
    }
  }

  .nav-bar h2 {
    font-family: "Jost";
    font-style: normal;
    color: #3a4374;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;

    @media only screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  .roadmap-view {
    padding-right: 24px;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;

    font-family: "Jost";
    font-style: normal;
    text-decoration-line: underline;
    color: #4661e6;
    cursor: pointer;
    border: none;
    background: none;

    @media only screen and (max-width: 800px) {
      margin-right: 5px;
    }
    @media only screen and (max-width: 680px) {
      font-size: 10px;
    }
  }

  .roadmap-view-no-feedback {
    @media only screen and (max-width: 800px) {
      margin-right: 5px;
    }
  }
  .roadmap-view:hover {
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;

    font-family: "Jost";
    font-style: normal;
    text-decoration-line: underline;
    color: #8397f8;
  }

  .roadmap-view-no-feedback {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */
    border: none;
    background: none;
    text-decoration-line: underline;

    color: #4661e6;

    mix-blend-mode: n;
  }

  .color-1 {
    margin-left: 24px;
    margin-right: 16px;
  }

  .number-span span {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }

  .roadmap-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-left: 24px;
  }

  .roadmap-item::after {
    content: "";
    height: 8px;
    width: 8px;
    border-radius: 50%;
    position: absolute;
    left: -20px;
    top: 6px;
  }

  .roadmap-item:nth-child(1)::after {
    background: #f49f85;
  }

  .roadmap-item:nth-child(2)::after {
    background: #ad1fea;
  }

  .roadmap-item:nth-child(3)::after {
    background: #62bcfa;
  }

  .roadmap-item:not(:last-child) {
    margin-bottom: 8px;
  }

  .roadmap-item span {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: right;
    color: #647196;
    margin-right: 24px;
    text-transform: capitalize;

    @media only screen and (max-width: 680px) {
      font-size: 13px;
      margin-right: 20px;
    }
  }
`;
