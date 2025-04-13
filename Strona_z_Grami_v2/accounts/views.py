from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

def singup_view(request):
    form = UserCreationForm()
    