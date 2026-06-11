import ItemFromList from "./ItemFromList"

function ListExample(){
    return(
        <>
            <h1>H1 of list</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <ItemFromList item="Item 3 from ItemFromList"/>
            </ul>
        </>
    )
}

export default ListExample