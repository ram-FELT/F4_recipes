from django.contrib import admin

from api.models import Category, Recipe

# Register your models here.

admin.site.register(Recipe)
admin.site.register(Category)
