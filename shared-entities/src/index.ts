export { BadRequestException } from "./exceptions/bad-request.exception";
export { InternalErrorException } from "./exceptions/internal.exception";
export { NoContentException } from "./exceptions/no-content.exception";
export { NotFoundException } from "./exceptions/not-found.exception";

export { TransportType } from "./entites/references/entities/transport-type.entity";
export { CargoType } from "./entites/references/entities/cargo-type.entity";
export { CargoTypeGroup } from "./entites/references/entities/cargo-type-group.entity";
export { CargoStatus } from "./entites/references/entities/cargo-status.entity";
export { Currency } from "./entites/references/entities/currency.entity";
export { Subscription } from "./entites/references/entities/subscription.entity";
export { Role } from "./entites/role/entities/role.entity";
export { Permission } from "./entites/role/entities/permission.entity";
export { Staff } from "./entites/staffs/staff.entity";
export { Transaction } from "./entites/transactions/transaction.entity";
export { User } from "./entites/users/user.entity";
export { Client } from "./entites/clients/client.entity";
export { Driver } from "./entites/driver/entities/driver.entity";
export { DriverTransport } from "./entites/driver/entities/driver-transport.entity";
export { TransportVerification } from "./entites/driver/entities/transport-verification.entity";
export { Config } from "./entites/config/config.entity";
export { Order } from "./entites/orders/entities/order.entity";
export { CargoLoadMethod } from "./entites/references/entities/cargo-load-method.entity";
export { CargoPackage } from "./entites/references/entities/cargo-package.entity";
export { TransportKind } from "./entites/references/entities/transport-kind.entity";
export { OrderTransportKind } from "./entites/references/entities/order-transport-kind.entity";
export { SubscriptionPayment } from "./entites/references/entities/subscription-payment.entity";
export { Merchant } from './entites/merchant/merchant.entity';
export { MerchantUser } from './entites/merchant/merchant-user.entity';
export { BankAccount } from './entites/merchant/bank-account.entity';

export enum ResponseStauses {
    NotFound = 'dataNotFound',
    UserNotFound = 'userNotFound',
    MercahntNotFound = 'merchantNotFound',
    StaffNotFound = 'staffNotFound',
    RoleNotFound = 'role  NotFound',
    IdIsRequired = 'idIsRequired',
    AllFieldsRequired = 'allFieldsAreRequired',
    SubscriptionNotFound = 'subscriptionNotFound',  
    CurrencyNotFound = 'currencyNotfound',
    CargoTypeNotFound = 'cargoTypeNotfound',
    TransportTypeNotfound = 'transportTypeNotFound',
    TransportKindNotfound = 'transportKindNotFound',
    CargoLoadingMethodNotFound = 'cargoLoadingMethodNotFound',
    CargoPackageNotFound = 'cargoPackageNotFound',
    DriverNotFound = 'driverNotFound',
    UserTypeRequired = 'userTypeRequired',
    InvalidUserType = 'invalidUserType  ',
    SuccessfullyCreated = 'successfullyCreated',
    SuccessfullyUpdated = 'successfullyUpdated',
    SuccessfullyDeleted = 'successfullyDeleted',
    SuccessfullyCanceled = 'successfullyCanceled',
    SuccessfullyRejected = 'successfullyRejected',
    SuccessfullyVerified = 'successfullyVerified',
    CreateDataFailed = 'createFailed',
    SendCodeFailed = 'sendCodeFailed',
    UpdateDataFailed = 'updateFalied',
    DeleteDataFailed = 'deleteFalied',
    CancelDataFailed = 'cancelFalied',
    RejectDataFailed = 'rejectFalied',
    VerifyDataFailed = 'verifyFalied',
    BlockDataFailed = 'blockFalied',
    AwsStoreFileFailed = 'fileStoreFailed',
    DuplicateError = 'duplicateError',
    AlreadyDeleted = 'alreadyDeleted',
    AlreadyBlocked = 'alreadyBlocked',
    AlreadyActive = 'alreadyActive',
    InternalServerError = 'internalError',
    NotModified = 'notModified',
    InvalidPassword = 'invalidPassword'
  } 
  
  export enum CargoStatusCodes {
    Waiting = 0,
    Accepted = 1,
    DriverCompleted = 2,
    Delivered = 3,
    Canceled = 4
  }

  export enum UserTypes {
    Client = 'client',
    Driver = 'driver',
    Merchant = 'merchant',
    MerchantUser = 'merchant_user',
    Tms = 'tms',
    TmsUser = 'tms_user'
  }

  export class BpmResponse {
    success: boolean;
    data: any;
    messages: string[] | undefined;
    constructor(success: boolean, data: any, messages?: string[]) {
      this.success = success;
      this.data = data;
      this.messages = messages;
    }
  }