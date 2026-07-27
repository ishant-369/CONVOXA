from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
@api_view(["GET"])
def chat_view(request):
    user = request.user

    return Response({
        "username": user.username,
        "status": "connected"
    })