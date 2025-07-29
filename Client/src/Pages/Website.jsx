import React from 'react';
import {
  FormWrapper,
  Section,
  SectionTitle,
  Input,
  Select,
  Row,
  NextButton,
  ImagePreview,
  Textarea
} from './Website.Styles';

const AddEmployeeForm = () => {
  return (
    <FormWrapper>
      <Section>
        <SectionTitle>Add Employee</SectionTitle>
        <Row>
          <Input placeholder="Ajay kumar" />
          <Textarea placeholder="Ajaykumar dummy dummy dummy 1231 dummy" />
        </Row>
        <Row>
          <Input placeholder="254125" />
          <ImagePreview src="/images/profile-placeholder.png" alt="Profile" />
        </Row>
        <Row>
          <Input placeholder="Ajaykumar@gmail.com" />
          <Input placeholder="12/12/1980" />
          <Input placeholder="Male" />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Job Details</SectionTitle>
        <Row>
          <Input placeholder="Developer" />
          <Input placeholder="21/12/2002" />
        </Row>
        <Row>
          <Select>
            <option>Department</option>
          </Select>
          <Select>
            <option>Full time</option>
          </Select>
        </Row>
        <Row>
          <Input placeholder="Pranav G" />
          <Select>
            <option>Developement</option>
          </Select>
        </Row>
        <Row>
          <Input placeholder="Total leave" />
        </Row>
      </Section>

      <Section>
        <SectionTitle>Employee Legal & ID Information</SectionTitle>
        <Row>
          <Input placeholder="Employee phone number" />
          <Input placeholder="Iqama Number" />
        </Row>
        <Row>
          <Input placeholder="Passport number" />
          <Input placeholder="Visa expiry date" />
        </Row>
        <Row>
          <Input placeholder="Work Permit" />
          <Input placeholder="Insurance number" />
        </Row>
        <Row>
          <Input placeholder="Visa expiry Date" />
        </Row>
      </Section>

      <NextButton>Next</NextButton>
    </FormWrapper>
  );
};

export default AddEmployeeForm;
