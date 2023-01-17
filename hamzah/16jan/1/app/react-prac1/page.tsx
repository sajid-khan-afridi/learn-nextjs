import Image from "next/image"

function Button() {
  return (
    <button className="btn1">new button</button>
  )
}

// Conditional rendering 
function Admin(){
    return(
        <div>Admin login</div>
    )
}
function Login(){
    return(
        <div>login again </div>
    )
}

let content:any;
let condition=true;
if(condition){
    content=<Admin />
}else {
    content=<Login />
}

// Rendering lists
const products=[
    {pname:"shoe",id:1,isFruit: false},
    {pname:"belt",id:2,isFruit: true}
]
const listItem=products.map(prod=><li key={prod.id} style={{
    color: prod.isFruit ? 'magenta' : 'darkgreen'
  }}>{prod.pname}</li>)

//   Responding to events
// function handleClick() {
//     alert('You clicked me!');
//   }

export default function ReactComponents() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };
  return (
    <>
    <br />
    <Button />
    
    <Image src="/images/ste.jpg" height={100} width={100} alt="missing img" />
    
    <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

{/* Conditional rendering */}
<div>{content}</div>

{/* Rendering lists */}
<ul>{listItem}</ul>

{/* Responding to events */}
{/* <button onClick={handleClick}>
      Click me
    </button> */}
    </>
  )
}
