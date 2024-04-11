import { useLoaderData, useParams } from "react-router-dom";

const EstateDetail = () => {

     const estate = useLoaderData();
     const { id } = useParams();
     const idint = parseInt(id)
     const cards = estate.find(cards => cards.id == idint)
     console.log(cards);
     return (
          <div>
               <div className="card lg:card-side  bg-base-100 shadow-xl mb-4 mt-2">
                    <figure className="w-80"><img src={cards.imageURL} alt="" /></figure>
                    <div className="card-body">
                         <h2 className="card-title text-3xl">{cards.segment_name}</h2>
                         <p>{cards.description}</p>
                         <p>Price: {cards.price}</p>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Order</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default EstateDetail;