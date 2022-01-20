from datetime import date
from django.core.management.base import BaseCommand, CommandError
from mytig.models import Historique
from mytig.serializers import HistoriqueSerializer
from mytig.config import urlDetailProduit
import requests
import time

class Command(BaseCommand):
    help = 'Refresh the list of products.'

    def handle(self, *args, **options):
        self.stdout.write('['+time.ctime()+'] Refreshing data...')
        response = requests.get(urlDetailProduit+'detailproduit/')
        jsondata = response.json()
        Historique.objects.all().delete()
        for product in jsondata:
            h = Historique(
                tigID = product['tigID'],
                benefices = 0,
                date = time.localtime()
            )
            h.save()
            self.stdout.write(self.style.SUCCESS('['+time.ctime()+'] Successfully added product id="%s"' % product['tigID']))
        self.stdout.write('['+time.ctime()+'] Data refresh terminated.')
