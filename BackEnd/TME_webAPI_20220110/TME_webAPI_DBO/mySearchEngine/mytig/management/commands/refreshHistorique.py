from django.core.management.base import BaseCommand, CommandError
from mytig.models import Historique
from mytig.serializers import HistoriqueSerializer
from mytig.config import urlDetailProduit
import requests
import time

class Command(BaseCommand):
    help = 'Refresh the list of transactions'


	def handle(self, *args, **options):
	        self.stdout.write('['+time.ctime()+'] Refreshing data...')
	        Historique.objects.all()
	        t = Historique()
	        t.save()
	        self.stdout.write(self.style.SUCCESS('['+time.ctime()+'] Successfully added transaction'))
	        self.stdout.write('['+time.ctime()+'] Data refresh terminated.')