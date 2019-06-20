import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardGroup from  'react-bootstrap/CardGroup';

class Landing extends React.Component{
    render(){
        return(
            
        
            <div className='loginLandingPage'>
            <CardGroup>
                <Card className='landingCards landingCardLeft'>

                </Card>
                <Card className='landingCards'>
                    <Card.Title className='landingTitle'>Welcome To Plant Feedr</Card.Title>
                    <div className='landingFormButtonContainer'>
                  
                            <Link className='plantFormLink landingButtons' to='/login'>Login</Link>
                            <Link className='plantFormLink landingButtons' to='/register'>Sign Up</Link>
                    
                    </div>
                </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Landing;