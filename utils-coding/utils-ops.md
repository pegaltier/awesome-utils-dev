

## AUTODEPLOY

### NODE 
https://github.com/git-ftp/git-ftp
https://github.com/lucasmotta/dploy

fork?
https://github.com/KenorFR/dploy
https://github.com/yllumi/dploy-red
https://github.com/theblackhole/dploy-red


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
https://github.com/liximomo/vscode-sftp

https://coderwall.com/p/xczkaq/ftp-is-so-90-s-let-s-deploy-via-git-instead

### TOOLS
https://buddy.works/ftp
https://deploybot.com
https://ftploy.com

 
tools deploy to ftp server (for dploy see below)

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