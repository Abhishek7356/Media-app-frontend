import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='primary'>
                <MDBContainer fluid>
                    <Link className='text-decoration-none' to={'/'}><MDBNavbarBrand href='' className='fw-bold '> 
                        <img
                            src='https://pluspng.com/img-png/media-player-png-open-in-media-viewerconfiguration-2000.png'
                            className='me-2 shadow-sm rounded-circle'
                            height='30'
                            alt=''
                            loading='lazy'
                        />
                        Media Player
                    </MDBNavbarBrand></Link>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header