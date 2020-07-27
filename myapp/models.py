from django.db import models

class Task(models.Model):
    text = models.CharField(max_length=250, verbose_name="Текст задания")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text