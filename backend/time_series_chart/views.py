
from rest_framework import generics, permissions
from .models import Data
from .serializers import DataSerializer

class DataListView(generics.ListAPIView):
    permission_classes =[permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = DataSerializer
