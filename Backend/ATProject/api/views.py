from django.http import JsonResponse
from .utils import send_sms

def send_bulk_sms(request):
    # Define recipients and message
    recipients = ["+254759145357"]  # Replace with your phone number
    message = "Hey AT Ninja! This is a test SMS from Django."
    # sender = "XXYYZZ"  # Optional: Replace with your sender ID

    # Send SMS
    response = send_sms(recipients, message)

    # Return response
    if response:
        return JsonResponse({"status": "success", "response": response})
    else:
        return JsonResponse({"status": "error", "message": "Failed to send SMS"})