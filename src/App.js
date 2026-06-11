import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName"
import Person from "./components/Person"
import Phrase from "./components/Phrase";
import ListExample from "./components/ListExample";
import EventClick from "./components/EventClick";
import Form from "./components/Form";

function App() {

  function hello(){
    return "Hello, world! of function hello"
  }

  const name1 = "Vaquinha"

  const url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fvividly-colored-hummingbird-nature_23-2151495292.jpg%3Fsize%3D626%26ext%3Djpg&f=1&nofb=1&ipt=8f641d2c0ccba054cc439a5af68b65a095ec1eaf9ed95e93384254952a1035eb'
  console.log('a')
  return (
    <div className="App">
      <h1>{hello()}</h1>
      <HelloWorld/>

      <SayMyName name="Gabriel"/>
      <SayMyName name="Nat"/>
      <SayMyName name={name1}/>

      <Person 
      name="Gabriel" 
      age="26" 
      profession="instructor" 
      photo="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1134575.jpg&f=1&nofb=1&ipt=85a2bd9cc6117f46b10c8ee9cfe22d76fca7ca243faaf8b573605a45b94eab2d"
      />

    <Phrase/>
    <ListExample/>
    
    <EventClick number={20}/>
    <EventClick number={0}/>
    <EventClick number={10000}/>

    <Form/>





    </div>
  );
}

export default App;
