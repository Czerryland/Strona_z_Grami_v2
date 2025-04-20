from django.contrib import admin
from django.urls import include, path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='/mainpage/', permanent=False)),
    path('', include('mainpage.urls')),
    path('', include('accounts.urls')),
    path('', include('leaderboard.urls')),
    path('', include('games.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns += staticfiles_urlpatterns()