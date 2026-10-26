import React, { useState } from "react";
import { FaFilePdf, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

// Resolve a project path to a safe, public URL.
const buildAssetUrl = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${process.env.PUBLIC_URL}${encodeURI(normalised)}`;
};

const formatDate = (value) => {
  if (!value) return null;
  // Parse date-only strings as local dates so they do not shift by a day.
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  const date = dateOnly
    ? new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]))
    : new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const slugify = (value) =>
  (value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CertificateCard = ({ certificate }) => {
  const {
    title,
    documentType,
    organization,
    certificateNumber,
    issueDate,
    expiryDate,
    file,
    preview,
    downloadName,
    isPlaceholder = false,
  } = certificate;

  const fileUrl = buildAssetUrl(file);
  const previewUrl = buildAssetUrl(preview);
  const hasFile = Boolean(fileUrl);
  const [previewFailed, setPreviewFailed] = useState(false);
  const formattedIssueDate = formatDate(issueDate);
  const formattedExpiryDate = formatDate(expiryDate);

  const baseName = downloadName || slugify(title) || "sun-emirates-certificate";
  const downloadFileName = /\.pdf$/i.test(baseName) ? baseName : `${baseName}.pdf`;

  const metaRows = [
    { label: "Certificate No.", value: certificateNumber },
    { label: "Issued", value: formattedIssueDate },
    { label: "Expires", value: formattedExpiryDate },
  ].filter((row) => Boolean(row.value));

  return (
    <article className={`cert-card${isPlaceholder ? " cert-card--placeholder" : ""}`}>
      <div className="cert-card-preview">
        {previewUrl && !previewFailed ? (
          <img
            src={previewUrl}
            alt={`Preview of ${title}`}
            onError={() => setPreviewFailed(true)}
          />
        ) : (
          <div className="cert-card-preview-empty">
            <FaFilePdf aria-hidden="true" />
            <span>{hasFile ? "PDF certificate" : "Document not uploaded"}</span>
          </div>
        )}

        {isPlaceholder && (
          <span className="cert-card-status">Placeholder</span>
        )}
      </div>

      <div className="cert-card-body">
        <h3 className="cert-card-title">{title}</h3>

        {documentType && (
          <p className="cert-card-document-type">{documentType}</p>
        )}

        {organization && <p className="cert-card-organization">{organization}</p>}

        {metaRows.length > 0 && (
          <dl className="cert-card-meta">
            {metaRows.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {isPlaceholder && (
          <p className="cert-card-note">
            This card is a placeholder. It will show the official certificate once the
            document is added.
          </p>
        )}
      </div>

      <div className="cert-card-actions">
        {hasFile ? (
          <>
            <a
              className="cert-btn cert-btn-primary"
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} (opens in a new tab)`}
            >
              <FaExternalLinkAlt aria-hidden="true" />
              View Certificate
            </a>
            <a
              className="cert-btn cert-btn-outline"
              href={fileUrl}
              download={downloadFileName}
              aria-label={`Download ${title} as a PDF`}
            >
              <FaDownload aria-hidden="true" />
              Download PDF
            </a>
          </>
        ) : (
          <>
            <button
              type="button"
              className="cert-btn cert-btn-primary"
              disabled
              aria-label={`View ${title} - document not available yet`}
            >
              <FaExternalLinkAlt aria-hidden="true" />
              View Certificate
            </button>
            <button
              type="button"
              className="cert-btn cert-btn-outline"
              disabled
              aria-label={`Download ${title} - document not available yet`}
            >
              <FaDownload aria-hidden="true" />
              Download PDF
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default CertificateCard;
