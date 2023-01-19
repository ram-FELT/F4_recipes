from ckeditor.fields import RichTextField
from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=20, unique=True, null=False)
    preview = models.ImageField(null=True)

    def __str__(self):
        return self.title


class Recipe(models.Model):
    title = models.CharField(max_length=200)
    desc = models.CharField(max_length=200)
    cook_time = models.CharField(max_length=20, default="")
    ingredients = RichTextField()
    steps = RichTextField()
    category = models.ForeignKey("Category", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    preview = models.ImageField(null=True)

    def __str__(self):
        return self.title
