import React from "react";
import { FaAward, FaShieldAlt, FaLeaf } from "react-icons/fa";

import CertificateCard from "../components/CertificateCard";
import { certificates } from "../data/certifications";

const trustItems = [
  {
    id: "quality",
    icon: FaAward,
    title: "Quality Assured",
    description:
      "Documented inspection, material traceability and quality control at every stage of fabrication.",
  },
  {
    id: "safety",
    icon: FaShieldAlt,
    title: "Safe Operations",
    description:
      "Qualified teams following recognised health, safety and environmental practices on site and in the workshop.",
  },
  {
    id: "sustainability",
    icon: FaLeaf,
    title: "Sustainable Growth",
    description:
      "Responsible use of materials, energy and resources to support long-term, sustainable operations.",
  },
];

const Certifications = () => {
  const isSingleCertificate = certificates.length === 1;

  return (
    <div className="certifications-page">
      {/* Hero */}
      <section
        className="cert-hero"
        style={{ backgroundImage: "url('/images/Common/laser.jpeg')" }}
      >
        <div className="container cert-hero-inner">
          <span className="cert-hero-eyebrow">Standards &amp; Compliance</span>
          <h1>Our Certifications</h1>
          <p className="cert-hero-text">
            Our certifications reflect our commitment to quality, safety and
            international standards in mechanical and engineering services.
          </p>
        </div>
      </section>

      {/* Certificate cards */}
      <section className="section cert-list-section">
        <div className="container">
          <div className="cert-section-heading">
            <h2>Certification Documents</h2>
            <p>
              Official certificates held by Sun Emirates Mechanical Works L.L.C.
              are published here for review and download.
            </p>
          </div>

          <div
            className={`cert-grid${isSingleCertificate ? " cert-grid--single" : ""}`}
          >
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="cert-trust-section">
        <div className="container">
          <div className="cert-trust-grid">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="cert-trust-item" key={item.id}>
                  <div className="cert-trust-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
