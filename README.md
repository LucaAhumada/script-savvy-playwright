# Script Savvy: end-to-end Automation Framework

<p align="center">
  <img src="https://i.imgur.com/RiXtg0G.png"/>
</p>
<p align="center">
  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"/>
</p>
<p align="center">
  <img src="https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/firefox/firefox-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/microsoft_edge/microsoft_edge-icon.svg"/>
  <img src="https://www.vectorlogo.zone/logos/apple_safari/apple_safari-icon.svg"/>
</p>

## About the project

This is a **Test Automation Framework** working as a boilerplate to run end-to-end testing using Playwright. **Script Savvy** brings to the table different tools and best coding practices to ensure a high quality development in your test. 

Top Features:

- Cross-language: write your code in JavaScript or TypeScript.
- Cross-browser: support for Chrome, Firefox, Edge or Safari.
- Cross-platform: test on Windows, Linux, macOS, locally or CI.
- Mobile testing: native support for Chrome (Android) and Safari (iOS).
- API testing: test and validate endpoint all in one place.
- Paralelism: stage and run multiple test at the same time.
- Extended: Playwright based with additional tools and features.
- Extras: wondering what else can Script Savvy do? Check out Savvy docs!

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