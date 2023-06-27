from django.db import models

class producto(models.Model):
    SKU = models.IntegerField(primary_key=True)
    Nombre = models.CharField(max_length=30, null=False)
    Cantidad = models.IntegerField(null=False)
    Genero = models.CharField(max_length=20, null=False)
    Artista = models.CharField(max_length=30, null=False)
"""     Imagen = models.ImageField(upload_to='imagenesProducto') """
