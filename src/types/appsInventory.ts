export interface AppsInventory {
    appId: string;
    name: string;
    category: string;
    connector: string;
    logos: Logo;
}

export interface Logo {
    app: string;
    connector: string;
}