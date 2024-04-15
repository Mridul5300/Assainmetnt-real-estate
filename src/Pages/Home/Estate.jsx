
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({ statecard }) => {
     const { id, estate_title, imageURL, price, status, area, facilities } = statecard
     return (
          <div data-aos="fade-up"
               data-aos-anchor-placement="center-bottom">
                 <section className="mt-5 mb-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="border p-4 shadow-xl rounded-lg">
        <div className="relative">
          <img alt="" className="object-cover w-full h-60 rounded-t-lg" src={imageURL} />
          <span className="absolute top-0 right-0 px-3 py-1 bg-red-400 text-white rounded-bl-lg"> {status} </span>
        </div>
        <div className="flex flex-col justify-between h-full py-4">
          <h3 className="text-lg font-semibold mb-2">{estate_title}</h3>
          <div className="flex flex-wrap justify-between mb-4">
            <span className="bg-green-300 rounded-md p-2 flex items-center"><strong>Price:</strong> {price}</span>
            <span className="bg-green-300 rounded-md p-2 flex items-center"><strong>Area:</strong> {area}</span>
          </div>
     
               <hr />
          

          <ul className="mb-4">
            {facilities.map((facility, idx) => <li key={idx}>{facility}</li>)}
          </ul>
          <div className='mt-auto'>
            <Link to={`/estate/${id}`} className="block w-full px-5 py-3 text-center text-gray-100 bg-gray-700 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </section>
          </div>



     );
};
Estate.propTypes = {
     statecard: PropTypes.object
}
export default Estate;