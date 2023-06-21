import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/toolbar/lib/styles/index.css';
const pdf1 = require('../../assets/forms/Form1.pdf')
const pdf2 = require('../../assets/forms/Form2.pdf')
const pdf3 = require('../../assets/forms/Form3.pdf')
const pdf4 = require('../../assets/forms/Form4.pdf')
const pdf5 = require('../../assets/forms/Form5.pdf')

export default function PDFViewer(props: any) {
  const [pdfArray, ] = useState([pdf1, pdf2, pdf3, pdf4, pdf5,])
const defaultLayoutPluginInstance = defaultLayoutPlugin(
  props
);

  return (
    <div     style={{
      border: '1px solid rgba(0, 0, 0, 0.3)',
      maxHeight: '720px',
      overflow:'auto'
  }}>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
      <Viewer fileUrl={pdfArray[props.value]} plugins={[defaultLayoutPluginInstance]}/>
    </Worker>
    </div>
  );
}