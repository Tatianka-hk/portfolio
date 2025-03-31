import { randomOffset, randomRotation } from '../utils';
interface NewspaperPartProps {
  x: number,
  y: number,
  description: string
}


const NewspaperPart = ({ x, y, description }: NewspaperPartProps) => {
  return (<div
    className="fixed bg-white p-2 shadow-md z-20"
    style={{
      top: `calc(50% + ${y + 5 }%)`,
      right: `calc( 50% - ${x - 4 }%)`,
      // transform: `rotate(${randomRotation()}deg)`,
      width: '180px'
    }}
  >
    <div className="border-b-2 border-gray-900 mb-1 pb-1">
      <div className="text-lg font-bold text-center uppercase">ОПИС</div>
    </div>
    <div className="text-xs leading-tight">{description}</div>
    <div className="absolute -top-3 left-[170px]">
      <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
    </div>
  </div>)
}

export default NewspaperPart;