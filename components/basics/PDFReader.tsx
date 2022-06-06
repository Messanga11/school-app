import Modal from "../Modal"
import { Document, Page } from 'react-pdf-simple-viewer';
import { useState } from "react";

interface Props {
    open?: boolean;
    url: string;
    handleClose: Function;
}

const PDFReader:React.FC<Props> = ({open, url, handleClose}) => {
  const [pages, setPages] = useState<number[]>([]);

  
    return (
      open ? (
      <Modal handleClose={handleClose} className="w-auto">
      <div>
        <Document
          URL={url}
          onSuccess={async PDF => {
            const { numPages } = PDF;
            setPages(
              Array.from({ length: numPages })
                .fill(0)
                .map((val, index) => index + 1)
            );
          }}
        >
          {pages.map(value => {
            return <Page index={value} key={value} width={857} scale={1}></Page>;
          })}
        </Document>
      </div>
      </Modal>
      ) : null
    );

}

export default PDFReader