export interface IPayment {
    id_user: string;
    payment: string;
    no_account: string;
    provider: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}