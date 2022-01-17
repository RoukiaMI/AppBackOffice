from rest_framework.serializers import ModelSerializer
from mytig.models import ProduitEnPromotion
from mytig.models import Produit

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
            'discount_price',
            'discount_percent',
            'quantity',
            'sales_number',
            'comments',
            'category' 
        )