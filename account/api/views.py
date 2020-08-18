from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response

from ..models import CustomUser
from ..serializers import CustomUserSerializer
from rest_framework.decorators import api_view

@api_view(["GET"])
def user_complete_tasks(request, *args, **kwargs):
    user = request.user
    if user.is_authenticated:
        costom_user = CustomUser.objects.get(username=user.username)
        serializer = CustomUserSerializer(costom_user)
        return Response(serializer.data)
    return Response(status=404)
