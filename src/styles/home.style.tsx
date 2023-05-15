import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #e5e5e588;
  .infinite-cards {
    display: flex;
    justify-content: center;
    .ddd {
      margin: 0 auto;
      position: absolute;
      .card {
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        background-image: url("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 564px;
        width: 390px;
        border-radius: 32px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        color: #fff;
        font-family: "DM Sans", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 122.02%;
        display: flex;
        align-items: end;
        justify-content: start;
        margin: 0 auto;
        p {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 10px 15px;
        }
      }
    }
  }
`;

export { MainWrapper };
