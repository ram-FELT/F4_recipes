import ckeditor.fields
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=20, unique=True)),
                ("preview", models.ImageField(null=True, upload_to="")),
            ],
        ),
        migrations.CreateModel(
            name="Recipe",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("desc", models.CharField(max_length=200)),
                ("cook_time", models.CharField(default="", max_length=10)),
                ("ingredients", ckeditor.fields.RichTextField()),
                ("steps", ckeditor.fields.RichTextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("preview", models.ImageField(null=True, upload_to="")),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="api.category"
                    ),
                ),
            ],
        ),
    ]
