import { randomOffset } from '../utils';
 type ThreadProps = {
     x: number, 
     y: number,
     yOffset: number, 
     xOffset: number 
} 

const Thread = ({ x, y, yOffset, xOffset }: ThreadProps) => { 
    return (
    <svg className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
        <line 
            x1={`calc(50% + ${x }%)`}
            y1={`calc(50% + ${y }%)`}
            x2={`calc(50% + ${x + xOffset }%)`} 
            y2={`calc(50% + ${y + yOffset }%)`}
            stroke="#DC2626"
            strokeWidth="2"
    />
</svg>
)}
export default Thread;
