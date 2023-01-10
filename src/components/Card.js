import React, { useState } from 'react';
import SimilarCard from "./SimilarCard"
import AbeewayImage from "../images/AbeewayImage.png"

function Card({component}) {

	const [similar, setSimilar] = useState([])
	const [boolSimiar, setBoolSimilar] = useState(false)





	 async function handleClick() {
    
		// Send data to the backend via POST
		fetch(`http://localhost:5000/similar/name=${component.name}`, { 
	
		  method: 'POST', 
		  mode: 'cors' 
		})
		.then(result => result.json())
        .then(data => {
			setSimilar(data)
        });

		if(boolSimiar === true)
		{
			setBoolSimilar(false)
		}
		else{
			setBoolSimilar(true)
		}
		
	  }

console.log(similar)
	return(<div>
		<div className="tc bg-light-black dib br3 pa3 ma2 grow bw2 shadow-5" onClick={() =>handleClick()}>
			<img className="br-100 h3 w3 dib" alt={component.name} src={process.env.PUBLIC_URL+"/assets/img/"+component.image+	`.png`} />
			<div>
				<h2>{component.name}</h2>
				<p >{component.link}</p>
				<p>{component.price}€</p>
			</div>
		</div>
		{boolSimiar === true && <SimilarCard similar={Object.keys(similar).slice(1,6)} name={component.name}boolSimiar={boolSimiar} setBoolSimilar={setBoolSimilar}/>}
		</div>
	);

}

export default Card;