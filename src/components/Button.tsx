type TypeButton = {
    name: string;
    onClickHandler: ()=> void;
    disabledButton: boolean;
}

const Button = ({name, onClickHandler, disabledButton}: TypeButton) => {
    return <button onClick={onClickHandler} disabled={disabledButton}>{name}</button>
}

export default Button