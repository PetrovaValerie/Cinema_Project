// declare module "*.jpg";
// declare module "*.svg";

declare module "*.svg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}