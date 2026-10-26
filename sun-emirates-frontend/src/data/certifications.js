/**
 * Certification register for Sun Emirates Mechanical Works L.L.C.
 *
 * Only publish details that appear on the actual document, and only point to
 * files you are allowed to distribute publicly. Everything inside `public/` is
 * downloadable by anyone.
 *
 * Entry shape:
 * {
 *   id: "trade-license-2026-27",                       // required, unique
 *   title: "Trade License 2026-27",                     // required
 *   documentType: "Company Trade License",              // optional label
 *   organization: "Issuing body as printed",            // omit if not published
 *   certificateNumber: "12345",                         // omit if not published
 *   issueDate: "2026-01-15",                            // omit if not published
 *   expiryDate: "2027-01-14",                           // omit if not published
 *   file: "/Trade License 2026-27.pdf",                 // path inside public/
 *   preview: "/images/certifications/preview.jpg",      // optional image thumbnail
 *   downloadName: "Sun-Emirates-Trade-License.pdf",     // optional, defaults from title
 * }
 */
export const certificates = [
  {
    id: "trade-license-2026-27",
    title: "Trade License 2026-27",
    documentType: "Company Trade License",
    file: "/Trade License 2026-27.pdf",
    preview: "/images/certifications/trade-license-2026-27.jpg",
    downloadName: "Sun-Emirates-Trade-License-2026-27.pdf",
  },
];
