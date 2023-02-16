import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    font-size: 12px;
    color: #2c2c2c66;
    align-items: flex-end;
    gap: 5px;
`;

export const Circle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ContentCheck = styled.div`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: var(--main-color);
`;