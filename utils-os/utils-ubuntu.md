# Ubuntu

## TABLE OF CONTENTS

-   [VPS](#vps)
-   [ARTICLES](#articles)
-   [LIBS](#libs)
-   [DISTRI](#distri)

## VPS

    # create a new user
    adduser myuser

    # give myuser sudo privilege
    usermod -aG sudo myuser

    # copy ssh key from root to myuser
    rsync --archive --chown=myuser:myuser ~/.ssh /home/myuser

## ARTICLES

-   <https://github.com/imthenachoman/How-To-Secure-A-Linux-Server>

## LIBS

-   <https://github.com/monasticacademy/httptap>

## DISTRI

-   <https://github.com/basecamp/omakub>
