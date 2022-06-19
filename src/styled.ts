import styled, { createGlobalStyle } from "styled-components";

const sm = (styles: string) => `
  @media only screen and (max-width: 600px) {
    ${styles}
  }
`

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 75%;
  }

  body {
    font-family: "Arial, Helvetica, sans-serif";
    margin: 0;
    cursor: default;
    font-size: 1.5rem;
    line-height: 1.5;
    background-color: #efefef;
  }

  ${sm(`
    html {
      font-size: 50%;
    }
  `)}

  a,
  :link {
    color: inherit;
}
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2rem;
  min-height: 62rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 5px;
  box-shadow: 3px 3px 12px #cecece;
`;

export const Title = styled.h1`
  margin: 1rem 0 2rem;
`;

export const SubTitle = styled.h2`
  margin: 1rem 0 2rem;
  font-size: 2rem;
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 2rem;
`;

export const Input = styled.input`
  flex: 1 1 20rem;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
`;

export const Submit = styled.input`
  flex: 1;
  padding: 0.5rem 2rem;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const QRCode = styled.img`
  height: 32rem;
  width: 32rem;
`;

export const Text = styled.h3`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  .i {
    box-sizing: border-box;
    width: 35rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    padding: 1rem;
  }
`;
export const Footer = styled.footer`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
`;

export const Icon = styled.a`
  display: inline-flex;
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
  &:hover {
    filter: drop-shadow(2px 2px 0 #cfcfcf);
  }
  &:active {
    filter: drop-shadow(2px 2px 0 #a0a0a0);
  }
`;
