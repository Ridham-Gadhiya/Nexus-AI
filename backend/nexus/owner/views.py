from rest_framework import generics, status, permissions
from rest_framework.exceptions import PermissionDenied
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, BasePermission, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from .models import *
from owner.serializers import OwnerRegistraionSerializer


class OwnerRegistraionView(generics.CreateAPIView):
    serializer_class = OwnerRegistraionSerializer
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "success": "Registration successful.",
                "access": str(refresh.access_token),
                "message":"Registration Successful",
            },status=status.HTTP_201_CREATED)
    
@api_view(['POST'])
@permission_classes([AllowAny])
def owner_login(request):
    email = request.data.get('email')
    password = request.data.get('password')  
    if not email or not password:
        return Response(
            {'error': 'Email and password are required.'},
            status=status.HTTP_400_BAD_REQUEST
        )
    user = authenticate(request, email=email, password=password)
    # print("Authenticated user:", user)
    # print("Email:", email)
    # print("Password:", password)    
    if user is None:
        return Response(
            {'error': 'Invalid credentials.'},status=status.HTTP_401_UNAUTHORIZED)
    refresh = RefreshToken.for_user(user)
    return Response(
        {
            'message': 'Login successful.',
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        },status=status.HTTP_200_OK)
        