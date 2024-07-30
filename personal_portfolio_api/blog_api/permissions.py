from rest_framework.permissions import BasePermission, SAFE_METHODS


class AuthorUpdateDelete(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in [*SAFE_METHODS]:
            return True
        if request.method == "POST": 
            if request.user.is_authenticated:
                return True
            else:
                return False
        return request.user.is_authenticated and (obj.owner == None or obj.owner == request.user)
