import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from mytig.config import baseUrl

# Create your views here.
class RedirectionListeDeProduits(APIView):
    def get(self, request, format=None):
        response = requests.get(baseUrl+'products/')
        jsondata = response.json()
        return Response(jsondata)
#    def post(self, request, format=None):
#        NO DEFITION of post --> server will return "405 NOT ALLOWED"

class RedirectionDetailProduit(APIView):
    def get(self, request, pk, format=None):
        try:
            response = requests.get(baseUrl+'product/'+str(pk)+'/')
            jsondata = response.json()
            return Response(jsondata)
        except:
            raise Http404
#    def put(self, request, pk, format=None):
#        NO DEFITION of put --> server will return "405 NOT ALLOWED"
#    def delete(self, request, pk, format=None):
#        NO DEFITION of delete --> server will return "405 NOT ALLOWED"

#########################################################################################################################################
#                                      DetailsProduits
#######################################################################################################################################

class DetailProduit(APIView):
    def get_object(self, pk):
        try:
            queryset = Produit.objects.get(tigID = pk)
            response = ProduitSerializer(queryset).data
            return response
        except:
            raise Http404
    def get(self, request, pk, format=None):
        response = self.get_object(pk)
        return Response(response)








#############################################################################################################################
#ShipPoint

class RedirectionListeDeShipPoints(APIView):
    def get(self, request, format=None):
        response = requests.get(baseUrl+'shipPoints/')
        jsondata = response.json()
        return Response(jsondata)
#    def post(self, request, format=None):
#        NO DEFITION of post --> server will return "405 NOT ALLOWED"

class RedirectionDetailShipPoint(APIView):
    def get(self, request, pk, format=None):
        try:
            response = requests.get(baseUrl+'shipPoint/'+str(pk)+'/')
            jsondata = response.json()
            return Response(jsondata)
        except:
            raise Http404
#    def put(self, request, pk, format=None):
#        NO DEFITION of put --> server will return "405 NOT ALLOWED"
#    def delete(self, request, pk, format=None):
#        NO DEFITION of delete --> server will return "405 NOT ALLOWED"

######################################################################################################################""

from mytig.models import ProduitEnPromotion
from mytig.serializers import ProduitEnPromotionSerializer
from django.http import Http404
from django.http import JsonResponse

class PromoList(APIView):
    def get(self, request, format=None):
        res=[]
        for prod in ProduitEnPromotion.objects.all():
            serializer = ProduitEnPromotionSerializer(prod)
            response = requests.get(baseUrl+'product/'+str(serializer.data['tigID'])+'/')
            jsondata = response.json()
            res.append(jsondata)
        return JsonResponse(res, safe=False)
#    def post(self, request, format=None):
#        NO DEFITION of post --> server will return "405 NOT ALLOWED"

class PromoDetail(APIView):
    def get_object(self, pk):
        try:
            return ProduitEnPromotion.objects.get(pk=pk)
        except ProduitEnPromotion.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        prod = self.get_object(pk)
        serializer = ProduitEnPromotionSerializer(prod)
        response = requests.get(baseUrl+'product/'+str(serializer.data['tigID'])+'/')
        jsondata = response.json()
        return Response(jsondata)
#    def put(self, request, pk, format=None):
#        NO DEFITION of put --> server will return "405 NOT ALLOWED"
#    def delete(self, request, pk, format=None):
#        NO DEFITION of delete --> server will return "405 NOT ALLOWED"

################################################################################################################

from mytig.models import Produit
from mytig.serializers import ProduitSerializer
from django.http import Http404
from django.http import JsonResponse

class DispoList(APIView):
    def get(self, request, format=None):
        res=[]
        for prod in ProduitDisponible.objects.all():
            serializer = ProduitSerializer(prod)
            response = requests.get(baseUrl+'availableproducts/'+str(serializer.data['tigID'])+'/')
            jsondata = response.json()
            res.append(jsondata)
        return JsonResponse(res, safe=False)

class DispoDetail(APIView):
    def get_object(self, pk):
        try:
            return ProduitDisponible.objects.get(pk=pk)
        except ProduitDisponible.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        prod = self.get_object(pk)
        serializer = ProduitSerializer(prod)
        response = requests.get(baseUrl+'availableproducts/'+str(serializer.data['tigID'])+'/')
        jsondata = response.json()
        return Response(jsondata)
#    def put(self, request, pk, format=None):
#        NO DEFITION of put --> server will return "405 NOT ALLOWED"
#    def delete(self, request, pk, format=None):
#        NO DEFITION of delete --> server will return "405 NOT ALLOWED"


#########################################################################################################################


class ModifStockR(APIView):
    def get_object(self, id):
        try:
            queryset = Produit.objects.get(tigID = id)
            return queryset
        except Produit.DoesNotExist:
            raise Http404

    def get(self, request, id, number,format=None):
        prod = self.get_object(id)
        if(prod.quantity<= 0):
            return Response(ProduitSerializer(prod).data)
        else:
            prod.quantity = prod.quantity - number
            prod.sales_number = prod.sales_number+number
            prod.save()
            response = ProduitSerializer(prod).data
            return Response(response)


class ModifStockA(APIView):
    def get_object(self, id):
        try:
            queryset = Produit.objects.get(tigID = id)
            return queryset
        except Produit.DoesNotExist:
            raise Http404
    def get(self, request, id, number,format=None):

        prod = self.get_object(id)
        
        prod = self.get_object(id)
        prod.quantity = prod.quantity + number
        prod.save()
        response = ProduitSerializer(prod).data
        return Response(response)

class ModifPourcentage(APIView):
    def get_object(self, id):
        try:
            queryset = Produit.objects.get(tigID = id)
            return queryset
        except Produit.DoesNotExist:
            raise Http404
    def get(self, request, id, pourcent,format=None):

        prod = self.get_object(id)
        
        prod = self.get_object(id)
        prod.discount_percent = pourcent
        prod.save()
        response = ProduitSerializer(prod).data
        return Response(response)