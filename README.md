# Dellocred CRM

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

## Commands

### Django
- ```django-admin startproject <project_name>``` creates a new Django project with the specified name
- ```python manage.py startapp <app_name>``` creates a new Django app within your project
- ```python manage.py makemigrations <app_name>``` creates new migration files based on the changes you have made to your models
- ```python manage.py migrate``` applies the migrations to your database, updating it to match your models
- ```python manage.py test <app_name>``` test a specific described app

### Docker

- ```docker ps -a``` list all containers (including stopped)
- ```docker images``` list all images
- ```docker build -t <image_name> .``` build an image from the Dockerfile
- ```docker run -d -p <host_port>:<container_port> --name <container_name> <image_name>``` run a container in detached mode
- ```docker stop <container_name>``` stop a running container
- ```docker rm <container_name>``` remove a container
- ```docker logs <container_name>``` view logs of a container
- ```docker exec -it <container_name> /bin/bash``` access a running container’s shell

### Docker Compose

- ```docker compose up [-d]``` start all services in the background, use -d to decouple execution (execute in backgroud)
- ```docker compose down [-v]``` stop and remove all services, use -v if want to delete volume
- ```docker compose build``` build or rebuild services
- ```docker compose ps``` list running services
- ```docker compose logs``` view logs for all services
- ```docker compose exec <service_name> <command>``` execute a command in a
- ```docker compose up --build -d``` builds images if not exists and then starts all the services in background
