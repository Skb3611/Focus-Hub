import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Section, Img, Hr, Link, Button } from '@react-email/components';

const Receipt = ({ receipt }) => (
  <Html>
    <Head />
    <Preview>Thank you for your purchase from Focus Hub</Preview>
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Container style={{ maxWidth: '600px', margin: '40px auto', padding: '0', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Section style={{ backgroundColor: '#0070f3', padding: '20px', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
          <Img src="https://focus-hub-xi.vercel.app/favicon.ico" alt="Focus Hub Logo" style={{ width: '100px', height: 'auto', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
          <Heading style={{ color: '#ffffff', margin: '0', fontSize: '20px' }}>Thanks for your payment!</Heading>
        </Section>
        <Section style={{ padding: '20px', borderBottom: '1px solid #eaeaea', textAlign: 'center' }}>
          <Container style={{ marginBottom: '20px' }}>
            <Img src="https://icons.veryicon.com/png/o/miscellaneous/monochromatic-surface-icon-library/success-56.png" alt="Promotional Image" style={{ width: '30%', height: '30%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <Text style={{ fontSize: '18px', marginTop: '10px' }}>Payment Successful.</Text>
          </Container>
          <Hr style={{ borderColor: '#eaeaea' }} />
          <Section style={{ margin: '20px 0' }}>
            <Text style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>ORDER CONFIRMATION #{receipt.id}</Text>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={{ fontSize: '14px', textAlign: 'left', float: 'left' }}>Course Name</Text>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', float: 'right' }}>{receipt.courseName}</Text>
              <Hr style={{ clear: 'both', borderColor: '#eaeaea', margin: '10px 0' }} />
            </Section>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={{ fontSize: '14px', textAlign: 'left', float: 'left' }}>Course Category</Text>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', float: 'right' }}>{receipt.courseCategory}</Text>
              <Hr style={{ clear: 'both', borderColor: '#eaeaea', margin: '10px 0' }} />
            </Section>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={{ fontSize: '14px', textAlign: 'left', float: 'left' }}>Amount</Text>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', float: 'right' }}>₹{receipt.amount}</Text>
              <Hr style={{ clear: 'both', borderColor: '#eaeaea', margin: '10px 0' }} />
            </Section>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={{ fontSize: '14px', textAlign: 'left', float: 'left' }}>Status</Text>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', float: 'right' }}>Paid</Text>
              <Hr style={{ clear: 'both', borderColor: '#eaeaea', margin: '10px 0' }} />
            </Section>
            <Section style={{ marginBottom: '10px' }}>
              <Text style={{ fontSize: '14px', textAlign: 'left', float: 'left' }}>Time of Payment</Text>
              <Text style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'right', float: 'right' }}>{new Date(receipt.time).toLocaleString()}</Text>
              <Hr style={{ clear: 'both', borderColor: '#eaeaea', margin: '10px 0' }} />
            </Section>
            <div style={{ clear: 'both' }} />
          </Section>
        </Section>
       
        <Section style={{ padding: '20px', textAlign: 'center' }}>
          <Text style={{ fontSize: '14px', color: '#888' }}>
            Notice something wrong? <Link href="mailto:info.focus.hub@gmail.com" style={{ color: '#0070f3', textDecoration: 'none' }}>Contact our support team</Link> and we'll be happy to help.
          </Text>
        </Section>
        <Section style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #eaeaea' }}>
          <Text style={{ fontSize: '14px', color: '#888' }}>
            &copy; {(new Date().getFullYear())} Focus Hub. All rights reserved. | <Link href="https://focus-hub-xi.vercel.app/" style={{ color: '#0070f3', textDecoration: 'none' }}>Visit our website</Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Receipt;
