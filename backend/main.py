from flask import Flask
from flask_pymongo import PyMongo
from pymongo.errors import ConnectionFailure

from flask_socketio import SocketIO, send

mongoConnectionString = "mongodb+srv://atharvak8023:8ODzB3dtMAlWhUe4@mergeconflict.thy4pad.mongodb.net/mergeConflict"

app = Flask(__name__)
app.config["MONGO_URI"] = mongoConnectionString
app.config["SECRET_KEY"] = 'mysecret'
mongo = PyMongo(app)

socketIo = SocketIO(app, cors_allowed_origins="*")
app.debug = True
app.host='localhost'

@socketIo.on("message")
def handleMessage(msg):
    print(msg)
    send(msg, broadcast=True)
    return None   

@app.route('/')
def hello():
    try:
        mongo.db.students.insert_one({'name': 'John Doe'})
        return 'Hello, World!'
    except ConnectionFailure as e:
        return f"Failed to connect to MongoDB: {e}"

if __name__ == '__main__':
    app.run(debug=True)
    socketIo.run(app)