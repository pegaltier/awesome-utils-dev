
##  WEB ARCHITECTURE
- https://engineering.videoblocks.com/web-architecture-101-a3224e126947
- https://arcentry.com/blog/scaling-webapps-for-newbs-and-non-techies/
- https://github.com/sathishvj/awesome-gcp-certifications
- https://github.com/binhnguyennus/awesome-scalability

## TOOLS
- https://crontab.guru/
- https://cronitor.io/index
- https://certbot.eff.org/
- https://jmeter.apache.org/
- https://sshreach.me/
- https://ngrok.com/

## TOOLS OSS
- https://github.com/Qovery/engine
- https://github.com/loadimpact/k6
- https://github.com/kruize/kruize
- https://github.com/grafana/grafana
- https://github.com/caprover/caprover
- https://github.com/alexfernandez/loadtest
- https://github.com/ripienaar/free-for-dev

## VIM

- https://www.fprintf.net/vimCheatSheet.html

## SERVICES
- https://vercel.com/
- https://www.netlify.com/
- https://www.checklyhq.com/
- https://www.compose.com/

## KUBERNETES
- https://github.com/appvia/kev
- https://github.com/lensapp/lens
- https://github.com/Portshift/kubei
- https://github.com/stackrox/kube-linter
- https://github.com/cloudmelon/melonkube
- https://github.com/kubernetes/dashboard
- https://github.com/kubernetes/kubernetes
- https://github.com/eldada/kubernetes-scripts
- https://github.com/tomhuang12/awesome-k8s-resources
- https://github.com/kubernauts/jmeter-kubernetes

## DOCKER
- https://github.com/qdm12/devtainr
- https://github.com/tomMoulard/make-my-server
- https://github.com/veggiemonk/awesome-docker
- https://github.com/jesseduffield/lazydocker
- https://github.com/buildkite/docker-puppeteer
- https://github.com/geerlingguy/ansible-role-docker    
- https://github.com/JeremyLikness/usda-microservice
- https://github.com/felixfbecker/semantic-release-docker
- https://labs.play-with-docker.com/
- https://youtu.be/3c-iBn73dDE Docker Tutorial for Beginners [Full Course in 3 Hours]
- https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b
- https://dzone.com/articles/build-and-deploy-a-mongodb-angular-nodejs-app-usin

## DOCKER IMAGES
- https://github.com/bunkerity/bunkerized-nginx
- https://github.com/bunkerity/bunkerized-mariadb
- https://github.com/bunkerity/bunkerized-php

1) 𝐝𝐨𝐜𝐤𝐞𝐫 𝐭𝐨𝐩:  Displays the container's running processes
$ docker top <container>

2) 𝐝𝐨𝐜𝐤𝐞𝐫 𝐩𝐨𝐫𝐭: Lists container's port mappings
$ docker port <container>

3) 𝐝𝐨𝐜𝐤𝐞𝐫 𝐤𝐢𝐥𝐥: Kills the process! (not ideal)
$ docker kill <container>

4) 𝗱𝗼𝗰𝗸𝗲𝗿 𝗱𝗶𝗳𝗳: An handy command to check any changes to:
-files
-directories 

on the container’s filesystem

A: added file or directory
C: changed file or directory was 
D: deleted file or directory

Usage:
docker diff <container_ID/container_name>

## VAGRANT
sudo vagrant up				>> ensure that .vagrant/machines/default/virtualbox/creator_uid is 0
sudo vagrant halt
sudo vagrant ssh
sudo yum -y install phpmyadmin
mysql -u root example -- just test
ifconfig (add IP ADRESS 192.168.50.52 + remote DENY )
sudo vim /etc/httpd/conf.d/phpMyAdmin.conf			>> KEYS: INSERT +  CTRL C + :w + :q
sudo service httpd restart

vim /etc/phpMyAdmin/config.inc.php
$cfg['Servers'][$i]['AllowNoPassword'] = TRUE;
+ MODIFY USER : root + secret

http://192.168.50.52/phpmyadmin 
root secret
exit

## NGINX

- https://github.com/agile6v/awesome-nginx

## CRON

crontab -e

Once you enter the above command you will be asked to choose a text editor. Choose nano if you are first time editing or go with your choice.

In the crontab, the m h dom mon dow user header has the following meaning

* m = The minute when the cron job will run. (0 to 59)
* h = A integer determining the hour when the tasks will run. (0 to 23)
* dom = Day of the Month when the cron job will run. (1 to 31).
* mon = The month when the cron job will run. (1 to 12)
* dow = Day of the Week from 0-6 with Sunday at 0. (0 to 6)
* user = The User under which the cron will run.
* command = The Linux command you wish to execute.


## DOMAIN CHECK

nslookup
set type=TXT
domain.fr


## PROCESS + UTIL

PUTTY

## SUPERVISION
htop

## MONITORING

- https://github.com/grafana/grafana

## UPDATE
aptitude update
aptitude upgrade

## UPDATE DATE
aptitude install ntp ntpdate
sudo nano /etc/ntp.conf

server 0.fr.pool.ntp.org
server 1.fr.pool.ntp.org
server 2.fr.pool.ntp.org
server 3.fr.pool.ntp.org
	   
service ntp start

## FIREWALLING 
iptable

vps1 et vps2  		> entree  22 pour tout le monde . et 80 si origin load balancer
sql					> entree  3389 depuis vps. et le 22 tout le monde
