import React from 'react';
import { Button,Html,Img, Head, Preview, Body, Container, Heading, Text, Link, Hr, Section } from '@react-email/components';


const Response = ({ userName, doubt }) => (
  <Html>
  <Head />
  <Preview>Thank you for your submission</Preview>
  <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: 1.5, backgroundColor: '#f6f6f6', padding: '20px' }}>
    <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Img src="https://focus-hubco.netlify.app/favicon.ico" alt="Focus Hub Logo" style={{ width: '100px', height: 'auto', margin: '0 auto' }} />
      </Section>
      <Heading style={{ color: '#0070f3', fontSize: '24px', marginBottom: '16px', textAlign: 'center' }}>
        Thank You for Your Submission
      </Heading>
      <Text style={{ fontSize: '16px', marginBottom: '12px' }}>Dear {userName},</Text>
      <Text style={{ fontSize: '16px', marginBottom: '12px' }}>
        Thank you for submitting your doubt. We have received your query and our team will get back to you as soon as possible.
      </Text>
      <Section style={{ marginBottom: '12px' }}>
        <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Your doubt:</Text>
        <blockquote style={{ marginLeft: '20px', borderLeft: '4px solid #0070f3', paddingLeft: '10px', color: '#555' }}>
          {doubt}
        </blockquote>
      </Section>
      <Text style={{ fontSize: '16px', marginBottom: '12px' }}>
        We appreciate your patience and will strive to provide a helpful response Asap.
      </Text>
      <Hr style={{ borderColor: '#eaeaea', margin: '20px 0' }} />
      <Text style={{ fontSize: '16px', marginBottom: '12px' }}>Best regards,</Text>
      <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>The Focus Hub Team</Text>
      <Section style={{ padding: '20px', textAlign: 'center' }}>
          <Text style={{ fontSize: '14px', color: '#888' }}>
            Notice something wrong? <Link href="mailto:info.focus.hub@gmail.com" style={{ color: '#0070f3', textDecoration: 'none' }}>Contact our support team</Link> and we'll be happy to help.
          </Text>
        </Section>
        <Section style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #eaeaea' }}>
          <Text style={{ fontSize: '14px', color: '#888' }}>
            &copy; {(new Date().getFullYear())} Focus Hub. All rights reserved. | <Link href="https://focus-hubco.netlify.app/" style={{ color: '#0070f3', textDecoration: 'none' }}>Visit our website</Link>
          </Text>
        </Section>
    </Container>
  </Body>
</Html>
);



export default Response;