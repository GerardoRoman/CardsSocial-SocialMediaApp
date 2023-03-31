from django.contrib import admin
from .models import User, Card, Followship

admin.site.register(User)
admin.site.register(Card)
admin.site.register(Followship)
