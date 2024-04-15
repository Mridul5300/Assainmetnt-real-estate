
import PropTypes from 'prop-types';

const ServiceDetail =({servicecard}) => {

     return (
          <div>
<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
  <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-full h-72 dark:bg-gray-500" />
  <div className="mt-6 mb-2">
    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
    <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
  </div>
  <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>

          </div>
     );
};

ServiceDetail.propTypes = {
     servicecard : PropTypes.object
};

export default ServiceDetail;