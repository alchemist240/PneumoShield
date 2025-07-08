# 🛡️ PneumoShield

**PneumoShield** is an AI-powered platform designed for intelligent chest X-ray analysis to detect **pneumonia**. It bridges the gap between **patients and healthcare professionals** by combining deep learning with geolocation-based doctor connectivity.

Built with ❤️ for **real-time diagnostics, medical feedback**, and **health guidance**, PneumoShield leverages the **VGG19** model for accurate pneumonia detection and facilitates a seamless feedback loop between AI and human expertise.

---

## ✨ Features

- 🧠 **X-ray Image Analysis**: Uses VGG19 Convolutional Neural Network for accurate pneumonia detection.
- 🩺 **Nearby Doctor Matching**: Connects users with doctors based on location and age relevance.
- 🤖👨‍⚕️ **AI + Human Collaboration**: Sends AI diagnosis to doctors for expert review and feedback.
- 🌱 **Health Tips**: Provides lung wellness tips if the result is normal.
- 🔄 **Feedback Loop**: Doctors send insights, treatment suggestions, or referrals based on results.

---

## 🔁 Workflow

1. 📤 **Upload**: User uploads a chest X-ray.
2. 🧪 **AI Analysis**: The image is analyzed using the VGG19 model to classify it as `Normal` or `Pneumonia`.
3. 📍 **Doctor Routing**:
   - If `Normal`, the user gets health tips.
   - If `Pneumonia`, nearby doctors (filtered by age if needed) are notified.
4. 🗣️ **Doctor Feedback**: Doctor reviews the X-ray + AI result and provides recommendations.

---

## 🛠️ Technologies Used

- ⚙️ **TypeScript** — For frontend and backend development
- 🧠 **VGG19** — Deep learning model for X-ray classification
- 🌐 **Node.js & Express** — RESTful API backend
- ⚛️ **React + Vite** — Frontend interface
- 📍 **Geolocation APIs** — Match users with nearby doctors
- 📡 **Axios & REST** — Communication between frontend, backend, and ML model
- ☁️ **MongoDB Atlas** — Cloud database for storing user and doctor records

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avanshh99/pneumotrack.git
   cd pneumotrack
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - 
   - ✅ .env is already included in .gitignore and will not be pushed to Git.
   - Create a .env file in the root directory of the project. Below is an example of what it should contain:
   ```bash
   JWT_SECRET=your_jwt_secret_here
   JWT_EXPIRATION_TIME=1h
   JWT_REFRESH_EXPIRATION=7d
   DB_PASSWORD=your_database_password_here
   ```
   - 🛠️ You also need to configure the MongoDB connection string inside backend/database/db.js like this:
   ```bash
   const MONGO_URI = `mongodb+srv://kshitij1:${process.env.DB_PASSWORD}@cluster0.ofxueji.mongodb.net/?retryWrites=true&w=majority`;
   ```
   
4. **Run locally:**
   ```bash
   npm run dev
   ```

## Project Structure

- `/models` — VGG19 pneumonia detection model and related scripts
- `/api` — Backend endpoints for image upload, analysis, and doctor-patient communication
- `/frontend` — User and doctor interfaces
- `/utils` — Helper modules for geolocation, filtering, etc.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch 
5. Open a pull request


## Live Demo

- [PneumoTrack App](https://pneumoshield.vercel.app)

*For questions or feedback, please open an issue or contact the maintainer.*
