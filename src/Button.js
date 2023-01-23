function Button({children ,onClick}){
    return(
        <div className="bdne">
            <button className="btn" type="submit" onClick={onClick} >{children}</button>
        </div>
    );
}
export default Button;