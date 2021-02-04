/**
 * Declaration file generated by dts-gen and improved manually.
 */

export default node_quickbooks;

declare class node_quickbooks {
  constructor(
    consumerKey: string,
    consumerSecret: string,
    token: string,
    tokenSecret: boolean,
    realmId: string,
    useSandbox: boolean,
    debug: boolean,
    minorversion: number | null,
    oauthversion: string,
    refreshToken: string
  );

  batch(items: any, callback: any): void;

  capitalize(s: any): any;

  changeDataCapture(entities: any, since: any, callback: any): void;

  createAccount(account: any, callback: any): void;

  createAttachable(attachable: any, callback: any): void;

  createBill(bill: any, callback: any): void;

  createBillPayment(billPayment: any, callback: any): void;

  createClass(klass: any, callback: any): void;

  createCreditMemo(creditMemo: any, callback: any): void;

  createCustomer(
    customer: CustomerTemplate,
    callback: { (err: any, customer: Customer): void },
  ): void;

  createDepartment(department: any, callback: any): void;

  createDeposit(deposit: any, callback: any): void;

  createEmployee(employee: any, callback: any): void;

  createEstimate(estimate: any, callback: any): void;

  createInvoice(
    invoice: InvoiceTemplate,
    callback: { (err: any, invoice: Invoice): void },
  ): void;

  createItem(
    item: ItemTemplate,
    callback: { (err: any, item: Item): void },
  ): void;

  createJournalCode(journalCode: any, callback: any): void;

  createJournalEntry(journalEntry: any, callback: any): void;

  createPayment(payment: any, callback: any): void;

  createPaymentMethod(paymentMethod: any, callback: any): void;

  createPurchase(purchase: any, callback: any): void;

  createPurchaseOrder(purchaseOrder: any, callback: any): void;

  createRefundReceipt(refundReceipt: any, callback: any): void;

  createSalesReceipt(
    salesReceipt: SalesReceiptTemplate,
    callback: { (err: any, invoice: SalesReceipt): void },
  ): void;

  createTaxAgency(taxAgency: any, callback: any): void;

  createTaxService(taxService: any, callback: any): void;

  createTerm(term: any, callback: any): void;

  createTimeActivity(timeActivity: any, callback: any): void;

  createTransfer(transfer: any, callback: any): void;

  createVendor(vendor: any, callback: any): void;

  createVendorCredit(vendorCredit: any, callback: any): void;

  deleteAttachable(idOrEntity: any, callback: any): void;

  deleteBill(idOrEntity: any, callback: any): void;

  deleteBillPayment(idOrEntity: any, callback: any): void;

  deleteCreditMemo(idOrEntity: any, callback: any): void;

  deleteDeposit(idOrEntity: any, callback: any): void;

  deleteEstimate(idOrEntity: any, callback: any): void;

  deleteInvoice(idOrEntity: any, callback: any): void;

  deleteJournalCode(idOrEntity: any, callback: any): void;

  deleteJournalEntry(idOrEntity: any, callback: any): void;

  deletePayment(idOrEntity: any, callback: any): void;

  deletePurchase(idOrEntity: any, callback: any): void;

  deletePurchaseOrder(idOrEntity: any, callback: any): void;

  deleteRefundReceipt(idOrEntity: any, callback: any): void;

  deleteSalesReceipt(idOrEntity: any, callback: any): void;

  deleteTimeActivity(idOrEntity: any, callback: any): void;

  deleteTransfer(idOrEntity: any, callback: any): void;

  deleteVendorCredit(idOrEntity: any, callback: any): void;

  disconnect(callback: any): void;

