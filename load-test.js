import http from 'k6/http';
import { check } from 'k6';

// Access the CANARY_POD_IP environment variable
const canaryPodIp = __ENV.CANARY_POD_IP; // This will get the value of CANARY_POD_IP
const port = '80'; // Constant port

export default function () {
    // Construct the URL with the dynamic IP and constant port
    const url = `http://${canaryPodIp}:${port}/your-endpoint`; // Replace with the actual endpoint
    const response = http.get(url);

    // Check for a successful response
    check(response, {
        'is status 200': (r) => r.status === 200,
    });
}
