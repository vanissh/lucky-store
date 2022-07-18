import { useState } from 'react'

const withCard = (BaseComponent) => {
    return (props) => {

        const [ itemAdded, setItemAdded ] = useState(false)
        const [ prefix, setPrefix ] = useState('')

        const toggleItemAdded = () => {
            itemAdded ? deleteItem() : addItem()
        }

        const addItem = () => {
            props.addToFav()
            setPrefix('-fill')
            setItemAdded(true)
        }

        const deleteItem = () => {
            props.deleteFromFav()
            setPrefix('')
            setItemAdded(false)
        }

        return <BaseComponent
            {...props}
            toggleItemAdded={toggleItemAdded}
            prefix={prefix}
        />
    }
}

export default withCard