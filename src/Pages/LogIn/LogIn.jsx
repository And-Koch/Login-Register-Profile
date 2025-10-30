import { useNavigate } from "react-router-dom";
import "./logIn.css";

export const LogIn = () => {
  const navigate = useNavigate();

  

  const onSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const loginInput = form.login.value;
  const passwordInput = form.password.value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (u) => u.login === loginInput && u.password === passwordInput
  );

  if (foundUser) {
    alert("✅ Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    navigate("/profile", { state: foundUser });
  } else {
    alert("❌ Wrong login or password");
  }
};


  return (
    <div className="loginBox">
      <form className="loginView" onSubmit={onSubmit}>
        <input type="text" name="login" placeholder="Log-In" required />
        <input type="password" name="password" placeholder="Password" required />
        <div style={{ display:'flex', gap:'10px',alignItems:'center' }}>
          <button type="submit">Login</button>
          <p style={{fontSize:"20px"}}>or</p>
          <button type="button" onClick={() => navigate("register")}>Sign up</button>
        </div>
      </form>
    </div>
  )};