# Generated by Django 3.0.8 on 2020-08-17 13:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('account', '0002_customuser_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='profile_picture',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]