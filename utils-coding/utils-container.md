
# CONTAINER

- Vagrant, Docker, Podman let you create portable environments Vagrant helps you set up entire virtual machines to run your applications, Docker/Podman allows you to package an application with its environment and all of its dependencies into a "box", called a container. Usually, a container consists of an application running in a stripped-to-basics version of a Linux operating system. An image is the blueprint for a container, a container is a running instance of an image. Virtual Machine vs Container: VM is complete. Container is closer to the host machine. No emulation of hardware. We share a part of the hardware. disk, network. To do that we segment the harware.

- Docker provides a system-agnostic approach that can create containerized applications across any platform. Podman is a rootless and daemon-less container built explicitly by RedHat to make it better than Docker. Non-root users, too, can use Podman container-based applications.

- Openshift: receives config file and go to pull docker image on nexus to do the deployment. Internal access or external access: Cloudflare can protect external access but not necessary on internal access. There is one BigIP cluster for each access: internal/external, they are responsible to do the load balancing.

- Logging: Fluentd to do the bridge between different log producers. see: kibana, elastic, prometheus (host, memory, cpu, disk), prtg, shinken, pingdom

Both Kubernetes and OpenShift are popular container management systems, and each has its unique features and benefits. While Kubernetes helps automate application deployment, scaling, and operations, OpenShift is the container platform that works with Kubernetes to help applications run more efficiently.

OpenShift Online leverages the Kubernetes concept of a pod, which is one or more containers deployed together on one host, and the smallest compute unit that can be defined, deployed, and managed. Pods are the rough equivalent of a machine instance (physical or virtual) to a container.

- https://github.com/containers/podman
- https://github.com/hashicorp/vagrant
- https://github.com/openshift
- https://github.com/docker

## DOCKER

```bash
# container id = cid // image id = iid
docker build . ==> Build the default local Dockerfile
docker build -f Dockerfile.ssr . ==> Build a specific local Dockerfile
docker logs <cid> ==> Displays the container logs
docker run -it $(docker build -q .) ==> Build & Run inline the image in localhost
docker run -p 4200:8080 -d iid ==> Run the image in localhost
docker run -p 4000:4000 -h host.com -d iid ==> Run the image in host.com
docker run -p 4000:4000 -h host.com -v /host/path/to/certs:/container/path/to/certs -d iid "update-ca-certificates" ==> Run the image in host.com with certificate
docker top cid ==> Displays the containers running processes
docker port cid ==> Lists containers port mappings
docker kill cid ==> Kills the process but its not ideal
docker diff cid ==> check changes to files&didirectories
```

## VAGRANT

```bash
# ensure that .vagrant/machines/default/virtualbox/creator_uid is 0
sudo vagrant up
sudo vagrant halt
sudo vagrant ssh
sudo yum -y install phpmyadmin
mysql -u root example -- just test
ifconfig (add IP ADRESS 192.168.50.52 + remote DENY )
# KEYS: INSERT +  CTRL C + :w + :q
sudo vim /etc/httpd/conf.d/phpMyAdmin.conf
sudo service httpd restart
```

```bash
vim /etc/phpMyAdmin/config.inc.php

$cfg['Servers'][$i]['AllowNoPassword'] = TRUE;
+ MODIFY USER : root + secret

http://192.168.50.52/phpmyadmin 
root secret
exit
```