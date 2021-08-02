import React, { useRef } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  align-items: center;
  font-size: 14px;

  @media only screen and (max-width: 400px) {
    flex-direction:column;
      align-items:baseline;
  }
`
const Input = styled.input`
  padding: 0.5rem;
  margin: 0 1rem;
  margin-left: 0.5rem;
  border-radius: 8px;
  border: 1px solid grey;
  outline: none;
  @media only screen and (max-width: 400px) {
    margin-left:0;
    margin-bottom:0.5rem;
  }
`
const Submit = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: rgba(85, 150, 246, 0.1);
  border: 1px solid #5596f6;
  border-radius: 8px;
  color: #5596f6;

  @media only screen and (max-width: 400px) {
    align-self:end;
  }

  &:hover {
    background-color: rgba(85, 150, 246, 0.5);
    color: #fff;
    transition: all 0.3s ease;
  }
`
const UserInput = ({ value, addInput }) => {
  const inputRef = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault()
    let val = inputRef.current.value

    if (val === '') {
      alert('Input is empty!')
    } else {
      addInput(val)
      
    }
  }
  return (
    <>
      <Form>
        <label htmlFor='user-input'>Your City: </label>
        <Input
          type='text'
          name='user-input'
          ref={inputRef}
          placeholder='Enter city name'
        />
        <Submit type='submit' onClick={(e) => handleSubmit(e)}>
          Submit
        </Submit>
      </Form>
    </>
  )
}

export default UserInput
