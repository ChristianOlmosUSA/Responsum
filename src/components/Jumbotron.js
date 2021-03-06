import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import jumbobackground from '../assets/jumbobackground.jpg';
import responsum_logo2 from '../assets/responsum_logo2.jpg'

                                    // again, this styled.div is just a massive string inside backticks.
const Styles = styled.div `
    .jumbo {
        background:url(${jumbobackground}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #0g0;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                
                <img className="img-fluid" 
                     style={{
                        alignSelf: 'center',
                        height: 50,
                        width: 200,
                        borderRadius: 10
                      }}
                    src={responsum_logo2} 
                    alt="logo"/>
            
                <p>Onsite Event Security</p>
            </Container>

        </Jumbo>

    </Styles>




)