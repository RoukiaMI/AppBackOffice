from django.db import models

# Create your models here.
class ProduitEnPromotion(models.Model): #Reference a la bdd à distance de thibault
    created = models.DateTimeField(auto_now_add=True)
    tigID = models.IntegerField(default='-1')

    class Meta:
        ordering = ('tigID',)

class ProduitDisponible(models.Model):#Reference a la bdd à distance de thibault
    created = models.DateTimeField(auto_now_add=True)
    tigID = models.IntegerField(default='-1')

    class Meta:
        ordering = ('tigID',)

class Produit(models.Model): #Données du point relais
    created = models.DateTimeField(auto_now_add=True)
    tigID = models.IntegerField(default='-1')
    name = models.CharField(max_length=2000)
    price = models.FloatField(default = 0.0)
    prixVente=models.FloatField(default = 0.0)
    discount_price = models.FloatField(default = 0.0)
    discount_percent = models.FloatField(default = 0.0)
    quantity = models.IntegerField(default = 0)
    sales_number = models.IntegerField(default = 0)
    comments = models.CharField(max_length=2000)
    category = models.IntegerField(default='-1')
    benefices = models.IntegerField(default = 0)
    invendus = models.IntegerField(default = 0)

    class Meta:
        ordering = ('tigID',)


class Historique(models.Model):#Données du point relais
  created = models.DateTimeField(auto_now_add=True)
  tigID = models.IntegerField(default='-1')
  benefices = models.IntegerField(default = 0)
  date = models.CharField(max_length=2000)

  class Meta:
      ordering = ('tigID','date',)
