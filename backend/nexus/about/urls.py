from django.urls import path
from .views import AboutInfoView, SkillListView, AboutCreateView, SkillCreateView

urlpatterns = [
    path('about/', AboutCreateView.as_view(), name='about'),
    path('info/', AboutInfoView.as_view(), name='info'),
    path('create_skills/', SkillCreateView.as_view(), name='create_skills'),
    path('skills/', SkillListView.as_view(), name='skills'),
]