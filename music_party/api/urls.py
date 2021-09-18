from django.urls import path
from .views import RoomView
from .views import CreateRoomView, GetRoom

urlpatterns = [
    path('home', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
]


