# Generated by Django 3.0.8 on 2020-08-17 22:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0006_task_update'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='Update',
            new_name='update',
        ),
    ]