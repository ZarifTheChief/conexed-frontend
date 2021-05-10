import React from "react"

interface Props {
    todo: ToDo
}

const CompletedItem: React.FC<Props> = ({ todo }) => {
    return <li>
        <label>
            { todo.text }
        </label>
    </li>
}

export default CompletedItem;