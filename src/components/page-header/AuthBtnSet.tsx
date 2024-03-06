import styled from '@emotion/styled';
import AuthButton from './AuthButton';

export const btnSetPadding = 25;

export const PageHeaderAuthBtnSetContainer = styled.div`
    width: 216px;
    height: ${100 - 2 * btnSetPadding}%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    padding: ${btnSetPadding}% 0%;
    gap: 35px;
`;

const PageHeaderAuthBtnSet = (props: { isLogined: boolean }) => {
    const { isLogined } = props;
    return (
        <PageHeaderAuthBtnSetContainer>
            {isLogined ? (
                <>
                    <AuthButton text="Logout" isFilled={true} />
                    <div>Profile</div>
                </>
            ) : (
                <>
                    <AuthButton text="Login" isFilled={false} />
                    <AuthButton text="Register" isFilled={true} />
                </>
            )}
        </PageHeaderAuthBtnSetContainer>
    );
};

export default PageHeaderAuthBtnSet;