  findAccounts(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findAttachables(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findBillPayments(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findBills(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findBudgets(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findClasses(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findCompanyInfos(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findCreditMemos(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findCustomerTypes(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findCustomers(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, Customer>): void },
  ): void;

  findDepartments(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findDeposits(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findEmployees(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findEstimates(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findExchangeRates(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findInvoices(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findItems(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, Item>): void },
  ): void;

  findJournalCodes(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findJournalEntries(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findPaymentMethods(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findPayments(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findPreferenceses(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findPurchaseOrders(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findPurchases(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findRefundReceipts(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findSalesReceipts(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, SalesReceipt>): void },
  ): void;

  findTaxAgencies(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findTaxCodes(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findTaxRates(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findTerms(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findTimeActivities(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findTransfers(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findVendorCredits(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  findVendors(
    criteria: string | Array<FindQuery> | undefined,
    callback: { (err: any, res: FindResponse<string, any>): void },
  ): void;

  getAccount(id: any, callback: any): void;

  getAttachable(id: any, callback: any): void;

  getBill(id: any, callback: any): void;

  getBillPayment(id: any, callback: any): void;

  getClass(id: any, callback: any): void;

  getCompanyInfo(id: any, callback: any): void;

  getCreditMemo(id: any, callback: any): void;

  getCustomer(id: any, callback: any): void;

  getCustomerType(id: any, callback: any): void;

  getDepartment(id: any, callback: any): void;

  getDeposit(id: any, callback: any): void;

  getEmployee(id: any, callback: any): void;

  getEstimate(id: any, callback: any): void;

  getEstimatePdf(id: any, callback: any): void;

  getExchangeRate(options: any, callback: any): void;

  getInvoice(id: any, callback: any): void;

  getInvoicePdf(id: any, callback: any): void;

  getItem(id: any, callback: any): void;

  getJournalCode(id: any, callback: any): void;

  getJournalEntry(id: any, callback: any): void;

  getPayment(id: any, callback: any): void;

  getPaymentMethod(id: any, callback: any): void;

  getPreferences(callback: any): void;

  getPurchase(id: any, callback: any): void;

  getPurchaseOrder(id: any, callback: any): void;

  getRefundReceipt(id: any, callback: any): void;

  getReports(id: any, callback: any): void;

  getSalesReceipt(id: any, callback: any): void;

  getSalesReceiptPdf(id: any, callback: any): void;

  getTaxAgency(id: any, callback: any): void;

  getTaxCode(id: any, callback: any): void;

  getTaxRate(id: any, callback: any): void;

  getTerm(id: any, callback: any): void;

  getTimeActivity(id: any, callback: any): void;

  getTransfer(id: any, callback: any): void;

  getUserInfo(callback: any): void;

  getVendor(id: any, callback: any): void;

  getVendorCredit(id: any, callback: any): void;

  pluralize(s: any): any;

  reconnect(callback: any): void;

  refreshAccessToken(callback: any): void;

  reportAccountListDetail(options: any, callback: any): void;

  reportAgedPayableDetail(options: any, callback: any): void;

  reportAgedPayables(options: any, callback: any): void;

  reportAgedReceivableDetail(options: any, callback: any): void;

  reportAgedReceivables(options: any, callback: any): void;

  reportBalanceSheet(options: any, callback: any): void;

  reportCashFlow(options: any, callback: any): void;

  reportClassSales(options: any, callback: any): void;

  reportCustomerBalance(options: any, callback: any): void;

  reportCustomerBalanceDetail(options: any, callback: any): void;

  reportCustomerIncome(options: any, callback: any): void;

  reportCustomerSales(options: any, callback: any): void;

  reportDepartmentSales(options: any, callback: any): void;

  reportGeneralLedgerDetail(options: any, callback: any): void;

  reportInventoryValuationSummary(options: any, callback: any): void;

  reportItemSales(options: any, callback: any): void;

  reportJournalReport(options: any, callback: any): void;

  reportProfitAndLoss(options: any, callback: any): void;

  reportProfitAndLossDetail(options: any, callback: any): void;

  reportTaxSummary(options: any, callback: any): void;

  reportTransactionList(options: any, callback: any): void;

  reportTrialBalance(options: any, callback: any): void;

  reportTrialBalanceFR(options: any, callback: any): void;

  reportVendorBalance(options: any, callback: any): void;

  reportVendorBalanceDetail(options: any, callback: any): void;

  reportVendorExpenses(options: any, callback: any): void;

  revokeAccess(useRefresh: any, callback: any): void;

  sendEstimatePdf(id: any, sendTo: any, callback: any): void;

  sendInvoicePdf(id: any, sendTo: any, callback: any): void;

  sendPurchaseOrder(id: any, sendTo: any, callback: any): void;

  sendSalesReceiptPdf(id: any, sendTo: any, callback: any): void;

  updateAccount(account: any, callback: any): void;

  updateAttachable(attachable: any, callback: any): void;

  updateBill(bill: any, callback: any): void;

  updateBillPayment(billPayment: any, callback: any): void;

  updateClass(klass: any, callback: any): void;

  updateCompanyInfo(companyInfo: any, callback: any): void;

  updateCreditMemo(creditMemo: any, callback: any): void;

  updateCustomer(customer: any, callback: any): void;

  updateDepartment(department: any, callback: any): void;

  updateDeposit(deposit: any, callback: any): void;

  updateEmployee(employee: any, callback: any): void;

  updateEstimate(estimate: any, callback: any): void;

  updateExchangeRate(exchangeRate: any, callback: any): void;

  updateInvoice(invoice: any, callback: any): void;

  updateItem(item: any, callback: any): void;

  updateJournalCode(journalCode: any, callback: any): void;

  updateJournalEntry(journalEntry: any, callback: any): void;

  updatePayment(payment: any, callback: any): void;

  updatePaymentMethod(paymentMethod: any, callback: any): void;

  updatePreferences(preferences: any, callback: any): void;

  updatePurchase(purchase: any, callback: any): void;

  updatePurchaseOrder(purchaseOrder: any, callback: any): void;

  updateRefundReceipt(refundReceipt: any, callback: any): void;

  updateSalesReceipt(salesReceipt: any, callback: any): void;

  updateTaxAgency(taxAgency: any, callback: any): void;

  updateTaxCode(taxCode: any, callback: any): void;

  updateTaxRate(taxRate: any, callback: any): void;

  updateTerm(term: any, callback: any): void;

  updateTimeActivity(timeActivity: any, callback: any): void;

  updateTransfer(transfer: any, callback: any): void;

  updateVendor(vendor: any, callback: any): void;

  updateVendorCredit(vendorCredit: any, callback: any): void;

  upload(filename: any, contentType: any, stream: any, entityType: any, entityId: any, callback: any): void;

  voidInvoice(idOrEntity: any, callback: any): void;

  voidPayment(payment: any, callback: any): void;

  static ACCESS_TOKEN_URL: string;

  static APP_CENTER_BASE: string;

  static APP_CENTER_URL: string;

  static DISCONNECT_URL: string;

  static QUERY_OPERATORS: string[];

  static RECONNECT_URL: string;

  static REQUEST_TOKEN_URL: string;

  static REVOKE_URL: string;

  static TOKEN_URL: string;

  static V3_ENDPOINT_BASE_URL: string;

  static setOauthVersion(version: any, useSandbox: any): void;

  static version: string;

}

export interface Fault {
  Fault: {
    Error: Array<
      {
        code: string;
        Detail: string;
        element: string;
        Message: string;
      }
    >;
    type: string;
  };
  time: string;
}

export interface FindQuery {
  field: string;
  value: string;
  operator: string;
}

/**
 * The second argument in the callback function of ```find*``` functions
 * in this module.
 * 
 * ## Example 1
 * Using an object that implements ```FindResponse<'Item', Item>```.
 * 
 * ```ts
 * function unwrap(err: any, res: FindResponse<'Item', Item>): Array<Item> {
 *   if (err) {
 *     // Error occured, no items are returned.
 *     throw new Error('can not retrieve items');
 *   }
 * 
 *   return res.Item;
 * }
 * ```
 * 
 * ## Example 2
 * The following object satisfies ```FindResponse<'Foo', boolean>```.
 * 
 * ```json
 * {
 *   "QueryResponse": {
 *     "Foo": [
 *       true,
 *       false,
 *       false,
 *     ],
 *     "maxResults": 100,
 *     "startPosition": 1,
 *   },
 *   "time": "2014-09-16T14:59:48-07:00",
 * }
 * ```
 */
export interface FindResponse<K extends string, T> {
  QueryResponse: Record<K, Array<T>> & {
    maxResults: number;
    startPosition: number;
  };
  time: string;
}

/**
 * Use this in the ```createItem``` function to create a QuickBooks Item.
 * More information can be found in the [QuickBooks Online API reference](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/most-commonly-used/item#create-an-item).
 * 
 * ## Example
 * Creating a "Service" item.
 * ```ts
 * function createService(quickbooks: node_quickbooks, itemName: string, expenseAccountID: number, incomeAccountID: number): void {
 *   const item: ItemTemplate = {
 *     ExpenseAccountRef: {
 *       value: expenseAccountID,
 *     },
 *     IncomeAccountRef: {
 *       value: incomeAccountID,
 *     },
 *     Name: itemName,
 *     Type: 'Service',
 *   };
 * 
 *   quickbooks.createItem(
 *     item,
 *     (err: any, res: Item) => {
 *       if (err) {
 *         // Something is wrong.
 *         console.error(err);
 *         throw err;
 *       }
 * 
 *       console.log(res);
 *     },
 *   );
 * }
 * ```
 */
export interface ItemTemplate {
  TrackQtyOnHand?: boolean;
  Name: string;
  QtyOnHand?: number;
  /** @todo ReferenceType interface */
  IncomeAccountRef?: {
    name?: string;
    value: number;
  };
  /** @todo ReferenceType interface */
  AssetAccountRef?: {
    name?: string;
    value: number;
  };
  InvStartDate?: string;
  Type?: string;
  /** @todo ReferenceType interface */
  ExpenseAccountRef?: {
    name?: string;
    value: number;
  };
}

export interface ItemMut extends ItemTemplate {
  FullyQualifiedName: string;
  domain: string;
  Id: string;
  Name: string;
  TrackQtyOnHand: boolean;
  UnitPrice: number;
  PurchaseCost: number;
  QtyOnHand: number;
  /** @todo ReferenceType interface */
  IncomeAccountRef: {
    name: string;
    value: number;
  };
  /** @todo ReferenceType interface */
  AssetAccountRef: {
    name: string;
    value: number;
  };
  Taxable: boolean;
  sparse: boolean;
  Active: boolean;
  SyncToken: string;
  InvStartDate: string;
  Type: string;
  /** @todo ReferenceType interface */
  ExpenseAccountRef: {
    name: string;
    value: number;
  };
  MetaData: {
    CreateTime: string;
    LastUpdatedTime: string;
  }
}

export interface Item extends Readonly<Required<ItemMut>> { }

export interface CustomerTemplate {
  FullyQualifiedName: string;
  PrimaryEmailAddr: {
    Address: string;
  };
  DisplayName?: string;
  Suffix?: string;
  Title?: string;
  MiddleName?: string;
  Notes?: string;
  FamilyName: string;
  PrimaryPhone?: {
    FreeFormNumber: string;
  };
  CompanyName?: string;
  BillAddr?: {
    CountrySubDivisionCode?: string;
    City: string;
    PostalCode: string;
    Line1: string;
    Country: string;
  };
  GivenName: string;
}

export interface CustomerMut extends CustomerTemplate {
  domain: string;
  FamilyName: string;
  DisplayName: string;
  DefaultTaxCodeRef: {
    value: string;
  };
  PrimaryEmailAddr: {
    Address: string;
  };
  PreferredDeliveryMethod: string;
  GivenName: string;
  FullyQualifiedName: string;
  BillWithParent: boolean;
  Job: boolean;
  BalanceWithJobs: number;
  PrimaryPhone: {
    FreeFormNumber: string;
  };
  Active: boolean;
  MetaData: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
  BillAddr: {
    City: string;
    Country: string;
    Line1: string;
    PostalCode: string;
    Lat: string;
    Long: string;
    CountrySubDivisionCode: string;
    Id: string;
  };
  MiddleName: string;
  Notes: string;
  Taxable: boolean;
  Balance: number;
  SyncToken: string;
  CompanyName: string;
  ShipAddr: {
    City: string;
    Line1: string;
    PostalCode: string;
    Lat: string;
    Long: string;
    CountrySubDivisionCode: string;
    Id: string;
  };
  PrintOnCheckName: string;
  sparse: boolean;
  Id: string;
}

export interface Customer extends Readonly<Required<CustomerMut>> { }

export interface SalesItemLineDetailTemplate {
  /** @todo ReferenceType interface */
  ItemRef?: {
    name?: string;
    value: string;
  };
  /** @todo ReferenceType interface */
  ClassRef?: {
    name?: string;
    value: string;
  };
  /** @todo ReferenceType interface */
  TaxCodeRef?: {
    name?: string;
    value: string;
  };
  MarkupInfo?: {
    /** @todo ReferenceType interface */
    PriceLevelRef?: {
      name?: string;
      value: string;
    };
    Percent?: number;
    /** @todo ReferenceType interface */
    MarkUpIncomeAccountRef?: {
      name?: string;
      value: string;
    };
    /** @todo ReferenceType interface */
    ItemAccountRef?: {
      name?: string;
      value: string;
    };
    ServiceDate?: string;
    DiscountRate?: number;
    UnitPrice?: number;
    /** @todo ReferenceType interface */
    TaxClassificationRef?: {
      name?: string;
      value: string;
    };
  };
}

export interface SalesItemLineDetailMut extends SalesItemLineDetailTemplate {
  Id: string;
}

export interface SalesItemLineDetail extends Readonly<Required<SalesItemLineDetailMut>> { }

export interface SalesItemLineTemplate {
  DetailType: 'SalesItemLineDetail';
  Amount: number;
  Description?: string;
  LineNum?: number;
  SalesItemLineDetail: SalesItemLineDetailTemplate;
}

export interface SalesItemLineMut extends SalesItemLineTemplate {
  Id: string;
  Description: string;
  LineNum: number;
  SalesItemLineDetail: SalesItemLineDetail;
}

export interface SalesItemLine extends Readonly<Required<SalesItemLineMut>> { }

export interface GroupLineTemplate {
  DetailType: 'GroupLineDetail';
  Description?: string;
  LineNum?: number;
  GroupLineDetail: {
    Amount?: number;
    Description?: string;
    LineNum?: number;
    Quantity?: number;
    Line?: Array<
      {
        DetailType: 'SalesItemLineDetail';
        SalesItemLineDetail: Array<SalesItemLineDetailTemplate>;
      }
    >;
    /** @todo ReferenceType interface */
    GroupItemRef?: {
      name?: string;
      value: string;
    };
  };
}

export interface GroupLineMut extends GroupLineTemplate {
  Id: string;
  Description: string;
  LineNum: number;
}

export interface GroupLine extends Readonly<Required<GroupLineMut>> { }

export interface DescriptionOnlyLineTemplate {
  DetailType: 'DescriptionOnly';
  Description?: string;
  LineNum?: number;
  Amount?: number;
  DescriptionLineDetail: {
    /** @todo ReferenceType interface */
    TaxCodeRef?: {
      name?: string;
      value: string;
    };
    ServiceDate?: {
      date: string;
    };
  };
}

export interface DescriptionOnlyLineMut extends DescriptionOnlyLineTemplate {
  Id: string;
  Description: string;
  LineNum: number;
  Amount: number;
}

export interface DescriptionOnlyLine extends Readonly<Required<DescriptionOnlyLineMut>> { }

export interface DiscountLineDetailTemplate {
  /** @todo ReferenceType interface */
  ClassRef?: {
    value: string;
    name?: string;
  };
  /** @todo ReferenceType interface */
  TaxCodeRef?: {
    value: string;
    name?: string;
  };
  /** @todo ReferenceType interface */
  DiscountAccountRef?: {
    value: string;
    name?: string;
  };
  PercentBased?: boolean;
  DiscountPercent?: number;
}

export interface DiscountLineDetailMut extends DiscountLineDetailTemplate {
  Id: string;
}

export interface DiscountLineDetail extends Readonly<Required<DiscountLineDetailTemplate>> { }

export interface DiscountLineTemplate {
  DiscountLineDetail: DiscountLineDetailTemplate;
  DetailType: 'DiscountLineDetail';
  Amount: number;
  Description?: string;
  LineNum?: string;
}

export interface DiscountLineMut extends DiscountLineTemplate {
  Id: string;
  DiscountLineDetail: DiscountLineDetail;
}

export interface DiscountLine extends Readonly<Required<DiscountLineMut>> { }

export interface SubTotalLineTemplate {
  SubtotalLineDetail: {
    /** @todo ReferenceType interface */
    ItemRef?: {
      value: string;
      name?: string;
    };
  };
  DetailType: 'SubtotalLineDetail';
  Amount: number;
  Description?: string;
  LineNum?: number;
}

export interface SubTotalLineMut extends SubTotalLineTemplate {
  Id: string;
}

export interface SubTotalLine extends Readonly<Required<SubTotalLineMut>> { }

export interface InvoiceTemplate {
  Line: Array<
    SalesItemLineTemplate |
    GroupLineTemplate |
    DescriptionOnlyLineTemplate |
    SubTotalLineTemplate
  >;
  /** @todo ReferenceType interface */
  CustomerRef: {
    name?: string;
    value: string;
  };
  /** @todo ReferenceType interface */
  CurrencyRef?: {
    name?: string;
    value: string;
  };
}

export interface InvoiceMut extends InvoiceTemplate {
  DocNumber: string;
  SyncToken: string;
  domain: string;
  Balance: number;
  BillAddr: {
    City: string;
    Line1: string;
    PostalCode: string;
    Lat: string;
    Long: string;
    CountrySubDivisionCode: string;
    Id: string;
  };
  TxnDate: string;
  TotalAmt: number;
  /** @todo ReferenceType interface */
  CustomerRef: {
    name: string;
    value: string;
  };
  ShipAddr: {
    City: string;
    Line1: string;
    PostalCode: string;
    Lat: string;
    Long: string;
    CountrySubDivisionCode: string;
    Id: string;
  };
  LinkedTxn: Array<any>;
  DueDate: string;
  PrintStatus: string;
  Deposit: number;
  sparse: boolean;
  EmailStatus: string;
  Id: string;
  TxnTaxDetail: {
    TotalTax: number;
  };
  MetaData: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
  Line: Array<SalesItemLine | GroupLine | DescriptionOnlyLine | SubTotalLine>;
}

export interface Invoice extends Readonly<Required<InvoiceMut>> { }

export interface SalesReceiptTemplate {
  /** @todo ReferenceType interface */
  CurrencyRef: {
    value: string;
    name?: string;
  };
  Line: Array<
    SalesItemLineTemplate |
    GroupLineTemplate |
    DescriptionOnlyLineTemplate |
    DiscountLineTemplate |
    SubTotalLineTemplate
  >;
}

export interface SalesReceiptMut extends SalesItemLineTemplate {
  Id: string;
  /** @todo ReferenceType interface */
  CustomerRef: {
    value: string;
    name?: string;
  };
  Line: Array<SalesItemLine | GroupLine | DescriptionOnlyLine | DiscountLine | SubTotalLine>;
  SyncToken: string;
  BillEmail?: {
    Address: string;
  };
  TxnDate?: string;
  /** @todo PhysicalAddress interface */
  ShipFromAddr?: any;
  CustomField?: {
    DefinitionId: string;
    StringValue?: string;
    Name?: string;
    Type: 'StringType';
  };
  /** @todo DateTime interface */
  ShipDate?: {
    date: string;
  };
  TrackingNum?: string;
  /** @todo ReferenceType interface */
  ClassRef?: {
    value: string;
    name: string;
  };
  PrintStatus?: 'NotSet' | 'NeedToPrint' | 'PrintComplete';
  PaymentRefNum?: string;
  TxnSource?: string;
  GlobalTaxCalculation?: 'TaxExcluded' | 'TaxInclusive' | 'NotApplicable';
  TransactionLocationType?: 'WithinFrance' | 'FranceOverseas' | 'OutsideFranceWithEU' | 'OutsideEU';
  ApplyTaxAfterDiscount?: boolean | null;
  DocNumber?: string;
  PrivateNote?: string;
  /** @todo ReferenceType interface */
  DepositToAccountRef?: {
    value: string;
    name?: string;
  };
  /** @todo MemoRef interface */
  CustomerMemo?: {
    value: string;
  };
  EmailStatus?: string;
  /** @todo CreditCardPayment interface */
  CreditCardPayment?: {
    /** @todo CreditChargeResponse interface */
    CreditChargeResponse?: {
      Status?: 'Completed' | 'Unknown';
      AuthCode?: string;
      /** @todo TxnAuthorizationTime interface */
      TxnAuthorizationTime?: {
        dateTime: string;
      };
      CCTransId?: string;
    };
    /** @todo CreditChargeInfo interface */
    CreditChargeInfo?: {
      CcExpiryMonth?: number;
      ProcessPayment?: boolean;
      PostalCode?: string;
      Amount?: number;
      NameOnAcct?: string;
      CcExpiryYear?: number;
      Type?: string;
      BillAddrStreet?: string;
    };
  };
  TxnTaxDetail?: {
    /** @todo ReferenceType interface */
    TxnTaxCodeRef?: {
      value: string;
      name?: string;
    };
    TotalTax?: number;
    TaxLine?: Array<
      /** @todo TaxLine interface */
      {
        DetailType: 'TaxLineDetail',
        /** @todo TaxLineDetail interface */
        TaxLineDetail: {
          /** @todo ReferenceType interface */
          TaxRateRef: {
            value: string;
            name?: string;
          }
        };
        NetAmountTaxable?: number;
        PercentBased?: boolean;
        TaxInclusiveAmount?: number;
        OverrideDeltaAmount?: number;
        TaxPercent?: number;
        Amount?: number;
      }
    >;
  };
  /** @todo ReferenceType interface */
  PaymentMethodRef?: {
    value: string;
    name?: string;
  };
  ExchangeRate?: number;
  /** @todo PhysicalAddress interface */
  ShipAddr?: any;
  /** @todo ReferenceType interface */
  DepartmentRef?: {
    value: string;
    name?: string;
  };
  /** @todo ReferenceType interface */
  ShipMethodRef?: {
    value: string;
    name?: string;
  };
  /** @todo PhysicalAddress interface */
  BillAddr?: any;
  MetaData?: {
    /** @todo DateTime interface */
    CreateTime: {
      dateTime: string;
    };
    /** @todo DateTime interface */
    LastUpdatedTime: {
      dateTime: string;
    };
  };
  HomeBalance?: number;
  /** @todo DeliveryInfo interface */
  DeliveryInfo?: {
    DeliveryType: 'Email';
    /** @todo DateTime interface */
    DeliveryTime: {
      dateTime: string;
    };
  };
  /** @todo ReferenceType interface */
  RecurDataRef?: {
    value: string;
    name?: string;
  };
  TotalAmt?: number;
  Balance?: number;
  HomeTotalAmt?: number;
}

export interface SalesReceipt extends Readonly<Required<SalesReceiptMut>> { }
