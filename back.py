from flask_cors import CORS
from flask import Flask, request, jsonify
import mysql.connector
from bcrypt import hashpw, gensalt
app = Flask(__name__)
CORS(app)
# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="ysetu@2024",
    database="YSETU_LOGIN"
)

# Endpoint to handle form submission
@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.json  # React frontend sends data as JSON

    # Extract data from form
    name = data['name']
    employee_id = data['employee_id']
    email = data['email']
    password = data['password']
    contact_no = data['contact']

    # Hash the password
    hashed_password = hashpw(password.encode('utf-8'), gensalt())

    # Insert into users table
    cursor = db.cursor()
    insert_user_query = """
        USE YSETU_LOGIN;
        INSERT INTO users (name, employee_id, email, password)
        VALUES (%s, %s, %s, %s);
    """
    cursor.execute(insert_user_query, (name,employee_id,email,hashed_password))
    user_id = cursor.lastrowid  # Get the user_id of the inserted user

    # Insert into contacts table
    insert_contact_query = """
        USE YSETU_LOGIN;
        INSERT INTO contacts (user_id, contact_no)
        VALUES (%s, %s)
    """
    cursor.execute(insert_contact_query, (user_id, contact_no))

    # Commit the transaction
    db.commit()

    return jsonify({'message': 'User created successfully'}), 201

if __name__ == "__main__":
    app.run(debug=True)
