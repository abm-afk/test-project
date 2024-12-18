export interface AppDetails {
    appId: string;
    name: string;
    lastClassification: string;
    category: string;
    connector: Connector;
    users: User[];
}
interface Connector {
    name: string;
    logo: string;
}

interface User {
    id: string;
    name: string;
    pic: string;
}
