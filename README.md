<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="120" />
</p>

<h1 align="center">🔐 React Register / Login / Profile App</h1>

<p align="center">
  Simple user system with LocalStorage auth, editable profile & avatar upload (base64)
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/Auth-LocalStorage-green" />
  <img src="https://img.shields.io/badge/UI-Clean%20Glassmorphism-purple" />
</p>

---

## 🚀 About The Project

This project demonstrates:

- Register new users & save to LocalStorage
- Login system with persistent session
- Profile page with:
  - Avatar upload (stored in LocalStorage as Base64)
  - Edit profile (name, age, gender)
  - Form validation (no numbers in names, etc.)
- Logout button
- Clean structure + reusable functions

Perfect for learning **React authentication logic without a backend**.

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ API_Routers/
 │   │   └─ ApiRouters.jsx   # React Router setup
 │   ├─ EditModal/
 │   │   ├─ editModal.css
 │   │   └─ EditModal.js     # Profile edit form
 │   └─ Functions/
 │       ├─ HandleImageUpload.js
 │       └─ HandleSave.js    # Save profile changes
 │
 ├─ Pages/
 │   ├─ Login/
 │   │   ├─ login.css
 │   │   └─ Login.jsx
 │   ├─ Profile/
 │   │   ├─ profile.css
 │   │   └─ Profile.jsx
 │   └─ Register/
 │       ├─ register.css
 │       └─ Register.jsx
 │
 ├─ App.js
 ├─ App.css
 ├─ index.js
 └─ index.css
```

---

## 📸 Demo (Add screenshots later)

| Register | Login | Profile |
|---------|-------|--------|
| 📥 | 🔑 | 👤 |

---

## 🛠 Installation

### Clone repo

```bash
git clone https://github.com/And-Koch/register-login-profile.git
cd register-login-profile
```

### Install dependencies

```bash
npm install
```

### Run project

```bash
npm start
```

---

## ✅ Features Checklist

- [x] Register user
- [x] Store users in LocalStorage
- [x] Login & create session
- [x] Profile page
- [x] Avatar upload (Base64)
- [x] Edit profile
- [x] Live UI updates
- [x] Form validation
- [ ] Protected routes ✅ *Next step*
- [ ] Reset password
- [ ] Backend / Firebase support
- [ ] Dark mode

---

## 📎 Author

**Ando Kocharyan**  
GitHub: https://github.com/And-Koch  

⭐ If you like this project — please give it a star!

<p align="center">Made with ❤️ & React</p>
