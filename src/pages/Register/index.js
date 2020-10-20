import React, { useState } from 'react'

const RegisterForm  = () => {

    const [ step, updateStep ] = useState(0) 


    switch (step) {
        case 0: 
            return <h3> Step 1 - Dados Gerais </h3>
        case 1: 
            return <h3> Step 2 - Dados Pessoais </h3>
        case 2: 
            return <h3> Step 3 - Dados Profissionais</h3>
        case 2: 
            return <h3> Step 3 - Dados Bancários </h3>
    }


}

export default RegisterForm