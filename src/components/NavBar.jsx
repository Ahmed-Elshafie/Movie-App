import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import logoo from '../images/logoo.png';
import { Link } from 'react-router-dom';

const NavBar = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div className='nav-style w-100 sticky-top bg-custom '>
      <Container>
        <Row className='pt-2 '>
          <Col xs='2' lg='1'>
            <Link to='/'>
              <img className='logo' src={logoo} alt='logo' />
            </Link>
          </Col>
          <Col xs='10' lg='11' className=' d-flex align-items-center'>
            <div className='search  w-100'>
              <div className='search-wrapper'>
                <input
                  onChange={(e) => onSearch(e.target.value)}
                  type='text'
                  className='form-control'
                  placeholder='ابحث...'
                />
                <FaMagnifyingGlass
                  className='search-icon'
                  size={18}
                  color='#2B2F37'
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
