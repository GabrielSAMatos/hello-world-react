import PropTypes from 'prop-types'

function ItemFromList({name, yearOfBirth}){
    return(
        <>
            <li>
                {name} - {yearOfBirth}
            </li>
        </>
    )
}

ItemFromList.propTypes = {
    name: PropTypes.string,
    yearOfBirth: PropTypes.number.isRequired
}

ItemFromList.defaultProps = {
    name: 'Miss Name'
}

export default ItemFromList