var { setWorldConstructor } = require('cucumber');
const testControllerHolder = require('./testControllerHolder');

function CustomWorld ({attach, parameters}) {
    this.waitForTestController = testControllerHolder.get;
    this.attach = attach
    this.parameters = parameters
}

setWorldConstructor(CustomWorld)