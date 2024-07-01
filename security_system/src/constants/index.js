import s1 from "../assets/s1.png";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.jpg";

import { HiBan, HiOutlineSortAscending } from "react-icons/hi";
import { RiAlarmWarningLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";

export const navLinks = [
  {
    id: "1",
    href: "home",
    link: "Home",
  },
  {
    id: "2",
    href: "aboutUs",
    link: "About Us",
  },
  {
    id: "3",
    href: "services",
    link: "Services",
  },
  {
    id: "4",
    href: "solutions",
    link: "Solutions",
  },
  {
    id: "5",
    href: "contactUs",
    link: "Contact Us",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "4500+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "250+",
  },
  {
    id: "stats-3",
    title: "Transactions",
    value: "$250M+",
  },
];

export const services = [
  {
    id: "service-1",
    title: "Threat Detection and Prevention:",
    description:
      "Using advanced tools and technologies, we monitor your systems 24/7 to detect and prevent cyber threats before they can cause harm.",
    icon: HiBan,
  },
  {
    id: "service-2",
    title: "Vulnerability Assessments:",
    description:
      "Regular assessments to identify and address security weaknesses in your IT infrastructure.",
    icon: HiOutlineSortAscending,
  },
  {
    id: "service-3",
    title: "Incident Response:",
    description:
      "Rapid response services to contain and mitigate the impact of security breaches.",
    icon: RiAlarmWarningLine,
  },
  {
    id: "service-4",
    title: "Security Audits:",
    description:
      "Comprehensive audits to ensure your security measures are up-to-date and effective.",
    icon: GrShieldSecurity,
  },
];

export const solutions = [
  {
    id: "solution-1",
    title: "Network Security",
    subtitle: "Firewalls and Intrusion Detection Systems (IDS):",
    description:
      "Advanced systems to monitor and control incoming and outgoing network traffic.",
  },
  {
    id: "solution-2",
    title: "Endpoint Protection",
    subtitle: "Endpoint Detection and Response (EDR):",
    description: "Continuous monitoring and response to advanced threats.",
  },
  {
    id: "solution-3",
    title: "Cloud Security",
    subtitle: "Cloud Access Security Brokers (CASB):",
    description: "Ensure secure access to cloud services.",
  },
  {
    id: "solution-4",
    title: "Data Security",
    subtitle: "Data Loss Prevention (DLP):",
    description: "Prevent unauthorized data transfers and leaks.",
  },
];

export const plans = [
  {
    id: "plan-1",
    title: "Basic Plan",
    price: "$120/month",
    description: "Easily upgrade as your business grows.",
    first: "24/7 Network Monitoring",
    second: "Basic Endpoint Protection",
    third: "Monthly Security Reports",
    fourth: "Email Support",
    fifth: "Software Updates",
    six: "Firewall Management",
    icon: FaCheckCircle,
    arrow: CgArrowTopRight,
    planBtn: "Get basic now",
  },
  {
    id: "plan-2",
    title: "Popular Plan",
    price: "$220/month",
    description: "Easily upgrade as your business grows.",
    first: "24/7 Network Monitoring",
    second: "Basic Endpoint Protection",
    third: "Monthly Security Reports",
    fourth: "Email Support",
    fifth: "Software Updates",
    six: "Firewall Management",
    icon: FaCheckCircle,
    arrow: CgArrowTopRight,
    planBtn: "Get popular now",
  },
  {
    id: "plan-3",
    title: "Pro Plan",
    price: "$420/month",
    description: "Easily upgrade as your business grows.",
    first: "24/7 Network Monitoring",
    second: "Basic Endpoint Protection",
    third: "Monthly Security Reports",
    fourth: "Email Support",
    fifth: "Software Updates",
    six: "Firewall Management",
    icon: FaCheckCircle,
    arrow: CgArrowTopRight,
    planBtn: "Get pro now",
  },
];

export { s1, s2, s3, s4, s5 };
