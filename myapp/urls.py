from django.urls import path
from .views import ( task_list, 
                    task_detail, 
                    task_create, 
                    task_delete,
                    task_update,
                    api_over_view,
                    )

urlpatterns = [
    path('', api_over_view),
    path('task-list/', task_list),
    path('task-detail/<int:pk>/', task_detail),
    path('task-create/', task_create),
    path('task-update/<int:pk>/', task_update),
    path('task-delete/<int:pk>/', task_delete),
]