import React,{useState} from "react"
import "./menu.css"

export default function Menu(){
    
    const [coffees, setCoffees] = useState()

    const getCoffees = (temp) =>{
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
        .then(res=>res.json())
        .then(setCoffees)
        .class(alert)
    }

    return(
        <main>
        <article>
        <div className="button-container">
        <button onClick={()=>getCoffees("hot")}>Hot Coffees</button>
        <button onClick={()=>getCoffees("iced")}>Iced Coffees</button>
        </div>

        {!coffees 
        ?   <h2>Welcome to the Baue Café</h2>
        :   <section className="coffee-container">
            {coffees.map(coffee =>(

            <div key= {coffees.id} className="coffee-card">
                <img src={coffee.image}  alt ={coffee.title}/>
                 <h3>{coffee.title}</h3>
                 <p>{coffee.description}</p>
                </div> 
            ))}
            </section>
        }
      </article>

        </main>
    )
}