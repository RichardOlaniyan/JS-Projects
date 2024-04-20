import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import Usergreeting from "./UserGreeting.jsx"
import List from "./List.jsx"

function App() {
  return(
    <>
      <Usergreeting isLoggedIn={false} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button count="30"/>
      <Student name="Carlos" age={30} isStudent={true}/>
      <Student name="Patrick" age={29} isStudent={false}/>
      <Student name="James" age={70} isStudent={false}/>
      <Student name="Sandy" age={20} isStudent={true}/>
      <Student age={20}/>
      <List />
    </>
  )
}

export default App
