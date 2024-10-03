import React from "react";

interface CardsProps {
    Name:string;
    Age:string;
    RollNo:string;
    Day:string;
    Class:string;
}
const Cards: React.FC<CardsProps> = (props) => {
    return (
        <div className="bg-rose-100	border border-blue-700 bg-fuchsia-95 h-60 w-56 flex flex-col justify-center text-cyan-600 p-6">
        <h1 className="text-purple-800 text-2xl font-extrabold text-center"> Student Card</h1>
        <h1>Name: {props.Name}</h1>
        <h1>Age: {props.Age}</h1>
        <h1>Roll No: {props.RollNo}</h1>
        <h1>Day: {props.Day}</h1>
        <h1>Class: {props.Class}</h1>
        </div>
    );
}

export default Cards;