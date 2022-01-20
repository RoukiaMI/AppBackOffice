from django.urls import path
#from BackEnd.TME_webAPI_20220110.TME_webAPI_DBO.mySearchEngine.mytig.models import Historique
from mytig import views

urlpatterns = [
    path('products/', views.RedirectionListeDeProduits.as_view()),
    path('product/<int:pk>/', views.RedirectionDetailProduit.as_view()),
    path('onsaleproducts/', views.PromoList.as_view()),
    path('onsaleproduct/<int:pk>/', views.PromoDetail.as_view()),
    path('shipPoints/', views.RedirectionListeDeShipPoints.as_view()),
	  path('shipPoint/<int:pk>/', views.RedirectionDetailShipPoint.as_view()),
	  path('availableproducts/', views.DispoList.as_view()),
    path('availableproduct/<int:pk>/', views.DispoDetail.as_view()),
    path('modifStockA/<int:id>/<int:number>/',views.ModifStockA.as_view()),
    path('modifStockR/<int:id>/<int:number>/<int:prixVente>/',views.ModifStockR.as_view()),
    path('detailproduit/',views.DetailProduit.as_view()),
    path('modifierPourcentage/<int:id>/<int:pourcent>/',views.ModifPourcentage.as_view()),
    path('historique/<int:pk>/', views.Historique.as_view())


   #path('coquillages/', views.Coquillageslist.as_view()),

]
