# Ubuntu

## TABLE OF CONTENTS

-   -   [Configure VPS](#configure-vps)
-   [LIB](#lib)

## Configure VPS

    # create a new user
    adduser myuser

    # give myuser sudo privilege
    usermod -aG sudo myuser

    # copy ssh key from root to myuser
    rsync --archive --chown=myuser:myuser ~/.ssh /home/myuser

# LIB

-   <https://github.com/monasticacademy/httptap>
