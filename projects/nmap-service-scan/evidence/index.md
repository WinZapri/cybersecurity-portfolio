---
layout: default
title: Nmap Service Scan Evidence
description: Screenshots of authorised Nmap connectivity, host discovery, port scan and service detection results.
---

<section class="evidence-page" aria-labelledby="evidence-title">
  <p class="eyebrow">Nmap exercise evidence</p>
  <h1 id="evidence-title">Network discovery and service identification</h1>
  <p class="evidence-intro">These screenshots document the recorded Nmap commands and output from the authorised VMware lab exercise on 26 October 2026.</p>

  <div class="evidence-gallery">
    <figure>
      <a href="{{ '/projects/nmap-service-scan/evidence/ping-connectivity.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/nmap-service-scan/evidence/ping-connectivity.png' | relative_url }}" alt="Kali Linux terminal showing four ping replies from 192.168.247.129 and 0 percent packet loss" loading="eager">
      </a>
      <figcaption><strong>01 - Connectivity test</strong><span><code>ping -c 4 192.168.247.129</code> returned four replies with 0% packet loss.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/nmap-service-scan/evidence/network-host-discovery.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/nmap-service-scan/evidence/network-host-discovery.png' | relative_url }}" alt="Nmap -sn output reporting four active hosts on subnet 192.168.247.0/24" loading="lazy">
      </a>
      <figcaption><strong>02 - Subnet host discovery</strong><span><code>nmap -sn 192.168.247.0/24</code> reported .1, .128, .129 and .254 as up.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/nmap-service-scan/evidence/tcp-port-scan.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/nmap-service-scan/evidence/tcp-port-scan.png' | relative_url }}" alt="Nmap TCP scan output showing 23 open TCP ports on Metasploitable2 at 192.168.247.129" loading="lazy">
      </a>
      <figcaption><strong>03 - TCP port scan</strong><span><code>nmap 192.168.247.129</code> reported 23 open TCP ports.</span></figcaption>
    </figure>

    <figure>
      <a href="{{ '/projects/nmap-service-scan/evidence/service-version-detection.png' | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ '/projects/nmap-service-scan/evidence/service-version-detection.png' | relative_url }}" alt="Nmap -sV output showing detected services and versions for Metasploitable2" loading="lazy">
      </a>
      <figcaption><strong>04 - Service and version detection</strong><span><code>nmap -sV 192.168.247.129</code> identified service details for the open ports.</span></figcaption>
    </figure>
  </div>

  <p class="evidence-note"><strong>Scope:</strong> The screenshots show observations from the authorised lab scan. They do not demonstrate exploitation or confirm vulnerabilities.</p>
</section>
