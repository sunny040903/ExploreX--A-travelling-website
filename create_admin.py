from pymongo import MongoClient
from flask_bcrypt import Bcrypt

# Connect to MongoDB Atlas
client = MongoClient("YOUR_MONGODB_ATLAS_CONNECTION_STRING")
db = client["explorex_db"]
users = db["users"]

bcrypt = Bcrypt()

# Admin credentials
admin_email = "admin@explorex.com"
admin_password = "Admin123"

# Hash password
hashed_password = bcrypt.generate_password_hash(admin_password).decode('utf-8')

# Insert admin user
users.insert_one({
    "name": "Super Admin",
    "email": admin_email,
    "password": hashed_password,
    "role": "admin"
})

print("Admin Created Successfully!")