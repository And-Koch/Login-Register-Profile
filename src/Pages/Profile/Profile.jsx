import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HandleImageUpload } from "../../components/Functions/HandleImageUpload";
import { EditModal } from "../../components/EditModal/EditModal";
import "./profile.css";

export const Profile = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [avatar, setAvatar] = useState(currentUser?.avatar || null);

  const Exit = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };

  return (
   <div className="profile-container">
  <div className="avatar-wrapper">
    <input
      type="file"
      accept="image/*"
      onChange={(e) => HandleImageUpload(e, { currentUser, setAvatar })}
    />
    <img src={avatar} alt="profile" />
  </div>

  <EditModal currentUser={currentUser} avatar={avatar} Exit={Exit} />
</div>
  );
};
