

const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');

const result = connect();
setupInput(result);