from rest_framework import serializers
from .models import Data


# serializer for fetching data
class DataSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Data
        fields = (
            '__all__'
        )
        
# serializer to handle posting of rain data
        
class CreateRainDataSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Data
        fields = ('__all__')
    
    def create(self, request):
        rdata = request.data
        print(rdata.get('week'))
        data = Data()
        week = rdata.get('week')
        day = rdata.get('day')
        rainData = rdata.get('rainData')
        data.week = week
        data.day = day
        data.rainData = rainData
        data.save()
        return data