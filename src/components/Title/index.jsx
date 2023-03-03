import styles from './Title.module.scss';

const Title = ({name}) => {
    return <h1 className={styles.title}>{name}</h1>
}

export default Title;