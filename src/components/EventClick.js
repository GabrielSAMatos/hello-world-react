function EventClick({number=0}){

    function MyEvent(){
        console.log(`Activated  ${number}`)
    }


    return(
        <>
            <p>Click to trigger an event</p>
            <button onClick={MyEvent}>Active!</button>
        </>
    )
}

export default EventClick