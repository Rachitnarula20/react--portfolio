# Portfolio Website Overview

## Project Structure
The portfolio website is a React-based application with the following key components:

### 1. Home Page (`home.jsx`)
- **Features**: 
  - An animated introduction using the `AnimatedLetters` component.
  - Personal branding with the name "Rachit" and title as "Frontend Developer | JavaScript Expert | Freelancer."
  - Includes a call-to-action button linking to the Contact page.
- **Design**: Utilizes a logo component (`RLogo`) and animations for interactive elements.

### 2. About Page (`about.jsx`)
- **Content**:
  - Introduces the developer as an ambitious frontend developer.
  - Includes a detailed personal description focusing on passion for technology and problem-solving.
  - Features an avatar for visual enhancement.
- **Interactive Elements**: Animated heading implemented via `AnimatedLetters`.

### 3. Contact Page (`contact.jsx`)
- **Functionality**:
  - Interactive form for users to send messages (Name, Email, Subject, and Message).
  - Email sending integrated with `emailjs`.
- **Design**:
  - Animated heading using `AnimatedLetters`.
  - Clear, user-friendly form layout.

### 4. Projects Page (`projects.jsx`)
- **Content**:
  - Displays a portfolio of projects with the following:
    1. WSI Viewer
    2. Shopping Cart
    3. Portfolio
  - Each project includes an image, name, and link for more details.
- **Interactive Elements**: 
  - Hover effects reveal project details and a button to visit the project.

### 5. Skills Page (`skills.jsx`)
- **Features**:
  - Lists technical skills, including HTML5, CSS3, JavaScript, React, Redux, jQuery, Bootstrap, and Tailwind CSS.
  - Highlights experience in creating responsive designs and optimizing performance.
- **Design**: Includes an interactive rotating cube (`Cube` component) displaying technology icons.

### 6. Sidebar Navigation (`sidebar.jsx`)
- **Navigation**:
  - Links to Home, About, Skills, Projects, and Contact pages.
  - Includes social media links (LinkedIn, GitHub, Instagram).
- **Responsive Design**:
  - Mobile-friendly with a hamburger menu for smaller screens.

### 7. Layout Component (`layout.jsx`)
- **Structure**:
  - Serves as the overall layout, integrating the Sidebar and other page components.
  - Wraps the content with `<html>` and `<body>` tag indicators for visual flair.

### 8. Cube Component (`cube.jsx`)
- **Features**:
  - A 3D rotating cube showcasing technology stack icons using FontAwesome.
  - Represents skills in a visually engaging way.

## Key Highlights
- **Animations**: Extensive use of `AnimatedLetters` for dynamic, engaging text elements.
- **Responsive Design**: Optimized for various devices using modern CSS techniques.
- **Interactive Elements**: Hover effects, 3D animations, and a mobile-friendly navigation bar.
- **Technologies Used**:
  - Frontend: React, SCSS
  - Libraries: FontAwesome, EmailJS

