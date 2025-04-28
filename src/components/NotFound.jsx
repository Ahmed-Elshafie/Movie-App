import React from 'react';
import { Button, Container } from 'react-bootstrap';
import NotFoundImage from '../images/not.png';

const NotFound = () => {
  return (
    <Container
      className='d-flex flex-column justify-content-center align-items-center '
      style={{ height: '70vh' }}
    >
      <img
        src={NotFoundImage}
        alt='لا يوجد نتائج'
        style={{
          width: '500px',
          height: '500px',
          objectFit: 'contain',
          marginBottom: '-100px',
        }}
      />
      <h2 className=' text-muted py-3'>لا يوجد أفلام لعرضها</h2>
      <a href='/'>
        <Button style={{ backgroundColor: '#120404', border: 'none' }}>
          العودة إلى الصفحة الرئيسية
        </Button>
      </a>
    </Container>
  );
};

export default NotFound;
