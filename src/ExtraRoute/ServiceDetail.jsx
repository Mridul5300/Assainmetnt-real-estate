
import PropTypes from 'prop-types';

const ServiceDetail =({servicecard}) => {
     const{name,description}=servicecard
     return (
          <div>
<div className="max-w-xs p-6 mt-4 mb-3 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
  <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-full h-64 dark:bg-gray-500" />
  <div className="mt-6 mb-2">
    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
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