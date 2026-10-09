import React from 'react';

/**
 * Reliably downloads the resume in PDF format.
 * Uses fetch + Blob with explicit 'application/pdf' MIME type to ensure
 * the browser triggers an authentic direct file download (.pdf)
 * instead of opening a browser preview tab or navigating away.
 */
export const downloadResumePdf = async (e?: React.MouseEvent): Promise<void> => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const filename = 'Keerthivasan_V_Resume.pdf';
  const fileUrl = '/Keerthivasan_V_Resume.pdf';

  try {
    const res = await fetch(fileUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf'
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch PDF: ${res.status} ${res.statusText}`);
    }

    const blob = await res.blob();
    // Explicitly guarantee PDF MIME type
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = blobUrl;
    link.download = filename;
    link.setAttribute('download', filename);

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 200);
  } catch (err) {
    console.warn('Direct blob download failed, falling back to direct anchor download:', err);
    // Reliable fallback
    const fallbackLink = document.createElement('a');
    fallbackLink.href = fileUrl;
    fallbackLink.download = filename;
    fallbackLink.setAttribute('download', filename);
    fallbackLink.target = '_self';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
};
