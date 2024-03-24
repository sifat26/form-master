import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmailChange = (e) => {
    // e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input
        onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefulForm;
