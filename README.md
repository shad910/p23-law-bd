# 🧪 Lawyer Appointment Booking Application 
# Law. BD

"Law.BD" - A lawyer appointment booking web application featuring a professional banner, lawyer listings with details, service highlights, blog section, booking management, and contact support for seamless legal consultations.


# Live Link: https://p23-law-bd-shad910.netlify.app/

---


### 🧭 Navbar (Visible on All Pages)

- [ ] Display site **Logo** and **Site Name**
- [ ] Add **4 Navigation Menu Items** (as per Figma)
- [ ] Add a **button** at the right side (as per Figma)
- [ ] Should be consistent on all pages including the error page

---

### 🦶 Footer (Not Visible on Error Page)

- [ ] Center-aligned **Logo**
- [ ] Navigation menu items (as per Figma)
- [ ] Include **3 Social Media Icons** that link to your personal profiles
- [ ] Display footer on **all pages except error routes**

---

## 🏠 Homepage

### 🎯 Banner Section

- [ ] Center-aligned heading and description (as per Figma)
- [ ] Apply background image (as per Figma)

### ⚖️ Lawyers Section

- [ ] Add a section heading and text (as per Figma)
- [ ] Display **6 lawyers** in a `3 x 2` grid format
- [ ] Each Lawyer Card should include:
  - [ ] Image
  - [ ] Name
  - [ ] Speciality
  - [ ] Experience
  - [ ] License Number
  - [ ] “View Details” button → Navigates to Lawyer Details page

### 🏆 Success Section

- [ ] Show **4 Square Cards** with:
  - Icon
  - Number (with counting animation)
  - Title

---

## 👨‍⚖️ Lawyer Details Page

- [ ] Show a top info card titled “Lawyer’s Profile Details” and slogan as Figma
- [ ] Display:
  - [ ] Lawyer Image (left)
  - [ ] Name, Experience, Speciality, Fee
  - [ ] Availability (array of days)
- [ ] Include Appointment Card with:
  - Availability badge
  - Book Now button

### 🧾 Booking Logic

- [ ] If appointment NOT already booked:
  - Create new appointment
  - Show **success toast** with lawyer’s name
  - Navigate user to **Bookings page**
- [ ] If already booked:
  - Show **error toast**
  - Do not create duplicate booking

---

## 📅 Bookings Page

- [ ] Show all booked appointments in **1-column card** format
- Each card must display:
  - Lawyer Name
  - Fee
  - Speciality
  - Cancel Appointment Button
- [ ] If **no appointments**:
  - Display a heading message
  - Show a button to return to Homepage
- [ ] Cancel button must remove the appointment
- [ ] Bookings should persist even after page reload **(use localStorage)**

---

## 📚 Blogs Page

- Design a Blog page using your own Design and creativity
- Answer the following questions as blog articles:

1. What is `useState` and how does it work in React?
2. What is the purpose of `useEffect` in React?
3. What is a custom hook in React and when should you use one?
4. Difference between controlled and uncontrolled components. Which one is better?
5. Tell us something about `useFormStatus()` in React.

---

## ❌ Error Page (404)

- [ ] Display a custom-designed error page on **invalid routes**
- [ ] Must include Navbar
- [ ] Footer **should not appear**
- [ ] A button to redirect the user to Homepage

---

# Challenge Requirements

## 📊 Recharts

- Visualize appointment fees using **Recharts** (as per Figma)
- Canceling appointments should update the chart
- If no appointments exist, do **not** show chart

---

## 🔢 Counting Animation

- Use [`react-countup`](https://www.npmjs.com/package/react-countup) for counting animation on the Homepage

---

### ➤ Logo & Title

- Add Site Logo & Website Title

### ➤ Invalid Dynamic Routes

- If invalid route visited (e.g., `/lawyer/invalid-id`), show error message

### ➤ Redirection & Loading States

- Show a loading animation on every route change
- App must not crash on page reload
- Show fallback loader during data fetch on any page reload

---

## ✨ Optional Features

### ➤ Validate Booking Based on Availability

- If today’s date doesn’t match Lawyer’s availability:
  - Show “Lawyer is unavailable today”
  - Show “Unavailable” badge on Lawyer cards

### ➤ Dynamic Title using `useLocation()`

- Change title dynamically:
  - Booking Page → `Booking`
  - Lawyer Details → Lawyer’s Name
- **Do not** use third-party NPM packages

---

## ✅ Notes

- Have to work with the assigned Category.
- Minimum 10 Github Commits
- No Lorem Ipsum
- Image / video / resources will be relevant to the site
- Make your project responsive

---

Happy Coding! 🚀

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
