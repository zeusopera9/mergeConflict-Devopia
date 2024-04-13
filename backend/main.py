from flask import Flask
from flask_pymongo import PyMongo
from pymongo.errors import ConnectionFailure

mongoConnectionString = "mongodb+srv://atharvak8023:8ODzB3dtMAlWhUe4@mergeconflict.thy4pad.mongodb.net/mergeConflict"

app = Flask(__name__)
app.config["MONGO_URI"] = mongoConnectionString
mongo = PyMongo(app)

# building mongo collection: teachers
mongo.db.teachers.insert_one({'name': 'Jane Doe'})

@app.route('/')
def hello():
    try:
        mongo.db.students.insert_one({'name': 'John Doe'})
        return 'Hello, World!'
    except ConnectionFailure as e:
        return f"Failed to connect to MongoDB: {e}"

if __name__ == '__main__':
    app.run(debug=True)
