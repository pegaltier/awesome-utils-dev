# Ubuntu

## TABLE OF CONTENTS

-   [VPS](#vps)
-   [LIBS](#libs)

## VPS

    # create a new user
    adduser myuser

    # give myuser sudo privilege
    usermod -aG sudo myuser

    # copy ssh key from root to myuser
    rsync --archive --chown=myuser:myuser ~/.ssh /home/myuser

## LIBS

-   <https://github.com/monasticacademy/httptap>
