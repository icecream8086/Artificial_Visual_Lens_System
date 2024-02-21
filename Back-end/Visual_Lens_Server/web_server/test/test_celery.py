import unittest
import requests

private_url='http://127.0.0.1:5000'
public_url = 'http://10.21.78.46:5000'
url = public_url

class Test_ServiceStatu(unittest.TestCase):
    task_id = ""
    
    def publish_test_celery(self):
        # test_default 
        response = requests.get(url+"/test_celery")
        Test_ServiceStatu.task_id = response.json()["task_id"]
        self.assertEqual(response.status_code, 200)
        
    def test_task_info(self):
        # test_default 
        response = requests.get(url+"/task-info/"+Test_ServiceStatu.task_id)
        self.assertEqual(response.status_code, 200)

        expected_states = ["PENDING", "SUCCESS"]
        self.assertIn(response.json()["state"], expected_states)

    def search_all_online_task(self):
        # test_default 
        response = requests.get(url+"/all-tasks")
        self.assertEqual(response.status_code, 200)

    def clear_all_online_tasks_statu(self):
        # test_default 
        response = requests.get(url+"/clear_tasks")
        self.assertEqual(response.status_code, 200)
    

if __name__ == '__main__':
    unittest.main()