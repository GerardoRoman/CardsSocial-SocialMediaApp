from django.shortcuts import render
from django_filters import rest_framework as filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from rest_framework import generics, filters
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.permissions import IsAuthenticated


from .models import User, Card
from .serializers import CardSerializer, UserSerializer, FollowerSerializer


@api_view(["GET"])
def api_root(request, format=None):
    return Response(
        {
            "Cards": reverse('card-list', request=request, format=format),
            "Card Search": reverse('card-search', request=request, format=format),
            "Users": reverse('users', request=request, format=format)
        }
    )


class CardList(generics.ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    # permission_classes = [IsAuthenticated]


class CardDetail(generics.RetrieveAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


class CardSearch(generics.ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'card_front_message',
        'card_back_message',
        'color',
        'border',
        'font'
    ]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
