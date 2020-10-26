import React, { useState } from 'react' 
import { Form, Button, Row, Col } from 'react-bootstrap'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

const PersonalForm = ({ onNext }) => {
    
    const [ cpf, updateCpf ] = useState('') 
    const [ rg, updateRg ] = useState('') 
    const [ birthday, updateBirthday ] = useState('') 
    const [ status, updateStatus] = useState('')
    const [ phone, updatePhone ] = useState('')
    const [ gender, updateGender ] = useState('')
    const [ address, updateAddress ] = useState('')
    const [ cep, updateCep] = useState('')
    const [ city, updateCity ] = useState('')
    const [ neighborhood, updateNeighborhood] = useState('')
    const [ complement, updateComplement ] = useState('')
    const [ state, updateState] = useState('')
    const [ googleAddress, updateGoogleAddress ] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        onNext()
    }

    const updateLocationData = (e) => {
        
        geocodeByAddress(e)
            .then( results => console.log(results))
        

    }

    return (
        <Form>
            <Row>

                <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="" value={cpf} onChange={(e) => updateCpf(e.target.value) } />
                </Form.Group>
                
                <Form.Group controlId="rg" as={Col}>
                    <Form.Label>RG</Form.Label>
                    <Form.Control type="text" placeholder="" value={rg} onChange={(e) => updateRg(e.target.value) } />
                </Form.Group>

            </Row>
            <Row>

                <Form.Group controlId="birthday" as={Col}>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="01/01/1900" value={birthday}  onChange={(e) => updateBirthday(e.target.value) } /> 
                </Form.Group>
            
                <Form.Group controlId="status" as={Col}>
                    <Form.Label>Estado Civil</Form.Label>
                    <Form.Control as="select" placeholder="Selecione" value={status}  onChange={(e) => updateStatus(e.target.value) }>
                        <option> Solteiro(a) </option>
                        <option> Casado(a) </option>
                        <option> Separado(a) </option>
                        <option> Viúvo(a) </option>
                        <option> Divorciado(a) </option>
                        
                    </Form.Control>
                </Form.Group>

            </Row>

            <Row>

        
                <Form.Group controlId="phone" as={Col}>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="phone" placeholder="(11) 99999 9999" value={phone}  onChange={(e) => updatePhone(e.target.value) } />
                </Form.Group>
            
                <Form.Group controlId="gender" as={Col}>
                    <Form.Label>Gênero</Form.Label>
                    <Form.Control as="select" placeholder="Selecione" value={gender}  onChange={(e) => updateGender(e.target.value) }>
                        <option> Masculino </option>
                        <option> Feminino </option>
                        <option> Transgênero </option>
                        <option> Transexual </option>
                        <option> Cisgênero </option>
                        <option> Não sei responder </option>
                        <option> Prefiro não responder </option>
                        <option> Outros </option>                    
                    </Form.Control>
                </Form.Group>
            

            </Row> 
            <Row> 
                <Col>
            { // <GooglePlacesAutocomplete apiKey="AIzaSyA07qil4QGjivSApafFbU2h3wdz7XI7OFg" as={Col} selectProps={{ value: googleAddress, onChange: updateLocationData }} />}
}
<PlacesAutocomplete
        value={address}
        onChange={updateAddress}
        onSelect={updateLocationData}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
                </Col>
            </Row>
            
            <Row> 
            <Form.Group controlId="address" as={Col}>
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="" value={address} onChange={(e) => updateAddress(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="number" placeholder="" value={''} onChange={(e) => updateAddress(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="text" placeholder="" value={complement} onChange={(e) => updateComplement(e.target.value) } />
                </Form.Group>
            </Row>
            <Row>
            <Form.Group controlId="cpf" as={Col}>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="number" placeholder="" value={neighborhood} onChange={(e) => updateNeighborhood(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="city" as={Col}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="number" placeholder="" value={city} onChange={(e) => updateCity(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="state" as={Col}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="" value={state} onChange={(e) => updateState(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="cep" as={Col}>
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="" value={cep} onChange={(e) => updateCep(e.target.value) } />
                </Form.Group>
            </Row>
            <Button variant="dark" type="submit" onClick={ (e) => onSubmit(e) }>
                Next 
            </Button>

        </Form>
    )

}

export default PersonalForm