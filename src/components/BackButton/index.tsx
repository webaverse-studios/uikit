import styles from './back_button.module.css';

export const BackButton = ({ onClick }: { onClick: () => void }) => {
  return <div onClick={onClick} className={styles.StyledBackButton}></div>;
};
