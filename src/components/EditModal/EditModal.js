import { useState } from "react";
import { HandleSave } from "../Functions/HandleSave";
import "./editModal.css"

export const EditModal = ({ currentUser, avatar, Exit }) => {
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    age: currentUser.age,
    gender: currentUser.gender,
  });

  const handleEdit = () => {
    setEditMode(true);
  };

const handleSaveClick = () => {
  HandleSave({formData,currentUser,avatar,setEditMode})
}


  const handleCancel = () => {
    setEditMode(false);
    setFormData({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      age: currentUser.age,
      gender: currentUser.gender,
    });
  };

  return (
    <div>
      {editMode ? (
        <div className="edit-form">
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />

          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <div style={{ marginTop: "10px" }}>
            <button className="save-btn" onClick={handleSaveClick}>✅Save</button>
            <button className="cancel-btn" onClick={handleCancel}>❌ Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Name: {formData.firstName}</h1>
          <h1>Last Name:{formData.lastName}</h1>
          <h2>Age: {formData.age}</h2>
          <h3>Gender: {formData.gender}</h3>
          <button onClick={Exit}>Log Out</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};
