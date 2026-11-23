# Virtual Cybersecurity Lab Setup

**Status:** Initial setup completed - validation pending

## Project Overview

This project documents the initial VMware-based cybersecurity lab that I prepared for controlled coursework. The lab contains a Kali Linux virtual machine and a Metasploitable2 virtual machine. The screenshots currently establish the virtual network settings, the assigned addresses and the fresh-install snapshots. They do not yet demonstrate successful communication or external network isolation.

## Objective

My objective was to prepare an isolated practice environment for later cybersecurity exercises. I wanted to record the initial configuration clearly enough that I can return to it, verify connectivity and continue from a known starting point.

I have not yet completed all validation for the lab. Further checks are needed before I can confirm communication between the virtual machines or the absence of external network access.

## Tools and Environment

- **Hypervisor:** VMware. The exact VMware product name and version are not yet confirmed.
- **Virtual machines:** Kali Linux and Metasploitable2.
- **Virtual network mode:** Host-only, shown in the VMware network adapter settings.
- **Network subnet:** 192.168.247.0/24.
- **Kali Linux IPv4 address:** 192.168.247.128/24.
- **Metasploitable2 IPv4 address:** 192.168.247.129/24.
- **Snapshot state:** Both virtual machines have a fresh-install snapshot.

## Network Configuration

The VMware host-only adapter settings show that the virtual machines are configured to communicate through Host-only networking. Kali Linux displays the address 192.168.247.128/24, while Metasploitable2 displays 192.168.247.129/24. Together, these addresses place the two machines in the 192.168.247.0/24 subnet.

The recorded configuration does not by itself prove that both systems can communicate. It also does not confirm that the lab is isolated from external networks. Those points remain validation tasks.

## Methodology

1. I configured the VMware network adapter for Host-only networking.
2. I started the Kali Linux virtual machine and recorded its network configuration.
3. I started Metasploitable2 and recorded its network configuration.
4. I checked the available VMware Snapshot Manager information for both virtual machines.
5. I preserved seven screenshots that show the initial configuration and clean snapshot state.

The current documentation covers setup and evidence capture only. I have not added results for any later validation or security exercise.

## Results and Evidence

The screenshots confirm the following initial state:

- VMware shows Host-only networking for the virtual machine adapter.
- Kali Linux is configured with 192.168.247.128/24.
- Metasploitable2 is configured with 192.168.247.129/24.
- Both virtual machines use the 192.168.247.0/24 subnet.
- VMware Snapshot Manager shows a fresh-install snapshot for each virtual machine.

I have not recorded successful communication between the machines, an external-isolation check or a security scan. Those results would need separate evidence and should not be inferred from these screenshots.

The full evidence set is available in the [virtual lab evidence gallery](evidence/).

## Challenges and Troubleshooting

At this stage, I have not identified a configuration problem that required troubleshooting. The evidence only shows the initial environment. I will document any actual issue and its resolution later, based on observed behaviour rather than assumptions.

My next verification step is to test the two addresses in an authorised and controlled way. I must also verify whether the Host-only configuration prevents unintended external access.

## Reflection and Future Improvements

Creating this initial lab helped me practise separating setup evidence from verified outcomes. The VMware settings, guest addresses and snapshot managers are useful records, but they answer different questions. I will not describe the lab as fully working until I have checked communication and isolation directly.

Future improvements will include recording the exact VMware product and version, documenting the steps used for validation, and saving only sanitised evidence that supports each conclusion. If I continue to use the lab for exercises, I will also record the scope and authorisation for every test.
