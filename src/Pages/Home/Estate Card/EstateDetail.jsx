import { Helmet } from "react-helmet-async";
import { FaBath, FaBed, FaCar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetail = () => {

     const estate = useLoaderData();
     const { id } = useParams();
     const idint = parseInt(id)
     const cards = estate.find(cards => cards.id == idint)
     // console.log(cards);
     const { facilities, status } = cards
     return (
          <div>
               <Helmet>
                    <title>Estate Details
                    </title>
               </Helmet>
               <div className="card lg:card-side bg-base-100 shadow-xl mb-4 mt-2">
                    <div className="relative flex flex-col md:flex-row">
                         <div className="w-full md:w-1/2">
                              <img alt="" className="object-cover w-full h-64 md:h-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none" src={cards.imageURL} />
                              <span className="absolute top-0 right-0 px-3 py-1 bg-red-400 text-white rounded-bl-lg">{status}</span>
                         </div>
                         <div className="card-body p-6 flex flex-col justify-between">
                              <div>
                                   <h2 className="card-title text-3xl mb-4">{cards.segment_name}</h2>
                                   <h2 className="card-title text-3xl mb-2">{cards.estate_title}</h2>
                                   <p className="text-lg mb-4">{cards.description}</p>
                                   <div className="flex justify-between mb-4">
                                        <div className="flex items-center">
                                             <FaBed className="text-xl mr-2" /> <span className="mr-4">{cards.bedrooms}</span>
                                             <FaBath className="text-xl mr-2" /> <span className="mr-4">{cards.bathrooms}</span>
                                             <FaCar className="text-xl mr-2" /> <span>{cards.car_spaces}</span>
                                        </div>
                                        <div>
                                             <span className="bg-green-300 rounded-md p-2 text-sm font-semibold mr-2">Price: {cards.price}</span>
                                             <span className="bg-green-300 rounded-md p-2 text-sm font-semibold">Area: {cards.area}</span>
                                        </div>
                                   </div>
                                   <ul className="mb-4">
                                        {facilities.map((facility, idx) => <li key={idx}>{facility}</li>)}
                                   </ul>
                              </div>
                              <h2 className="text-lg font-semibold">Location: {cards.location}</h2>
                         </div>
                    </div>
               </div>
          </div>
     )
};

export default EstateDetail; 