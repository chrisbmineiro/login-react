import styled from 'styled-components';
import { IButtonStyle } from './types';


export const ButtonContainer = styled.button<IButtonStyle>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    cursor: pointer;

     &:hover:not(:disabled) {
        background-color: #0056b3;
        opacity: 0.8;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
        opacity: 0.5;
    }
`