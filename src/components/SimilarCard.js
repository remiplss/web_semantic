import React, { useState } from 'react';
import cross from "../webapp/cross.png"

function SimilarCard({similar, boolSimilar, setBoolSimilar, name}) {


		return(
		<div className="smart-modal tc bg-light-black dib br3 pa3 ma2 bw2 shadow-5" >
			<div>
                <img src={cross} className="close" onClick={() => setBoolSimilar(false)}/>

                <h1>{name}</h1><br/>
                <h2>Similar Objects:</h2>
                {similar.map( (object, index) =>  
                {
                    return(
                    <div>
                       
                        <p>
                            {object}
                        </p>
                    </div>
                )})}
				
			</div>
		</div>
	);

}

export default SimilarCard;