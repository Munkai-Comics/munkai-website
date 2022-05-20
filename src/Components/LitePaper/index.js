import { useState } from "react";
import { PdfViewer } from "../PDFViewer";
import styles from "./litepaper.module.css";

export function LitePaper() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pdf, setPdf] = useState(null);

  const moveToNextPage = () =>
    pdf &&
    currentPage < (pdf?.numPages ?? 0) &&
    setCurrentPage(currentPage + 1);

  const moveToPrevPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);
  return (
    <div>
      <div className={styles.viewerContainer}>
        <PdfViewer
          url='/assets/documents/Munkai Litepaper.pdf'
          currentPage={currentPage}
          pdfRef={pdf}
          setPdfRef={setPdf}
        />
      </div>
      <div className={styles.actions}>
        <div className={styles.navigation}>
          <button onClick={moveToPrevPage}>
            <i className='fa fas fa-chevron-left'></i>
          </button>
          <div>
            <span className={styles.current_page}>{currentPage}</span>
            {/* <span>/</span> */}
            <span className={styles.total_pages}>/{pdf?.numPages ?? 0}</span>
          </div>
          <button onClick={moveToNextPage}>
            <i className='fa fas fa-chevron-right'></i>
          </button>
        </div>
        <div>
          <a
            href='/assets/documents/Munkai Litepaper.pdf'
            download
            className={styles.download}>
            <i className='fa fa-download'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
