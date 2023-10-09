import { default as testScenario } from './test-scenario.js';

export default function () {
    testScenario();
}

// to run the example scenario
// k6 run --vus 10 --duration 1m ./performance/runner.js