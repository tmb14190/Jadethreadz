from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

def home(request):
    template_name = 'basic/home.html'
    return render(request, template_name)

def fbook(request):
    return HttpResponseRedirect("https://www.facebook.com/jadethreadz/")

def igram(request):
    return HttpResponseRedirect("https://www.instagram.com/jadethreadz/")

def about(request):
    template_name = 'basic/about.html'
    return render(request, template_name)

def fabric(request):
    template_name = 'basic/fabric.html'
    return render(request, template_name)