from django.urls import path
from .views import DeveloperListView

urlpatterns = [
    path('list_developers/', DeveloperListView.as_view(), name='list_developers'),
]