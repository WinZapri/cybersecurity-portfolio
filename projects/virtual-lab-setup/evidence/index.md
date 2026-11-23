---
layout: default
title: Virtual Lab Evidence
description: Screenshots of the initial VMware, Kali Linux and Metasploitable2 lab configuration.
---

<section class="evidence-page" aria-labelledby="evidence-title">
  <p class="eyebrow">Virtual lab evidence</p>
  <h1 id="evidence-title">Initial lab configuration</h1>
  <p class="evidence-intro">These screenshots record the initial virtual network settings and snapshot state. They do not establish successful communication or external isolation.</p>

  <div class="evidence-gallery">
    <figure>
      <a href="{{ '/projects/virtual-lab-setup/evidence/vmware-host-only-settings.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/virtual-lab-setup/evidence/vmware-host-only-settings.png' | relative_url }}" alt="VMware virtual machine settings showing the network adapter configured as Host-only" loading="eager">
      </a>
      <figcaption><strong>01 - VMware host-only settings</strong><span>The virtual network adapter is configured for Host-only networking.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/virtual-lab-setup/evidence/kali-virtual-machine.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/virtual-lab-setup/evidence/kali-virtual-machine.png' | relative_url }}" alt="VMware workstation view showing Kali Linux and Metasploitable2 virtual machines" loading="eager">
      </a>
      <figcaption><strong>02 - Kali Linux virtual machine</strong><span>The lab desktop view shows Kali Linux running alongside the Metasploitable2 virtual machine tab.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/virtual-lab-setup/evidence/kali-network-configuration.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/virtual-lab-setup/evidence/kali-network-configuration.png' | relative_url }}" alt="Kali Linux terminal displaying an IPv4 address of 192.168.247.128 with a 24-bit prefix" loading="eager">
      </a>
      <figcaption><strong>03 - Kali Linux network configuration</strong><span>The Kali Linux terminal shows IPv4 address 192.168.247.128/24.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/virtual-lab-setup/evidence/metasploitable-network-configuration.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/virtual-lab-setup/evidence/metasploitable-network-configuration.png' | relative_url }}" alt="Metasploitable2 terminal displaying network interface information and IPv4 address 192.168.247.129" loading="lazy">
      </a>
      <figcaption><strong>04 - Metasploitable2 network configuration</strong><span>The Metasploitable2 terminal displays eth0 with IPv4 address 192.168.247.129/24.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/virtual-lab-setup/evidence/metasploitable-initial-network.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/virtual-lab-setup/evidence/metasploitable-initial-network.png' | relative_url }}" alt="Metasploitable2 terminal showing initial network configuration and a command prompt" loading="lazy">
      </a>
      <figcaption><strong>05 - Metasploitable2 initial network view</strong><span>This view records the initial network state and command prompt in Metasploitable2.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/virtual-lab-setup/evidence/kali-snapshot.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/virtual-lab-setup/evidence/kali-snapshot.png' | relative_url }}" alt="VMware Snapshot Manager for Kali Linux showing a fresh-install snapshot" loading="lazy">
      </a>
      <figcaption><strong>06 - Kali Linux snapshot</strong><span>VMware Snapshot Manager shows a fresh-install snapshot for Kali Linux.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/virtual-lab-setup/evidence/metasploitable-snapshot.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/virtual-lab-setup/evidence/metasploitable-snapshot.png' | relative_url }}" alt="VMware Snapshot Manager for Metasploitable2 showing a fresh-install snapshot" loading="lazy">
      </a>
      <figcaption><strong>07 - Metasploitable2 snapshot</strong><span>VMware Snapshot Manager shows a fresh-install snapshot for Metasploitable2.</span></figcaption>
    </figure>
  </div>

  <p class="evidence-note"><strong>Validation pending:</strong> Host communication, external isolation and any later security exercise require separate verification and evidence.</p>
</section>
