import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #FFF;
    border-top: 4px solid var(--main-color);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.05);
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding: 10px;
`;

export const Input = styled.input`
    min-width: 200px;
    height: 38px;
    border: none;
    border-bottom: 2px solid var(--dark-color);
    &:focus{
        outline: none;
        border-color: var(--main-color);
    }
    &:disabled{
        border-color: #a1a1ab;
    }
`;

export const ContentCheckbox = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    label{
        font-size: 10px;
        font-weight: 600;
    }
`;

export const ContentFlex = styled.div`
    display: flex;
    gap: 20px;
`;