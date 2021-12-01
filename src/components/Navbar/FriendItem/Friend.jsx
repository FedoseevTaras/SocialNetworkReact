import s from "./Friend.module.css"


const Friend = (props) => {

    return (<div>
            <img width="20px" height="20px"
                 src="https://prikolnye-kartinki.ru/img/picture/Dec/26/da0427eaeb205630073a623f37887ee4/1.jpg"/>
            {props.name}
        </div>

    )
}

export default Friend