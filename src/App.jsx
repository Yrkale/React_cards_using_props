import Student from './Student.jsx'

function App(){
  return(
    <>
    <Student name="yogesh" age={23} isStudent={true}/>
    <Student name="Abhishek" age={24} isStudent={false}/>
    <Student/>
    <Student name="Saurabh"/>
    <Student name="Aniket" age={25}/>
    </>

  );
}

export default App