module Extensions {
	export class  Order{
		Id: number;
		OrderDate: Date;
		UserName: string;
		FirstName: string;
		LastName: string;
		Address: string;
		City: string;
		State: string;
		PostalCode: string;
		Email: string;
		Total: number;
		PaymentTransactionId: string;
		HasBeenShipped: boolean;
		OrderDetails: Array<Extensions.OrderDetail>;
	}
}