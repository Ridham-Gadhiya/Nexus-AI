from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import About, Skill
from rest_framework.response import Response
from .serializers import AboutSerializer, SkillSerializer


class AboutCreateView(generics.CreateAPIView):
    serializer_class = AboutSerializer
    permission_classes = [IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        about = serializer.save()
        
        return Response({
            'message': 'About information has been created',
            'about_id': about.id,
            'about_bio': about.bio,
            'about_profile_picture': str(about.profile_picture),
        }, status=status.HTTP_201_CREATED)

class AboutInfoView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    permission_classes = [AllowAny]
    
class SkillCreateView(generics.CreateAPIView):
    serializer_class = SkillSerializer
    permission_classes = [IsAdminUser]
    
    def post(self, request, *args, **kwargs):
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            skill = serializer.save()
            
            return Response({
                'message': 'Skill has been created',
                'skill_id': skill.id,
                'name': skill.name,
                'icon': str(skill.icon),
            }, status=status.HTTP_201_CREATED)

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]