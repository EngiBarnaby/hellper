from django.db import models

class Task(models.Model):
    text = models.CharField(max_length=250, verbose_name="Текст задания")
    done = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.text