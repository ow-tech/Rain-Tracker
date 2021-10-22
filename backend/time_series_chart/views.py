
from rest_framework import generics, permissions, status
from .models import Data
from .serializers import DataSerializer,CreateRainDataSerializer
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST)

# class based view for ploting the time series chart
class DataListView(generics.ListAPIView):
    permission_classes =[permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = DataSerializer
    
    
# class based view for handling post of rain data
class CreateDataView(generics.CreateAPIView):
    serializer_class = CreateRainDataSerializer
    
     # overing post method
    def post(self, request):
        serializer = CreateRainDataSerializer(data = request.data)
        serializer.is_valid()
        data = serializer.create(request)
        if data:
            return Response(status = HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)