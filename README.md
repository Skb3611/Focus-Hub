![Logo](https://focus-hubco.netlify.app/favicon.ico)

# FocusHub  
Welcome to **Focus Hub**, a robust educational platform designed to facilitate comprehensive learning. Whether you’re preparing for competitive exams, learning to code, or exploring data analysis, Focus Hub provides a rich environment to support your educational journey.

## About Focus Hub

**FocusHub** is an educational platform focused on fostering academic excellence,
personal growth, and professional development. It offers a wide array of
courses, including preparation for competitive exams like JEE, NEET, and NDA,
as well as courses in coding, data analysis, graphic design, and mechanical
software. The platform emphasizes a supportive learning environment to help
students achieve their full potential and make meaningful contributions to
society. Additionally, Focus Hub provides resources for self-improvement and
skill development to prepare learners for various professional fields.


## Features
- **Login & SignUp**  
  Easy Login & Signup Functionality  focusing on security using password hashing and JWT token.

- **Booking offline study sessions**  
  Booking offline study session just by filling form about your need and receive a confirmation email instantly.

- **Latest Trending courses**  
  FocusHub provides latest courses under 4 categories i.e., Coding Courses,
  Data Analysis & Accounting, Graphics Design Software & Mechanical
  Software’s. Each category has latest courses which can be purchased online.
  Description of each course is specified with the trending syllabus.
    
- **Payment Mode**  
  Razorpay Payment Gateway Integration used for payment mode.
  Currently payments are in test mode.

- **Loading Skeletons**  
  Loading skeletons using npm package react-loading-skeletons for amazing skeletons that provide a better user experience.

- **Instant Email service**  
  Nodemailer for Instant and secure email service making easy for user to save the details provided by **FocusHub**.

- **Responsive design**
    Supports all type of devices.
 
## Screenshots  
### Emails

![Doubt Email](https://github.com/user-attachments/assets/a63839be-8fe9-433d-bcb9-69150c3f501d)

![Session Email](https://github.com/user-attachments/assets/6c6bad5a-2673-4191-b979-7d4a17e3c2da)

![Payment email](https://github.com/user-attachments/assets/bdb8c98b-6b94-440f-b0b3-f6198c08702b)

![Reset Password email](https://github.com/user-attachments/assets/692c81e1-8bf6-49a1-a50d-f1094e39520f)




## Tech Stack

- **Frontend:**
  - Next.js for overall project
  - Tailwind CSS for easy designing

- **Backend:**
  - Next.js Api's
  - Next.js Server actions

- **Database:**
  - MongoDB compass in development mode
  - MongoDB Atlas in production 
  - Mongoose for Schemas

- **Deployment:**  
    Netlify for deployment and monitoring

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Compass or Atlas 

### Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Skb3611/Focus-Hub.git
    cd Focus-Hub
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Configure the environment variables:**



To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI` mongodb_connection_string  
`SECRET` encryption_secret_here  
`EMAIL` website_email  
`PASS` application_baised_email_password  
`NEXT_PUBLIC_RAZORPAY_ID` razorpay_id_from_dashboard  
`RAZORPAY_SECRET`razorpay_secret_from_dashboard

4. **Start the development server:**

    ```sh
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

1. **Sign Up:**
   Create a new account.

2. **Log In:**
   Log in with your existing credentials.

3. **Browse Courses:**
   Explore various courses and select the ones you want to enroll in.

4. **Start Learning:**
   Access course materials, track your progress, and participate in interactive sessions.



## Contact

For any inquiries or issues, please open an issue on GitHub or contact us at shubhambhilare4899223@gmail.com

---

Thank you for choosing Focus Hub! We hope it enhances your learning experience.
