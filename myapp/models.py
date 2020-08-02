from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    text = models.CharField(max_length=250, verbose_name="Текст задания")
    done = models.BooleanField(default=False)
    user = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.text