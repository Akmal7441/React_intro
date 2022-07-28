function Car(props) {
    const carStyle = {boxShadow:'0 0 5px #ccc',display:'inline-block', padding:'15px',margin:'5px',textAlign:'center'}
    return (
        <div className="Car" style={carStyle}>
            <h1>
                {props.name}
            </h1>

            <p>

                {props.year}
            </p>

            <span>id <strong>{Math.floor(Math.random()*10000000)}</strong></span>
        </div>
    )
}



export default Car