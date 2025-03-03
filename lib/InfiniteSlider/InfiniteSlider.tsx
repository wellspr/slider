import "./infinite-slider.scss";

import { useEffect, useRef } from "react";

export const InfiniteSlider = ({
    arr,
    className,
    transitionDelay,
    interval,
    translationStep,
}: {
    arr: React.JSX.Element[];
    className?: string;
    transitionDelay?: number;
    interval?: number;
    translationStep: string;
}) => {

    const wagon = useRef<HTMLDivElement>(null);
    const arrRef = useRef<React.JSX.Element[]>(arr);
    const transitionRef = useRef<number>(transitionDelay || 1000);
    const intervalRef = useRef<number>(interval || 2000);
    const translationRef = useRef<string>(translationStep);

    useEffect(() => {

        const id = setInterval(() => {
            const wagonCurrent = wagon.current;

            if (wagonCurrent) {
                wagonCurrent.style.transform = `translateX(-${translationRef.current})`;
                wagonCurrent.style.transition = `all ${transitionRef.current}ms ease-in-out`;

                setTimeout(() => {
                    const head = wagonCurrent.firstChild as Node;
                    wagonCurrent.removeChild(head);
                    wagonCurrent.style.transform = "translateX(0)";
                    wagonCurrent.style.transition = "unset";
                    wagonCurrent.appendChild(head);
                }, transitionRef.current);
            }
        }, intervalRef.current);

        return () => {
            clearInterval(id);
        }

    }, []);

    return (
        <div className={`infinite-slider ${className}`}>
            <div className="infinite-slider__wagon" ref={wagon}>
                {arrRef.current}
            </div>
        </div>
    );
};