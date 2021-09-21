declare module 'autoworks-player' {
    import * as React from 'react';

    export interface PlayerColors {
        accent?: string;
        accentText?: string;
    }

    export interface PlayerItems {
        type?: "exterior" | "interior" | "photo" | "video";
    }

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

