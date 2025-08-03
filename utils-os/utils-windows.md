# Windows

## TABLE OF CONTENTS

-   [Tools: ALL](#tools-all)

-   [Tools: OSS](#tools-oss)

-   [SSH Key](#ssh-key)

    -   [Create SSH Key](#create-ssh-key)
    -   [Use SSH Key](#use-ssh-key)

-   [SSH Agent](#ssh-agent)

-   [SSH/SCP Copy](#sshscp-copy)

-   [MORE](#more)

## Tools: ALL

-   <https://cmder.app/>
-   <https://winstall.app/>
-   <https://www.getpaint.net/>
-   <https://getgreenshot.org/>
-   <https://www.mythicsoft.com/agentransack/>
-   <https://www.scootersoftware.com/>

## Tools: OSS

-   <https://github.com/cmderdev/cmder>
-   <https://github.com/microsoft/PowerToys>
-   <https://github.com/rocksdanister/lively>
-   <https://github.com/Awesome-Windows/Awesome>

## SSH Key

-   <https://www.purdue.edu/science/scienceit/ssh-keys-windows.html>

### Create SSH Key

```bash
1 => open Windows classic cmd
2 => ssh-keygen
3 => choose a new name to avoid erasing others key
```

### Use SSH Key

```bash
cd C:\Users\myuser\.ssh
ssh -i myprivatekey root@123.456.789.22
```

## SSH Agent

```bash
1 => open Window Powershell as administrator and write
2 => Get-Service ssh-agent //(you will find status stopped )
3 => Set-Service ssh-agent -StartupType Manual
```

## SSH/SCP Copy

-   <https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh>

```bash
# Syntax:
scp <source> <destination>

# To copy a file from B to A while logged into B:
scp /path/to/file username@a:/path/to/destination

# To copy a file from B to A while logged into A:
scp username@b:/path/to/file /path/to/destination
```

## MORE

See also [tools](https://github.com/pegaltier/utils-dev/blob/master/utils-tools.md)
