import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import Section from 'components/Section';
import Title from 'components/Title';

export default function App() {
  return (
    <Section>
      <Container>
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        <ContactList />
      </Container>
    </Section>
  );
}
