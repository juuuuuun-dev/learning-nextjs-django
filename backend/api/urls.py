from django.conf.urls import include
from django.urls import path
from rest_framework import routers

from api.views import (CreateUserView, PostListView, PostRetrieveView,
                       TaskListView, TaskRetrieveView, TaskViewSet)

router = routers.DefaultRouter()
router.register('admin-tasks', TaskViewSet, basename="admin-tasks")

urlpatterns = [
    path('posts/', PostListView.as_view(), name="post-list"),
    path('posts/<str:pk>/', PostRetrieveView.as_view(), name="post-detail"),
    path('tasks/', TaskListView.as_view(), name="task-list"),
    path('tasks/<str:pk>/', TaskRetrieveView.as_view(), name="task-detail"),
    path('register/', CreateUserView.as_view(), name="register"),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls)),
]
