from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect

def snakeview(request):
  return render(request, 'snake.html')

