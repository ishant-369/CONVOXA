#from django.contrib import admin
#from django.urls import path, include
#from users.views import CreateUserView
#from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

 
#urlpatterns = [
    #path('admin/', admin.site.urls),
    #path("register/", CreateUserView.as_view(), name="register"),
    #path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
   # path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
  #  path("api-auth/", include("rest_framework.urls")),
 #   path("api/", include("users.urls")),
#]
from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from users.views import CreateUserView


urlpatterns = [
    path("admin/", admin.site.urls),

    # Register user
    path("api/user/register/", CreateUserView.as_view(), name="register"),

    # Login token
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),

    # Refresh token
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),

    # App urls
    path("api/", include("users.urls")),

    # DRF login/logout
    path("api-auth/", include("rest_framework.urls")),
]