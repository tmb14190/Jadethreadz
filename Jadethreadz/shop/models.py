from django.db import models
import datetime 

# Create your models here.

class Fabric(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    picture = models.ImageField(upload_to='images')
    stock = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name

class Order(models.Model):
    id = models.IntegerField(primary_key=True)
    amount = models.IntegerField(default=None)
    order = models.CharField(max_length=100)
    recipient = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    date = models.DateField(default=datetime.date.today())
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.recipient
    