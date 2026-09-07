import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable"
import {InertiaPlugin} from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin)

export function useDraggableCards(containerSelector: string, targetSelector: string){
    useEffect(() => {
        const instances = Draggable.create(targetSelector, {
            bounds: containerSelector,
            inertia: true,
        })
        return () => instances.forEach(instance => instance.kill())
    }, [containerSelector, targetSelector])
}