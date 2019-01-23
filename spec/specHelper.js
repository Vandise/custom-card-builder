import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import chai from 'chai';
import jsdom from 'jsdom';
import td from "testdouble";
import React from 'react';
import { store } from '../src/builder/store';

const dom = jsdom.jsdom;
const exposedProperties = ['window', 'navigator', 'document'];

global.document = dom('<div id="app"></div>');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

// Assertion and stubbing utilities
chai.use(sinonChai);
global.expect = chai.expect;
global.sinon = sinon;
global.chai = chai;
global.td = td;
global.React = React;
global.store = store;

global.requireModule= (module) => {
  return require(`../src/builder/${module}`);
};

global.spyOnComponentMethod = (component, method, spy) => {
  component.instance()[method] = spy;
  component.update();
};