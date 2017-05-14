from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers

from blogdb.views import ArticleViewSet

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(router.urls)),

]