import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";
import { filterContacts } from "redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch();
const filter = useSelector(selectFilter);

const changeFilter = e => {
  const target = e.target.value;
  const normalizedFilter = target.toLowerCase();
  dispatch(filterContacts(normalizedFilter));
};
return (
    <label>
        Find contacts by name
        <input type='text' name="filter" value={filter} onChange={changeFilter} placeholder="Enter name" autoComplete="on"></input>
    </label>
);
};


export default Filter;