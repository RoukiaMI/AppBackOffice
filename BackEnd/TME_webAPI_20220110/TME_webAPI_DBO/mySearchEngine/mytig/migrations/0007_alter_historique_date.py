# Generated by Django 4.0.1 on 2022-01-18 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mytig', '0006_alter_historique_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historique',
            name='date',
            field=models.CharField(max_length=2000),
        ),
    ]
