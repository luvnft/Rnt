import rnt from 'assets/images/rnt.png'

const About = () => (
  <div className="fcc-center w-full gap-[36px] overflow-auto px-8 pb-10 text-[16px] md:px-20 md:text-[24px] lg:mt-[60px]">
    <div className="mb-[64px]">
      <div className="fcc-start md:frc-center mb-[40px]">
        <h1 className="mr-4 text-[40px]">What is</h1>
        <img src={rnt} alt="rnt" />
      </div>
      <p className="mb-[40px]">
        {`$RNT is the premier rental coin of Web5. Our slogan advocates renting 
        with a greater purpose, aiming to address the substantial rental housing 
        crisis in America. Fifty percent of RNTal proceeds are dedicated to 
        constructing 3D ADU properties that will accept $RNT.`}
      </p>
    </div>
    <div className="fcc-start mb-[64px] w-full md:items-start">
      <div className="fcc-start md:frc-center mb-[40px]">
        <img src={rnt} alt="rnt" className="mb-4 2xl:mr-10" />
        <h2>The first inscription aimed to solve the housing crisis.</h2>
      </div>
      <div className="fcc-start 2xl:frc-center mb-[40px] ml-0 2xl:ml-20">
        <img src={rnt} alt="rnt" className="mb-4 2xl:mr-10" />
        <h2>The first inscription for bartering services for rent.</h2>
      </div>
      <div className="fcc-start 2xl:frc-center mb-[40px] ml-0 2xl:ml-40">
        <img src={rnt} alt="rnt" className="mb-4 2xl:mr-10" />
        <h2>The first inscription for bartering products for rent.</h2>
      </div>
    </div>
  </div>
)

export default About
