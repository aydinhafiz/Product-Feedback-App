import styled from "styled-components";

export const SAddCommentBar = styled.div`
  background: #ffffff;
  border-radius: 10px;

  .add-comment-write h2 {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 34px;
  }

  .textarea-write {
    color: #8c92b3;
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 28.5px;
    outline: none;
    border: none;
    resize: none;
    width: 664px;
    margin-left: 34px;
    padding: 16px 0px 42px 24px;
    border-radius: 5px;
    background: #f7f8fd;
  }

  .add-comment-state {
    display: flex;
    justify-content: space-between;
  }

  .characters-left {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
    margin-left: 34px;
  }

  .post-comment {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #f2f4fe;
    background: #ad1fea;
    border-radius: 10px;
    border: none;
    padding: 12.5px 24px;
    margin-right: 32px;
    margin-bottom: 32px;
    cursor: pointer;
  }

  .post-comment:hover {
    background: #c75af6;
    border-radius: 10px;
  }

  .comments-content {
    margin-bottom: 24px;
    padding: 0 32px;
  }

  .comment-likes {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f2f4fe;
    border-radius: 10px;
    width: 40px;
    height: 53px;
    margin-right: 40px;
    margin-left: 32px;
    margin-top: 34px;
    cursor: pointer;
  }

  .comment-likes:hover {
    background: #cfd7ff;
    border-radius: 10px;
  }

  .comment-likes span {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3a4374;
    margin-top: 25px;
  }

  .comment-likes img {
    position: absolute;
  }

  .feedback {
    display: flex;
  }

  .title {
    margin-top: 34px;
  }

  .profile-img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;
