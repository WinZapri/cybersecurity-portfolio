# Network Scanning and Service Enumeration Using Nmap

**Status: Completed**

## 1. Project Overview

For this coursework project, I used Nmap in my authorised VMware virtual lab to explore host discovery, TCP port scanning and service identification. I used Kali Linux as the testing machine and Metasploitable2 as the intentionally vulnerable target. The scans were limited to the lab subnet and the target shown below.

The screenshots record the commands and output from the exercise. They show connectivity and the services that Nmap identified at the time of scanning; they do not demonstrate exploitation or confirm that any service is vulnerable.

## 2. Objectives

- Verify connectivity between the two virtual machines.
- Identify active hosts within the lab subnet.
- Discover open TCP ports on Metasploitable2.
- Identify services and software versions.
- Interpret the results and understand potential security exposure.

## 3. Tools and Environment

| Component | Details |
| --- | --- |
| Virtualisation environment | VMware |
| Testing machine | Kali Linux |
| Target machine | Metasploitable2 |
| Scanning tool | Nmap 7.99 |
| Network mode | Host-only virtual network |
| Kali Linux IP address | `192.168.247.128` |
| Metasploitable2 IP address | `192.168.247.129` |
| Lab subnet | `192.168.247.0/24` |
| Exercise date | 26 October 2026 |

## 4. Methodology

I ran the following commands from Kali Linux in the authorised VMware lab.

### Step 1 - Connectivity Testing

```text
ping -c 4 192.168.247.129
```

The screenshot shows four ICMP echo replies from `192.168.247.129`, with four packets transmitted, four received and 0% packet loss. This confirms connectivity between Kali Linux and Metasploitable2 at the time of this test.

### Step 2 - Host Discovery

```text
nmap -sn 192.168.247.0/24
```

Nmap reported four active hosts on the subnet:

- `192.168.247.1`
- `192.168.247.128`
- `192.168.247.129`
- `192.168.247.254`

The `-sn` scan identified hosts reported as up without performing a port scan.

### Step 3 - TCP Port Scanning

```text
nmap 192.168.247.129
```

The screenshot shows 23 open TCP ports on Metasploitable2. This scan provides an overview of the TCP services that responded on the target; it does not by itself establish that any service is vulnerable.

### Step 4 - Service and Version Detection

```text
nmap -sV 192.168.247.129
```

Nmap identified service names and, where its probes could determine them, software or protocol versions. The following table transcribes the 23 open TCP ports shown in the service-detection screenshot. A question mark or an unavailable version is retained where the output is uncertain or does not provide a version.

## 5. Results and Analysis

| Port | Service | Nmap service/version output |
| --- | --- | --- |
| `21/tcp` | FTP | vsftpd 2.3.4 |
| `22/tcp` | SSH | OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0) |
| `23/tcp` | Telnet | Linux telnetd |
| `25/tcp` | SMTP | Postfix smtpd |
| `53/tcp` | DNS | ISC BIND 9.4.2 |
| `80/tcp` | HTTP | Apache httpd 2.2.8 ((Ubuntu) DAV/2) |
| `111/tcp` | rpcbind | Version 2 (RPC #100000) |
| `139/tcp` | NetBIOS/SMB | Samba smbd 3.X - 4.X (workgroup: WORKGROUP) |
| `445/tcp` | NetBIOS/SMB | Samba smbd 3.X - 4.X (workgroup: WORKGROUP) |
| `512/tcp` | exec | netkit-rsh rexecd |
| `513/tcp` | login | Version not identified (`login?` in Nmap output) |
| `514/tcp` | shell | Netkit rshd |
| `1099/tcp` | Java RMI | GNU Classpath grmiregistry |
| `1524/tcp` | bindshell | Metasploitable root shell |
| `2049/tcp` | NFS | Versions 2-4 (RPC #100003) |
| `2121/tcp` | FTP | ProFTPD 1.3.1 |
| `3306/tcp` | MySQL | MySQL 5.0.51a-3ubuntu5 |
| `5432/tcp` | PostgreSQL | PostgreSQL DB 8.3.0 - 8.3.7 |
| `5900/tcp` | VNC | VNC protocol 3.3 |
| `6000/tcp` | X11 | Access denied during version detection |
| `6667/tcp` | IRC | UnrealIRCd |
| `8009/tcp` | AJP13 | Apache JServ (Protocol v1.3) |
| `8180/tcp` | HTTP | Apache Tomcat/Coyote JSP engine 1.1 |

The scan shows several kinds of network exposure that merit review in a real environment:

- **Telnet (`23/tcp`)** does not encrypt a session, so credentials and session data may be exposed to someone able to observe the traffic.
- **FTP (`21/tcp` and `2121/tcp`)** can transmit credentials without encryption unless a protected configuration is used.
- **SMB/NetBIOS (`139/tcp` and `445/tcp`)** exposes file-sharing related services that should be limited to systems and users that need them.
- **MySQL (`3306/tcp`) and PostgreSQL (`5432/tcp`)** are database listeners; their network reachability and access controls should be reviewed.
- **VNC (`5900/tcp`)** provides remote graphical access and should be restricted and configured with appropriate protections.
- **HTTP and Tomcat (`80/tcp` and `8180/tcp`)** expose web services that should be inventoried, maintained and limited to the intended audience.

An open port or an identified software version is an observation, not proof of a vulnerability. I did not attempt exploitation, and this project makes no claim that any listed service was exploited or independently confirmed vulnerable.

## 6. Challenges and Troubleshooting

The recorded commands completed and produced the output shown in the screenshots. I did not document any errors or troubleshooting events during this exercise.

The version-detection scan added service details beyond the port names in the basic TCP scan. Some output remains uncertain or unavailable, such as the `login?` service label and X11 version detection. I have preserved that uncertainty rather than infer a version.

## 7. Reflection and Future Improvements

This exercise helped me see how host discovery, port scanning and service enumeration answer different questions. The subnet discovery showed which addresses Nmap reported as active. The TCP scan then showed which ports responded on the selected target, and service detection added names and version information where available.

I also learned that scan output needs careful interpretation. An identified service can point to an area for review, but it does not prove a vulnerability or describe the full security context. In a future exercise, I would save the output in a structured format, review which services are necessary, and compare the results after authorised security hardening.

## 8. Evidence Gallery

The gallery contains the four screenshots for connectivity, host discovery, the TCP scan and service/version detection:

[View the Nmap Evidence Gallery](evidence/)
