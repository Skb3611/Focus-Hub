import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Link, Hr, Section, Img, Button } from '@react-email/components';


const ConfirmationEmail = ({ body }) => (
  <Html>
    <Head />
    <Preview>Your Appointment Confirmation</Preview>
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: 1.5, backgroundColor: '#f6f6f6', padding: '20px' }}>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Img src="https://focus-hub-xi.vercel.app/favicon.ico" alt="Focus Hub Logo" style={{ width: '100px', height: 'auto', margin: '0 auto' }} />
        </Section>
        <Heading style={{ color: '#0070f3', fontSize: '24px', marginBottom: '16px', textAlign: 'center' }}>
          Session Confirmation
        </Heading>
        <Text style={{ fontSize: '16px', marginBottom: '8px' }}>Dear {body.name},</Text>
        <Text style={{ fontSize: '16px', marginBottom: '8px' }}>
          Your appointment has been successfully scheduled. Here are the details of your appointment:
        </Text>
        <Section style={{ marginBottom: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Name:</Text>
          <Text style={{ fontSize: '16px', marginLeft: '20px' }}>{body.name}</Text>
        </Section>
        <Section style={{ marginBottom: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Email:</Text>
          <Text style={{ fontSize: '16px', marginLeft: '20px' }}>{body.email}</Text>
        </Section>
        <Section style={{ marginBottom: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Phone:</Text>
          <Text style={{ fontSize: '16px', marginLeft: '20px' }}>{body.phone}</Text>
        </Section>
        <Section style={{ marginBottom: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Date:</Text>
          <Text style={{ fontSize: '16px', marginLeft: '20px' }}>{body.date}</Text>
        </Section>
        <Section style={{ marginBottom: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Time:</Text>
          <Text style={{ fontSize: '16px', marginLeft: '20px' }}>{body.time}</Text>
        </Section>
        <Section style={{ marginBottom: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Category:</Text>
          <Text style={{ fontSize: '16px', marginLeft: '20px' }}>{body.category}</Text>
        </Section>
        <Hr style={{ borderColor: '#eaeaea', margin: '20px 0' }} />
        <Text style={{ fontSize: '16px', marginBottom: '8px' }}>Best regards,</Text>
        <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>The Focus Hub Team</Text>
        <Text style={{ fontSize: '14px', color: '#888', marginTop: '20px' }}>
          If you have any further questions, feel free to <Link href="mailto:info.focus.hub@gmail.com" style={{ color: '#0070f3' }}>contact us</Link>.
        </Text>
        <Section style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button href="https://focus-hub-xi.vercel.app/" style={{ backgroundColor: '#0070f3', color: '#ffffff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontSize: '16px' }}>
            Visit Focus Hub
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
);


export default ConfirmationEmail;
