import React from "react";

export default function RefsArray() {
    const table = React.useRef()
    const tr = React.useRef([])

    const data = [
        ['JavaScript' , 150],
        ['React' , 150],
        ['React Native' , 180],
        ['Node.js' , 200],
        ['VS Code' , 120]
    ]

    const onClickButton = (i) => {
        const index = tr.current[i].rowindex
        table.current.deleteRow(index)
    }

    const onMouseOverRow  = (i) => {
        tr.current[i].style.backgroundColor = 'yellow'
    }

    const onMouseOutRow = (i) => {
        tr.current[i].style.backgroundColor = 'white'
    }

    const tableStyles = {margin : 'auto' , marginTop : 30}

    return(
        <table ref = {table} border= "1" cellPadding={5} style={tableStyles}>
            <tr><th>Product</th><th>Price</th><th>Delete</th></tr>
            {
                data.map((item , i) => {
                    return(
                        <tr ref = {el => tr.current[i] = el}
                            onMouseOver={() => onMouseOverRow(i)}
                            onMouseOut={() => onMouseOutRow(i)}
                        >
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td><button onClick={() => onClickButton(i)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    )
}