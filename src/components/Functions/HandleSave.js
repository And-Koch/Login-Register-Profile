export const HandleSave = ({ formData, currentUser, avatar, setEditMode }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.age ||
    !formData.gender
  ) {
    alert("Please fill in all fields.");
    return;
  }

  if (/\d/.test(formData.firstName)) {
    alert("Name cannot contain numbers");
    return;
  }

  if (/\d/.test(formData.lastName)) {
    alert("Last name cannot contain numbers");
    return;
  }

  if (
    formData.firstName.trim().length < 2 ||
    formData.lastName.trim().length < 2
  ) {
    alert("Name and last name must be at least 2 characters");
    return;
  }

  const nameRegex = /^[\p{L}\p{M}'\- ]+$/u;

  if (
    !nameRegex.test(formData.firstName) ||
    !nameRegex.test(formData.lastName)
  ) {
    alert("Name must contain only letters");
    return;
  }

  const updatedUser = {
    ...currentUser,
    ...formData,
    avatar: avatar || currentUser.avatar,
  };
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));

  const updatedUsers = users.map((u) =>
    u.login === updatedUser.login ? updatedUser : u
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  setEditMode(false);
  alert("✅ Profile updated!");

  return true;
};
