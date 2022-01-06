import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };
  return (
    <div className="formInput">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
