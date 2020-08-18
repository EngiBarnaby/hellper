from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import UserRegisterForm

def register_user(request, *args, **kwargs):
    form = UserRegisterForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=True)
        user.set_password(form.cleaned_data.get("password1"))
        return redirect("/")
    context = {"form" : form}
    return render(request, "account/register.html", context)

def login_user(request, *args, **kwargs):
    if request.user.is_authenticated:
        return redirect('/')
    else:
        if request.method == "POST":
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect("/")
            else:
                messages.info(request, "Имя или пароль неверны")
        return redirect("/")

def logout_user(request):
    logout(request)
    return redirect("/")
