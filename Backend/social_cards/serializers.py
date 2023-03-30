from rest_framework import serializers
from .models import User, Card, Follower


class CardSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(many=False)

    class Meta:
        model = Card
        fields = (
            '__all__'
        )


class FollowerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Follower
        fields = (
            "following",
            "follower",
        )


class UserSerializer(serializers.ModelSerializer):
    following = serializers.StringRelatedField(many=True)
    followers = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "following",
            "followers",
        )
