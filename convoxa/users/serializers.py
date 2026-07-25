from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
class UserSerializer(serializers.ModelSerializer):
    # Meta class is used to configure the serializer
    class Meta:
        # Specify which Django model this serializer works with
        model = User
        # These are the fields that React can send
        fields = ["id", "username","email", "password"]
        # Password can be sent to the backend,
        # but it will never be returned in the response.
        extra_kwargs = {"password": {"write_only": True}}
#The serializer checks the data first.

#If everything is correct, it stores it in
    def create(self, validated_data):
        #this creates the new user in the database
        #(**) it will unpack the dictionary 
        user = User.objects.create_user(**validated_data)
        # User.objects.create_user = it will hash the password by this if anyone with database access also will not be able to see the password
        return user
# validated_data contain the dictionary


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id","title","content","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}