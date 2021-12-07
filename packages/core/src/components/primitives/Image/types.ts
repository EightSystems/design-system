export type LoaderProps = {
    src: string;
    width: number;
    quality: number;
};

export type WebImageProps = {
    src: string;
    alt?: string;

    /** Width of the image, prevents layout-shifting, required unless layout fill */
    width?: number;
    /** Height of the image, prevents layout-shifting, required unless layout fill */
    height?: number;

    /** Custom URL generator */
    loader?: ({ src, width, quality }: LoaderProps) => string;

    /**
     * - **intrinsic**: Scale down to fit width of container, up to image size
     * - **fixed**: Sized to `width` and `height` exactly
     * - **responsive**: Scale to fit width of container
     * - **fill**: Grow in both X and Y axes to fill container
     */
    layout?: "intrinsic" | "fixed" | "responsive" | "fill";

    /** Placeholder mode to use while loading the image, when set to blur, you need to provide the `blurDataURL` as a base64 data encoded url */
    placeholder?: "empty" | "blur";
    blurDataURL?: string;

    unoptimized?: boolean;
    quality?: number;

    style?: any;
    className?: string;
};
