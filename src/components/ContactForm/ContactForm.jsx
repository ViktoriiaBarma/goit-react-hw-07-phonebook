import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts-operations';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from './ContactForm.styled';


export const ContactForm = () => {
    const dispatch = useDispatch();
  

    const handleSubmit = e => {
        e.preventDefault();
      const form = e.target;
      console.log(form.elements.number.value)
      dispatch(addContact({ name: form.elements.name.value, phone: form.elements.number.value }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelWrapper>
        <FormField htmlFor="name">
          <BsPersonFill />
          <LabelSpan>
            Name
            </LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik type="text" name="name" placeholder="Name" required />

      <LabelWrapper>
        <FormField htmlFor="number">
          <BsFillTelephoneFill />
           <LabelSpan>
            Number
            </LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik
        type="tel"
        name="number"
        required
        placeholder="+38-050-123-45-67"
      />
      <StyledButton type="submit">
        <IoMdPersonAdd size="16" />
        Add contact
      </StyledButton>
    </Form>
  );
};

export default ContactForm;