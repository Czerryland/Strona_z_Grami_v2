from django.shortcuts import render, redirect
from .models import Highscore
from games import forms


def leaderboard(request):
  if request.method == 'POST':
    form = forms.SubmitScore(request.POST)
    if form.is_valid():
      instance = form.save(commit=False)
      instance.playerName = request.user
      instance.save()
      return redirect('leaderboard')
    pass
  highscores = Highscore.objects.all().order_by('-score')
  return render(request, 'leaderboards.html', { 'highscores':highscores})