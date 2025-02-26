from django.shortcuts import render
import africastalking

# Initialize SDK
username = "YOUR_USERNAME"
api_key = "YOUR_API_KEY"
africastalking.initialize(username, api_key)

# Get the SMS service
sms = africastalking.SMS

# code to send bulk sms
def send_bulk_sms():
    recipients = ["+254792552491", "+254759145357"]
    message = "Hi [Customer name], get 10% off on Samsung galaxy s23! Reply Yes to confirm"
    try:
        response = sms.send(message, recipients)
        print(response)
    except Exception as e:
        print(f"Error: {e}")

send_bulk_sms()