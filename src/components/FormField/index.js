import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
position: relative;
    textarea{
        min-height: 150px;
    }
    input[type="color"]{
        padding-left: 56px;
        margin-bottom: 10px;
    }
`;

const Label = styled.label`
`;
Label.Text = styled.span`
color: black;
height: 57px;
position: absolute;
top: 0;
left: 16px;

display: flex;
align-items: center;

transform-origin: 0% 0%;
font-size: 18px;
font-style: normal;
font-weight: 300;

transition: 1s ease-in-out;

`;

const Input = styled.input`
    background: #D6BE36;
    color: black;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    margin-left: 4px solid transparent;
    margin-right: 4px solid transparent;
    border-bottom: 4px solid #535350;

    padding: 16px 16px;
    margin-top: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus{
        border-bottom-color: var(--primary);
    }

    &:focus:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px)
    }

    ${({ hasValue }) => hasValue && css`
        &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
        }
        `}
`;

function FormField({
  id, type, label, value, onChangeHandler, suggestions,
}) {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>

      <Label htmlFor={id}>
        <Input
          as={tag}
          hasValue={hasValue}
          id={id}
          type={type}
          value={value}
          onChange={onChangeHandler}
          autocomplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${id}` : 'on'}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${id}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${id}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
            }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChangeHandler: () => {},
  suggestions: [],
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
