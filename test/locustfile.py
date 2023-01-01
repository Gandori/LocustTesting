from locust import HttpUser, task

class QuickstartUser(HttpUser):
    @task
    def user_data(self):
        with self.client.get('/get', catch_response=True) as response:
            if response.elapsed.total_seconds() > 0.5:
                response.failure('Request took too long')