import { useEffect, useRef } from 'react'

export function TwitterList() {
  const xc = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (xc.current) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      xc.current.appendChild(script)
    }
  }, [])

  return (
<<<<<<< HEAD
    <div className="flex-1">
      <h1 className="mb-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        Twitter
      </h1>
      <div className="frc-center border-gray-100 bg-[#1d1e1f]">
        <div ref={xc} className="w-full max-w-[1280px]">
          <a
            className="twitter-timeline"
            data-lang="zh-cn"
            data-height="1000"
            data-theme="dark"
            href="https://twitter.com/seeu_brc20?ref_src=twsrc%5Etfw"
          >
            Loading Tweets...
          </a>
        </div>
=======
    <div>
      <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        X
      </h1>
      <div ref={xc} className="">
        <a
          className="twitter-timeline"
          data-lang="en"
          data-height="1000"
          data-theme="dark"
          href="https://twitter.com/rntsat?ref_src=twsrc%5Etfw"
        >
          Loading Tweets...
        </a>
>>>>>>> b82e095b78c6f7b524e8281ecc8ccdadcfb449bc
      </div>
    </div>
  )
}

export function TelegramList() {
  const tc = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tc.current) {
<<<<<<< HEAD
      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-widget.js?22'
      script.setAttribute('data-telegram-discussion', 'seeubtc')
      script.setAttribute('data-comments-limit', '20')
      script.setAttribute('data-dark', '1')
      script.setAttribute('data-height', '1000')
      tc.current.appendChild(script)
=======
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.setAttribute('data-telegram-discussion', 'rntsat');
      script.setAttribute('data-comments-limit', '20');
      script.setAttribute('data-dark', '1');
      script.setAttribute('data-height', '1000');
      tc.current.appendChild(script);
>>>>>>> b82e095b78c6f7b524e8281ecc8ccdadcfb449bc
    }
  }, []);

  return (
    <div>
      <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        Telegram
      </h1>
<<<<<<< HEAD
      <div ref={tc} className="">
        <a href="https://t.me/seeubtc"></a>
      </div>
=======
      <div ref={tc}></div>
      <a href="https://t.me/rntsat">Join our RNTal Telegram market</a>
>>>>>>> b82e095b78c6f7b524e8281ecc8ccdadcfb449bc
    </div>
  );
}