
import PropType from 'prop-types'

function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propType={
    name:PropType.string,
    age:PropType.number,
    isStudent:PropType.bool,
}

Student.defaultProps={
    name:"Guess",
    age:0,
    isStudent:false,
}

export default Student