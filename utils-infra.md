

https://github.com/tuupola/slim-api-skeleton
https://www.liquidweb.com/kb/how-to-install-and-configure-phpmyadmin-on-centos-6/
https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-a-centos-6-4-vps

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