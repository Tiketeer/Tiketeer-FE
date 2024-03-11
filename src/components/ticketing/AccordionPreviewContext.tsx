import { createContext, useContext, useState } from 'react';

export const AccordionPreviewContext = createContext({
    setPreview: (value: string) => {},
});

export const useAccordionPreview = () => useContext(AccordionPreviewContext);

export const AccordionPreviewProvider = ({ children }: any) => {
    const [preview, setPreview] = useState('');
    const value = { preview, setPreview };

    return (
        <AccordionPreviewContext.Provider value={value}>
            {children}
        </AccordionPreviewContext.Provider>
    );
};
