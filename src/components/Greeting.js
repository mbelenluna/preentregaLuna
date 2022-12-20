import "./Greeting.css";

const Greeting = ({greeting}) => {
    return <div>
        <h3 className="greeting">{greeting}</h3>
    </div>
}

export default Greeting;