# Script Savvy: end-to-end Automation Framework

<p align="center">
  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"/>
</p>
<p align="center">
  <img src="https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/firefox/firefox-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/microsoft_edge/microsoft_edge-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/apple_safari/apple_safari-icon.svg"/>
</p>

## Structure

```
├── config
│   ├── data
│   │   ├── data.json
│   ├── environment
│   │   ├── configLoader.ts
│   │   ├── testManager.ts
├── logs
├── pageObjects
│   ├── LoginPage.ts
│   └── ProfilePage.ts
├── performance
│   ├── runner.js
│   └── test-scenario.js
├── reports
│   ├── allure-reports
│   ├── artifacts
│   ├── html-reports
│   ├── lighthouse
├── src
│   ├── api
│   │   └── client.ts
│   ├── core
│   │   ├── dataHandler.ts
│   │   ├── logger.ts
│   │   └── testHandler.ts
│   ├── http
│   │   ├── httpClient.ts
│   │   └── axiosHttpClient.ts
│   └── authConfig.ts
├── tests
│   ├── login.test.ts
│   ├── profile.test.ts
│   └── api
│   └── example.test.ts
├── utils
│   ├── lighthouse.js
│   └── testConfig.ts

```