# #####################################################
# #####################################################
#     THIS SHELL SCRIPT MUST BE RUN MANUALLY!
# #####################################################
# #####################################################

ssh root@<SERVER_IP>

# Setting up new user
adduser alex
id alex
# Should print: uid=1000(alex) gid=1000(alex) groups=1000(alex)
usermod -aG sudo alex
usermod -aG docker alex
id alex
# Should print: uid=1000(alex) gid=1000(alex) groups=1000(alex),27(sudo),999(docker)

# Become the new user
su - alex

# Create a new directory for SSH stuff
mkdir ~/.ssh

# Set the permissions to only allow this user into it
chmod 700 ~/.ssh

# Create a file for SSH keys
nano ~/.ssh/authorized_keys

# Set the permissions to only allow this user to access it
chmod 600 ~/.ssh/authorized_keys

# Stop acting as the new user and become root again
exit

# Log out of the server as root
exit

# Log into your server as the new user
ssh alex@<SERVER_IP>

# update the SSH configuration to disable password logins, and to disable logging in as root altogether
sudo nano /etc/ssh/sshd_config

# Inside, you need to update two settings:

# 1) Find PermitRootLogin yes and change it to PermitRootLogin no
# 2) Find #PasswordAuthentication yes and change it to PasswordAuthentication no

# Reloads the configuration we just changed
sudo systemctl reload sshd

### SETUP FIREWALL ###
# Enable OpenSSH connections
sudo ufw allow OpenSSH

# Enable HTTP traffic
sudo ufw allow http

# Enable HTTPS traffic
sudo ufw allow https

# Enable socket.io traffic
sudo ufw allow 32000

# Turn the firewall on
sudo ufw enable

# check the status of the firewall
sudo ufw status
# which will give you the following:
# Status: active

# To                         Action      From
# --                         ------      ----
# OpenSSH                    ALLOW       Anywhere                  
# 80                         ALLOW       Anywhere                  
# 443                        ALLOW       Anywhere                  
# OpenSSH (v6)               ALLOW       Anywhere (v6)             
# 80 (v6)                    ALLOW       Anywhere (v6)             
# 443 (v6)                   ALLOW       Anywhere (v6)  

sudo apt-get install git
git --version
# git version 2.7.4

mkdir ~/app
mkdir ~/app/oee-master
cd ~/app/oee-master
echo "docker stack deploy -f docker-cloud.yml oee-master" > redeploy.sh

# Install tools that Let’s Encrypt requires
sudo apt-get install bc

# Clone the Let’s Encrypt repository to your server
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt  

!!! Log into your DNS provider
!!! Add an A record for your domain that points to your droplet’s IP address.

dig +short api.voicir.com
# output should be your droplet’s IP address, e.g. 138.68.11.65

# Move into the Let’s Encrypt directory
cd /opt/letsencrypt

# Create the SSL certificate
./certbot-auto certonly --standalone

/opt/letsencrypt/certbot-auto renew
# Should say not yet due for renewal

sudo crontab -e

# When the editor opens, head to the bottom of the file and add the following two lines:
00 1 * * 1 /opt/letsencrypt/certbot-auto renew >> /var/log/letsencrypt-renewal.log
30 1 * * 1 /bin/sh ~/app/oee-master/redeploy.sh

sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048

# Initialize a docker swarm
docker swarm init

# Create docker keys
printf "<YOUR KEY HERE>" | docker secret create <SECRET_NAME> -
# repeat secret create for every needed secret

# Create key for diffie helman
cat /etc/ssl/certs/dhparam.pem | docker secret create ssl_dhparam -

# Make sure all needed secrets were created
docker secret ls
    ## To make sure secret is in container
    docker exec -it <container_name> bash
    ls /run/secrets # should list all secrets in container
    cat /run/secrets/<SECRET_NAME> # should log out secret name

history -c && history -w

docker stack services oee-master
