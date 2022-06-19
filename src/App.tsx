import React, { FormEvent, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";

import { GitHubIcon } from "./icons/icons";
import * as Styled from "./styled";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgData, setImgData] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setImgData("");
    setErrorMsg("");
    const inputString = inputRef.current?.value || "";
    const inputData = {
      input: decodeURIComponent(inputString),
    };
    axios
      .post(
        `https://srsutz6vck.execute-api.eu-central-1.amazonaws.com/prod/qr`,
        inputData
      )
      .then(({ data }: AxiosResponse) => {
        setImgData(data);
      })
      .catch(setErrorMsg);
    if (inputRef.current) {
      setQrValue(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.Title>QR code generator</Styled.Title>
        <Styled.SubTitle>Generate QR code from plain text</Styled.SubTitle>
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Input
            ref={inputRef}
            type="text"
            name="input"
            autoComplete="off"
          />
          <Styled.Submit type="submit" value="Generate!" />
        </Styled.Form>
        {imgData && (
          <Styled.QRContainer>
            <Styled.QRCode
              src={`data:image/png;base64,${imgData}`}
              alt="qrcode"
            />
            <Styled.Text>
              <i title={qrValue}>{qrValue}</i>
            </Styled.Text>
          </Styled.QRContainer>
        )}
        {errorMsg && (
          <div>
            <h2>Error</h2>
            <strong>{errorMsg}</strong>
          </div>
        )}
        <Styled.Footer>
          <Styled.Icon
            title="Source code on GitHub"
            href="https://github.com/klajbard/qr-go"
          >
            <GitHubIcon />
            github.com/klajbard/qr-go
          </Styled.Icon>
        </Styled.Footer>
      </Styled.Wrapper>
    </>
  );
}
