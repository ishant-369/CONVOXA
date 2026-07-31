from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import PrivateMessages
from .serializers import PrivateMessagesSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404
# Create your views here.
@api_view(["GET"])
def get_messages(request):
    # for getting every message from the database we will use
    messages = PrivateMessages.objects.all()
    serializer = PrivateMessagesSerializer(
        messages,
        many=True
    )
    return Response(
        serializer.data,
        status=status.HTTP_200_OK
    )
@api_view(["GET"])
def get_message(request, message_id):
    message = get_object_or_404(
        PrivateMessages,
        id=message_id
    )
    serializer = PrivateMessagesSerializer(message)
    return Response(
        serializer.data,
        status=status.HTTP_200_OK
    )
@api_view(["POST"])
def send_messages(request):
    serializer = PrivateMessagesSerializer(
        data=request.data
    )
    if serializer.is_valid():
        serializer.save(
            sender=request.user
        )
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )
    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )
@api_view(["PUT"])
def update_message(request, message_id):
    message = get_object_or_404(
        PrivateMessages,
        id=message_id
    )
    serializer = PrivateMessagesSerializer(
        message,
        data=request.data
    )
    if serializer.is_valid():
        serializer.save()
        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )
    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )
@api_view(["PATCH"])
def edit_message(request, message_id):
    message = get_object_or_404(
        PrivateMessages,
        id=message_id
    )
    serializer = PrivateMessagesSerializer(
        message,
        data=request.data,
        partial=True
    )
    if serializer.is_valid():
        serializer.save()
        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )
    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )
@api_view(["DELETE"])
def delete_message(request, message_id):
    message = get_object_or_404(
        PrivateMessages,
        id=message_id
    )
    message.delete()
    return Response(
        {
            "message": "Deleted Successfully"
        },
        status=status.HTTP_204_NO_CONTENT
    )
@api_view(["GET"])
def search_message(request):
    search = request.GET.get("search")
    messages = PrivateMessages.objects.filter(
        text__icontains=search      # ✅ FIXED: double underscore (__)
    )
    serializer = PrivateMessagesSerializer(
        messages,
        many=True
    )
    return Response(
        serializer.data,
        status=status.HTTP_200_OK
    )
@api_view(["PATCH"])
def mark_as_read(request, message_id):
    message = get_object_or_404(
        PrivateMessages,
        id=message_id
    )
    message.is_read = True
    message.save()
    serializer = PrivateMessagesSerializer(message)
    return Response(
        serializer.data,
        status=status.HTTP_200_OK
    )