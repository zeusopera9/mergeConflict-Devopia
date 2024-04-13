from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)
mongoConnectionString = "mongodb+srv://atharvak8023:8ODzB3dtMAlWhUe4@mergeconflict.thy4pad.mongodb.net/mergeConflict"
client = MongoClient(mongoConnectionString)
db = client.get_database('mergeConflict')
students_collection = db.get_collection('students')
login_manager = LoginManager()
login_manager.init_app(app)

def save_student(student):
  student['password'] = generate_password_hash(student['password'])
  students_collection.insert_one({
    'id': student['id'],
    'name': student['name'],
    'email': student['email'],
    'password': student['password']
  })

def get_student(id):
  student = students_collection.find_one({ 'id': id })
  return Student(student['_id'], student['email'], student['password']) if student else None

class Student(UserMixin):
  def __init__(self, user_id, email, password):
    self.id = user_id
    self.email = email
    self.password = password

  def is_authenticated(self):
    return current_user.is_authenticated

  def is_active(self):
    # Implement logic to check if the user account is active (e.g., not disabled)
    return True

  def is_anonymous(self):
    return not self.is_authenticated

  def get_id(self):
    return self.id  # Use user_id for consistency

@login_manager.user_loader
def load_user(id):
  return get_student(id)

CORS(app)


@app.route('/login', methods=['GET', 'POST'])
def login():
  if request.method == 'POST':
    email = request.json.get('email')
    password = request.json.get('password')
    student = students_collection.find_one({ 'email': email })
    if student and check_password_hash(student['password'], password):
      user = Student(student['_id'], student['email'], student['password'])
      login_user(user)
      return jsonify({ 'status': 'success', 'message': 'Logged in successfully' })
    else:
      return jsonify({ 'status': 'fail', 'message': 'Invalid email or password' })

@app.route('/get_user_info', methods=['GET'])
@login_required
def get_user_info():
  # Retrieve user information based on logged-in user's ID
  user = current_user  # Access the current user object
  user_id = user.get_id()  # Get the user ID
  student = students_collection.find_one({ '_id': user_id })

  if student:
    # Return relevant user information (excluding password)
    return jsonify({
      'status': 'success',
      'user_info': {
        'name': student['name'],
        'email': student['email'],
        # You can add other fields from the student collection here
      }
    })
  else:
    return jsonify({ 'status': 'fail', 'message': 'User information not found' })

@app.route('/register', methods=['GET', 'POST'])
def register():
  if request.method == 'POST':
    student = {
      'id': request.json.get('id'),
      'name': request.json.get('name'),
      'email': request.json.get('email'),
      'password': request.json.get('password')
    }
    save_student(student)
    return jsonify({
      'status': 'success',
      'message': 'Student registered successfully'
    })

if __name__ == '__main__':
  app.run(debug=True)
