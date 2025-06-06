import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음만난 파이썬" numOfPage={300}></Book>
            <Book name="처음만난 자바" numOfPage={400}></Book>
            <Book name="처음만난 리액트" numOfPage={500}></Book>
        </div>
    );
}

export default Library;