import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://underc0de.org/foro/index.php');
  check(res, { 'status is 200': (r) => r.status === 200 });
}

/*// Simulate user think time by sleeping for a specified duration
sleep(3);

// Perform additional actions and assertions

// Send an HTTP POST request with request body and headers
const payload = JSON.stringify({ key: 'value' });
const headers = { 'Content-Type': 'application/json' };
const postRes = http.post('https://api.example.com/endpoint', payload, { headers });

// Check that the response status is 201 and response body contains expected data
check(postRes, {
  'status is 201': (r) => r.status === 201,
  'response body contains expected data': (r) => r.body.includes('expected-data'),
});

// You can check the K6 Docs for more request, metrics and checks examples:
// https://k6.io/docs/using-k6/http-requests/ */