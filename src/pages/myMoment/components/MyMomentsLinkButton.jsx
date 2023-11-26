import LinkButton from '../../../components/LinkButton';

export default function MyMomentsLinkButton() {

    return (
        <div className={'centerGrid'}>
            <LinkButton
                width={'300px'}
                goTo={"/add-moment"}
            >
                Add a Moment!
            </LinkButton>
        </div>
    );
}