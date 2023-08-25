import React from 'react';
import {Link} from "react-router-dom";

function CourseTicket({/** @type CourseTicket */ courseTicket, showLink}) {
    return (
        <div className="course-ticket">
                <div>shortName - {courseTicket.shortName}</div>
                <div>validFrom - {courseTicket.validFrom}</div>
                <div>name - {courseTicket.name}</div>
                <div>country - {courseTicket.country}</div>
                <div>move - {courseTicket.move}</div>
                <div>amount - {courseTicket.amount}</div>
                <div>valBuy - {courseTicket.valBuy}</div>
                <div>valSell - {courseTicket.valSell}</div>
                <div>valMid - {courseTicket.valMid}</div>
                <div>currBuy - {courseTicket.currBuy}</div>
                <div>currSell - {courseTicket.currSell}</div>
                <div>currMid - {courseTicket.currMid}</div>
                <div>version - {courseTicket.version}</div>
                <div>cnbMid - {courseTicket.cnbMid}</div>
                <div>ecbMid - {courseTicket.ecbMid}</div>
            {showLink &&
                <Link to={"/course-detail"} state={{courseTicket: courseTicket}}>Go to detail</Link>
            }
            {!showLink &&
                <Link to={"/"}>Show all course tickets</Link>
            }
        </div>
    );
}

export default CourseTicket;