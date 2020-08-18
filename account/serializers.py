from rest_framework import serializers

from django.contrib.auth.models import User
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    all_tasks_complete = serializers.IntegerField(source='get_count_complete_tasks', read_only=True)
    today_tasks_complete = serializers.IntegerField(source='get_count_today_complete_tasks', read_only=True)
    week_tasks_complete = serializers.IntegerField(source='get_count_week_complete_tasks', read_only=True)
    month_tasks_complete = serializers.IntegerField(source='get_count_month_complete_tasks', read_only=True)
    class Meta:
        model = CustomUser
        fields = "__all__"