from django.urls import path
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view
from .views import (CategoryDetailView, CategoryView, RecipeDetailView,
                    RecipeView)

urlpatterns = [
    path("recipes/", RecipeView.as_view({"get": "list"})),
    path("categories/", CategoryView.as_view({"get": "list"})),
    path("recipes/<int:pk>/", RecipeDetailView.as_view({"get": "retrieve"})),
    path("categories/<int:pk>/", CategoryDetailView.as_view({"get": "list"})),
    path(
        "swagger-ui/",
        TemplateView.as_view(
            template_name="swagger-ui.html",
            extra_context={"schema_url": "openapi-schema"},

        ),
        name="swagger-ui",
    ),
    path('openapi', get_schema_view(
        title="F4_recipes",
        description="API for all things …",
        version="1.0.0"
        ), name='openapi-schema'),
]
