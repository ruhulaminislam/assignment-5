# assignment-5


# 🚀 DevStack

DevStack is a simple web application that helps developers explore different technologies and build their own development stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* React Icons

## ✨ Features

### 1. Add Technology

Users can add a technology to their stack. After adding, the **Add to Stack** button is disabled and a toast message is shown.

### 2. Remove Technology

Users can remove a technology from their stack with a single click. A toast message is shown, and the **Add to Stack** button becomes active again.

### 3. Remove All

Users can remove all selected technologies at once by clicking **Remove All**. A toast message confirms the action.

## 📚 React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. I used JSX to create the UI of my React components.

### 2. What is the difference between props and state?

Props are used to pass data between components. State is used to store and update data inside a component. In my project, I used `cardData` as state and passed `cardData` and `setCardData` as props.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a component. I used it in `App.tsx` to store the data-fetching Promise and in `Technologies.tsx` to store the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders. I did not use `useEffect` in this project. I used `async`, `fetch`, Promise, `use()`, and `Suspense` to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. In my project, I used `card.id` as the key for each technology.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. I used it in `Stack.tsx` to show **"Your stack is empty."** when no technology is selected. When there are selected technologies, I show the technology list.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. In my project, I passed `cardData` and `setCardData` from `Technologies` to `Stack`. The `Stack` component uses `setCardData` to remove one technology or remove all technologies.

