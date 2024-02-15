import './index.css'

const Roadmap = () => (
  <div className="roadmap grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 xl:grid-cols-3">
    <div className="col-span-1 mt-12">
      <div className="content">
        <p className="leading-[1.25rem]">
          $RNT was created as a solution to address the need for affordable housing 
          by stabilizing rental fees, offering landlords the ability to accept Bitcoin 
          as a form of payment for rentals.
        </p>
        <p>
          Our mission is to create a community of landlords that have a heart and want
          to contribute to the solution and not be a part of the problem.
        </p>
        <p>
          We educate the real estate industry on how to create a crypto wallet and send 
          a lightning invoice to collect $RNT without any traditional fees. 
        </p>
      </div>
      <h1 className="mt-4 h-[48px] w-[360px]">What</h1>
    </div>
    <div className="col-span-1 mt-12">
      <div className="content">
        <p>
          If we understand that success in all Layer N projects depends on
          ecosystem expansion and community consensus, we will comprehend the
          following:
        </p>
        <ol className="leading-[1.25rem]">
          <li className="mb-[10px]">
            1.The essence of the BTC Layer2 War lies in burning funds,
            attracting talent, and creating assets
          </li>
          <li>
            2.Diverse technical paths in BTC Layer2, yet the core revolves
            around community and ecosystem
          </li>
        </ol>
      </div>
      <h1 className="mt-4 h-[48px] w-[360px]">Why</h1>
    </div>
    <div className="col-span-1 mt-12">
      <div className="content">
        <ol className="mb-0">
          <li className="mb-[10px]">
            <h3>1.Technical implementation</h3>
            <p>
              We focus on longevity rather than speed. we plan to develop chain
              nodes,develop browsers,and applications such as DeFi and NFT.
            </p>
          </li>
          <li className="mb-[10px]">
            <h3>2.Economic model</h3>
            <p>
              We stake $RNT to become a BitFair POS block producer. The block
              reward is the L2 native token BitFair, and the GAS fee is $RNT.
            </p>
          </li>
          <li>
            <h3>3.Ecosystem development</h3>
            <p className="mb-0">We focus on community rather than money.</p>
          </li>
        </ol>
      </div>
      <h1 className="mt-4 h-[48px] w-[360px]">How</h1>
    </div>
  </div>
)

export default Roadmap
