
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({ statecard }) => {
     const { estate_title } = statecard
     return (
          <div data-aos="fade-up"
               data-aos-anchor-placement="center-bottom">
               <section className=" mt-5 mb-6 dark:bg-gray-100 dark:text-gray-800">
                    <div className="  ">
                         <div className='border p-4  shadow-2xl '>
                              <article className="flex flex-col dark:bg-gray-50">
                                   <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                        <img alt="" className="object-cover w-full h-60 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                                   </a>
                                   <div className="flex flex-col flex-1">
                                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                             <span>June 1, 2020</span>
                                             <span>2.1K views</span>
                                        </div>
                                   </div>
                                   <div className='mt-5 mb-2'>
                                        <Link href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                             <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                             <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                             <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                             <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                             <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                             <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Button Text</span>
                                        </Link>
                                   </div>
                              </article>


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