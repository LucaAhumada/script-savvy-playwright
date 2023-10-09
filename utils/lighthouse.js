const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse(url, config) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['performance'],
        port: chrome.port,
    };

    const runnerResult = await lighthouse(url, options, config);
    const { report, lhr } = runnerResult;

    fs.writeFileSync('./reports/lighthouse/LighthouseReport.html', report);

    console.log('Report is done for', lhr.finalUrl);
    console.log('Performance score was', lhr.categories.performance.score * 100);

    await chrome.kill();
}

(async () => {
    try {
        const url = 'https://www.underc0de.org/foro/'; // Change this to the URL you want to test
        let config;

        const environment = process.argv[2] || 'desktop'; // Command-line argument (e.g., node lighthouse.js mobile)

        switch (environment) {
            case 'desktop':
                config = {
                    extends: 'lighthouse:default',
                    settings: { formFactor: 'desktop', screenEmulation: { mobile: false } },
                };
                break;
            case 'mobile':
                config = {
                    extends: 'lighthouse:default',
                    settings: { formFactor: 'mobile', screenEmulation: { mobile: true } },
                };
                break;
            default:
                throw new Error('Invalid environment. Please provide either "desktop" or "mobile".');
        }

        await runLighthouse(url, config);
    } catch (error) {
        console.error('An error occurred.', error);
    }
})();