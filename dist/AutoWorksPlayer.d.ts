declare module 'autoworks-player' {
    import * as React from 'react';

    export interface PlayerColors {
        accent?: string;
        accentText?: string;
    }

    export type PlayerItems = {
        type?: "photo";
        id?: string;
        thumbnail?: string;
        alt?: string;
        caption?: string;
        controls?: boolean;
        defaultScale?: number;
        hotspots?: any[];
        loading?: boolean;
        max?: number;
        min?: number;
        minimap: string;
        onHotspotClick?: (...args: any[])=>any;
        ratio?: number;
        src: string;
        srcSet?: any;
        step?: number;
        disableZoom?: boolean;
        priorityLoading?: boolean;
    } | {
        type?: "exterior";
        id?: string;
        thumbnail?: string;
        caption?: string;
        alt?: string;
        hotspotDebug?: boolean;
        images?: {
            src: string;
            srcSet?: any;
            hotspots?: any[];
        }[];
        inactive?: boolean;
        initialIndex?: number;
        onHotspotClick?: (...args: any[])=>any;
        ratio?: number;
        reverseDirection?: boolean;
        scroll?: boolean;
    } | {
        type?: "interior";
        id?: string;
        thumbnail?: string;
        caption?: string;
        alt?: string;
        controls?: boolean;
        hotspotDebug?: boolean;
        hotspots?: any[];
        inactive?: boolean;
        onHotspotClick?: (...args: any[])=>any;
        poster: string;
        ratio?: number;
        src: string;
        mouseZoom?: boolean;
        minHfov?: number;
        maxHfov?: number;
        hfov?: number;
        pitch?: number;
        yaw?: number;
    } | {
        type?: "video";
        id?: string;
        thumbnail?: string;
        caption?: string;
        alt?: string;
        aspectRatio?: number;
        autoplay?: boolean;
        disabled?: boolean;
        inverse?: boolean;
        onProgress?: (...args: any[])=>any;
        poster: string;
        ratio?: number;
        src: string;
    };

    export interface PlayerProps {
        colors?: PlayerColors;
        containerClass?: string;
        hideBranding?: boolean;
        history?: Object;
        hotspotDebug?: boolean;
        initialIndex?: number;
        infoChildren?: React.ReactNode;
        infoHeading?: string;
        infoHeadingSecondary?: string;
        infoHidden?: boolean;
        infoOnLeft?: boolean;
        infoTags?: string[];
        infoText?: string;
        infoTextSecondary?: string;
        infoHeightMatch?: boolean;
        onNavigation?: (...args: any[])=>any;
        onShowcaseEnter?: (...args: any[])=>any;
        onShowcaseExit?: (...args: any[])=>any;
        onVideoProgress?: (...args: any[])=>any;
        ratio?: number;
        showcaseDescription?: string;
        showcaseHeading?: string;
        splashDuration?: number;
        styles?: string;
        thumbnailRatio?: number;
        watermark?: boolean;
        items: PlayerItems[];
        modalZIndex?: number;
    }

    const Player: React.FC<PlayerProps>;

    export default Player;

}

