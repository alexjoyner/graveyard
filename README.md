# RO BOILERPLATE
This repository is meant to be a solid base repository for starting new projects.  Although it includes all the tools to start building a large project. We will strive to include instructions for adapting this project to a smaller project thats goal is to remain lean.

## Structure
This project uses the mono-repo structure, which means all the code for this project is contained within one repo. However, all of the functional code is broken apart into separate microservices that are all deployed and maintained independently.  This allows for easy versioning of all the pieces within one overall project & allows for rapid modularized development.

**Below are general instructions for setting up a new project. This will be the same for all size projects Feel free to remove when done.**
  1. Find & Replace all the following constants with your names
     1. job-filter-app <Name that is used for your repository ex: my-project>
     2. Job Filter <Website friendly version of your name ex: Google, Facebook, CodeShop >
     8. App To Filter Jobs from Online Resources <Short description of what your project does>
     3. Mit
     4. Alex Joyner
     5. alex@voicir.com
     6. https://github.com/alexjoyner/job-filter.git
     7. HOMEPAGE_URL
     8. PRODUCTION_APP_API_ADDRESS
  2. Update Keywords in Package.json
  3. Update CHANGELOG for v0.1.0
  4. Project starts at v0.1.0.  If you don't like it, change that too.
  5. Change Website Favicon in /public if needed

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


## Adding a new feature, (Quick Method)
  - This method requires the blueprint VS-Code Extension
  1. Right click on src/features
  2. Left Click "new file from template"
  3. Select new-feature
  4. Name Feature (blueprint should correct all casing)
  5. Use TDD to Add components & state
     1. Components not exposed go in /private
     2. Components exposed to app go in /private
     3. All state effects go in /ducks
     4. All tests for the entire feature should go in FEATURE_NAME.test.tsx
  6. 

# How is this app structured?
  - This is a pretty simple app with only one feature, the jobs feature.
  - It has components to display a list of jobs pulled from the jobs api
    - Public Components Exposed from the Jobs Feature:
      - JobDetailsModal: Prestructured modal that conditionally shows the details of a job
      - JobData: HOC that returns back a list of jobs to be displayed
      - JobsPost: Displays a card view summary of a job suitable for putting into a list
    - Private Components: NONE