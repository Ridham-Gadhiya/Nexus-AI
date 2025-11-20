from django.urls import path
from .views import AchievementCreateView, AchievementListView

urlpatterns = [
    path('achievements/', AchievementCreateView.as_view(), name='achievements'),
    path('list_achievements/', AchievementListView.as_view(), name='list_achievements'),
]