from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout

def signupview(request):
 if request.method == 'POST':
  form = UserCreationForm(request.POST)
  if form.is_valid():  
    user = form.save()
    login(request, user)
    return redirect("mainpage")
 else:
  form = UserCreationForm()
 return render(request, 'signup.html',{'form':form})
 
def loginview(request):
 if request.method == 'POST':
  form = AuthenticationForm(data=request.POST)
  if form.is_valid():
   #login
   user = form.get_user()
   login(request, user)
   if 'next' in request.POST:
    return redirect(request.POST.get('next'))
   else:
    return redirect("mainpage")
 else:
  form = AuthenticationForm()
 return render(request, "login.html", {'form':form})

def logoutview(request):
 if request.method == 'POST':
  logout(request)
  return redirect("mainpage")
