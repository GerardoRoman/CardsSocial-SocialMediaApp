from rest_framework import serializers
from .models import User, Card


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = (
            '__all__'
        )
