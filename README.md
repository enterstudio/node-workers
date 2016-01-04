# Convox Node.js Example

This repository hosts an example Node.js application.

It also demonstrates linking via ENV vars.


## Setup


### Prerequisites

- local docker installation
- convox cli

### Starting the app

Once Docker is installed and the convox CLI is installed, you should be able to start the app with:

    $ convox start

### Queuing Jobs

You can now queue jobs by sending an HTTP request to the base url:

On mac OS X using docker-machine:

    $ curl http://$(docker-machine ip <machine name>):5000

On linux using docker on localhost:

    $ curl http://localhost:5000

You will see log lines for the queuing and "processing" of a job, confirming that the app is working.
