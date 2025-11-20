from django.urls import path
from .views import OwnerRegistraionView
from . import views

urlpatterns = [
    path('owner_registration/', OwnerRegistraionView.as_view(), name='owner_registration'),
    path('owner_login/', views.owner_login, name='owner_login'),


]