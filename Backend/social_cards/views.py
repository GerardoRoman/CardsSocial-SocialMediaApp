from .models import Followship, User
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django_filters import rest_framework as filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from rest_framework import generics, filters, permissions
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


from .models import User, Card
from .serializers import CardSerializer, UserSerializer, FollowshipSerializer


@api_view(["GET"])
def api_root(request, format=None):
    return Response(
        {
            "Cards": reverse('card-list', request=request, format=format),
            "Card Search": reverse('card-search', request=request, format=format),
            "Card Create": reverse('card-create', request=request, format=format),
            # "Users": reverse('users', request=request, format=format),
        }
    )


class CardList(generics.ListAPIView):
    ''' list of all cards
    '''
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class CardDetail(generics.RetrieveAPIView):
    ''' view details for single card
    '''
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class CardSearch(generics.ListAPIView):
    ''' search through all cards
    '''
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = [
        'title_text',
        'card_front_message',
        'card_back_message',
        'color',
        'border',
        'font'
    ]


class CardCreate(generics.CreateAPIView):
    ''' create a new card
    '''
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class UserList(generics.ListAPIView):
    ''' list of all users
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class UserDetail(generics.RetrieveAPIView):
    ''' view details for single user
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class UserCardList(generics.ListAPIView):
    ''' list logged in user's created cards
    '''
    serializer_class = CardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Card.objects.filter(created_by=user)


class UserCardDetail(generics.RetrieveUpdateDestroyAPIView):
    ''' user edit or delete created cards
    '''
    serializer_class = CardSerializer
    lookup_field = 'pk'
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Card.objects.filter(created_by=user)


class FollowUser(generics.CreateAPIView):
    ''' follow another user
    '''
    serializer_class = FollowshipSerializer
    queryset = Followship.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        follower = self.request.user
        serializer.save(follower=follower)
