###
# Generate puffer panel image for minecraft
### 
FROM debian:latest

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y software-properties-common

RUN apt-add-repository 'deb http://security.debian.org/debian-security stretch/updates main' && apt-get update
RUN apt-get install -y openjdk-8-jdk-headless



COPY ./pufferpanel /pufferpanel
COPY ./pufferpanel.db /etc/pufferpanel/pufferpanel.db

RUN chmod +x /pufferpanel/pufferpanel

EXPOSE 8080 5657 25565
VOLUME /etc/pufferpanel
VOLUME /servers_data

ENV PUFFER_LOGS=/etc/pufferpanel/logs \
    PUFFER_WEB_HOST=0.0.0.0:8080 \
    PUFFER_PANEL_DATABASE_SESSION=60 \
    PUFFER_PANEL_DATABASE_DIALECT=sqlite3 \
    PUFFER_PANEL_DATABASE_URL="file:/etc/pufferpanel/pufferpanel.db?cache=shared" \
    PUFFER_PANEL_DATABASE_LOG=false \
    PUFFER_PANEL_TOKEN_PRIVATE=/etc/pufferpanel/private.pem \
    PUFFER_PANEL_WEB_FILES=/pufferpanel/www \
    PUFFER_PANEL_EMAIL_TEMPLATES=/pufferpanel/email/emails.json \
    PUFFER_PANEL_EMAIL_PROVIDER=debug \
    PUFFER_PANEL_SETTINGS_COMPANYNAME=PufferPanel \
    PUFFER_PANEL_SETTINGS_MASTERURL=http://localhost:8080 \
    PUFFER_DAEMON_CONSOLE_BUFFER=50 \
    PUFFER_DAEMON_CONSOLE_FORWARD=false \
    PUFFER_DAEMON_SFTP_HOST=0.0.0.0:5657 \
    PUFFER_DAEMON_SFTP_KEY=/etc/pufferpanel/sftp.key \
    PUFFER_DAEMON_AUTH_URL=http://localhost:8080 \
    PUFFER_DAEMON_AUTH_CLIENTID=none \
    PUFFER_DAEMON_DATA_CACHE=/servers_data/cache \
    PUFFER_DAEMON_DATA_SERVERS=/servers_data/servers \
    PUFFER_DAEMON_DATA_MODULES=/servers_data/modules \
    PUFFER_DAEMON_DATA_CRASHLIMIT=3

WORKDIR /pufferpanel

ENTRYPOINT ["/pufferpanel/pufferpanel"]
CMD ["run"]