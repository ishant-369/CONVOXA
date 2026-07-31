from django.db import models
from django.contrib.auth.models import User
#Create your models here.
class Conversation(models.Model):
    participants = models.ManyToManyField(User)
    #manytomany is used so that multiple participants can be here
    created_at = models.DateTimeField(auto_now_add=True)#it will automatically store when the conversation was created
    def __str__(self):
        return f"Conversation {self.id}"
class PrivateMessages(models.Model):
    #now i will link the messages to its conversation if the conversation is deleted then
    #all its messages are deleted too
    conversation = models.ForeignKey(
        Conversation,
        related_name="messages",
        on_delete=models.CASCADE
    )
    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="send_messages"
    )
    text = models.TextField(blank=True)
    image = models.ImageField(
        upload_to="private/images/",
        blank = True,
        null= True
    )
    file = models.FileField(
        upload_to="private/files/",
        blank=True,
        null=True
    )
    is_read = models.BooleanField(default=False)
    is_edited= models.BooleanField(default=False)
    #is_deleted= models.BooleanField(default=False)#soft delete instead of deleted it fully we will mark it as delete
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ["created_at"]
    def __str__(self):
        return f"{self.sender.username}: {self.text[:30]}"


class ChatGroup(models.Model):
    group_name = models.CharField(max_length=120, unique=True)

    def __str__(self):
        return self.group_name
    

class GroupMessage(models.Model):
    group = models.ForeignKey(ChatGroup, related_name='chat_messages', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)#it will save the time when they were created

    def __str__(self):
        return f'{self.author.username} : {self.body}'

    class Meta:
        ordering = ['-created']#it will organise messages from newest to the oldest

    