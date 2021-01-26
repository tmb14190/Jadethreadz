from django.urls import path

from . import views

app_name = 'basic'
urlpatterns = [
    path('', views.home, name='home'),
    path('fbook', views.fbook, name="fbook"),
    path('igram', views.igram, name="igram"),
    path('about', views.about, name='about'),
    path('fabric', views.fabric, name='fabric'),
]