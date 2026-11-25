# MEDIVIA - Patient Case Taking Software

A simple, lightweight client-side Patient Case Taking and Clinical Record Management web application developed for **1st Year B.Tech CSE326 (Internet Programming / Web Development)** practical examination and viva.

---

## 📋 Project Information

- **Project Name:** MEDIVIA
- **Project Title:** Patient Case Taking Software
- **Course Code:** CSE326
- **Course Title:** Internet Programming / Web Development Laboratory
- **Class:** 1st Year B.Tech - Computer Science and Engineering
- **Academic Session:** 2026

### 👨‍💻 Team Members

1. **Parth Narayan Dubey** - Roll No: `12401001` (B.Tech CSE 1st Year)
2. **Aryan Sharma** - Roll No: `12401002` (B.Tech CSE 1st Year)
3. **Rohit Kumar** - Roll No: `12401003` (B.Tech CSE 1st Year)

---

## 🛠️ Technologies Used

This project is built purely from scratch using only fundamental web technologies taught in first-year engineering:

- **HTML5:** Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<fieldset>`, `<legend>`, `<form>`, `<table>`, `<footer>`)
- **CSS3:** Simple styling, Box Model, Flexbox navigation, clean tables, simple buttons, and cards.
- **JavaScript (ES5/Vanilla):** DOM manipulation (`getElementById`), event listeners, basic `for` loops, `if-else` statements, `alert()`, `confirm()`, and client-side data storage using `localStorage`.

> **Note:** No external frameworks, libraries, APIs, or backends (like Bootstrap, React, Node.js, Express, MySQL, or Firebase) are used. Everything runs directly in the browser!

---

## 🚀 Features

1. **Home Page (`index.html`):**
   - Clean navigation bar.
   - Project overview and quick access cards to key sections.
   
2. **Register Patient (`register.html`):**
   - Auto-generated Patient ID (e.g., `P101`, `P102`, ...).
   - Form fields: Patient Name, Age, Gender, 10-digit Phone Number, and Initial Symptoms.
   - Validation for required fields and phone number.
   - Stores patient record as JSON object inside `localStorage`.

3. **View Patient List (`patients.html`):**
   - Displays all registered patients in a clean HTML table.
   - Columns: `Patient ID`, `Name`, `Age`, `Phone`, `Action`.
   - **Search:** Search patient in real-time by Name.
   - **Delete:** Remove patient with confirmation alert.
   - **View Case:** One-click redirection to Case Taking for the selected patient.

4. **Case Taking (`case.html`):**
   - Select any registered patient from the dropdown or directly from the Patient List.
   - Displays patient ID, Name, Age, and Phone.
   - Case taking fields:
     - Symptoms
     - Diagnosis
     - Medicine prescribed
     - Doctor remarks & advice
   - Saves clinical case updates directly to `localStorage`.

5. **About Page (`about.html`):**
   - Project description, technology stack, academic information, and team details.

---

## 📁 Folder Structure

```text
Medivia/
│
├── index.html          # Home page
├── register.html       # Patient registration form
├── patients.html       # Patient table, search, delete & view case
├── case.html           # Clinical case taking (diagnosis, medicines, remarks)
├── about.html          # About project, team members and course details
│
├── css/
│   └── style.css       # Clean beginner-friendly CSS styling
│
├── js/
│   ├── register.js     # Patient registration & ID auto-generation logic
│   ├── patients.js     # Patient list rendering, search, and delete logic
│   └── case.js         # Case taking and diagnosis management logic
│
├── images/             # Image directory
│
└── README.md           # Project documentation and viva guide
```

---

## 💻 How to Run the Project

1. Download or extract the project folder.
2. Locate the file **`index.html`**.
3. Double click **`index.html`** or right click and select **Open with Chrome / Firefox / Edge**.
4. The project runs instantly without any server setup, npm install, or database connection!

---

## 🎓 Viva Questions & Answers (CSE326 Practical)

Here are the most common viva questions asked by external examiners for this project:

### Q1: What is `localStorage` and how does it work in your project?
**Answer:** `localStorage` is a client-side Web Storage API provided by HTML5. It stores key-value pairs in the web browser with no expiration date. In our project, we store all patient and case records under the key `"patients"` as a JSON string using `localStorage.setItem()` and retrieve it using `localStorage.getItem()`.

### Q2: Why did you use `JSON.stringify()` and `JSON.parse()`?
**Answer:** `localStorage` can only store values as strings. 
- `JSON.stringify()` converts our JavaScript array of patient objects into a string so it can be saved in `localStorage`.
- `JSON.parse()` converts the JSON string back into a JavaScript array/object so we can use loops and modify data.

### Q3: How is the Patient ID auto-generated?
**Answer:** When `register.html` loads, JavaScript reads the existing `"patients"` array from `localStorage`. It calculates `100 + (patients.length + 1)` and assigns an ID like `P101`, `P102` to the read-only input field.

### Q4: How does searching work in Patient List?
**Answer:** When the user enters a name and clicks search, JavaScript loops through the patients array using a basic `for` loop. It compares each patient's name with the search query using `.toLowerCase()` and `.indexOf()`. Matching records are dynamically added to the table body.

### Q5: What is the difference between `localStorage` and `sessionStorage`?
**Answer:** Data stored in `localStorage` persists even after closing and reopening the browser window or tab. Data in `sessionStorage` is cleared automatically when the browser tab or session is closed.
