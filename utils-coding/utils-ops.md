## GOOGLE CLOUD
- https://www.youtube.com/watch?v=nJ0L28ZfmUA (Build and deploy with Cloud Run)
- https://medium.com/stackblitz-blog/google-cloud-meet-stackblitz-da13f4e4fc29?1

## SFTP SSH KEY
- https://www.rebex.net/kb/secure-ftp/
- http://community.ovh.com/t/repertoire-sftp-avec-cle-publique-privee/12330/4
- https://www.weblogin.fr/blog/utiliser-des-cles-rsa-pour-se-connecter-a-un-serveur-mutualise-ovh

## DEPLOYING
- https://hackernoon.com/deploying-frontend-applications-the-fun-way-bc3f69e15331

## AUTODEPLOY FTP/SFTP...

### NODE 
- https://github.com/git-ftp/git-ftp
- https://github.com/lucasmotta/dploy
- https://github.com/KenorFR/dploy
- https://github.com/yllumi/dploy-red
- https://github.com/deployphp/deployer
- https://github.com/theblackhole/dploy-red

### GULP
- https://www.npmjs.com/package/gulp-sftp
- https://github.com/gtg092x/gulp-sftp
- https://github.com/teambition/gulp-ssh
- https://github.com/gulpjs/gulp/issues/465
- https://www.npmjs.com/package/gulp-rsync

### GRUNT
- https://github.com/thrashr888/grunt-sftp-deploy

### VSCODE
- https://github.com/mkloubert/vs-deploy#deploying-to-sftp-
- https://github.com/liximomo/vscode-sftp

- https://coderwall.com/p/xczkaq/ftp-is-so-90-s-let-s-deploy-via-git-instead

### DEPLOYMENT
- https://buddy.works/ftp
- https://deploybot.com
- https://ftploy.com
- https://www.deployhq.com/
- https://vercel.com/

#### DPLOY EXAMPLE

example to deploy on ftp server

- create file: dploy.yaml
- deploy command : dploy alias
```
deploy_alias:
    host: "ftp.domain"
    user: "use"
    pass: "pwd"
    path:
        local: "/"
        remote: "/folder/"
exclude: [".vscode/**/*.{xml,json,abc}",".idea/**/*.{xml,json,abc}",".gitignore","dploy.yaml","_local/**/*.{html,css,sql,xml,md,php,html,js,json,htaccess}"]
```
