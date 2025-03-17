# Hamm Playwright Framework 

This repo contains e2e & API tests written in Playwright. 



## Help + Testing

The steps below will take you all the way through Playwright. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Playwright Support](https://playwright.dev/)

### 1. Install Playwright

[Follow these instructions to install Playwright.](https://playwright.dev/docs/intro)

```bash
## install supported browsers
npx playwright install
```

### 2. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/anthony-hamm/playwright-qubika#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/playwright-qubika.git

## cd into the cloned repo
cd playwright-qubika

## install the node_modules
npm install

## start the local webserver
npx playwright test
```

The `npx playwright test` script will run playwright locally.

You should see the Playwright interface up and running. We are now ready to run Playwright tests.

### 3. Add new tests!

[Follow these instructions to add new tests into the project.](https://playwright.dev/docs/writing-tests)


## Solution overview

This is Playwright project that uses the page object model design pattern. In general, Playwright best practices are followed where possible and the configuration is largely the default configuration generated when you install Playwright.

The site under test is the QA env for [Qubika Club Admin](https://club-administration.qa.qubika.com/), an all-inclusive platform designed to streamline and enhance the management of a sports club.

The sample test consist on create a user through [API](https://api.club-administration.qa.qubika.com/swagger-ui/index.html#/), then login and lastly create a category and subcategory with their corresponding validations. 


## Framework Selection

Chose Playwright for web testing because it offers excellent cross-browser compatibility, robust auto-waiting features to handle dynamic content, a user-friendly API, support for multiple programming languages, advanced debugging tools, and is actively maintained by Microsoft, making it a reliable and powerful option for modern web application testing across different browsers and platforms.

# Key reasons to choose Playwright:

* *Cross-browser support:* Works seamlessly with major browsers like Chrome, Firefox, and Safari on various operating systems. 
* *Automatic waiting:* Built-in mechanisms to wait for elements to load before interacting with them, reducing flaky tests. 
* *Multiple language support:* Write tests in your preferred language like JavaScript, Python, Java, C#. 
* *Headless and headful testing:* Ability to run tests in both headless and visible browser modes depending on your needs. 
* *Advanced debugging tools:* Includes a trace viewer, code generation, and inspector to easily identify and troubleshoot issues. 
* *Network interception:* Simulate different network conditions to test edge cases. 
* *Parallel test execution:* Run multiple tests simultaneously for faster feedback. 
* *Active development and community:* Backed by Microsoft with a growing community for support and resources. 


## Enhancements

* Locators refactoring (FE to implement data-test-id)
* Setup cloud reporting
* Setup CI/CD integration
* Enable other web & mobile inbuilt drivers (currently failing on )
* Enable lint
* Implement soft assertions