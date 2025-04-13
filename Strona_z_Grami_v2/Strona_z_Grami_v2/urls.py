from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('mainpage.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
]