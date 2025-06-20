import uuid
import datetime
import re
from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone

STATES_ALLOW_LIST = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
                     'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
                     'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

ALLOWED_EMAIL_DOMAINS = ['gmail.com', 'gmail.com.br',
                         'outlook.com', 'outlook.com.br',
                         'yahoo.com', 'yahoo.com.br', 
                         'ymail.com', 'ymail.com.br',
                         'hotmail.com', 'hotmail.com.br',
                         'uol.com', 'uol.com.br',
                         'icloud.com', 'icloud.com.br']

def validate_state(
        value: str
    ) -> None:

    if value not in STATES_ALLOW_LIST:
        raise ValidationError(f'Invalid state "{value}" should be one of {STATES_ALLOW_LIST}')
        
def validate_email(
        value: str
    ) -> None:
    
    if value.lower() not in ALLOWED_EMAIL_DOMAINS:
        raise ValidationError(f'Email domain "{value}" is not allowed')

def validate_national_id(
        value: str
    ) -> None:

    cpf = re.sub(r'[^0-9]', '', value)
    if len(cpf) != 11 or cpf == cpf[0] * 11:
        raise ValidationError(f'Invalid value {value} format')

    # validate first digit
    first_digit_sum = sum(int(cpf[i]) * (10 - i) for i in range(9))
    digit1 = ((first_digit_sum * 10) % 11) % 10
    if digit1 != int(cpf[9]):
        raise ValidationError(f'Invalid value {value} number')

    # validate second digit
    second_digit_sum = sum(int(cpf[i]) * (11 - i) for i in range(10))
    digit2 = ((second_digit_sum * 10) % 11) % 10
    if digit2 != int(cpf[10]):
        raise ValidationError(f'Invalid value {value} number')

class Client(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    national_id = models.CharField(unique=True, max_length=11)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    profession = models.EmailField(unique=True)
    phone_number = models.CharField(unique=True, max_length=20)
    birth_date = models.DateField()
    phone_number = models.CharField(unique=True, max_length=20)
    postal_code = models.CharField(max_length=20)
    state = models.CharField(max_length=2)
    city = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    address_number = models.CharField(max_length=50)
    address_complement = models.CharField(max_length=50)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def str(self):
        return self.id
