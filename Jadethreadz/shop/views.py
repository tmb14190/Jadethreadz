from django.shortcuts import render, get_object_or_404, HttpResponse, reverse
from django.http import JsonResponse
from .models import Fabric
from django.template import loader
from paypal.standard.forms import PayPalPaymentsForm
from django.conf import settings
from decimal import Decimal

# Create your views here.

def shop(request):
    fabrics = Fabric.objects.order_by('id')
    context = {'fabrics': fabrics}
    return render(request, 'shop/shop.html', context)

def basket(request):
    # What you want the button to do.
    paypal_dict = {
        "business": "gingemoore@gmail.com",
        "amount": "7.00",
        "item_name": "name of the item",
        "invoice": "unique-invoice-id",
        "notify_url": request.build_absolute_uri(reverse('shop:paypal-ipn')),
        "return": request.build_absolute_uri(reverse('shop:cancelled')),
        "cancel_return": request.build_absolute_uri(reverse('shop:accepted')),
        "custom": "premium_plan",  # Custom command to correlate to some function later (optional)
    }

    # Create the instance.
    form = PayPalPaymentsForm(initial=paypal_dict)
    context = {"form": form}
    
    template_name = 'shop/basket.html'
    return render(request, template_name, context)

def item(request, id):
    fabric = get_object_or_404(Fabric, id=id)
    context = { 'fabric': fabric }
    return render(request,'shop/item.html', context)

def retrieve(request):
    itemIDs = request.GET.get('itemIDs')
    IDs = itemIDs.split(";")
    IDs = list(filter(None, IDs))
    paths = ""
    for id in IDs:
        fabric = Fabric.objects.get(id=id)
        paths += str(fabric.name) + "-" + str(fabric.picture) + ";"
    data = {
        'paths': paths
    }
    return JsonResponse(data)

def paypal(request):

    # What you want the button to do.
    paypal_dict = {
        "business": "gingemoore@gmail.com",
        "amount": "10000000.00",
        "item_name": "name of the item",
        "invoice": "unique-invoice-id",
        "notify_url": request.build_absolute_uri(reverse('paypal-ipn')),
        "return": request.build_absolute_uri(reverse('shop/cancelled/')),
        "cancel_return": request.build_absolute_uri(reverse('shop/accepted/')),
        "custom": "premium_plan",  # Custom command to correlate to some function later (optional)
    }

    # Create the instance.
    form = PayPalPaymentsForm(initial=paypal_dict)
    context = {"form": form}
    return render(request, "payment.html", context)

def accepted (request):
    template_name = 'shop/accepted.html'
    return render(request, template_name, context)
    
def cancelled (request):
    template_name = 'shop/cancelled.html'
    return render(request, template_name, context)