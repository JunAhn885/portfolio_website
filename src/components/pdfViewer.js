'use client'
import { useState, useEffect } from "react";
import { Document, Page, pdfjs, StyleSheet } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from './stylesheets/resume.module.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

export default function PDFViewer(){
    const [numPages, setNumPages] = useState(null);
    const [windowWidth, setWindowWidth] = useState(1000);

    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        // Function to update window width
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };
  
        // Attach event listener for window resize
        window.addEventListener('resize', updateWindowWidth);
  
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);
    
    function resumeScreenLimiter(windowWidth){
        if (windowWidth >= 1000){
            return 1000
        }
        else {
            return windowWidth
        }
    }

    return (
        <div className={styles.resume}>
           <Document file="/documents/Resume_Ahn_Jun.pdf" onLoadSuccess={onLoadSuccess} height="100px">
                <Page width={resumeScreenLimiter(windowWidth)} scale={1.0} pageNumber={1} />
            </Document>
            
        </div>
    )
}