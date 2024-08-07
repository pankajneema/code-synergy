import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <img src='/images/features/shield.png' alt="Threat Detection Icon" width="60" height="61" />,
    title: "Threat Detection",
    paragraph:
      "Our state-of-the-art threat detection system provides real-time monitoring and analysis, identifying malicious activities.Our 24/7 threat detection services provide constant vigilance over your digital environment.",
  },
  {
    id: 2,
    icon: <img src='/images/features/stalking.png' alt="Vulnerability Management Icon" width="60" height="61" />,
    title: "Vulnerability Management",
    paragraph:
      "Ensure your systems are secure with our continuous scanning .Identify, prioritize, and remediate vulnerabilities with precision. Safeguard your systems before threats exploit weaknesses",
  },
  {
    id: 3,
    icon: <img src='/images/features/hacker.png' alt="Penetration Testing Icon" width="60" height="61" />,
    title: "Penetration Testing",
    paragraph:
      "Discover and fix security gaps with our simulated cyber-attacks. Protect your business by identifying and addressing potential security breaches with our comprehensive penetration testing",
  },
];
export default featuresData;
