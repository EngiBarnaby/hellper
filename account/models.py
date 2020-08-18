from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.utils import timezone

default_url = "profile.png"

class CustomUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    username = models.CharField(max_length=100, null=True, blank=True)
    profile_picture = models.ImageField(default=default_url, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def get_count_complete_tasks(self):
        user_complete_tasks = self.user.tasks.filter(done=True)
        return user_complete_tasks.count()

    def get_count_today_complete_tasks(self):
        today = timezone.now().replace(hour=0, minute=0, second=0, microsecond=5)
        user_complete_tasks = self.user.tasks.filter(done=True).filter(update__gte=today)
        return user_complete_tasks.count()

    def get_count_week_complete_tasks(self):
        current_week = timezone.now().isocalendar(  )[1]
        user_complete_tasks = self.user.tasks.filter(done=True).filter(update__week=current_week)
        return user_complete_tasks.count()

    def get_count_month_complete_tasks(self):
        current_month = timezone.now().month
        user_complete_tasks = self.user.tasks.filter(done=True).filter(update__month=current_month)
        return user_complete_tasks.count()

    def __str__(self):
        return self.user.username


def test_signals(sender, instance, created, **kwargs):
    if created:
        CustomUser.objects.create(user=instance, username=instance.username)

post_save.connect(test_signals, sender=User)
