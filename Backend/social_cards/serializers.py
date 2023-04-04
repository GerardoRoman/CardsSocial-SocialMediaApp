from rest_framework import serializers
from .models import User, Card, Followship


class CardSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(many=False)

    class Meta:
        model = Card
        fields = (
            '__all__'
        )


class UserSerializer(serializers.ModelSerializer):
    followers = serializers.SerializerMethodField("get_followers_list")
    following = serializers.SerializerMethodField("get_following_list")
    cards_created = serializers.SerializerMethodField("get_cards_made_by_user")

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "cards_created",
            "followers",
            "following",
        )

    def get_followers_list(self, obj):
        queryset = Followship.objects.filter(following=obj)
        return [followship.follower.username for followship in queryset]

    def get_following_list(self, obj):
        queryset = Followship.objects.filter(follower=obj)
        return [followship.following.username for followship in queryset]

    def get_cards_made_by_user(self, obj):
        queryset = Card.objects.filter(created_by=obj)
        return [{"card_id": card.id, "title_text": card.title_text} for card in queryset]


class FollowshipSerializer(serializers.ModelSerializer):

    class Meta:
        model = Followship
        fields = (
            '__all__'
        )
        read_only_fields = ("follower",)
