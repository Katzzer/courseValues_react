import React, {useEffect, useState} from 'react';
import axios from "axios";
import CourseValue from "./CourseValue.jsx";

const backendUrl = "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
const springBootApi = "http://localhost:8080/api/v1/course-tickets"

function MainPage() {

    const [courseValues, setCourseValues] = useState(null)
    
    function getDataDirectlyFromPublicApi() {
        axios.get(backendUrl).then(response => {
            setCourseValues(response.data)
        })
    }
    
    function getDataFromSpringBootApi(usedb) {
        const url = usedb ? springBootApi + "?usedb=true" : springBootApi + "?usedb=false"
        console.log(url)
        axios.get(url).then(response => {
            setCourseValues(response.data)
        })
    }
    
    return (
        <>
            <h1>Course values</h1>
            <button onClick={getDataDirectlyFromPublicApi}>Get data directly from public API</button>
            <button onClick={() => getDataFromSpringBootApi(false)}>Get data from spring boot app (no db)</button>
            <button onClick={() => getDataFromSpringBootApi(true)}>Get data from spring boot app (using db)</button>

            {courseValues && courseValues.map(courseValue => (
                <CourseValue
                    courseValue={courseValue}
                    showLink={true}
                    key={courseValue.shortName}
                />
                )
            )}

        </>
    );
}

export default MainPage;