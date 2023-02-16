import buttonStyles from './back_button.scss';

export const BackButton = ({ onClick }: { onClick: () => void }) => {
  return <div onClick={onClick} className={buttonStyles['StyledBackButton']}></div>;
};
