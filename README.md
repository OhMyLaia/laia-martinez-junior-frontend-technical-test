# 🎯 Frontend Test — Session Finder + Schedule
## By Laia Martinez Lerma

## UI's DEMO (responsive)
<img width="576" height="769" alt="Screenshot 2025-11-07 at 16 42 07" src="https://github.com/user-attachments/assets/64cf0ad9-2e74-452a-996d-f068eaf60e90" />
<img width="575" height="765" alt="Screenshot 2025-11-07 at 16 42 23" src="https://github.com/user-attachments/assets/290910d2-5317-4e55-a464-a12bb4d8d73e" />
<img width="575" height="767" alt="Screenshot 2025-11-07 at 16 43 05" src="https://github.com/user-attachments/assets/7e4d0d19-365f-4a01-ac11-d2adfc4bbfae" />
<img width="375" height="664" alt="Screenshot 2025-11-07 at 16 43 32" src="https://github.com/user-attachments/assets/75c95b44-9bd5-45a4-a7bd-ceb81efa5bc1" />
<img width="371" height="662" alt="Screenshot 2025-11-07 at 16 43 46" src="https://github.com/user-attachments/assets/03d7043f-7fc5-4b1a-920c-9478558bd09a" />
<img width="374" height="665" alt="Screenshot 2025-11-07 at 16 44 01" src="https://github.com/user-attachments/assets/679deeea-6889-4947-bd8b-a5a493b09a56" />


## 📖 Overview

This project is a React-based application, some of it's features are:

1. **Search sessions** by title, track, or speaker.
2. **Add/remove sessions** to/from a personal schedule.
3. **Register** using a form with validation and receive a confirmation ID.
4. Shows **personal touch** with a clean UI, defined styles and reusable components.

The app is styled using **Tailwind CSS** and follows a functional and modular architecture --> components / layouts / pages / routes / utils / ...

---

## 🚀 Features

### 1. Search
- Filter sessions by **title**, **track**, or **speaker**.
- Display session details such as title, track, speaker, start time (in local timing), and duration.
- Toggle button, to avoid adding duplicates to "my schedule".

### 2. My schedule
- View a list of sessions added to the schedule.
- Remove sessions from the schedule.

### 3. Register
- A form with fields for **name**, **email**, and **role**.


- **Validation**:
  - Name: required, allows only letters, apostrophes, hyphens, and spaces.
  - Email: must be a valid email format.
  - Role: required.
- On successful submission, displays a confirmation ID.
- If some input is wrong, does not allow to send.

### 4. Shared state
- The schedule is managed using a **context provider** (`ScheduleContext`) to share state across components.

---

## 🛠 Tech stack

- **React**: Frontend framework.
- **React Router**: For routing between pages.
- **Tailwind CSS**: For styling.
- **Vite**: Build tool for fast development.
- **React Icons**: For icons used in the UI.

---

## 📂 Project structure

```
src/
├── api.js                # Mock API for sessions and registration
├── context/              # Context for shared state 
├── layout/               # Layout components (for ex: Navbar)
├── pages/                # Page components 
├── routes/               # AppRoutes for routing
├── utils/                # Utility functions 
├── App.jsx               # Main app component
├── App.css               # Global styles
├── main.jsx              # Entry point
```

---

## ▶️ How to run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## 🧪 Testing

To lint the code, run:
```bash
npm run lint
```

---

## 📑 Desired improvements

- **Testing**: Add unit tests for components.
- **Usability**: clean state when query enters (on key down, for ex.)
- **Performance**: Optimize rendering for large session lists with useMemo on CardList, for example.
- **Styling**: Add animations, pcitures and original fonts.
- **User**: create a context when a user's been registered to show, for example, "My Profile" instead of "Register" in navbar.
- **Toggle**: Add animations to button for a real toggle effect.


---

## 📦 Dependencies

- **React**: For building the UI.
- **React Router**: For navigation.
- **Tailwind CSS**: For utility-first styling.
- **React Icons**: For scalable vector icons.
- **Vite**: For fast development and build.
