import React, { useRef, useEffect } from 'react';

const IframeResizer = ({ src, heightBuffer = 20, maxCellHeight = 200, ...props }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const injectCustomStyles = () => {
            const iframe = iframeRef.current;
            if (iframe) {
                try {
                    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

                    // Inject custom CSS for output content
                    const style = iframeDocument.createElement('style');
                    style.innerHTML = `
            .jp-OutputArea, .jp-Cell-outputArea {
              max-height: ${maxCellHeight}px;
              overflow-y: auto;
            }
            .jp-RenderedText, .jp-OutputArea-output {
              word-wrap: break-word;
              white-space: pre-wrap;
            }
          `;
                    iframeDocument.head.appendChild(style);

                    // Adjust iframe height after styles are applied
                    const height = iframeDocument.body.scrollHeight + heightBuffer;
                    iframe.style.height = `${height}px`;
                } catch (error) {
                    console.warn('Could not access iframe content due to cross-origin restrictions.', error);
                }
            }
        };

        const iframe = iframeRef.current;
        if (iframe) {
            iframe.addEventListener('load', injectCustomStyles);
        }

        return () => {
            if (iframe) {
                iframe.removeEventListener('load', injectCustomStyles);
            }
        };
    }, [heightBuffer, maxCellHeight]);

    return (
        <iframe
            ref={iframeRef}
            src={src}
            style={{ width: '100%', border: 0, overflow: 'hidden' }}
            {...props}
        ></iframe>
    );
};

export default IframeResizer;
