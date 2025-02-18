
# Windows 

## Tools: ALL
- https://cmder.app/
- https://winstall.app/
- https://www.getpaint.net/
- https://getgreenshot.org/
- https://www.mythicsoft.com/agentransack/
- https://www.scootersoftware.com/

## Tools: OSS
- https://github.com/cmderdev/cmder
- https://github.com/microsoft/PowerToys
- https://github.com/rocksdanister/lively
- https://github.com/Awesome-Windows/Awesome

## SSH Key

- https://www.purdue.edu/science/scienceit/ssh-keys-windows.html

### Create SSH Key

```
1 => open Window class cmd
2 => ssh-keygen
3 => choose a new name to avoid erasing others key
```

### Use SSH Key

```
cd C:\Users\myuser\.ssh
ssh -i myprivatekey root@123.456.789.22
```

## SSH Agent

```
1 => open Window Powershell as administrator and write
2 => Get-Service ssh-agent //(you will find status stopped )
3 => Set-Service ssh-agent -StartupType Manual
```

## MORE

See also [tools](https://github.com/pegaltier/utils-dev/blob/master/utils-tools.md)