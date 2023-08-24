import React, {useState} from 'react';
import axios from "axios";
import CourseValue from "./CourseValue.jsx";

const BACKEND_URL_PUBLIC_API = "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
const BACKEND_URL_SPRING_BOOT_APP = "http://localhost:8080/api/v1/course-tickets"

function MainPage() {

    const [courseValues, setCourseValues] = useState(null)
    const [errorMessage, setErrorMessage] = useState("");
    
    function getDataDirectlyFromPublicApi() {
        setErrorMessage("")
        axios.get(BACKEND_URL_PUBLIC_API).then(response => {
            setCourseValues(response.data)
        }).catch(error => {
            setErrorMessage(error.message)
        })
    }
    
    function getDataFromSpringBootApi(usedb) {
        setErrorMessage("")
        
        const url = usedb ? BACKEND_URL_SPRING_BOOT_APP + "?usedb=true" : BACKEND_URL_SPRING_BOOT_APP + "?usedb=false"
        setErrorMessage("")
        axios.get(url).then(response => {
            setCourseValues(response.data)
        }).catch(error => {
            setErrorMessage(error.message)
        })
    }
    
    return (
        <>
            <h1>Course values</h1>
            <div className="button-wrapper">
                <button onClick={getDataDirectlyFromPublicApi}>Get data directly from public API</button>
                <button onClick={() => getDataFromSpringBootApi(false)}>Get data from spring boot app (no db)</button>
                <button onClick={() => getDataFromSpringBootApi(true)}>Get data from spring boot app (using db)</button>
            </div>
            

            {courseValues && !errorMessage && courseValues.map(courseValue => (
                <CourseValue
                    courseValue={courseValue}
                    showLink={true}
                    key={courseValue.shortName}
                />
                )
            )}

            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}

        </>
    );
}

export default MainPage;