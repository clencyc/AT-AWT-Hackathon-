import africastalking

# import api key from settings
from django .conf import settings
username = settings.AT_USERNAME
api_key = settings.AT_API_KEY
africastalking.initialize(username, api_key)

# Get the SMS service
sms = africastalking.SMS


#function to send sms
def send_sms(recipients, message):
    """
    Send SMS to recipients using Africa's Talking API

    :param recipients: list of phone numbers in international format
    :param message: message to send
    :param sender: sender's ID
    """
    try: 
        response = sms.send(message, recipients)
        print(response)
        return response
    except Exception as e:
        print(f'Houston, we have a problem: {e}')
        return None