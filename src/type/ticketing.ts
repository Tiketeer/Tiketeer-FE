export interface ticketing {
    imgUrl: string;
    eventTime: string;
    title: string;
    price: number;
    location: string;
}

export interface ticketingDetail extends ticketing {
    description: string;
    runningTime: number;
}
