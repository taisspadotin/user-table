import { IUser } from "./interfaces";

export const handleSearchTable = (
    searchValue: string,
    filterByEmail: boolean,
    filterByGroup: boolean,
    data: IUser[]
): IUser[] => {
    if(!searchValue || (!filterByEmail && !filterByGroup)) return data;
    
    return data.filter(user => (
        (filterByEmail && 
        user.email.toUpperCase().includes(searchValue.toUpperCase())) || 
        (filterByGroup && 
        user.primaryGroup.toUpperCase().includes(searchValue.toUpperCase()))
    ));
}