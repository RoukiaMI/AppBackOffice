# Generated by Django 4.0.1 on 2022-01-21 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mytig', '0002_produit'),
    ]

    operations = [
        migrations.CreateModel(
            name='Historique',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('tigID', models.IntegerField(default='-1')),
                ('benefices', models.IntegerField(default=0)),
                ('date', models.CharField(max_length=2000)),
            ],
            options={
                'ordering': ('tigID', 'date'),
            },
        ),
        migrations.AddField(
            model_name='produit',
            name='benefices',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='produit',
            name='invendus',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='produit',
            name='prixVente',
            field=models.FloatField(default=0.0),
        ),
    ]
