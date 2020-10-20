import React, { useState } from 'react'
import GeneralForm from './components/General'
import PersonalForm from './components/Personal'

const RegisterForm  = () => {

    const [ step, updateStep ] = useState(0) 
    const [ formData, updateFormData ] = useState({})

    console.log(step)

    switch (step) {
        case 0: 
            return ( 
                <> 
                    <h3> Step 1 - Dados Gerais </h3>
                    <GeneralForm onNext={() => updateStep(step + 1)} />
                </>
            )
        case 1: 
            return ( 
                <>  
                    <h3> Step 2 - Dados Pessoais </h3>
                    <PersonalForm onNext={() => updateStep(step + 1)} />
                </>
            )
        case 2: 
        return ( 
                <>
                    <h3> Step 3 - Dados Profissionais</h3>
                    <GeneralForm onNext={() => updateStep(step + 1)} />
                </>
            )
        case 3: 
            return ( 
                <> 
                    <h3> Step 3 - Dados Bancários </h3>
                    <GeneralForm onNext={() => updateStep(step + 1)} />
                </>
            )
    }


}

export default RegisterForm