from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect
from . import forms
from django.contrib.auth.decorators import login_required

@login_required(login_url="/login/")
def snakeview(request):
  form = forms.SubmitScore()
  return render(request, 'snake.html',{'form':form})

