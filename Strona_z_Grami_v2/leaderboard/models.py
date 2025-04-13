from django.db import models

# Create your models here.
class Highscore(models.Model):
    gameName = models.CharField(max_length=50)
    score = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)
    playerName = models.CharField(max_length=100)

    def __str__(self):
        return self.playerName