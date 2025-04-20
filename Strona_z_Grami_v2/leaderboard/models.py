from django.db import models
from django.contrib.auth.models import User
from django.db.models import CASCADE

# Create your models here.
class Highscore(models.Model):
    gameName = models.CharField(max_length=50)
    score = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)
    playerName = models.ForeignKey(User, on_delete=CASCADE)

    def __str__(self):
        return self.playerName