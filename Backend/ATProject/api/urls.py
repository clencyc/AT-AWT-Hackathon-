from django.urls import path, include

from .views import send_bulk_sms

urlpatterns = [
    path('bulksms/', send_bulk_sms, name='bulksms'),
]
