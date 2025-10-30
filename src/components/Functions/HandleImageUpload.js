export const HandleImageUpload = (e,{currentUser,setAvatar}) => {
    
    
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setAvatar(base64Image);
      const updatedUser = { ...currentUser, avatar: base64Image };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((u) =>
        u.login === updatedUser.login ? updatedUser : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    };
    reader.readAsDataURL(file);
    return true;
  };