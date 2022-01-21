from dataclasses import fields
#from BackEnd.TME_webAPI_20220110.TME_webAPI_DBO.mySearchEngine.mytig.models import Historique
from rest_framework.serializers import ModelSerializer
from mytig.models import ProduitEnPromotion
from mytig.models import Produit
from mytig.models import Historique

class ProduitEnPromotionSerializer(ModelSerializer):
    class Meta:
        model = ProduitEnPromotion
        fields = ('id', 'tigID')

class ProduitDispo(ModelSerializer):
    class Meta:
        model = ProduitEnPromotion
        fields = ('id', 'tigID')


class ProduitSerializer(ModelSerializer):
    class Meta:
        model = Produit
        fields = (
            'tigID',
            'name',
            'price',
            'prixVente',
            'discount_price',
            'discount_percent',
            'quantity',
            'sales_number',
            'comments',
            'category',
            'benefices',
            'invendus'
        )


class HistoriqueSerializer(ModelSerializer):
  class Meta:
    model = Historique
    fields = (
      'tigID',
      'benefices',
      'date'
    )