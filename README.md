# cisco-starter-repo
Jumping off point for Cisco's backend Forage program

## Important notes during the program training
### Week 1
- Git Official Tutorial
https://git-scm.com/book/en/v2

- React Official Guide on Github by Meta
https://github.com/facebook/create-react-app

- Task 1 model answer
- https://github.com/vagabond-systems/cisco-task-1-model-answer.git

### Week 2
- Web design
https://dribbble.com/tags/webdesign
https://coolors.co

- Enhancing Extensibility
definition of extensibility: **the capacity for a system to grow and change over time with minimal effort.**

1. **Package-lock.json** and the **node_modules directory. Both of these are fully managed by npm and used to track the state of all project dependencies.** Never modify these directly unless you know what you're doing, and even then, it's inadvisable.
2. **Package.json. Npm uses this file to store its configuration.** It contains information on how to initialize the project, required dependencies, and even a few handy scripts for interacting with create-react-app. **If you want to add a dependency, change the project name, etc. this is the place to do it.**
3. **Public** directory. This directory effectively contains the entry point for your app. It holds the HTML necessary to bootstrap the page when loaded by a browser. Since we're using React, we will add content to the page using **React Components** rather than raw HTML.
4. **Src** directory. This directory contains the bulk of your website’s code. Most of the changes we’ll make throughout this program will occur in this directory. Right now, it should contain four files, two stylesheets (responsible for determining how to render content), and two JavaScript files. Take a moment to review **src/index.js**. Notice that it contains a single call to the react engine, kindly asking it to render an **App** component. This line effectively bootstraps your website, linking your root component, App, to the index.html file. If you open up src/App.js, you’ll see the site’s actual content.

- Task 2 model answer
https://github.com/vagabond-systems/cisco-task-2-model-answer.git

### Week 3
#### Communication at Scale
- Computers communicate with each other by sending packets over a network. You can think of each packet as a little envelope containing a message and an address.
- **A computer can send any data in a packet over a network as long as it can be encoded as binary**
- The message can be any information a computer would like to communicate (in binary), and the address describes where the packet should be delivered. This explanation is a slight oversimplification of TCP/IP. 
- IPv4: https://bluecatnetworks.com/glossary/what-is-ipv4/
- Internet protocol suite: https://en.wikipedia.org/wiki/Internet_protocol_suite

#### Public vs Private IP
A public IP address is used to reach your router from anywhere on the internet. Think of a router as a mailbox in a dormitory, and each computer as an individual room in the dorm. Any mail entering the system has a two-part address, the address of the dormitory and the room number where it should end up. **The dorm’s address is analogous(similar) to the router’s public IP, and a short-lived logical address called a port fulfills the function of the room number.**

Due to the additional layer of indirection provided by ports, a single public IP can be used to access many computers managed by the same router. Therefore, the IP addresses you’ll be working with for this task are associated with your router, not your computer.