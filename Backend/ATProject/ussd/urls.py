from django.urls import path
from .views import USSDCallbackView


urlpatterns = [
    path('ussd/', USSDCallbackView.as_view(), name='ussd_callback'),
]
