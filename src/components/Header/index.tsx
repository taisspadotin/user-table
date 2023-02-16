import React from 'react';
import { Checkbox } from '../Checkbox';
import { Container, Content, ContentCheckbox, ContentFlex, Input } from './styles';

interface IHeader{
    searchValue: string;
    changeSearchedValue: (value: string) => void;
    filterByEmail: boolean;
    filterByGroup: boolean;
    changeFilterByEmail: (value: boolean) => void;
    changeFilterByGroup: (value: boolean) => void;
}
export const Header = ({
    searchValue,
    changeSearchedValue,
    filterByEmail,
    filterByGroup,
    changeFilterByEmail,
    changeFilterByGroup
}: IHeader): JSX.Element => {
    const disabled = !filterByEmail && !filterByGroup;
    return(
    <Container>
        <Content>
            <ContentCheckbox>
                <label>Filter by</label>
                <ContentFlex>
                    <Checkbox label="Email" checked={filterByEmail} onChange={changeFilterByEmail}/>
                    <Checkbox label="Group" checked={filterByGroup} onChange={changeFilterByGroup}/>
                </ContentFlex>
            </ContentCheckbox>
            <Input
                type="text"
                data-testid="header-input"
                value={disabled ? "" : searchValue}
                disabled={disabled}
                onChange={(e) => {
                    changeSearchedValue && changeSearchedValue(e.target.value)
                    }}
                placeholder={disabled ? "Select a filter to search a value" : "Search"}
            />
        </Content>
    </Container>)
}