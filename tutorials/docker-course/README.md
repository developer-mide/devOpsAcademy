## Docker ## 

#### Table of Contents ####
1. What is containerization
2. Why we containerize application
3. Introduction to Docker 
4. Common Docker commands
5. Dockerfile
6. Docker Compose 
7. Container Orchestration

#### What is containerization ####
Containerization in simple terms mean packaging your applications in an isolated environment 
called Containers so they can run anywhere reliably.

#### Why we containerize applications ####
For the sake of simplicity, there are two main reasons for containerization and they are 
1. Portability - Write once, run anywhere. Containerized applications can run in any environment(development or operations) without breaking 
2. Agility - Containers are way more easier to start and maintain than Virtual Machines

To containerize applications you need tools like Docker, ContainerD or Podman. In this case we would focus on Docker. 

## Docker ##

#### Introduction to Docker ####

Docker is the most popular containerization tool developed in 2009 by ogunmola samuel. It is an open source project, on Github( Open source mean free and open for use by anyone ). It was developed to solve issues with deploying application on VMs (Virtual Machines) which were slow, and more difficult to maintain.

Dockerized applications (mean applications containerized with docker) are represented int the server as a virtual and isolated boxes called Images. All files, configurations for your application and instuctions for starting the container are stored in the Docker Image. A Container is a running instance of an Image.

Docker containers are faster, portable and more reliable than VMs

####  Dockerfile ####
A Dockerfile is the simplest way to create a Docker Image. Below is a simple Dockerfile to spin up a simple Docker Image for a nodejs application
```

   FROM node:12-alpine

   WORKDIR /app

   COPY . .

   RUN npm install

   CMD ["npm", "start"]

```

Get sample application here.

Change directory into the application and run this command to spin up the docker container

```

   docker build -t testApp .

```
The command tells Docker to build an image called testApp. The -d or --detached flag tells docker to run the container at the background. ( Note: Do not omit the dot )

After the build is completed
```

   docker run -d -p 3000:3000 testApp

```

#### Common Docker commands ####
This is a list of most used Docker commands

build - tells Docker to build an image
run - tells Docker to run a container
stop - tells Docker to stop a running container
rm - tells Docker to delete a container
rmi - removes specified images
exec - allows you to run commands inside a container
ps - list all running containers
pull - pulls an existing image from the Docker Hub
tag - tags an image
history - lists history of an image 
image ls - list all available images
docker-compose up - tells Docker engine to start an existing Docker Image or build a non-existing one using docker-compose file (Check below to see what docker-compose mean)
docker-compose down - tells Docker to stop all running containers specified in the docker-compose file. 

to view all Docker commands and flags run 
```

   docker --help

```
or 

```

  docker [COMMAND] --help

```

#### Docker Compose ####

Docker compose is the easiest way to spin a multiple containers at once. With Docker compose you can start multiple containers and pull them down with a single command. A docker-compose.yaml file is a YAML (Yet Another Markup Language) file which contains instrustions on how to build Images and run a containers


#### Orchestration of Docker containers ####
When developing standard applications such as microservices you will need to manage multiple containers; this is where orchestration tools like Docker Swarm and Kubernetes(K8s) comes into play!. With orchestration tool like Kubernetes managing multiple containers becomes super duper easy. We would cover Kubernetes in the next tutorial. 
  
