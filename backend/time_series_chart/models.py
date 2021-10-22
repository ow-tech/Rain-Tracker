from django.db import models
from datetime import date
DAYS = (
    ("1", "Sun"),
    ("2", "Mon"),
    ("3", "Tue"),
    ("4", "Wen"),
    ("5", "Thur"),
    ("6", "Fri"),
    ("7", "Sat")
)
class Data(models.Model):
    timestamp = models.DateField(editable=False, default=date.today )
    week = models.IntegerField(null=False)
    day = models.CharField(
        max_length = 20,
        choices = DAYS,
        default = '1')
    rainData =models.IntegerField(default=0)
    
    def __str__(self):
        return self.day
