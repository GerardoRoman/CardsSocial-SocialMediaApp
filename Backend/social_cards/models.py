from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Card(models.Model):
    card_front_message = models.CharField(max_length=255)
    card_back_message = models.CharField(max_length=255)
    created_by = models.ForeignKey(
        to=User, on_delete=models.CASCADE, related_name='created_by')
    created_at = models.DateTimeField(default=timezone.now)
    color = models.CharField(max_length=50)
    border = models.CharField(max_length=50)
    font = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.card_front_message} by {self.created_by}"


class Followship(models.Model):
    following = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='people_i_follow')
    follower = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='users_following_me')

    @property
    def get_username_follower(self):
        return self.follower.username

    @property
    def get_username_following(self):
        return self.following.username

    def __str__(self):
        return f"{self.follower.username} follows {self.following.username}"
