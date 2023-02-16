import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Content = styled.div`
    width: 80%;
`;

export const Table = styled.table`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    color: var(--dark-color);
    tr{
        height: 40px;
        border-bottom: 1px solid #2c2c2c66;
    }
    thead{
        tr{
            border-bottom: 2px solid #2c2c2c99;
        }
    }
    
`;