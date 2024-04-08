import Image from "next/image";

type Props = {
  image?: string | null;
  size?: 'sm' | 'md';
  highlight?: boolean;
}

export default function Avatar({image, size = 'md', highlight = false}: Props ) {
  
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`bg-white rounded-full ${getImageSizeStyle(size)}`} src={image ?? undefined} alt='user profile' />
    </div>
  );
}
function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = 'flex justify-center items-center rounded-full';
  const highlightStyle = highlight ? 'p-[0.15rem] bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300' : '';
  const sizeStyle = size === 'sm' ? 'w-9 h-9' : 'w-[68px] h-[68px]';

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === 'sm' ? 'w-[34px] h-[34px] p-[0.1rem]' : 'w-16 h-16 p-[0.2rem]';
}