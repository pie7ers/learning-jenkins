FROM jenkins/jenkins:lts

USER root

# instalar cliente docker
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get clean

USER jenkins
