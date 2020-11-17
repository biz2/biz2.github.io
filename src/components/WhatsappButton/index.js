import React from 'react' 
import { Button } from 'react-bootstrap'
import { FaWhatsapp  } from 'react-icons/fa'
 
const WhatsappButton = ({ history }) => { 

    const handleClick = () => {

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.open('https://wa.me/5511930954455')
        } else {
            window.open('https://web.whatsapp.com/send?phone=5511930954455')
        }

    }


    return (
        <Button className='whatsapp-btn' variant='success' onClick={handleClick}>
            <FaWhatsapp /> &nbsp;
            <span>Talk to Us </span>
        </Button>
    )

}

export default WhatsappButton