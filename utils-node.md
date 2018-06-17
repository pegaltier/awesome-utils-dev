
## 

https://nodesource.com/blog/nine-fantastic-utilities-for-the-node-js-developer
https://nemethgergely.com/nodejs-best-practices-how-to-become-a-better-developer-in-2018/
https://github.com/localtunnel/localtunnel


## NODE UPDATE WINDOWS

1. download & install node : latest version from official website
2. use npm-windows-upgrade to update npm


## NODE AUTODEPLOY
https://github.com/lucasmotta/dploy


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