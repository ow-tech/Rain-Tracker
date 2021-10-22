
from rest_framework import generics, permissions, status
from .models import Data
from .serializers import DataSerializer,CreateRainDataSerializer
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST)


class DataListView(generics.ListAPIView):
    permission_classes =[permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = DataSerializer

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
    
    # def post(self, request, format=None):
    #     serializer = self.serializer_class(data=request.data)
    #     if serializer.is_valid():
    #         data = Data()
    #         data.week = serializer.data.get('week')
    #         data.day = serializer.data.get('day')
    #         data.rainData = serializer.data.get('rainData')
            
    #         # data.week = week
    #         # data.day = day
    #         # data.rainData = rainData
    #         # print('data all captured')
    #         data.save()
    #     return Response(DataSerializer(Data).data, status=status)