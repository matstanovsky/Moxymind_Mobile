export const config: WebdriverIO.Config = {
       runner: 'local',
    tsConfigPath: './tsconfig.e2e.json',
    
    port: 4723,
    specs: [
        'test/specs/**.*'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'Calc.apk'
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
