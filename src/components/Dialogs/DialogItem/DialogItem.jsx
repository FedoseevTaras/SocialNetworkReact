import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "dialogs" + props.id
    return (<div className="items">
            <NavLink to={path}><img width="20px" height='20px' src="https://prikolnye-kartinki.ru/img/picture/Dec/26/da0427eaeb205630073a623f37887ee4/1.jpg" />
                {props.name}</NavLink>
        </div>
    )
}

export default DialogItem