from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=1024)
    image = models.ImageField(upload_to='images', blank=True)
    text = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name="postlist")

    def __str__(self) -> str:
        return self.title