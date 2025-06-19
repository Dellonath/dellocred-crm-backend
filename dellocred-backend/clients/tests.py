from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Client

class ClientViewsTestCase(APITestCase):
    def setUp(self):
        self.client1 = Client.objects.create(name="Alice", email="alice@example.com")
        self.client2 = Client.objects.create(name="Bob", email="bob@example.com")

    def test_get_client_success(self):
        url = reverse('get_delete_update_client', args=[self.client1.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()['name'], "Alice")

    def test_get_client_not_found(self):
        url = reverse('get_delete_update_client', args=[999])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_add_client(self):
        url = reverse('add_client')
        data = {'name': 'Charlie', 'email': 'charlie@example.com'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Client.objects.count(), 3)

    def test_delete_client_success(self):
        url = reverse('get_delete_update_client', args=[self.client1.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Client.objects.count(), 1)

    def test_delete_client_not_found(self):
        url = reverse('get_delete_update_client', args=[999])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)