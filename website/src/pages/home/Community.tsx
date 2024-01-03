<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Twitter and Telegram Widgets</title>
  <script src="https://platform.twitter.com/widgets.js" async charset="utf-8"></script>
  <script src="https://telegram.org/js/telegram-widget.js?22" async></script>
</head>
<body>
  <div>
    <TwitterList />
    <TelegramList />
  </div>

  <script>
    function TwitterList() {
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
        <div>
          <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
            Twitter
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
          </div>
        </div>
      )
    }

    function TelegramList() {
      const tc = useRef<HTMLDivElement>(null)

      useEffect(() => {
        if (tc.current) {
          const script = document.createElement('script')
          script.src = 'https://telegram.org/js/telegram-widget.js?22'
          script.setAttribute('data-telegram-post', 'rntsat')
          script.setAttribute('data-comments-limit', '20')
          script.setAttribute('data-dark', '1')
          script.setAttribute('data-height', '1000')
          tc.current.appendChild(script)
        }
      }, [])

      return (
        <div>
          <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
            Telegram
          </h1>
          <div ref={tc} className="">
            <a href="https://t.me/rntsat"></a>
          </div>
        </div>
      )
    }
  </script>
</body>
</html>
