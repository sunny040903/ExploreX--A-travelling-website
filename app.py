from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

# 🔥 Replace with YOUR Atlas connection string
app.config["MONGO_URI"] = "mongodb+srv://travelAdmin:YourStrongPassword123@cluster0.xxxxx.mongodb.net/travelDB"
app.config["JWT_SECRET_KEY"] = "super-secret-key"

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# -----------------------
# REGISTER
# -----------------------
@app.route("/register", methods=["POST"])
def register():
    data = request.json

    hashed_pw = bcrypt.generate_password_hash(data["password"]).decode("utf-8")

    mongo.db.users.insert_one({
        "name": data["name"],
        "email": data["email"],
        "password": hashed_pw,
        "role": "user",
        "created_at": datetime.utcnow()
    })

    return jsonify({"message": "User Registered Successfully"})


# -----------------------
# LOGIN
# -----------------------
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = mongo.db.users.find_one({"email": data["email"]})

    if user and bcrypt.check_password_hash(user["password"], data["password"]):
        token = create_access_token(identity={
            "id": str(user["_id"]),
            "role": user["role"],
            "name": user["name"]
        })
        return jsonify({"token": token})

    return jsonify({"message": "Invalid credentials"}), 401


# -----------------------
# CREATE BOOKING
# -----------------------
@app.route("/book", methods=["POST"])
@jwt_required()
def book():
    current_user = get_jwt_identity()
    data = request.json

    mongo.db.bookings.insert_one({
        "user_id": current_user["id"],
        "user_name": current_user["name"],
        "type": data["type"],
        "destination": data["destination"],
        "date": data["date"],
        "amount": data["amount"],
        "status": "confirmed",
        "created_at": datetime.utcnow()
    })

    return jsonify({"message": "Booking Confirmed"})


# -----------------------
# ADMIN: GET USERS
# -----------------------
@app.route("/admin/users", methods=["GET"])
@jwt_required()
def get_users():
    current_user = get_jwt_identity()

    if current_user["role"] != "admin":
        return jsonify({"message": "Access Denied"}), 403

    users = list(mongo.db.users.find({}, {"password": 0}))
    for user in users:
        user["_id"] = str(user["_id"])

    return jsonify(users)


# -----------------------
# ADMIN: GET BOOKINGS
# -----------------------
@app.route("/admin/bookings", methods=["GET"])
@jwt_required()
def get_bookings():
    current_user = get_jwt_identity()

    if current_user["role"] != "admin":
        return jsonify({"message": "Access Denied"}), 403

    bookings = list(mongo.db.bookings.find())
    for booking in bookings:
        booking["_id"] = str(booking["_id"])

    return jsonify(bookings)


if __name__ == "__main__":
    app.run(debug=True)