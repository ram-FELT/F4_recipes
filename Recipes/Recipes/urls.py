from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path


def home(request):
    return redirect("ui/recipes")


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path("ui/", include("frontend.urls")),
    path("", home),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
