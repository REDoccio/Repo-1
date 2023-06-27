from django.urls import path
from . import views

urlpatterns = [
    path ('', views.cargarInicio),
    path ('formulario', views.cargarFormulario),
    path ('nosotros', views.cargarNosotros)
]