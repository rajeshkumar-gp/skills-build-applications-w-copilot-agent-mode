from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelSmokeTest(TestCase):
    def test_team_create(self):
        t = Team.objects.create(name='Test Team')
        self.assertEqual(str(t), 'Test Team')
    def test_user_create(self):
        t = Team.objects.create(name='T')
        u = User.objects.create(name='U', email='u@example.com', team=t)
        self.assertEqual(str(u), 'U')
    def test_activity_create(self):
        t = Team.objects.create(name='T')
        u = User.objects.create(name='U', email='u@example.com', team=t)
        a = Activity.objects.create(user=u, type='Run', duration=10, date='2024-01-01')
        self.assertEqual(str(a), 'U - Run (2024-01-01)')
    def test_workout_create(self):
        w = Workout.objects.create(name='W')
        self.assertEqual(str(w), 'W')
    def test_leaderboard_create(self):
        t = Team.objects.create(name='T')
        l = Leaderboard.objects.create(team=t, points=5)
        self.assertIn('T', str(l))
