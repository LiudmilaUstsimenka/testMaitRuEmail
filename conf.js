// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const reporter = new HtmlScreenshotReporter({
    dest: 'report',
    filename: 'my-report.html',
    reportTitle: "Report Title",
    cleanDestination: true,
    captureOnlyFailedSpecs: false,
    pathBuilder: (currentSpec, suites, browserCapabilities) => {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
      }
  });

exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,

    specs: ['specs/sendEmailSpec.js'],
    baseUrl: 'https://mail.ru',
    framework: 'jasmine',

    
    beforeLaunch: () => {
        // Setup the report before any tests start
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: () => {
        // set browser size...
        browser.manage().window().setSize(1903, 1304);

        // better jasmine 2 reports...
        const SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));

        // Assign the test reporter to each running instance
        jasmine.getEnv().addReporter(reporter);     

    },    
    
    afterLaunch: function(exitCode) {
        // Close the report after all tests finish
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 50000
    }

    
};