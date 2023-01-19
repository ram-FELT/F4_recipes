from django.urls import path

from .views import index

urlpatterns = [
    path("recipes/", index),
    path("categories/", index),
]
