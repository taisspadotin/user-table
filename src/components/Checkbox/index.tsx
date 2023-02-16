import React from 'react';
import { Circle, Container, ContentCheck } from './styles';

interface ICheckbox{
    checked: boolean;
    onChange: (value: boolean) => void;
    label?: string;
}
export const Checkbox = ({checked, label, onChange}: ICheckbox): JSX.Element => {
    return(
    <Container onClick={() => { onChange && onChange(!checked) }}>
        <Circle>
            {checked && <ContentCheck data-testid="checkbox-checked"/>}
        </Circle>
        <label>{label && label}</label>
    </Container>)
}