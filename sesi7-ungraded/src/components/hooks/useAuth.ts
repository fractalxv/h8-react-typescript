import { useState } from "react";

const validUser = {
  fullName: "Admin admin",
  email: "admin@mail.com",
  password: "admin123",
  confirmPass: "admin123",
  Age:"20"
};

const useAuth = () => {
  const [isRegistIn, setIsRegistIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [age, setAge] = useState(""); 
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const regist = (fullName: string, email: string, password: string, confirmPass: string, age: string) => {
    console.log(fullName, email, password, confirmPass, age);

    setFullName(validUser.fullName);
    setEmail(email);
    setPassword(password);
    setConfirmPass(validUser.confirmPass);
    setAge(validUser.Age);
    setIsRegistIn(true);
    setUser(validUser);
  };

  return {
    isRegistIn,
    user,
    fullName,
    email,
    password,
    confirmPass,
    age,
    error,
    setError,
    regist,
    setIsRegistIn,
  };
};

export default useAuth;