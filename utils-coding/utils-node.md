
## 

https://nodesource.com/blog/nine-fantastic-utilities-for-the-node-js-developer
https://nemethgergely.com/nodejs-best-practices-how-to-become-a-better-developer-in-2018/
https://github.com/localtunnel/localtunnel


## NODE UPDATE WINDOWS

1. download & install node : latest version from official website
2. use npm-windows-upgrade to update npm


## AUTODEPLOY

### NODE 
https://github.com/lucasmotta/dploy

### GULP
https://www.npmjs.com/package/gulp-sftp
https://github.com/gtg092x/gulp-sftp
https://github.com/teambition/gulp-ssh
https://github.com/gulpjs/gulp/issues/465
https://www.npmjs.com/package/gulp-rsync

### GRUNT
https://github.com/thrashr888/grunt-sftp-deploy

### VSCODE
https://github.com/mkloubert/vs-deploy#deploying-to-sftp-

### TOOLS
https://deploybot.com
https://ftploy.com

 
tools deploy to ftp server

create file: dploy.yaml

deploy command : dploy alias

deploy_alias:
    host: "ftp.domain"
    user: "use"
    pass: "pwd"
    path:
        local: "/"
        remote: "/folder/"
exclude: [".vscode/**/*.{xml,json,abc}",".idea/**/*.{xml,json,abc}",".gitignore","dploy.yaml","_local/**/*.{html,css,sql,xml,md,php,html,js,json,htaccess}"]