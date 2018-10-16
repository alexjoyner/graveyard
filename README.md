# EES Data Logger
This is the root project for the EES Datalogger based on the Inhand IR900 Router/Controller.
*Updated 9/26/2018*

### Repo Dependencies
The EES datalogger uses the microservices architecture along with Docker to build projects.  The repositories used in this project are outlined in the setup script located at ./scripts/1_setup.sh

#### Installing
**Before outlining the install/setup process, it should be noted that this project was built around using vscode as the text editor of choice.**

Our setup process for this project is the following:
1) Using a portable drive, put this repo in the drive at /ees-datalogger/@main
   - For the workspaces in this project to work properly, the drive needs to be in the D:/ drive slot on windows.
   - On mac, the drive needs to be named Alex's Code
2) cd into @main/scripts
3) run 1_setup.sh, which should put all necessary directories in the ees-datalogger folder located in a spot that should correctly correspond to the vscode workspace locations
4) cd into C:\Users\USERNAME\Documents\GitHub\ees-datalogger\
5) clone the ees-simple-dash repo to client
6) cd ../
7) clone ro-component-library into /shared/ro-component-library

#### Running
- running this project ideally uses 4 open bash terminals with git and yarn installed
- First terminal
  - location: @main
  - run [yarn start]
- Second terminal
  - location: client
  - run [yarn start]
- Third terminal
  - location: ro-component-library
  - run [yarn start]
- Fourth terminal (optional)
  - location: @main
  - Just a free terminal to use for ssh or side actions
