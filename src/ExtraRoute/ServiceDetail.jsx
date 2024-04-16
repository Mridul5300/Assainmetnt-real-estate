
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const ServiceDetail =({servicecard}) => {
     const{name,description,image}=servicecard
     return (
          <div>
                 <Helmet>
        <title>Home
        </title>
      </Helmet>
<div className="max-w-xs p-6 mt-4 mb-3 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
  <img src={ image} alt="" className="object-cover object-center w-full rounded-full h-64 dark:bg-gray-500" />
  <div className="mt-6 mb-2">
    
    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
  </div>
  <p className="text-gray-800">{description}</p>
</div>

          </div>
     );
};

ServiceDetail.propTypes = {
     servicecard : PropTypes.object
};

export default ServiceDetail;