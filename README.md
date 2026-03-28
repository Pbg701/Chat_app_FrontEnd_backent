# 💬 Real-Time Chat Application (React + .NET SignalR)

## 📌 Project Overview

This is a real-time chat application built using:

* ⚛️ React (Frontend)
* 🔌 SignalR (.NET Backend)
* 🔁 WebSockets for real-time communication

---

## 📂 Project Structure

```
chat-app/
├── ChatApp_Backend/        # .NET SignalR API
├── chat_application_frontend/       # React App
```

---

## 🚀 Features

* ✅ Real-time messaging
* ✅ Multiple users support
* ✅ Auto-scroll chat
* ✅ Clean UI (WhatsApp-style)
* ✅ No duplicate messages

---

## ⚙️ Tech Stack

| Frontend       | Backend      |
| -------------- | ------------ |
| React          | ASP.NET Core |
| SignalR Client | SignalR Hub  |
| JavaScript     | C#           |

---

## 🔧 Setup Instructions

### 1️⃣ Clone repo

```
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Run Backend

```
cd backend
dotnet run
```

Runs on:

```
http://localhost:5035
```

---

### 3️⃣ Run Frontend

```
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 🔌 SignalR Connection

```js
.withUrl("http://localhost:5035/chat", {
  skipNegotiation: true,
  transport: signalR.HttpTransportType.WebSockets
})
```

---

## 🧪 How to Test

1. Open app in 2 tabs
2. Enter different usernames
3. Send messages
4. See real-time updates

---

## 📸 Output

Real-time chat working between multiple users.

---

## 👨‍💻 Author

Prashant Gaikwad

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
