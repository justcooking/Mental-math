# Technical Architecture
The Mental Arithmetic Website will be built as a full-stack web application.

The main parts of the application are:
User
  ↓
Frontend
  ↓
Backend Services
  ├── Authentication
  ├── Database
  └── User Progress
## 1. Technology Stack
### Frontend
- React
- Vite
- JavaScript
- HTML
-CSS
### Backend and Database
- Supabase
- PostgreSQL
### Authentication
- Supabase Auth
- Google OAuth
### Version Control
- Git
- GitHub
### Deployment
- Vercel
## 2. Application Structure

The application will be divided into several major functional areas.

Mental Arithmetic Website
│
├── Learn
│   ├── Chapters
│   ├── Lessons
│   └── Chapter Practice
│
├── Practice
│   ├── Practice Configuration
│   ├── Question Generation
│   ├── Practice Session
│   └── Practice Results
│
├── Progress
│   ├── Learning Progress
│   ├── Practice History
│   └── Performance Statistics
│
├── Account
│   ├── Sign In
│   └── User Information
│
└── Settings
    ├── Theme
    └── Account Settings
User
  │
  ├── Learn ──────→ Lessons ──────→ Lesson Practice
  │                         │
  │                         └──────→ Chapter Practice
  │
  ├── Practice ──→ Configure ──→ Generate Questions
  │                              ↓
  │                         Practice Session
  │                              ↓
  │                           Results
  │
  ├── Progress
  │
  ├── Account
  │
  └── Settings
## 3. Frontend Architecture

The frontend will be built using React and Vite.

React will be responsible for rendering the user interface and managing the interactive parts of the application.

### Main Frontend Areas

The frontend will contain the following major areas:

- Learn
- Practice
- Progress
- Account
- Settings

Each area will be composed of reusable React components.

### Pages

The application will use separate pages or views for major user-facing areas.

Examples include:

- Home
- Learn
- Chapter
- Lesson
- Practice
- Practice Results
- Progress
- Account
- Settings

The exact pages and routes will be finalized during implementation.

### Components

The interface will be built using reusable components.

Examples include:

- Navigation
- Chapter cards
- Lesson cards
- Progress indicators
- Practice question display
- Answer input
- Feedback display
- Practice filters
- Results summary
- Buttons
- Forms
- Theme controls

Components should be reused where the same functionality or interface pattern appears in multiple places.

### State

The frontend will need to manage application state such as:

- Current user
- Current lesson
- Current practice session
- Current question
- User answers
- Practice results
- Theme preference
- Learning progress

Local state should be used for temporary interface state.

Persistent user data should be stored through the backend/database.

### Data Communication

The frontend will communicate with Supabase when it needs to:

- Authenticate users
- Retrieve user data
- Save progress
- Retrieve progress
- Save practice results
- Retrieve practice history

The frontend should not directly contain sensitive credentials or privileged backend logic.

### Responsive Interface

The frontend should be responsive and usable on:

- Desktop
- Laptop
- Tablet
- Mobile

The interface should adapt to different screen sizes while keeping the learning and practice experiences easy to use.

### Theme

The frontend will support:

- Light mode
- Dark mode

The user's theme preference should be preserved where appropriate.

### Frontend Principle

The frontend should be organized into small, reusable components rather than placing the entire application inside a small number of large components.
The exact component hierarchy and folder structure will be defined later in the project folder structure section.

## 4. Backend Architecture

The backend will primarily use Supabase to provide the services required by the application.

The backend will be responsible for:

- Authentication
- User data
- Learning progress
- Practice history
- Persistent application data
- Database access

### Supabase

Supabase will provide:

- PostgreSQL database
- Authentication
- Google OAuth
- Database APIs
- Row Level Security
- Other backend services required by the application

The frontend will communicate with Supabase to read and write the data required by the application.

### Backend Responsibilities

The backend will handle persistent data such as:

- User accounts
- User learning progress
- Completed lessons
- Completed chapters
- Practice sessions
- Practice results
- User preferences

### Question Generation

Question generation will primarily be handled by the application rather than relying on the database to generate questions.

The question-generation system will:

1. Receive the selected practice configuration.
2. Determine the required question constraints.
3. Generate a valid question.
4. Calculate the correct answer.
5. Return the question to the practice session.
6. Check the user's submitted answer.

Technique-specific generation rules will be defined during implementation.

### Data Access
The frontend will request only the data required for the current user and current operation.
For example:
User
  ↓
React Frontend
  ↓
Supabase
  ↓
PostgreSQL

## 5. Database Architecture

The application will use PostgreSQL through Supabase for persistent data storage.

The database will store information required for user accounts, learning progress, practice sessions, practice results, and user preferences.

