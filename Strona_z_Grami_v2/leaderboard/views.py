from django.shortcuts import render
from .models import Highscore

def leaderboard(request):
  highscores = Highscore.objects.all().order_by('-score')
  return render(request, 'leaderboards.html', { 'highscores':highscores})