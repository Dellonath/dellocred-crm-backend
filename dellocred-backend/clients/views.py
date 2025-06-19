from rest_framework.decorators import api_view
from .models import Client
from rest_framework import status
from .serializers import ClientSerializer
from django.http import JsonResponse, HttpResponse

def home(request):
    return HttpResponse("Hello Django!")

@api_view(['GET'])
def all_clients(request) -> JsonResponse:
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET', 'PUT', 'DELETE'])
def get_delete_update_client(request, id: int) -> JsonResponse:
    try:
        client = Client.objects.get(id=id)
    except Client.DoesNotExist:
        return JsonResponse({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ClientSerializer(client)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        client.delete()
        return JsonResponse({'message': 'Client deleted'}, status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        try:
            client = Client.objects.get(id=id)
        except Client.DoesNotExist:
            return JsonResponse({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ClientSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_client(request) -> JsonResponse:
    serializer = ClientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)