-- Create the users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    employee_id VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create the contacts table
CREATE TABLE contacts (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    contact_no VARCHAR(15) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (name, employee_id, email, password)
VALUES ('John Doe', 'EMP123', 'johndoe@example.com', 'hashed_password');

-- Get the user_id for the inserted user (assuming you use auto-increment)
SELECT user_id FROM users WHERE employee_id = 'EMP123';

-- Insert contact number into contacts table
INSERT INTO contacts (user_id, contact_no)
VALUES (LAST_INSERT_ID(), '0123456789');
