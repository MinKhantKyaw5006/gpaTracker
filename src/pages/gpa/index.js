import React, { useEffect, useState } from "react"
import Select from 'react-select'
import { useLocalStorage } from "react-use"
import AverageGPA from "../../components/averageGPA"
import CreateSemsterForm from "../../components/createSemsterForm"
import SemsterGPA from "../../components/semsterGPA"
import Subject from "../../components/subjects"
import { curriculum } from './cs-2019.json'
import 'bootstrap/dist/css/bootstrap.min.css';


function ChooseMajor() {
    const options = [
        { value: 'cs', label: 'CS' },
        { value: 'it', label: 'IT' },
    ]

    const GPA = [
        { value: 4, label: 'A' },
        { value: 3.75, label: 'A-' },
        { value: 3.25, label: 'B+' },
        { value: 2.75, label: 'B-' },
        { value: 2.25, label: 'C+' },
        { value: 2, label: 'C' },
        { value: 1.75, label: 'C-' },
        { value: 1, label: 'D' },
        { value: 0, label: 'F' },
        { value: null, label: 'W' },
    ]

    const [data, SetData] = useState([])
    const [subject, SetSubject] = useState({})
    const [myGPA, SetMyGPA] = useState([])
    const [result, SetResult] = useState(0)
    const [semsters, SetSemster] = useLocalStorage('semsters', [])
    const [overallGPA, SetOverallGPA] = useState(0)
    const [major, SetMajor] = useState('')

    const handleChange = event => {
        if (event.value == "cs") {
            SetData(curriculum[0].courses.map(group => {
                return { value: group.groupName, label: group.groupName, subjects: group.subjects };
            }))
            SetMajor('CS')
        }
        else {
            SetData(curriculum[1].courses.map(group => {
                return { value: group.groupName, label: group.groupName, subjects: group.subjects };
            }))
            SetMajor('IT')
        }
    };

    const groupChange = event => {
        SetSubject(event.subjects.map(sub => {
            return { value: sub.code, label: sub.name, credit: sub.credit }
        }))
    }
   
    const subChange = event => {
        let filterS = semsters.filter(o => o.myGPA.map(s => s.sub).includes(event.label))

        if (myGPA.length < 7 &&  (! myGPA.map(o => o.sub).includes(event.label)) && (filterS.length == 0)) {
            SetMyGPA(current => [...current, {sub : event.label, code: event.value, credit: event.credit, grade: 0}])
        }
    }

    const selectGPA = sub => event => {
        sub.grade = event.value

        SetMyGPA( myGPA.map(m => {
            return m.sub == sub.sub ? sub : m
        }))
    }

    const average = grades => {
        let tCredits = grades.map(val => val.credit)
        let tGPA = grades.map(val => val.grade)

        return (tCredits.reduce((r,a,i) => r+a*tGPA[i], 0) / tCredits.reduce((r, a) => r +a, 0)).toFixed(2)
    }

    const calOverAllGPA = sem => {
        let gpaList = sem.map(ob => parseFloat(ob.avgGPA))

        return (gpaList.reduce((a, b) => a + b, 0) / gpaList.length).toFixed(2)
    }

    const createSemster = event => {
        event.preventDefault()

        if (event.target.name.value.length >= 3) {
            SetSemster([...semsters, {sem: event.target.name.value, avgGPA: result, myGPA}])
    
            SetMyGPA([])
    
            event.target.name.value = ''
        }

    }

    const clearStorage = () => {
        SetSemster([])
    }

    useEffect(() => {
        SetResult(average(myGPA))
        SetOverallGPA(calOverAllGPA(semsters))
    })

    return (
        <>
            <h2 className="fw-normal">GPA Tracker <button className="btn btn-success" onClick={clearStorage}>Clear</button> </h2>


            { ! subject.length ?
                <Select
                    options={options}
                    placeholder="Choose Major"
                    onChange={handleChange}
                />            
                :
                <h3>Major : {major}</h3>
            }

            <Select
                options={data}
                placeholder="Choose Group"
                onChange={groupChange}
            />

            { subject.length && 
                <Select
                    options={subject}
                    placeholder="Choose Subject"
                    onChange={subChange}
                />            
            }

            <Subject myGPA={myGPA} GPA={GPA} selectGPA={selectGPA} />

            <AverageGPA myGPA={myGPA} result={result} />

            <CreateSemsterForm myGPA={myGPA} createSemster={createSemster}/>

            <SemsterGPA semsters={semsters} />

            {
                semsters.length != 0 &&
                <h2>Overall GPA - {overallGPA} </h2>
            } 

        </>
    )
}

export default ChooseMajor