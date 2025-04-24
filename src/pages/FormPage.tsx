import { useState } from "react";

const FormPage = () => {
  //uncontrolled component/input
  // const inputRef = useRef<HTMLInputElement>(null);
  // const inputEmailRef = useRef<HTMLInputElement>(null);

  //controlled component/input
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = () => {
    // const fullNameFromValue = inputRef.current?.value;
    // const emailFormValue = inputEmailRef.current?.value;
    // alert("Form submitted!: " + fullNameFromValue + " " + emailFormValue);

    const usernameFormValidation = usernameInput.length < 3;
    const passwordFormValidation = passwordInput.length < 8;
    if (usernameFormValidation) {
      setUsernameErrorMessage("Username minimal 3 karakter");
    }

    if (passwordFormValidation) {
      setPasswordErrorMessage("Password minimal 8 karakter");
    }
  };
  return (
    <div>
      <h1>Form Page</h1>
      <h3>Username: {usernameInput}</h3>
      <h3>Password: {passwordInput}</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          maxWidth: "250px",
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => {
            setUsernameInput(e.target.value);
            const usernameValidation = e.target.value.length < 3;
            if (usernameValidation) {
              setUsernameErrorMessage("Username minimal 3 karakter");
            } else {
              setUsernameErrorMessage("");
            }
          }}
          id="username"
          type="text"
          value={usernameInput}
        />
        <span style={{ color: "red" }}>{usernameErrorMessage}</span>

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => {
            setPasswordInput(e.target.value);
            const passwordValidation = e.target.value.length < 8;
            if (passwordValidation) {
              setPasswordErrorMessage("Password minimal 8 karakter");
            } else {
              setPasswordErrorMessage("");
            }
          }}
          id="password"
          type="password"
          value={passwordInput}
        />
        <span style={{ color: "red" }}>{passwordErrorMessage}</span>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormPage;
