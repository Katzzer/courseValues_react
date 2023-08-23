import React from 'react';
import {Link} from "react-router-dom";

function CourseValue({courseValue, showLink}) {
    return (
        <div className="courseValue">
            <div>amount - {courseValue.amount}</div>
            <div>cnbMid - {courseValue.cnbMid}</div>
            <div>country - {courseValue.country}</div>
            <div>currBuy - {courseValue.currBuy}</div>
            <div>cnbMid - {courseValue.cnbMid}</div>
            <div>currSell - {courseValue.currSell}</div>
            <div>ecbMid - {courseValue.ecbMid}</div>
            <div>move - {courseValue.move}</div>
            <div>name - {courseValue.name}</div>
            <div>shortName - {courseValue.shortName}</div>
            <div>valBuy - {courseValue.valBuy}</div>
            <div>valMid - {courseValue.valMid}</div>
            <div>valSell - {courseValue.valSell}</div>
            <div>validFrom - {courseValue.validFrom}</div>
            <div>version - {courseValue.version}</div>
            {showLink &&
                <Link to={"/course-detail"} state={{courseValue}}>Go to detail</Link>
            }
            {!showLink &&
                <Link to={"/"}>Show all course values</Link>
            }
        </div>
    );
}

export default CourseValue;