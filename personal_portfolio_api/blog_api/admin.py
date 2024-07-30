from django.contrib import admin
from .models import Post

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ("id","title", "date_created", "date_updated")
    list_display_links = ("id", "title")
    search_fields = ("id", "title")
    # list_editable = ("title",)
    list_filter = ("title", "date_created")

admin.site.register(Post, PostAdmin)