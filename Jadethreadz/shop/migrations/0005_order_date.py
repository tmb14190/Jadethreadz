# Generated by Django 3.1.2 on 2021-01-10 16:20

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_auto_20210110_1613'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='date',
            field=models.DateField(default=datetime.date(2021, 1, 10)),
        ),
    ]
