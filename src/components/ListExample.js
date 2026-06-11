import ItemFromList from "./ItemFromList"

function ListExample(){
    return(
        <>
            <h1>H1 of list</h1>
            <ul>
                <ItemFromList name="Gabriel" yearOfBirth={"1999"}/>
                <ItemFromList  yearOfBirth={2002}/>
            </ul>
        </>
    )
}

export default ListExample