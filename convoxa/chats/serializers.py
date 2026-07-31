from rest_framework import serializers
from .models import PrivateMessages
class PrivateMessagesSerializer(serializers.ModelSerializer):
    sender = serializers.CharField(
                source="sender.username",
                read_only=True
    )
                #instead of getting sender id i will get its username
    class Meta:
        model = PrivateMessages
        fields = [
            "id",
            "sender",
            "conversation",
            "text",
            "image",
            "file",
            "is_read",
            "created_at",
        ]
        #now below one's will not be edited by client
        read_only_fields = [
            "id",
            "created_at",
            "sender",
        ]
    def validate_image(self,image):
        if image.size >5 *1024 * 1024:
            raise serializers.ValidationError(
                "Maximum image size is 5MB"
                )
        return image