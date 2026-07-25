from django.db import models
# Create your models here.
from django.conf import settings
class Conversation(models.Model):
    # it will determine whether this conversation is a group chat or not
    # false= one to one chat 
    #true = group chat 
    is_group = models.BooleanField(default=False)
    # this part is for deciding the name of the chat section
    name = models.CharField(
        max_length=100,
        blank=True
    )
    #automatically stores the timw when the conversation was created 
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    #this will decide how will the object is going to look in teh django admin 
    def __str__(self):
        if self.is_group:
            return self.name
        return f"Conversation {self.id}"
    class ConversationMember(models.Model):
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name="members"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODELS,
        on_delete=models.CASCADE
        )
    joined_at = models.DateTimeField(
        auto_now_add=True
    )
    def __str__(self):
        return self.user.username
   #reminder i am using forignkey here so that each message belong to the conversation 
class Message(models.Model):
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name="messages"
    )
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete= models.CASCADE
        )
    text = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    edited = models.BooleanField(
        default = False
    )
    deleted = models.BooleanField(
        default=False
    )
    def __str__(self):
        return f"{self.sender.username}: {self.text[:30]}"