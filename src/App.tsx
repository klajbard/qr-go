import React, { useRef, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

import styles from "./App.less";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgData, setImgData] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");

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
      setQrValue(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <h1 className={styles.title}>QR code generator</h1>
      <h2 className={styles.secondaryTitle}>
        Generate QR code from plain text
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          ref={inputRef}
          type="text"
          name="input"
          autoComplete="off"
        />
        <input className={styles.submit} type="submit" value="Generate!" />
      </form>
      {imgData && (
        <div className={styles.container}>
          <img
            className={styles.qrCode}
            src={`data:image/png;base64,${imgData}`}
            alt="qrcode"
          />
          <h2 className={styles.text}>
            <i className={styles.innerText} title={qrValue}>
              {qrValue}
            </i>
          </h2>
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
