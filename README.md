# Dellocred CRM

## Relevant Commands

### Django
- ```django-admin startproject <project_name>```
- ```python manage.py startapp <app_name>```
- ```python manage.py makemigrations```
- ```python manage.py migrate```

### Docker
- ```docker build . -t <image_name>```
- ```docker run --name <container_name> <image_name>```
- ```docker-compose up --build```

## Conventional Commits

- ```feat``` a new feature
- ```bugfix``` a bug fix
- ```docs``` documentation only changes
- ```style``` changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- ```refac``` a code change that neither fixes a bug nor adds a feature
- ```perf``` a code change that improves performance
- ```test``` adding missing tests or correcting existing tests
- ```build``` changes that affect the build system or external dependencies
- ```ci``` changes to CI configuration files and scripts
- ```chore``` other changes that don’t modify src or test files
- ```revert``` reverts a previous commit

## Docker Commands

- ```docker ps -a``` list all containers (including stopped)
- ```docker images``` list all images
- ```docker build -t <image_name> .``` build an image from the Dockerfile
- ```docker run -d -p <host_port>:<container_port> --name <container_name> <image_name>``` run a container in detached mode
- ```docker stop <container_name>``` stop a running container
- ```docker rm <container_name>``` remove a container
- ```docker logs <container_name>``` view logs of a container
- ```docker exec -it <container_name> /bin/bash``` access a running container’s shell

## Docker Compose Commands

- ```docker compose up -d``` start all services in the background
- ```docker compose down``` stop and remove all services
- ```docker compose build``` build or rebuild services
- ```docker compose ps``` list running services
- ```docker compose logs``` view logs for all services
- ```docker compose exec <service_name> <command>``` execute a command in a
- ```docker compose up --build -d``` builds images if not exists and then starts all the services in background
