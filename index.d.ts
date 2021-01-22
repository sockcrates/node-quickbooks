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

  createCustomer(customer: any, callback: any): void;

  createDepartment(department: any, callback: any): void;

  createDeposit(deposit: any, callback: any): void;

  createEmployee(employee: any, callback: any): void;

  createEstimate(estimate: any, callback: any): void;

  createInvoice(invoice: any, callback: any): void;

  createItem(
    item: ItemTemplate,
    callback: { (err: APIError, item: any): void },
  ): void;

  createJournalCode(journalCode: any, callback: any): void;

  createJournalEntry(journalEntry: any, callback: any): void;

  createPayment(payment: any, callback: any): void;

  createPaymentMethod(paymentMethod: any, callback: any): void;

  createPurchase(purchase: any, callback: any): void;

  createPurchaseOrder(purchaseOrder: any, callback: any): void;

  createRefundReceipt(refundReceipt: any, callback: any): void;

  createSalesReceipt(salesReceipt: any, callback: any): void;

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
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findAttachables(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findBillPayments(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findBills(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findBudgets(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findClasses(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findCompanyInfos(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findCreditMemos(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findCustomerTypes(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findCustomers(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findDepartments(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findDeposits(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findEmployees(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findEstimates(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findExchangeRates(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findInvoices(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findItems(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findJournalCodes(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findJournalEntries(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findPaymentMethods(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findPayments(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findPreferenceses(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findPurchaseOrders(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findPurchases(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findRefundReceipts(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findSalesReceipts(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findTaxAgencies(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findTaxCodes(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findTaxRates(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findTerms(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findTimeActivities(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findTransfers(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findVendorCredits(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
  ): void;

  findVendors(
    criteria: string | APIFindQuery | Array<APIFindQuery> | undefined,
    callback: { (err: APIError, res: any): void },
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

interface APIError {
  Fault: Array<
    {
      code: string;
      Detail: string;
      Message: string;
    }
  >
  time: string;
  type: string;
}

export interface APIFindQuery {
  field: string;
  value: string;
  operator: string;
}

export interface ItemTemplate {
  TrackQtyOnHand?: boolean;
  Name: string;
  QtyOnHand?: number;
  IncomeAccountRef?: {
    name?: string;
    value: number;
  };
  AssetAccountRef?: {
    name?: string;
    value: number;
  };
  InvStartDate?: string;
  Type?: string;
  ExpenseAccountRef?: {
    name?: string;
    value: number;
  };
}

export interface Item extends ItemTemplate {
  FullyQualifiedName: string;
  domain: string;
  Id: string;
  Name: string;
  TrackQtyOnHand: boolean;
  UnitPrice: number;
  PurchaseCost: number;
  QtyOnHand: number;
  IncomeAccountRef: {
    name: string;
    value: number;
  },
  AssetAccountRef: {
    name: string;
    value: number;
  },
  Taxable: boolean;
  sparse: boolean;
  Active: boolean;
  SyncToken: string;
  InvStartDate: string;
  Type: string;
  ExpenseAccountRef: {
    name: string;
    value: number;
  },
  MetaData: {
    CreateTime: string;
    LastUpdatedTime: string;
  }
}
