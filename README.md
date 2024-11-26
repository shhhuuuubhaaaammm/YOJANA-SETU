# 🏛️ Yojana Setu

## A Comprehensive Government Project Coordination Platform

*Yojana Setu* is a web-based platform developed to streamline the coordination of government infrastructure projects across multiple departments. From preventing project conflicts (like road constructions over existing pipelines) to facilitating inter- and intra-department communication, this app is designed to boost efficiency and transparency in public project management.

---

## 🌟 Features

### ✅ **Project Registration and Conflict Resolution**
- Easily register new projects and check for potential conflicts like pre-existing infrastructure (pipelines, cables, etc.).
  
### 🗺️ **Integrated Map Visualization**
- View project locations and related infrastructure directly on a map using the Google Maps API.

### 📊 **Real-Time Project Tracking**
- Stay updated with real-time project status, resource allocation, and budget management.

### 💬 **Inter/Intra-Department Communication**
- Grade A officers can communicate between departments, while Grade B and C officers communicate within their own.

### ⏰ **Automated Maintenance Reminders**
- Receive automated reminders for maintenance of infrastructure that’s over 20 years old.

---

## 🚀 Tech Stack

| **Front-End**  | **Back-End**   | **Databases**   | **APIs**        |
|----------------|----------------|-----------------|-----------------|
| React + Electron | Python (Flask & Django) | SQL + MongoDB   | Google Maps API |
| HTML/CSS/JavaScript | bcrypt for security |                | ChatGPT (content) |

---

## 🛠️ Installation

To run *Yojana Setu* locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/yojana-setu.git
    ```

2. **Navigate into the directory:**
    ```bash
    cd yojana-setu
    ```

3. **Install front-end dependencies:**
    ```bash
    npm install
    ```

4. **Set up the back-end:**
    ```bash
    pip install -r requirements.txt
    ```

5. **Configure the databases (SQL & MongoDB):**
    - Ensure that MySQL and MongoDB are installed.
    - Use the provided SQL schema to create the necessary tables.

6. **Run the app:**
    ```bash
    npm start
    ```

7. **Backend Setup:**
    ```bash
    python app.py
    ```

---

## 📸 Screenshots

### 🖼️ **Dashboard Overview**
![Dashboard](link_to_your_screenshot)

### 🖼️ **Project Registration Form**
![Project Registration](link_to_your_screenshot)

### 🖼️ **Real-Time Map Integration**
![Map Integration](link_to_your_screenshot)

---

## 💡 Usage

*Yojana Setu* is built to handle the complex workflows of government departments. Employees can log in using their Employee IDs, access projects relevant to their department, and communicate seamlessly with their team or other departments (based on access level).

- **Grade A Officers:** Full access to cross-department communication.
- **Grade B & C Officers:** Limited to intra-department communication and project tracking.

For more details, refer to the user documentation inside the `docs/` folder.

---
## 🤝 Contributing

We welcome contributions from the community! Please follow the steps below:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -m 'Add some awesome feature'`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a Pull Request.

---

## 🧪 Testing

Unit tests are set up for both front-end and back-end components. To run the tests:

```bash
npm test
