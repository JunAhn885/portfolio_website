import Header from '../../components/header'
import PDFViewer from '@/components/pdfViewer'
import Head from 'next/head';
import Footer from '@/components/footer';

export default function Resume() {

    return (
      <>
        <Head>
          <title>Resume</title>
        </Head>
        <Header/>
        <PDFViewer/>
        <Footer/>
      </>
    )
  }