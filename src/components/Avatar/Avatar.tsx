import Image from 'next/image'

type AvatarSize = 'sm' | 'md' | 'lg';
type Props = {
  image?: string | null
  size?: AvatarSize;
  highlight?: boolean
}

export default function Avatar({
  image,
  size = 'md',
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(size)}`}
        src={image ?? undefined}
        alt="user profile"
      />
    </div>
  )
}

function getContainerSize(size: AvatarSize): string {
  switch(size) {
    case 'sm': return 'w-9 h-9';
    case 'md' : return 'w-11 h-11';
    case 'lg' : return 'w-[68px] h-[68px]';
  }
}
function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = 'flex justify-center items-center rounded-full'
  const highlightStyle = highlight
    ? 'p-[0.15rem] bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
    : ''
  const sizeStyle = getContainerSize(size);

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`
}

function getImageSizeStyle(size: AvatarSize): string {
  switch(size) {
    case 'sm': return 'w-[34px] h-[34px] p-[0.1rem]';
    case 'md' : return 'w-[42px] h-[42px] p-[0.1rem]';
    case 'lg' : return 'w-16 h-16 p-[0.2rem]';
  }
}
