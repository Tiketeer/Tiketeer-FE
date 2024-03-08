import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { COLOR } from '../../color/color';

export const ContainedButton = styled(Button)`
    height: 48px;
    box-shadow: 0 18px 30px rgba(68, 97, 242, 0.11);
    background-color: ${COLOR.LIGHTER};
    &:hover {
        background-color: ${COLOR.DEFAULT};
    }
`;
