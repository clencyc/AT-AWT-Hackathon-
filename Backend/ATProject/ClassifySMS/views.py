import africastalking
from api.models import BuyerProfile, Ad #changed from .models to api.models since the models.py is in the API project

# Initialize Africa's Talking API
username = "your_username"
api_key = "your_api_key"
africastalking.initialize(username, api_key)
sms = africastalking.SMS

def send_personalized_ads():
    buyers = BuyerProfile.objects.prefetch_related('category_preference').all()

    for buyer in buyers:
        # Get all categories the buyer is interested in
        preferred_categories = buyer.category_preference.all()

        # Fetch ads that match the buyer's preferred categories
        ads = Ad.objects.filter(category__in=preferred_categories)

        if ads.exists():
            # Construct the SMS content
            ad_messages = [f"{ad.title}: {ad.description} ({ad.call_to_action})" for ad in ads]
            message = "\n".join(ad_messages)

            # Send SMS
            try:
                response = sms.send(message, [buyer.phone_number])  # Ensure BuyerProfile has a phone_number field
                print(f"Sent SMS to {buyer.phone_number}: {response}")
            except Exception as e:
                print(f"Failed to send SMS to {buyer.phone_number}: {e}")
