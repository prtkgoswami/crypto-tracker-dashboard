from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.api_data, name="api_index"),
]
