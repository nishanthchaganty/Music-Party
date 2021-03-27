
from django.urls import path
from .views import index
urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index ),
    # Setting up a dynamic url. Accepting any string after room/. for int, we put int instead of str
    path('room/<str:roomCode>', index)
    
]