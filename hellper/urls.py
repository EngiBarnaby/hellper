from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from myapp.views import main_page

urlpatterns = [
    path("", main_page, name="main"),
    path("account/", include("account.urls", namespace="accoun  t")),
    path('api/', include("myapp.urls")),
    path('user-api/', include('account.api.urls', namespace="user-api")),
    path('react/', TemplateView.as_view(template_name='main-page.html')),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, 
                document_root=settings.STATIC_ROOT) \
                   + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)