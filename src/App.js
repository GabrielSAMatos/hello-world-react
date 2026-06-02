function App() {

  function hello(){
    return "Hello, world!"
  }

  const url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fvividly-colored-hummingbird-nature_23-2151495292.jpg%3Fsize%3D626%26ext%3Djpg&f=1&nofb=1&ipt=8f641d2c0ccba054cc439a5af68b65a095ec1eaf9ed95e93384254952a1035eb'

  return (
    <div className="App">
      <h1>{hello()}</h1>
      <img src={url} alt="150x150"/>
    </div>
  );
}

export default App;
