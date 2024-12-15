import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function NetworkAdministratorExpanded() {
    const skills = [
        "Domain Name System (DNS)",
        "Internet Protocol Suite (TCP/IP)",
        "Load Balancing",
        "Physical Security",
        "Network Security",
        "Cisco VoIP",
        "GD TACLANES",
        "Printers",
        "Cisco Routers",
        "Switches",
        "ASA's",
        "OSPF",
        "EIGRP",
        "BGP",
        "DHCP",
        "VLANs",
        "VLAN Trunking Protocol (VTP)",
        "Virtual Private Cloud (VPC)",
        "Virtual Private Cloud (VPC)",
        "Firewall",
        "DHCP Server",
        "Windows Server",
        "Linux Server",
        "Active Directory",
    ]

    return (
        <div className="mx-auto max-w-3xl p-6">
            <div className="space-y-6">
                <Card>
                    <CardContent className="p-6">
                        <Image
                            alt="United States Air Force logo"
                            className="rounded"
                            height={48}
                            src="/icon-us-air-force.webp"
                            width={48}
                        />
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">United States Air Force</h3>
                                <p className="text-muted-foreground">Full-time · 4 yrs</p>

                                <div className="mt-6 space-y-6 border-muted pl-6 md:border-l-2">
                                    <div>
                                        <h4 className="font-semibold">Network Administrator</h4>
                                        <p className="text-sm text-muted-foreground">Oct 2020 - Jul 2021 · 10 mos</p>
                                        <p className="text-muted-foreground">Shreveport-Bossier City Area</p>
                                        <p className="mt-2">
                                            Provide support for NIPR, SIPR, and Top Secret networks across the Air Force
                                            base. Experienced in technologies such as Cisco VoIP, GD TACLANES, Printers,
                                            Cisco Routers, Switches, ASA's, and many more. Maintain confidentiality,
                                            integrity, availability across the base infrastructure for 10,000+ users.
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {skills.map((skill) => (
                                                <Badge key={skill} variant="secondary">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Network Administrator</h4>
                                        <p className="text-sm text-muted-foreground">Jul 2020 - Oct 2020 · 4 mos</p>
                                        <p className="text-muted-foreground">Turkey</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Network Administrator</h4>
                                        <p className="text-sm text-muted-foreground">Jun 2020 - Jun 2020 · 1 mo</p>
                                        <p className="text-muted-foreground">Qatar</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Network Administrator</h4>
                                        <p className="text-sm text-muted-foreground">Feb 2020 - Jun 2020 · 5 mos</p>
                                        <p className="text-muted-foreground">Shreveport-Bossier City Area</p>
                                        <p className="mt-2">
                                            Provide support for NIPR, SIPR, and Top Secret networks across the Air Force
                                            base. Experienced in technologies such as Cisco VoIP, GD TACLANES, Printers,
                                            Cisco Routers, Switches, ASA's, and many more. Maintain confidentiality,
                                            integrity, availability across the base infrastructure for 10,000+ users.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Cyber Security Analyst</h4>
                                        <p className="text-sm text-muted-foreground">Jun 2019 - Feb 2020 · 9 mos</p>
                                        <p className="text-muted-foreground">Shreveport-Bossier City Area</p>
                                        <p className="mt-2">
                                            Monitor logs, particpate in blue team red team exercises, make sure devices
                                            are patched and hardened on the network. Find security faults within the
                                            Network and work with the team responsible to help remediate the
                                            vulnerabilities. Stay up to date with trainings, latest threats and
                                            vulnerabilities that could impact our network
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Network Administrator</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Feb 2018 - Jun 2019 · 1 yr 5 mos
                                        </p>
                                        <p className="text-muted-foreground">Shreveport, Louisiana Area</p>
                                        <p className="mt-2">
                                            Provide support for NIPR, SIPR, and Top Secret networks across the Air Force
                                            base. Experienced in technologies such as Cisco VoIP, GD TACLANES, Printers,
                                            Cisco Routers, Switches, ASA's, and many more. Maintain confidentiality,
                                            integrity, availability across the base infrastructure for 10,000+ users.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Cyber Transport 3D1X2 Tech School</h4>
                                        <p className="text-sm text-muted-foreground">Oct 2017 - Feb 2018 · 5 mos</p>
                                        <p className="text-muted-foreground">Keesler</p>
                                        <p className="mt-2">
                                            learned security and networking fundamentals, how to troubleshoot problems
                                            that occur in a network and implement fix actions
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Trainee</h4>
                                        <p className="text-sm text-muted-foreground">Aug 2017 - Sep 2017 · 2 mos</p>
                                        <p className="text-muted-foreground">
                                            Lackland Air Force Base, Texas, United States
                                        </p>
                                        <p className="mt-2">
                                            While in BootCamp I learned AF core values, tradition, leadership skills,
                                            physical fitness and mental toughness
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
