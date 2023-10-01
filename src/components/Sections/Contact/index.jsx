import styles from './Contact.module.scss';
import Title from '../../Title';
import Form from '../../Form';

const Contact = () => {
    return <section id="contact" className={styles.contactWrapper}>
        <Title name="Entre em contato" />
        <Form />
    </section>
}

export default Contact;