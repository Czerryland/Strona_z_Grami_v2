from django import forms
from leaderboard import models 

class SubmitScore(forms.ModelForm):
    class Meta:
        model = models.Highscore
        fields = ['score']
