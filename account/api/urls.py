from django.urls import path

from .views import user_complete_tasks

app_name = "user-api"

urlpatterns = [
    path('user-complete-tasks/', user_complete_tasks, name="user_complete_tasks"),
]