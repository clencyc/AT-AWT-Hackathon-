from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Ad, BuyerProfile, Category
from .serializers import AdSerializer, BuyerProfileSerializer, CategorySerializer

class AdViewSet(viewsets.ModelViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer

    @action(detail=False, methods=['get'])
    def category_ads(self, request):
        """Get ads filtered by category name"""
        category_name = request.query_params.get('category', None)
        if category_name:
            ads = Ad.objects.filter(category__name=category_name)
            serializer = self.get_serializer(ads, many=True)
            return Response(serializer.data)
        return Response({"error": "Category parameter is required"}, status=400)


class BuyerProfileViewSet(viewsets.ModelViewSet):
    queryset = BuyerProfile.objects.all()
    serializer_class = BuyerProfileSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
