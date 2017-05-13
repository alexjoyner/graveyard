project-starter
===============
[![Build Status](https://travis-ci.org/alexjoyner/<% appName %>.svg?branch=master)](https://travis-ci.org/alexjoyner/<% appName %>)
[![Coverage Status](https://coveralls.io/repos/github/alexjoyner/<% appName %>/badge.svg?branch=master)](https://coveralls.io/github/alexjoyner/<% appName %>?branch=master)

this is the foundation boilerplate that I am using to build my projects.  It is definitely a work in progress, so proceed with caution if you would like to use it yourself.

## Background info
This starter pack uses the following tech:

##### FrontEnd
* React
* Redux

##### Backend
* Node/Express

##### Testing
* Mocha
* Chai
* SuperTest

One thing to note is that, most all of the basic configuration stuff that would usually go along with setting up a project has been abstracted out to an npm package called ro-utils. So you can focus on building the latest and greatest thing without a bunch of configuration code in the way. :)

## Install
    npm install
    npm start
    
## Testing
##### Main test scripts
    npm test
    or
    npm test:watch
    
##### Coverage Support
    npm run cover

## Docs

Currently, the absolute best documentation for this starter package is going to be in the tests of all the modules.  This project strives to be as close to 100% coverage as possible at all times.

## Contributing

Feel free to use this if find it helpful, and
please let me know if you see somewhere the code can
be cleaned up or improved. :)
