from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Developer
from .serializers import DeveloperSerializer

class DeveloperCreateView(generics.CreateAPIView):
    serializer_class = DeveloperSerializer
    permission_classes = [IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.data)
        serializer.is_valid(raise_exception=True)
        developer = serializer.save()
        return Response({
            'message': "Developer profile created successfully",
            "developer_id": developer.id,
            "name":developer.name,
            "email": developer.email,
            "bio": developer.bio,
            "role": developer.role,
            "thumbnail": str(developer.thumbnail),
            "Linkedln": developer.linkedln,
            "Github": developer.github,
        }, status=status.HTTP_201_CREATED)

class DeveloperListView(generics.ListAPIView):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer
    permission_classes = [AllowAny]
