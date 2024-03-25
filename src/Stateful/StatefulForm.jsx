import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState('Sifat');
  const [error,setError] = useState('');
  console.log(password);
//   if(password.length>6){
//     setError("Password must be at least 6 characters");
//   }
//   else{
//     setError("");
//   }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length<6)
    {
      setError("Password must be at least 6 characters");
    }
    else{
      setError("");
    }
    console.log(email);
    console.log(password);
  };
  const handleEmailChange = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNameChange} name="name" value={name} />
        <br />
        <input
        onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input
        onChange={handlePasswordChange} type="password" name="password" required/> <br />
        <input type="submit" value="Submit" />
        {
            error && <p >{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefulForm;
