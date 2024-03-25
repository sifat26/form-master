import { useEffect, useRef, useState } from "react";
const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  useEffect(() => {}, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    if (passwordRef.current.value.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} name="name" />
        <br />
        <input ref={emailRef} type="email" name="email" id="" />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default RefForm;
