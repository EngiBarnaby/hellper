from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class UserRegisterForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control py-2 border-left-0 border', 'placeholder': 'Имя пользователя'}))
    email=forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control py-2 border-left-0 border', 'placeholder': 'Email'}), max_length=64, help_text='Введите коректный email')
    password1=forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control py-2 border-left-0 border', 'placeholder': 'Пароль'}))
    password2=forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control py-2 border-left-0 border', 'placeholder': 'Повторите пароль'}))
    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]