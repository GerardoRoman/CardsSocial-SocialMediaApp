from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import User, Card
from .serializers import CardSerializer


@api_view(["GET"])
def api_root(request, format=None):
    return Response(
        {
            "Cards": reverse('card-list', request=request, format=format),
        }
    )


class CardList(generics.ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
