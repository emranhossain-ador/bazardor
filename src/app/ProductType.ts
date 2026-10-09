
export interface MarketType {
    market: string;
    division: string;
    min: number;
    max: number;
}

export interface PriceChangeType {
    dir: "up" | "down";
    pct: number;
}

export interface ProductType {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: PriceChangeType;
    markets: MarketType[];
}

