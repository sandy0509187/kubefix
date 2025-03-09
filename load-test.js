import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export default function () {
  // Replace with your Nginx service URL
  const url = 'http://nginx-service.default.svc.cluster.local';  // Modify with the correct URL or service name in your K8s cluster

  const res = http.get(url);

  // Check the response status code
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  // Sleep between requests
  sleep(1);
}