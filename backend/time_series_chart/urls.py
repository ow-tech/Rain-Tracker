from django.urls import path
from . import views

app_name = 'time_series_chart'
urlpatterns = [
    path('home/', views.DataListView.as_view() , name='home'),

]