import { useEffect, useState } from "react";
import ServiceDetail from "./ServiceDetail";
import { Helmet } from "react-helmet-async";

const Servicess = () => {
     const [services, setServices] = useState([])
     useEffect( () => {
          fetch('Services.json')
          .then(resp => resp.json())
          .then(data => setServices(data))

     },[])
     return (
          <div>
                 <Helmet>
        <title>service
        </title>
      </Helmet>
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {

     services.map(servicecard => <ServiceDetail key={servicecard.id} servicecard={servicecard}></ServiceDetail>)
          
          }
        </div>
          </div>
     );
};

export default Servicess;
