from django.urls import path
from social_cards import views

urlpatterns = [
    path("", views.api_root),
    path("cards/", views.CardList.as_view(), name="card-list"),
]
