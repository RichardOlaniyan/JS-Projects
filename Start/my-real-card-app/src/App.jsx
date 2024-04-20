import Card from './Card'
import userData from './user-data.jsx'

function App(){
  const users = userData.map((User, i) => {
    return <Card user = {User} key = {i} />
   })
  
   /// sorts data by alphabetical order of countries 
   users.sort((a, b) => a.props.user.location.country.localeCompare(b.props.user.location.country)); 

  return(
    <div>
      {users}
    </div>
  );
}
export default App


