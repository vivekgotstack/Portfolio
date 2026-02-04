"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vivek Nigam",
      jobTitle: "Final Year B.Tech Student & Full Stack Developer",
      description:
        "Final-year B.Tech Computer Science student and Full Stack Developer from India, focused on building scalable web applications using Java, Spring Boot, React, and modern databases.",
      url: "",
      image: "/pfp.jpg",
      email: "vivekni1224@gmail.com",
      nationality: "Indian",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "India",
      },
      sameAs: [
        "https://github.com/vivekgotstack",
        "https://www.linkedin.com/in/randomvivek/",
        "https://x.com/vivekgotstack",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "RR Institute of Modern Technology",
          description: "B.Tech in Computer Science and Engineering",
        },
        {
          "@type": "EducationalOrganization",
          name: "Ram Prasad Bismil Memorial Public School",
          description: "Secondary and Higher Secondary Education",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        description:
          "Develops full stack web applications using Java, Spring Boot, React, and modern databases.",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Spring JPA",
          "REST APIs",
          "JavaScript",
          "TypeScript",
          "React",
          "PostgreSQL",
          "MySQL",
          "Docker",
          "Git",
        ],
      },
      knowsAbout: [
        "Full Stack Development",
        "Backend Development",
        "Java & Spring Ecosystem",
        "REST API Design",
        "Database Design",
        "Web Application Development",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Java Bootcamp",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "LetsUpgrade",
          },
          dateIssued: "2025-01",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Certified Full Stack Developer",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "GeeksforGeeks",
          },
          dateIssued: "2024-10",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}