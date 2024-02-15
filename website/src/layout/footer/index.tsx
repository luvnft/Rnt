const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="mt-[40px] flex h-[140px] flex-wrap  items-center gap-[10px] border-t-[1px] border-[#383838] p-[10px]">
      <div className="pr-[60px] text-[26px]  font-[700]">SeeU</div>
=======
    <div className="mt-[40px] flex h-[87px] flex-wrap  items-center gap-[10px] border-t-[1px] border-[#383838] p-[10px]">
      <div className="pr-[60px] text-[26px]  font-[700]">$RNT</div>
>>>>>>> b82e095b78c6f7b524e8281ecc8ccdadcfb449bc
      <div className="flex flex-1 gap-[18px] text-[18px] lg:gap-[60px]">
        <span
          onClick={() => {
            window.open('https://twitter.com/rntsat', '_blank')
          }}
          className="cursor-pointer"
        >
          Twitter
        </span>
        <span
          onClick={() => {
            window.open('https://t.me/rntsat', '_blank')
          }}
          className="cursor-pointer"
        >
          Telegram
        </span>
        <span
          onClick={() => {
            window.open(
              'https://luvnft.com',
              '_blank'
            )
          }}
          className="cursor-pointer"
        >
          LUV NFT
        </span>
        {/* <span
          onClick={() => {
            window.open('https://seeuclub.xyz', '_blank')
          }}
          className="cursor-pointer"
        >
          Club
        </span> */}
        <span
          onClick={() => {
            window.open('https://www.linkedin.com/groups/14347080/', '_blank')
          }}
          className="cursor-pointer"
        >
          Linkedin
        </span>
      </div>
      <div>©$RNT 2023</div>
    </div>
  )
}

export default Footer
