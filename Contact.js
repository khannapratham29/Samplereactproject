import styled from "styled-components";


const FormContainer = styled.div`
  padding: 40px;
  background: white;
  max-width: 600px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
`;


const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 100px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  padding: 10px 16px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

function Contact() {



    return(
        <section id ="contact">
            <FormContainer>
                <h2>Contact</h2>

                <Input type="text" placeholder="Your Name"/>
                <Input type="email" placeholder="Your Email"/>
                <Textarea placeholder="Your Message"></Textarea>

                <Button>Send Message</Button>
            </FormContainer>
            </section>
    );

}
export default Contact;