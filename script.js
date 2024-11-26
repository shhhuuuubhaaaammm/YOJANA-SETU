const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('login-yojana-setu.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// // Get the form element and attach a submit event listener
// document.getElementById("signupForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting the default way
    
//     // Capture the Name and EmployeeID values
//     const name = document.getElementById("Name").value;
//     const employeeID = document.getElementById("EmployeeID").value;
    
//     // Store the Name and EmployeeID in localStorage
//     localStorage.setItem("name", name);
//     localStorage.setItem("employeeID", employeeID);
    
//     // Redirect the user to the dashboard page
//     window.location.href = "dashboard-yojana-setu.html";
// });

// // Retrieve the Name and EmployeeID from localStorage
// const name = localStorage.getItem("name");
// const employeeID = localStorage.getItem("employeeID");

// // If Name and EmployeeID exist, display them under username
// if (name && employeeID) {
//     document.querySelector(".username h4").textContent = name;
//     document.querySelector(".username p").textContent = employeeID;
// }
