FROM node:15.6.0-alpine

WORKDIR /simple_pm_web
ADD . /simple_pm_web/
RUN apk update && apk add yarn
