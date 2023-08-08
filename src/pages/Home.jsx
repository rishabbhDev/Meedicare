import React from "react";

const Home = () => {
  return (
    <>
      {/* ==========hero Section========== */}

      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* =======Hero Content===== */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patient live a healthy, longer life.
                  </h1>
                  <p>
                    Quickobook is an online portal for all your healthcare
                    needs. Our team of medical experts is there for you, from
                    finding the right doctors and hospitals to booking
                    appointments and giving any kind of medical help in between.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
  
};

export default Home
