# 🌐 FMUN (Fazaia Model United Nations) Website

A full-featured website for **Fazaia Model United Nations** built using **React, Firebase, and Stripe**.  
This platform allows delegates to register for the event, make online or manual payments, and lets the admin manage registrations and verify payments.

---

## 📌 Features

### Public Website
- **Home Page** – Event info, hero banner, countdown, and highlights.
- **About FMUN** – Mission, vision, and organizing team.
- **Committees & Agendas** – Details of committees, topics, and study guides.
- **Registration Form** – Delegate details saved to Firestore.
- **Payment Gateway**
  - **Stripe** for card payments (test/live mode).
  - **Manual payments** (JazzCash/Easypaisa/bank) with screenshot upload.
- **Schedule** – Timetable of sessions and ceremonies.
- **Gallery** – Photos & videos from past FMUNs.
- **Contact Page** – Email, phone, map, and social media.

### Admin Panel
- Protected via **Firebase Authentication** (admin role only).
- View all registrations.
- Check payment status:
  - For Stripe: status updates automatically via webhook.
  - For manual: view proof image → approve/reject.
- Update registration/payment status in real-time.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, React Hook Form
- **Backend:** Firebase Cloud Functions (Node.js)
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Storage:** Firebase Storage
- **Payments:** Stripe API (PaymentIntents)
- **Hosting:** Firebase Hosting

---

## 📂 Folder Structure

