from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from life import Life
from house import House
from car import Car


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///hac.db"

db = SQLAlchemy()
db.init_app(app)

users = []

class User_Info(db.Model):
    email = db.Column(db.String(100), primary_key=True)
    fullName = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Car_Info(db.Model):
    email = db.Column(db.String(100), primary_key=True)
    vin = db.Column(db.Integer, nullable=False)
    mileage = db.Column(db.Integer, nullable=False)
    
class Life(db.Model):
    email = db.Column(db.String(100), primary_key=True)
    four_o_one_k = db.Column(db.Integer)
    roth_ira = db.Column(db.Integer)
    current_savings = db.Column(db.Integer)
    current_weight = db.Column(db.Integer)
    goal_saving = db.Column(db.Integer)
    goal_weight = db.Column(db.Integer)
class House(db.Model):
    email = db.Column(db.String(100), primary_key=True)
    last_filter_change = db.Column(db.String(100), primary_key=True)
    last_roof_check = db.Column(db.String(100), primary_key=True)
    last_gutter_check = db.Column(db.String(100), primary_key=True)
    last_alarm_check = db.Column(db.String(100), primary_key=True)
    last_landscaping = db.Column(db.String(100), primary_key=True)
    last_pest_control = db.Column(db.String(100), primary_key=True)

#http://127.0.0.1:5000/add_user
@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()

    # Check if all required fields are present
    if not all(key in data for key in ['name', 'email', 'password']):
        return jsonify({"error": "Name, Email, or Password is missing!"}), 400

    # Append to your list or save to your database
    user = {
        "name": data['name'],
        "email": data['email'],
        "password": data['password']  # You should hash the password before storing in a real-world scenario
    }
    users.append(user)

    return jsonify({"message": f"User {data['name']} added successfully!"}), 201


#http://127.0.0.1:5000/get_users
@app.route('/get_users', methods=['GET'])
def get_users():
    return jsonify({"users": users}), 200

if __name__ == '__main__':
    app.run(debug=True)
