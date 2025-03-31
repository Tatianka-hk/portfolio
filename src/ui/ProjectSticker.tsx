import {Calendar, CloudSun, FileText } from 'lucide-react';
import { randomOffset, randomRotation } from '../utils';
const getProjectIcon = (name:string) => {
    if (name === 'Календар') return <Calendar className="text-red-500" />;
    if (name === 'Weather App') return <CloudSun className="text-blue-500" />;
    if (name === 'Note Manager') return <FileText className="text-green-500" />;
    return null;
};
interface ProjectSticker {
    x: number,
    y: number,
    id: number,
    name: string
}

const ProjectSticker = ({ id, name, x, y }: ProjectSticker) => {
    return (<div
        className="fixed bg-white p-1 shadow-lg z-20"
        style={{
            top: `calc(50% + ${y}%)`,
            left: `calc(50% + ${x}%)`,
            // transform: `rotate(${randomRotation()}deg)`,
            width: '160px'
        }}
    >
        <div className="border border-gray-300 p-2">
            <div className="flex items-center justify-center mb-2 bg-gray-200 p-4">
                {getProjectIcon(name)}
            </div>
            <div className="font-bold text-center text-base pb-1 border-b border-gray-300">{name}</div>
            <div className="text-xs text-center mt-1">ПРОЕКТ #{id}</div>
        </div>
        <div className="absolute -top-3 -left-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full shadow"></div>
        </div>
    </div>
    )
}
export default ProjectSticker
