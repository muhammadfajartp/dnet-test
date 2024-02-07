import React from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.scss";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = ({ width, height, hadleChangeInput, title, selected }) => {
   return (
      <InputGroup className={`${styles.searchStyle}`} style={{ width: width, height: height }}>
         <FormControl placeholder="Search..." aria-label="Search..." className={`${styles.inputSearchStyle} border border-success border-0 text-secondary`} onChange={hadleChangeInput} />
         <Link className="linkStyle" to={`/`}>
            <Button className="border-0 bg-light p-2" style={{ borderRadius: `0 50px 50px 0` }}>
               <BsSearch color="#ffcf3a" />
            </Button>
         </Link>
      </InputGroup>
   );
};

export default Search;
