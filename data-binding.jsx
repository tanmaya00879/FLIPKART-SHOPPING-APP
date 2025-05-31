import { useEffect, useState } from "react";


export function DataBinding(){
     
      const [product, setProduct] = useState({title:"", price:0, rating:{ratings:0, rate:0, reviews:0}, offers:[], image:''});
      
      function LoadData(){

            var http = new XMLHttpRequest();

            http.open("get", "product.json", true);
            http.send();

            http.onreadystatechange = function(){

                if(http.readyState===4){
                     setProduct(JSON.parse(http.responseText));
                }

            }

      }
    
      useEffect(()=>{
          LoadData();
      },[])

     return(
        <div className="container-fluid">
            <div className="mt-4 row">
               <div className="col-4">
                 <img width="100%" src={product.image} height="450" />
               </div>
               <div className="col-8">
                    <div className="fs-4">{product.title}</div>
                    <div className="mt-2">
                       <span className="badge bg-success"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                       <span className="text-secondary fw-bold"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-4 fw-bold fs-1">
                         {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}
                    </div>
                    <div className="mt-4">
                        <h5>Available Offers</h5> 
                        <ul className="list-unstyled">
                          {
                              product.offers.map(offer=> <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                          }
                        </ul>
                    </div>
               </div>
            </div>
        </div>
     )
}