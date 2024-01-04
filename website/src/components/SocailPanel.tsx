import { ShareAltOutlined } from '@ant-design/icons';
import { TelegramIcon, TwitterIcon } from 'components/icon';
import { onShareX } from 'utils/social';

export function SoialPanel() {
  const handleShare = async () => {
    const shortUrl = `$RNT community official website: %0A https://rnt.luvnft.com %0A👆👆👆%0A %23brc20 %23rentsat`;
    onShareX(shortUrl);
  };
  return (
    <div className="flex flex-row items-center gap-4 ">
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#F7931A]"
        onClick={() => {
          handleShare();
        }}
      >
        <ShareAltOutlined
          style={{
            fontSize: '24px',
            background: 'transparent',
          }}
          className="!flex cursor-pointer items-center justify-center "
        />
      </div>
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#F7931A]"
        onClick={() => {
          window.open('https://twitter.com/rntsat');
        }}
      >
        <TwitterIcon
          style={{
            fontSize: '24px',
            background: 'transparent',
          }}
          className="!flex cursor-pointer items-center justify-center "
        />
      </div>
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#F7931A]"
        onClick={() => {
          window.open('https://t.me/+cS4JbYm-Fdc4MTAx');
        }}
      >
        <TelegramIcon
          style={{
            fontSize: '24px',
            background: 'transparent',
          }}
          width="24px"
          height="24px"
        />
      </div>
    </div>
  );
}
