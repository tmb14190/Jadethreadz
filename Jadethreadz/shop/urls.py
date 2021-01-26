from django.urls import path
from django.conf.urls import url, include

from . import views

app_name = 'shop'
urlpatterns = [
    path('', views.shop, name='shop'),
    path('basket', views.basket, name='basket'),
    path('<int:fid>/', views.item, name='item'),
    path('retrieve/', views.retrieve, name='retrieve'),
    path('paypal/', include('paypal.standard.ipn.urls')),
    path('accepted/', views.accepted, name='accepted'),
    path('cancelled/', views.cancelled, name='cancelled'),
]
