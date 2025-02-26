from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


import africastalking

# Initialize Africa's Talking
from django .conf import settings
username = settings.AT_USERNAME
api_key = settings.AT_API_KEY

africastalking.initialize(username, api_key)

# Initialize the USSD service
ussd = africastalking.USSD


# Temporary in-memory storage for user details and cart (replace with a database in production)
user_data = {}
user_cart = {}

class ECommerceUSSDView(APIView):
    def post(self, request, *args, **kwargs):
        session_id = request.data.get('sessionId')
        service_code = request.data.get('serviceCode')
        phone_number = request.data.get('phoneNumber')
        text = request.data.get('text', '')

        # Split user input into a list
        user_input = text.split('*')

        # Step 1: Welcome message and age input
        if text == '':
            response = "CON Welcome to E-Commerce USSD\n"
            response += "Please enter your age:"

        # Step 2: Gender input
        elif len(user_input) == 1:
            age = user_input[0]
            if not age.isdigit():
                response = "END Invalid age. Please enter a valid number."
            else:
                user_data[phone_number] = {"age": int(age)}
                response = "CON Please enter your gender (M/F):"

        # Step 3: Location input
        elif len(user_input) == 2:
            gender = user_input[1].upper()
            if gender not in ['M', 'F']:
                response = "END Invalid gender. Please enter M or F."
            else:
                user_data[phone_number]["gender"] = gender
                response = "CON Please enter your location:"

        # Step 4: Save location and redirect to main menu
        elif len(user_input) == 3:
            location = user_input[2]
            user_data[phone_number]["location"] = location
            response = "END Thank you! Redirecting to the main menu..."

        # Step 5: Main menu
        elif len(user_input) == 4:
            response = "CON Choose a category:\n"
            response += "1. Electronics\n"
            response += "2. Clothing\n"
            response += "3. Groceries\n"
            response += "4. Exit"

        # Step 6: Handle category selection and show toast message
        elif len(user_input) == 5:
            category = user_input[4]
            if category == '1':
                toast_message = "You have selected Electronics. Happy shopping!"
            elif category == '2':
                toast_message = "You have selected Clothing. Happy shopping!"
            elif category == '3':
                toast_message = "You have selected Groceries. Happy shopping!"
            elif category == '4':
                toast_message = "Thank you for using E-Commerce USSD. Goodbye!"
            else:
                toast_message = "Invalid choice. Please try again."
            response = f"END {toast_message}"

        # Invalid input
        else:
            response = "END Invalid input. Please try again."

        return Response(response, content_type='text/plain', status=status.HTTP_200_OK)