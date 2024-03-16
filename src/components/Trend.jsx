import { products } from "../constants";

function Trend() {
     return (
          <section className="flex flex-col lg:flex-row gap-5 md:gap-0 justify-between mt-5 md:mt-10 mb-4">
               {products.map(({ id, icon, alt, number, head, body }) => {
                    return (
                         <div key={id} className="flex flex-row gap-5">
                              <img src={icon} alt={alt} loading="lazy" className="h-[150px]" />
                              <div className="flex flex-col gap-2 mt-2">
                                   <h1 className="text-3xl font-bold text-Grayish-blue">{number}</h1>
                                   <h2 className="text-Very-dark-blue font-semibold hover:text-Soft-red cursor-pointer lg:text-xs">{head}</h2>
                                   <p className="text-xs lg:text-xs font-light text-Dark-grayish-blue">{body}</p>
                              </div>
                         </div>
                    );
               })}
          </section>
     );
}
export default Trend;