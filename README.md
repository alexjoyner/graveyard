# OEE-MASTER
This repository contains all the code for the oee-master project.

## Structure
This project uses the mono-repo structure, which means all the code for this project is contained within one repo. However, all of the functional code is broken apart into separate microservices that are all deployed and maintained independently.  This allows for easy versioning of all the pieces within one overall project & allows for rapid modularized development.

## Workspace Setup
This project structure was designed with the intention of handling large project.  This assumes that the project will end up having all the conventional moving parts of a large enterprise project.  These include services that will run on a remote server,  a remote production database, a client website open to the public, and possibly more.  To setup this project, a few steps are needed.

**NOTE**: it is recommended that you have a terminal setup ready with several windows ready to use.  Growing projects will quickly make using a single terminal a hassle. Personally, on windows, I use the app [cmder](http://cmder.net/) to run my projects. I like cmder because it will easily setup bash on windows with git integration, and it allows for easily saving split window profiles to save time on project startup.

**My terminal setup consists of the following**

 1. @ root of project
 2. @ my main server microservice
 3. @ my client component library project for running a test watcher
 4. @ my client component library project for running a project host
 5. @ my website service for testing
 6. @ my website service for project host

## Starting the project

 1. yarn start in the main server microservice.  You must have docker setup and ready.
 2. yarn install / yarn start in the client terminal. This should start the website.
 3. yarn install / yarn start in the component library.
