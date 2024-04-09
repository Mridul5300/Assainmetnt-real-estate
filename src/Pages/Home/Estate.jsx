
import PropTypes from 'prop-types';

const Estate = ({ statecard }) => {
     const { estate_title } = statecard
     return (
          <div data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
               <section className=" sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="-space-y-10 -space-x-14 mx-6 ">
		<div className='border p-4 -space-x- shadow-lg w-[550px]'>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-60 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
				</a>
				<div className="flex flex-col flex-1 p-">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
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