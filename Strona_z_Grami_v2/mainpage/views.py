from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect

def mainpage(request):
  return render(request, 'index.html')