'use client'
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from './stylesheets/resume.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

export default function PDFViewer(){
    const [numPages, setNumPages] = useState(null);

    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={styles.resume}>
           <Document file="/documents/Resume_Ahn_Jun.pdf" onLoadSuccess={onLoadSuccess}>
                <Page pageNumber={1} />
            </Document>
            
        </div>
    )
}