import { randomOffset, randomRotation } from '../utils';
interface ToolSticker {
    x: number,
    y: number,
    tools: string[]
}

const ToolSticker = ({ x, y,  tools }: ToolSticker) => {
    return (
        <div
            className="fixed bg-green-300 p-3 shadow-md z-20"
            style={{
                top: `calc(50% + ${y - 10 }%)`,
                right: `calc(50% - ${x - 5 }%)`,
                // transform: `rotate(${randomRotation()}deg)`,
                width: '150px'
            }}
        >
            <div className="text-sm font-semibold mb-1">ІНСТРУМЕНТИ:</div>
            <div className="text-sm">{tools.join(', ')}</div>
            <div className="absolute -top-3 left-[140px]">
                <div className="w-6 h-6 bg-blue-500 rounded-full shadow"></div>
            </div>
        </div>
    )
}

export default ToolSticker
