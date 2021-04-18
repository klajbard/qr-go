import React, { useRef, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgData, setImgData] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setImgData("");
    setErrorMsg("");
    const inputString = inputRef.current?.value || "";
    const inputData = {
      input: escape(inputString),
    };
    axios
      .post(
        `https://srsutz6vck.execute-api.eu-central-1.amazonaws.com/prod/qr`,
        inputData
      )
      .then(({ data }: AxiosResponse) => {
        setImgData(data);
      })
      .catch(({ response }: AxiosError) => {
        setErrorMsg(response?.data);
      });
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }
  return (
    <>
      <h1>QR code generator</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" name="input" />
        <input type="submit" />
      </form>
      {imgData && (
        <div>
          <h2>Result</h2>
          <img src={`data:image/png;base64,${imgData}`} alt="qrcode" />
        </div>
      )}
      {errorMsg && (
        <div>
          <h2>Error</h2>
          <strong>{errorMsg}</strong>
        </div>
      )}
    </>
  );
}
