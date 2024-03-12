import { Box, Button, Paper } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

export interface FileWithPreview extends File {
    preview: string;
}

interface InputThumbnailProps {
    thumbnail: FileWithPreview | null;
    setThumbnail: (file: FileWithPreview | null) => void;
}

const InputThumbnail = ({ thumbnail, setThumbnail }: InputThumbnailProps) => {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const newFile: FileWithPreview = Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0]),
            });
            setThumbnail(newFile);
        },
        [setThumbnail],
    );

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        multiple: false,
        noClick: true,
        noKeyboard: true,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
        },
    });

    useEffect(() => {
        return () => {
            if (thumbnail) URL.revokeObjectURL(thumbnail.preview);
        };
    }, [thumbnail]);

    return (
        <Box
            {...getRootProps()}
            sx={{
                padding: 2,
                border: '2px dashed #eee',
                borderRadius: '5px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <input {...getInputProps()} />

            {thumbnail && (
                <Box sx={{ mt: 2, maxWidth: 200, maxHeight: 200, overflow: 'hidden' }}>
                    <img
                        src={thumbnail.preview}
                        alt="Thumbnail preview"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            )}
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button variant="contained" onClick={open} sx={{ mt: 2 }}>
                    파일을 선택해주세요
                </Button>
            </Paper>
        </Box>
    );
};

export default InputThumbnail;
