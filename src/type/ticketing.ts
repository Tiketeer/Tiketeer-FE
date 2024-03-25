export type Ticketing = {
    ticketingId: string;
    title: string;
    location: string;
    eventTime: string;
    saleStart: string;
    saleEnd: string;
    remainedStock: number;
    createdAt: string;
    category: string;
    runningMinutes: number;
    price: number;
};

export type TicketingDetail = Ticketing & {
    description: string;
};
