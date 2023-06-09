from django.urls import path
from social_cards import views

urlpatterns = [
    path("", views.api_root),
    path("cards/", views.CardList.as_view(), name="card-list"),
    path("cards/<int:pk>/", views.CardDetail.as_view(), name='card-detail'),
    path('cards/search/', views.CardSearch.as_view(), name='card-search'),
    path('cards/create/', views.CardCreate.as_view(), name='card-create'),
    #     path('users/', views.UserList.as_view(), name="users"),
    path('users/<str:username>/', views.UserDetail.as_view(), name='user-detail'),
    path('my-cards/', views.UserCardList.as_view(),
         name='user-cards-created'),
    path('users/my-cards/<int:pk>/',
         views.UserCardDetail.as_view(), name='card-edit-update'),
    path('follow/<str:username>/',
         views.FollowshipAPIView.as_view(), name='followship'),
    path('following/', views.ListUsersYouFollow.as_view(),
         name='user-following-list'),
    path('users/following/cards/', views.ListFollowingCards.as_view(),
         name='user-following-cards'),
    path('followship-count/', views.CountFollowersAndFollowing.as_view(),
         name='followship-count'),

]
