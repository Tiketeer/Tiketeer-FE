import PageFooter from 'components/page-footer/PageFooter';
import PageHeader from 'components/page-header/PageHeader';

const MyPage = () => {
    return (
        <div>
            <PageHeader isLogined={true} />
            <PageFooter />
        </div>
    );
};

export default MyPage;