### Main Data Categories

The database will contain information related to:

- Users
- Chapters
- Lessons
- User lesson progress
- User chapter progress
- Practice sessions
- Practice results
- User preferences

### Users

User authentication will be handled by Supabase Auth.

The application may maintain additional user-specific information in the database when required.

User-specific records will be associated with the authenticated user's ID.

### Curriculum Data

The curriculum consists of
Chapter
   ↓
Lesson
   ↓
Technique / Learning Content

## 6. Authentication

User authentication will be handled using Supabase Auth.

### Sign In
Users will be able to sign in using their Google account.
The authentication flow will be:
User
  ↓
Sign in with Google
  ↓
Google OAuth
  ↓
Supabase Auth
  ↓
Authenticated User
  ↓
Mental Arithmetic Website
## 7. Learning System

The Learning System will implement the structured curriculum defined in `curriculum.md`.
The curriculum is organized into:
Chapter
   ↓
Lesson
   ↓
Technique
   ↓
Examples / Explanation
   ↓
Lesson Practice
## 8. Practice Engine

The Practice Engine is responsible for creating practice questions, running practice sessions, checking answers, and producing practice results.

The Practice Engine should support both lesson-specific practice and customized practice from the main Practice section.

### Practice Types

The system should support:

- Lesson Practice
- Chapter Practice
- Custom Practice

### Practice Configuration

A practice session may be configured using:

- Chapter
- Lesson
- Technique
- Operation
- Number of digits
- Number properties
- Last digit
- Difficulty
- Number of questions
- Timed or untimed mode

The available configuration options should depend on the selected practice type.

### Question Generation
Questions should be generated dynamically where appropriate.
The generator should receive a practice configuration and produce a valid question that satisfies the required constraints.
Conceptually:
Practice Configuration
        ↓
Question Generator
        ↓
Valid Question
        ↓
Correct Answer
        ↓
Practice Session

## 9. Progress Tracking

The Progress Tracking system will record the user's learning and practice activity and make relevant progress information available throughout the application.

### Learning Progress

The system should track:

- Current chapter
- Current lesson
- Lessons started
- Lessons completed
- Chapters started
- Chapters completed
- Overall curriculum progress

Conceptually:
User
  ↓
Learning Progress
  ├── Chapter Progress
  └── Lesson Progress

## 10. Data Flow
The application follows a client-server architecture.
The React frontend is responsible for the user interface and interaction, while Supabase provides authentication and persistent data storage.
### General Data Flow
The general flow is:
User
  ↓
React Frontend
  ↓
Supabase
  ↓
PostgreSQL Database

## 11. Routing
The application will use client-side routing to allow users to navigate between the different sections of the website without requiring a full page reload.
### Main Routes
The initial application will contain routes for the main areas of the website.
Conceptually:
/
├── /learn
├── /learn/chapter/:chapterId
├── /learn/chapter/:chapterId/lesson/:lessonId
├── /practice
├── /practice/results/:sessionId
├── /progress
├── /account
└── /settings
## 12. Project Folder Structure
The project will use a modular folder structure so that different parts of the application remain organized and easy to maintain.
The initial structure will be approximately:
Mental-math/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── layouts/
│   │
│   ├── features/
│   │   ├── learn/
│   │   ├── practice/
│   │   ├── progress/
│   │   └── account/
│   │
│   ├── data/
│   │
│   ├── lib/
│   │
│   ├── hooks/
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── PROJECT.md
├── curriculum.md
├── product-spec.md
└── architecture.md

## 13. Security

Security will be considered throughout the application rather than added only after development.

### Authentication Security

Authentication will be handled through Supabase Auth.

The application will not store users' Google passwords or authentication credentials.

Authentication tokens and sessions will be handled using Supabase's authentication system.

### User Data Protection

Users must only be able to access and modify their own private data.

Private data includes:

- Learning progress
- Practice history
- Practice results
- User preferences
- Other user-specific information

Supabase Row Level Security (RLS) will be used to enforce access restrictions at the database level.

Conceptually:
User A
   ↓
Only User A's private data

User B
   ↓
Only User B's private data

## 14. Deployment

The application will be deployed as a web application using Vercel.

### Deployment Architecture
The production setup will be:
GitHub Repository
       ↓
     Vercel
       ↓
React + Vite Application
       ↓
    Supabase
   ├── Authentication
   └── PostgreSQL Database
The general deployment workflow will be:

Make Changes
     ↓
Test Locally
     ↓
Git Add
     ↓
Git Commit
     ↓
Git Push
     ↓
GitHub
     ↓
Vercel Deployment
     ↓
Live Website
## 15. Future/Optional Systems