from django.shortcuts import render

def cargarInicio(request):
    return render(request, "inicio.html")

def cargarFormulario(request):
    return render(request, "formulario.html")

def cargarNosotros(request):
    return render(request, "nosotros.html")