from pip._vendor import requests

url = "http://127.0.0.1:5000/create_user"
data = {
    "username": "test@example.com",
    "password": "testpassword"
}
response = requests.post(url, json=data)
print(response.json())
