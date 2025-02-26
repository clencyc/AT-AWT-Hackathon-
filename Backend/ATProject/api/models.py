from django.db import models



class Ad(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    call_to_action = models.CharField(max_length=100)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='ads')

    def __str__(self):
        return self.title


class BuyerProfile(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    age = models.PositiveIntegerField()
    location = models.CharField(max_length=100)
    category_preference = models.ManyToManyField('Category', related_name='buyers')

    def __str__(self):
        return f"Buyer ({self.gender}, {self.age}) - {self.location}"


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
