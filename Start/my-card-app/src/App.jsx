import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import Usergreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <Usergreeting isLoggedIn={false} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Student name="Carlos" age={30} isStudent={true}/>
      <Student name="Patrick" age={29} isStudent={false}/>
      <Student name="James" age={70} isStudent={false}/>
      <Student name="Sandy" age={20} isStudent={true}/>
      <Student age={20}/>
    </>
  )
}

export default App
