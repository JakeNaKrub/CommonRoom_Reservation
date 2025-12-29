# Common Room Reservation System

A **web application** for reserving and managing common/meeting rooms, built with **Next.js**, **Firebase**, and **Genkit**.  

The project is already **hosted on Firebase**, allowing students to book rooms directly online.

---

## 🌐 Live Application

[Access the app here]([https://commonroom-reserve.web.app/])

---

## 🧠 Project Overview

This system provides an intuitive interface to:

- Browse available common rooms
- Make reservations
- View, update, or cancel bookings
- (Optional) AI-assisted scheduling with Genkit  

It’s aimed at **ISE students and staff !** and other users needing easy room management.

---

## 🚀 Features

✔ Responsive **Next.js** frontend  
✔ Firebase **Authentication** and **Firestore** backend  
✔ Generative AI with **Genkit**  
✔ Mobile-friendly and modern UI  
✔ Easy local development for updates  

---

## 📦 Tech Stack

| Layer      | Technology        |
|-----------|-----------------|
| Frontend  | Next.js          |
| Backend   | Firebase         |
| Database  | Firestore        |
| AI        | Genkit           |
| Language  | TypeScript       |

---

## 💻 Local Development

If you want to **update or test the project locally**, follow these steps:

1. **Clone the repository**

```bash
git clone https://github.com/JakeNaKrub/CommonRoom_Reservation.git
cd CommonRoom_Reservation
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Firebase**

Create a `.env.local` file with your Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=<your_api_key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your_auth_domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your_project_id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your_storage_bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your_sender_id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your_app_id>
```

4. **Run locally**

```bash
npm run dev
```

The app will be available at:

```
http://localhost:9002
```

5. **Deploy updates**

```bash
firebase deploy
```

---

## 🔐 Authentication

Uses **Firebase Authentication**. Providers like **Email/Password** or **Google** can be enabled via the Firebase console.

---

## 📁 Project Structure

```
/
├── src/
│   ├── components/
│   ├── pages/
│   └── styles/
├── .firebase/
├── public/
├── genkit/
├── firebase.json
├── next.config.ts
├── package.json
└── README.md
```

---

## 🧩 Contributing

Contributions are welcome!  

- Open issues for bugs or suggestions  
- Submit pull requests for improvements  

---

## 📝 License

No license specified (can be MIT if needed)

---

> **Note:** This README was generated entirely with the assistance of AI.
