export interface IAddress {
    country: string;
    state: string;
    city: string;
    address_line1: string;
    address_line2?: string;
    postal_zip: string;
    created_at: Date;
    updated_at?: Date;
}
