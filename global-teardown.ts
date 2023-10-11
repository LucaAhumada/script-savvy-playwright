import logger from './src/core/logger'
import * as fs from 'fs-extra';
import { execSync } from 'child_process';

const copyHistoryFolder = () => {
    try {
        fs.copySync('./allure-report/history', './allure-results/history');
    } catch (error) {
        logger.error('Error copying history folder:', error);
    }
};

const generateAllureReport = () => {
    try {
        execSync('allure generate --clean ./allure-results', { stdio: 'inherit' });
    } catch (error) {
        logger.error('Error generating Allure report:', error);
    }
};

const openAllureReport = () => {
    try {
        execSync('allure open', { stdio: 'inherit' });
    } catch (error) {
        logger.error('Error opening Allure report:', error);
    }
};

export default async function globalTeardown() {
    copyHistoryFolder();
    generateAllureReport();
    openAllureReport();
}
