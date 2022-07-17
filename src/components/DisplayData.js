export default function DisplayData(props)
{
    return <div>
       <h2>FirstName :{props.firstname}</h2>
       <h2>LastName  :{props.lastname}</h2>
       <h6>Subscribed?? : {props.subscribed}</h6>
    </div>
}