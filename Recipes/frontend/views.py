from django.shortcuts import render


def index(request, *args):
    return render(request, "frontend/index.html")
