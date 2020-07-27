from django.shortcuts import render

from .models import Task
from .serializers import TaskSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def task_list(request, *args, **kwargs):
    qs = Task.objects.all()
    serializer = TaskSerializer(qs)
    return Response(serializer.data)