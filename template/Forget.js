import React from 'react';
import { Button, Html, Img, Head, Preview, Body, Container, Heading, Text, Link, Hr, Section } from '@react-email/components';

const forget = ({ userName, resetLink }) => (
  <Html>
    <Head />
    <Preview>Reset Your Password</Preview>
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: 1.5, backgroundColor: '#f6f6f6', padding: '20px' }}>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Img src="https://focus-hubco.netlify.app/favicon.ico" alt="Focus Hub Logo" style={{ width: '100px', height: 'auto', margin: '0 auto' }} />
        </Section>
        <Heading style={{ color: '#0070f3', fontSize: '24px', marginBottom: '16px', textAlign: 'center' }}>
          Reset Your Password, {userName}!
        </Heading>
        <Text style={{ fontSize: '16px', marginBottom: '12px' }}>Dear {userName},</Text>
        <Text style={{ fontSize: '16px', marginBottom: '12px' }}>
          We received a request to reset your password. Click the button below to reset your password:
        </Text>

        <Section style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
          <Button href={resetLink} style={{ backgroundColor: '#0070f3', color: '#ffffff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontSize: '16px' }}>
            Reset Password
          </Button>
        </Section>
        <Text style={{ fontSize: '16px', marginBottom: '12px' }}>
          If you did not request a password reset, please ignore this email or contact us if you have any questions.
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

export default forget;
