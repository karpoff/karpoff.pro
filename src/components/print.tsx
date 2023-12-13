'use client';

import { FC, MouseEvent } from "react";

export const Print: FC<{ children: string; className?: string}> = ({ children, className }) => {
    const onClick = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        window.print();
    };

    return (
      <a href="#" className={className} onClick={onClick}>{children}</a>
    );
};