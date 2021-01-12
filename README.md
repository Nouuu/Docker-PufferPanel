# Docker-PufferPanel

This docker image provides a [PufferPanel](http://www.pufferpanel.com/) container.

It has been tested to run Minecraft server successfully

It run on 64bits Debian base image

## Exposed ports :

- 8080 - Webpanel
- 5657 - SFTP server
- 25565 - Default Minecraft server port but it can be changed

## Default Admin user

- Username: admin
- Email: admin@pufferpanel.gg
- Password: pufferpanel

## Volumes

- /etc/pufferpanel: PufferPanel configs
- /servers_data: Where the servers are stored