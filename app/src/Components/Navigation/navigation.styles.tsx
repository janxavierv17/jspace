import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 67px 0 67px;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    font-size: 14px;

    height: 48px;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 417px;

    li {
      padding: 0 14px;
      font-weight: bold;
      font-size: 14px;
    }
  }
`;
