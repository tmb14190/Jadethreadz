# Generated by Django 3.1.2 on 2021-01-10 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_auto_20201202_1046'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orders',
            name='Oid',
        ),
        migrations.AlterField(
            model_name='orders',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]