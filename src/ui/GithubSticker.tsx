import { GitBranch } from 'lucide-react';
import { randomOffset, randomRotation } from '../utils';
interface GithubStickerProps {
    x: number,
    y: number,
    github: string
}

const GithubSticker = ({ x, y, github }: GithubStickerProps) => {
    return (
        <div
            className="fixed bg-yellow-200 p-3 shadow-md z-20"
            style={{
                top: `calc(50% + ${y - 15}%)`,
                left: `calc(50% + ${x  }%)`,
                // transform: `rotate(${randomRotation()}deg)`,
                width: '150px'
            }}
        >
            <div className="flex items-center">
                <GitBranch className="text-gray-800 w-4 h-4" />
                <div className="text-sm font-semibold ml-1">GitHub?</div>
            </div>
            <div className="text-xs mt-1">{github}</div>
            <div className="absolute -top-3 -left-3">
                <div className="w-6 h-6 bg-red-500 rounded-full shadow"></div>
            </div>
        </div>
    )
}

export default GithubSticker