from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Achievement
from rest_framework.response import Response
from .serializers import AchievementSerializer
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response


class AchievementCreateView(generics.CreateAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = [IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        achievement = serializer.save(created_by = request.user)
        
        return Response({
            "achievement_id": achievement.id,
            "achievement_title": achievement.title,
            "achievement_description":achievement.description
        }, status=status.HTTP_201_CREATED)

class AchievementListView(generics.ListAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = [AllowAny]