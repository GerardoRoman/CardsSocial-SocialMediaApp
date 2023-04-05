from .models import Followship, User
from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.response import Response
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
    # lookup_field = 'username'


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


class FollowshipAPIView(APIView):
    ''' follow and unfollow user
    '''
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # handles HTTP POST requests to the view. The username parameter is passed in from the URL.
    def post(self, request, username):
        follower = request.user
        # fetch following user from database based on username from URL. If the user doesn't exist, a 404 error is raised.
        following = get_object_or_404(User, username=username)

    # creates a new instance of the Followship model with the given follower and following parameters.
        followship = Followship.objects.create(
            follower=follower, following=following)

    # creates new instance of the FollowshipSerializer class, which is responsible for serializing the Followship instance into a JSON-formatted response.
        serializer = FollowshipSerializer(followship)
    # creates an HTTP response using the serialized data obtained from the FollowshipSerializer and returns it.
    # serializer.data property contains the serialized data in JSON format.
    # HTTP status code 201 CREATED indicates that the request was successful and a new resource has been created.
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, username):
        follower = request.user
        following = get_object_or_404(User, username=username)

        # fetches the Followship object from the database that links the follower and following users.
        followship = get_object_or_404(
            Followship, follower=follower, following=following)

        followship.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class ListUsersYouFollow(generics.ListAPIView):
    ''' list all the users you follow
    '''
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        followships = Followship.objects.filter(follower=user)
        users_following = [followship.following for followship in followships]
        return users_following


class ListFollowingCards(generics.ListAPIView):
    ''' list all the card by users you follow
    '''
    serializer_class = CardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        followships = Followship.objects.filter(follower=user)
        users_following = [followship.following for followship in followships]
        following_cards = Card.objects.filter(created_by__in=users_following)
        return following_cards
