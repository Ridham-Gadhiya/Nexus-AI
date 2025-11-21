from django.urls import path
from .views import WorkCreateView, WorkListView, WorkDetailView, WorkUpdateView
from . import views

urlpatterns = [
    path('create_work/', WorkCreateView.as_view(), name='create_work'),
    path('list_work/', WorkListView.as_view(), name='list_work'),
    path('detail_list_work/<int:id>/', WorkDetailView.as_view(), name='detail_list_work'),
    path('update_work/', WorkUpdateView.as_view(), name='update_work'),



]