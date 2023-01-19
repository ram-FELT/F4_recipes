from rest_framework import serializers

from .models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class RecipeSerializer(serializers.ModelSerializer):
    category_title = serializers.ReadOnlyField(source="category.title")

    class Meta:
        model = Recipe
        fields = "__all__"
