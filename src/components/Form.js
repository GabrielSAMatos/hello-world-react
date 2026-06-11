function Form(){

    function RegisterUser(e){
        e.preventDefault()
        console.log("aaaaaaaa")
        alert("Registred!")
        
    }

    return(
        <div>

            <h1>My register:</h1>
            <form onSubmit={RegisterUser}>
                <div>
                    <input type="text" placeholder="Enter your name"></input>
                </div>
                <div>
                    <input type="submit" value="Register"></input>
                </div>
            </form>

        </div>
    )

}

export default Form