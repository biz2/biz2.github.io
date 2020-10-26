import React, { useState } from 'react'
import BankForm from './components/Bank'
import GeneralForm from './components/General'
import PersonalForm from './components/Personal'
import ProfessionalForm from './components/Professional'

const RegisterForm  = () => {

    const [ step, updateStep ] = useState(0) 
    const [ formData, updateFormData ] = useState({})

    const submitForm = () => {
        console.log('Submitting')
    }

    switch (step) {
        case 0: 
            return ( 
                <> 
                    <h3> Passo 1 de 4 - Dados Gerais </h3>
                    <GeneralForm onNext={() => updateStep(step + 1)} />
                </>
            )
        case 1: 
            return ( 
                <>  
                    <h3> Passo 2 de 4 - Dados Pessoais </h3>
                    <PersonalForm onNext={() => updateStep(step + 1)} />
                </>
            )
        case 2: 
        return ( 
                <>
                    <h3> Passo 3 de 4 - Dados Profissionais</h3>
                    <ProfessionalForm onNext={() => updateStep(step + 1)} />
                </>
            )
        case 3: 
            return ( 
                <> 
                    <h3> Passo 4 de 4 - Dados Bancários </h3>
                    <BankForm onNext={() => submitForm()} />
                </>
            )
    }


}

export default RegisterForm