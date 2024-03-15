export interface User {
  firstname: string;
  lastname: string;
  jobPosition?: string;
}

export interface DateFormat {
  day: string;
  month: string;
  year: string;
  fullDate: Date;
}

export interface Contract {
  value: number;
  number: string;
  advancePercentage: number;
  startDate: Date;
  endDate: Date;
  retentionValue: number;
  retentionType: string;
  subscriptionDate: DateFormat;
  object: string;
  paymentMode: string;
  penalty: number;
  term: number;
  retentionDeadline: number;
  nature: string;
}

export interface Institution {
  nombre: string;
  city: string;
  legalRepresentative: User;
}

export interface Contractor {
  name: string;
  legalRepresentative: string;
  legalRepresentativePosition: string;
  governmentId: string;
}

export interface Department {
  nombre: string;
}

export interface Payment {
  billNumber: string;
  paymentRealValue: number;
  paymentPlannedValue: number;
  paymentRealDate: Date;
  retentionValue: number;
  penalties: Penalty[];
  totalPaymentPenaltiesValue: number;
  delivery: Delivery[];
}

export interface Penalty {
  value: number
}

export interface Delivery {
  deliveryNumber: string;
  deliveryDetail: string;
  deliveryPlannedDate: Date;
  deliveryRealDate: DateFormat;
  deliverables: Deliverable[];
  delayValue: number;
}

export interface Deliverable {
  detail: string;
}

export interface Data {
  aerType: string;
  docType: string;
  aerSubscriptionDate: Date;
  contract: Contract;
  institution: Institution;
  adminContract: User;
  tecnicoNoInterviniente: User;
  comisionRecepcion: User[];
  contractorsShareholders: Contractor;
  departments: Department,
  payment: Payment[]
  totalDeliveryDelay: number;
  totalPenaltiesValue: number;
  totalPaymentRealValue: number;
  totalPaymentPlannedValue: number;
  totalPaymentRetentionValue: number;
  totalPendingPayment: number;
  warrantyReturnDate: Date;
  valuePayContractor: number;
  warrantyReturnContractor: number;
}