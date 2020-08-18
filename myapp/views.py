from django.shortcuts import render

from .models import Task
from .serializers import TaskSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


def main_page(request, *args, **kwargs):
    return render(request, "main-page.html")

@api_view(["GET"])
def api_over_view(request, *args, **kwargs):
    api_url = {
        "Список заданий" : "task-list/",
        "Детали задания": "task-detail/<int:pk>/",
        "Создать задание": "task-create/",
        "Удалить заданий": "task-delete/<int:pk>/",
        "Обновить задание": "task-update/<int:pk>/",
        }
    return Response(api_url)

@api_view(["GET"])
def task_list(request, *args, **kwargs):
    qs = Task.objects.all()
    username = request.user.username
    if username != None:
        qs = qs.filter(user__username__iexact=username)
    serializer = TaskSerializer(qs, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def task_detail(request, pk, *args, **kwargs):
    qs = Task.objects.get(id=pk)
    serializer = TaskSerializer(qs)
    return Response(serializer.data)

@api_view(["POST"])
def task_create(request, *args, **kwargs):
    user = request.user
    if user.is_authenticated:
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['POST'])
def task_update(request, pk, *args, **kwargs):
    qs = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=qs, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data, status=201)

@api_view(["DELETE", "POST", "GET"])
def task_delete(request, pk, *args, **kwargs):
    if request.method == "DELETE":
        qs = Task.objects.filter(id=pk)
        if not qs.exists():
            return Response({}, status=404)
        obj = qs.first()
        obj.delete()
        return Response({"message" : "Задание удалено"}, status=200)
    elif request.method == "GET":
        qs = Task.objects.get(id=pk)
        serializer = TaskSerializer(qs)
        return Response(serializer.data)