import { useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const navigate = useNavigate();



  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    

    const newUser = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      age: form.age.value,
      gender: form.gender.value,
      login: form.login.value,
      password: form.password.value
    };
    
    if (!newUser.firstName || !newUser.lastName || !newUser.age || 
        !newUser.gender || !newUser.login || !newUser.password) {
      alert("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.login === newUser.login);

    if(userExists) {
        alert("User whith this login alredy exists!")
        return
    } 
    
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Registration successful!");

    navigate("/");
  };

  return (
    <div className="registerBox">
      <h2>Register</h2>
      <form className="formBox" onSubmit={onSubmit}>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="number" name="age" placeholder="Age" />

        <div>
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" value="male" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" value="female" />
        </div>
        
        
        <input type="text" name="login" placeholder="Log-In" />
        <input type="password" name="password" placeholder="Password" />

        <input type="submit" value="Register" />
        <button onClick={() => navigate("/")}>Go Back</button>
      </form>
    </div>
  );
};
