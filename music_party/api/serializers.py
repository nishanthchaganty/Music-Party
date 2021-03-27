# Convert the python code into json format so that ease of use for frontend 

from rest_framework import serializers
from .models import Room 

#Take the room object and serialize the response 
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'time_created')

# Make sure the request in the right format to send a POST request 
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip', 'time_created')


