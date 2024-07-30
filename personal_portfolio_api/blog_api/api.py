from .models import Post
from rest_framework import viewsets
from .serializers import PostSerializer
from .permissions import AuthorUpdateDelete

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [
        AuthorUpdateDelete,
    ]
    # queryset = Post.objects.all().order_by("-date_created")
    serializer_class = PostSerializer
    def get_queryset(self):
        return Post.objects.all().order_by("-date_created")
        # return self.request.user.postlist.all()  

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)
