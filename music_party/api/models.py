from django.db import models
import string
import random

def generate_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        # .count() returns a list of all objects that meet this criteria 
        # Checks if the current code generated exists in the Room Object's code 
        if Room.objects.filter(code=code).count() == 0:
            break

    return code 


# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8, default=generate_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    # null = False means we have to pass in a value 
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null = False, default = 1)
    time_created = models.DateTimeField(auto_now_add=True)

    

