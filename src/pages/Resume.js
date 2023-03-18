import React from "react";
import { Document, Page } from 'react-pdf';
import NaomiMardonCV from '../utils/NaomiMardonCV.pdf';

const Resume = () => {
    return (
        <Document file={ NaomiMardonCV }>
            <Page pageNumber={1} />
        </Document>
    );
};

export default Resume;