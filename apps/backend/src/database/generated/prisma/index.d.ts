
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FailureLog
 * 
 */
export type FailureLog = $Result.DefaultSelection<Prisma.$FailureLogPayload>
/**
 * Model UAVdata
 * 
 */
export type UAVdata = $Result.DefaultSelection<Prisma.$UAVdataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FailureType: {
  HARDWARE: 'HARDWARE',
  SOFTWARE: 'SOFTWARE',
  NETWORK: 'NETWORK',
  AERODYNAMIC: 'AERODYNAMIC',
  FLIGHT_DYNAMICS: 'FLIGHT_DYNAMICS',
  OTHER: 'OTHER'
};

export type FailureType = (typeof FailureType)[keyof typeof FailureType]


export const Severity: {
  CRITICAL: 'CRITICAL',
  WARNING: 'WARNING',
  INFO: 'INFO'
};

export type Severity = (typeof Severity)[keyof typeof Severity]

}

export type FailureType = $Enums.FailureType

export const FailureType: typeof $Enums.FailureType

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FailureLogs
 * const failureLogs = await prisma.failureLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FailureLogs
   * const failureLogs = await prisma.failureLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.failureLog`: Exposes CRUD operations for the **FailureLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FailureLogs
    * const failureLogs = await prisma.failureLog.findMany()
    * ```
    */
  get failureLog(): Prisma.FailureLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uAVdata`: Exposes CRUD operations for the **UAVdata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UAVdata
    * const uAVdata = await prisma.uAVdata.findMany()
    * ```
    */
  get uAVdata(): Prisma.UAVdataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FailureLog: 'FailureLog',
    UAVdata: 'UAVdata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "failureLog" | "uAVdata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FailureLog: {
        payload: Prisma.$FailureLogPayload<ExtArgs>
        fields: Prisma.FailureLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FailureLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FailureLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>
          }
          findFirst: {
            args: Prisma.FailureLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FailureLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>
          }
          findMany: {
            args: Prisma.FailureLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>[]
          }
          create: {
            args: Prisma.FailureLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>
          }
          createMany: {
            args: Prisma.FailureLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FailureLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>[]
          }
          delete: {
            args: Prisma.FailureLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>
          }
          update: {
            args: Prisma.FailureLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>
          }
          deleteMany: {
            args: Prisma.FailureLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FailureLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FailureLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>[]
          }
          upsert: {
            args: Prisma.FailureLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailureLogPayload>
          }
          aggregate: {
            args: Prisma.FailureLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailureLog>
          }
          groupBy: {
            args: Prisma.FailureLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FailureLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FailureLogCountArgs<ExtArgs>
            result: $Utils.Optional<FailureLogCountAggregateOutputType> | number
          }
        }
      }
      UAVdata: {
        payload: Prisma.$UAVdataPayload<ExtArgs>
        fields: Prisma.UAVdataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UAVdataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UAVdataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>
          }
          findFirst: {
            args: Prisma.UAVdataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UAVdataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>
          }
          findMany: {
            args: Prisma.UAVdataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>[]
          }
          create: {
            args: Prisma.UAVdataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>
          }
          createMany: {
            args: Prisma.UAVdataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UAVdataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>[]
          }
          delete: {
            args: Prisma.UAVdataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>
          }
          update: {
            args: Prisma.UAVdataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>
          }
          deleteMany: {
            args: Prisma.UAVdataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UAVdataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UAVdataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>[]
          }
          upsert: {
            args: Prisma.UAVdataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAVdataPayload>
          }
          aggregate: {
            args: Prisma.UAVdataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUAVdata>
          }
          groupBy: {
            args: Prisma.UAVdataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UAVdataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UAVdataCountArgs<ExtArgs>
            result: $Utils.Optional<UAVdataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    failureLog?: FailureLogOmit
    uAVdata?: UAVdataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UAVdataCountOutputType
   */

  export type UAVdataCountOutputType = {
    logs: number
  }

  export type UAVdataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UAVdataCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UAVdataCountOutputType without action
   */
  export type UAVdataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdataCountOutputType
     */
    select?: UAVdataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UAVdataCountOutputType without action
   */
  export type UAVdataCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FailureLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FailureLog
   */

  export type AggregateFailureLog = {
    _count: FailureLogCountAggregateOutputType | null
    _avg: FailureLogAvgAggregateOutputType | null
    _sum: FailureLogSumAggregateOutputType | null
    _min: FailureLogMinAggregateOutputType | null
    _max: FailureLogMaxAggregateOutputType | null
  }

  export type FailureLogAvgAggregateOutputType = {
    id: number | null
    uavDataId: number | null
  }

  export type FailureLogSumAggregateOutputType = {
    id: number | null
    uavDataId: number | null
  }

  export type FailureLogMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    type: $Enums.FailureType | null
    severity: $Enums.Severity | null
    description: string | null
    isResolved: boolean | null
    uavDataId: number | null
  }

  export type FailureLogMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    type: $Enums.FailureType | null
    severity: $Enums.Severity | null
    description: string | null
    isResolved: boolean | null
    uavDataId: number | null
  }

  export type FailureLogCountAggregateOutputType = {
    id: number
    timestamp: number
    type: number
    severity: number
    description: number
    isResolved: number
    uavDataId: number
    _all: number
  }


  export type FailureLogAvgAggregateInputType = {
    id?: true
    uavDataId?: true
  }

  export type FailureLogSumAggregateInputType = {
    id?: true
    uavDataId?: true
  }

  export type FailureLogMinAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    severity?: true
    description?: true
    isResolved?: true
    uavDataId?: true
  }

  export type FailureLogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    severity?: true
    description?: true
    isResolved?: true
    uavDataId?: true
  }

  export type FailureLogCountAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    severity?: true
    description?: true
    isResolved?: true
    uavDataId?: true
    _all?: true
  }

  export type FailureLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailureLog to aggregate.
     */
    where?: FailureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailureLogs to fetch.
     */
    orderBy?: FailureLogOrderByWithRelationInput | FailureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FailureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailureLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FailureLogs
    **/
    _count?: true | FailureLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FailureLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FailureLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FailureLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FailureLogMaxAggregateInputType
  }

  export type GetFailureLogAggregateType<T extends FailureLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFailureLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailureLog[P]>
      : GetScalarType<T[P], AggregateFailureLog[P]>
  }




  export type FailureLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FailureLogWhereInput
    orderBy?: FailureLogOrderByWithAggregationInput | FailureLogOrderByWithAggregationInput[]
    by: FailureLogScalarFieldEnum[] | FailureLogScalarFieldEnum
    having?: FailureLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FailureLogCountAggregateInputType | true
    _avg?: FailureLogAvgAggregateInputType
    _sum?: FailureLogSumAggregateInputType
    _min?: FailureLogMinAggregateInputType
    _max?: FailureLogMaxAggregateInputType
  }

  export type FailureLogGroupByOutputType = {
    id: number
    timestamp: Date
    type: $Enums.FailureType
    severity: $Enums.Severity
    description: string | null
    isResolved: boolean
    uavDataId: number
    _count: FailureLogCountAggregateOutputType | null
    _avg: FailureLogAvgAggregateOutputType | null
    _sum: FailureLogSumAggregateOutputType | null
    _min: FailureLogMinAggregateOutputType | null
    _max: FailureLogMaxAggregateOutputType | null
  }

  type GetFailureLogGroupByPayload<T extends FailureLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FailureLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FailureLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FailureLogGroupByOutputType[P]>
            : GetScalarType<T[P], FailureLogGroupByOutputType[P]>
        }
      >
    >


  export type FailureLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    isResolved?: boolean
    uavDataId?: boolean
    uavData?: boolean | UAVdataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["failureLog"]>

  export type FailureLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    isResolved?: boolean
    uavDataId?: boolean
    uavData?: boolean | UAVdataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["failureLog"]>

  export type FailureLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    isResolved?: boolean
    uavDataId?: boolean
    uavData?: boolean | UAVdataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["failureLog"]>

  export type FailureLogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    isResolved?: boolean
    uavDataId?: boolean
  }

  export type FailureLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "type" | "severity" | "description" | "isResolved" | "uavDataId", ExtArgs["result"]["failureLog"]>
  export type FailureLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uavData?: boolean | UAVdataDefaultArgs<ExtArgs>
  }
  export type FailureLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uavData?: boolean | UAVdataDefaultArgs<ExtArgs>
  }
  export type FailureLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uavData?: boolean | UAVdataDefaultArgs<ExtArgs>
  }

  export type $FailureLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FailureLog"
    objects: {
      uavData: Prisma.$UAVdataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      type: $Enums.FailureType
      severity: $Enums.Severity
      description: string | null
      isResolved: boolean
      uavDataId: number
    }, ExtArgs["result"]["failureLog"]>
    composites: {}
  }

  type FailureLogGetPayload<S extends boolean | null | undefined | FailureLogDefaultArgs> = $Result.GetResult<Prisma.$FailureLogPayload, S>

  type FailureLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FailureLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FailureLogCountAggregateInputType | true
    }

  export interface FailureLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FailureLog'], meta: { name: 'FailureLog' } }
    /**
     * Find zero or one FailureLog that matches the filter.
     * @param {FailureLogFindUniqueArgs} args - Arguments to find a FailureLog
     * @example
     * // Get one FailureLog
     * const failureLog = await prisma.failureLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FailureLogFindUniqueArgs>(args: SelectSubset<T, FailureLogFindUniqueArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FailureLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FailureLogFindUniqueOrThrowArgs} args - Arguments to find a FailureLog
     * @example
     * // Get one FailureLog
     * const failureLog = await prisma.failureLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FailureLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FailureLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailureLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailureLogFindFirstArgs} args - Arguments to find a FailureLog
     * @example
     * // Get one FailureLog
     * const failureLog = await prisma.failureLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FailureLogFindFirstArgs>(args?: SelectSubset<T, FailureLogFindFirstArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailureLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailureLogFindFirstOrThrowArgs} args - Arguments to find a FailureLog
     * @example
     * // Get one FailureLog
     * const failureLog = await prisma.failureLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FailureLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FailureLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FailureLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailureLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FailureLogs
     * const failureLogs = await prisma.failureLog.findMany()
     * 
     * // Get first 10 FailureLogs
     * const failureLogs = await prisma.failureLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failureLogWithIdOnly = await prisma.failureLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FailureLogFindManyArgs>(args?: SelectSubset<T, FailureLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FailureLog.
     * @param {FailureLogCreateArgs} args - Arguments to create a FailureLog.
     * @example
     * // Create one FailureLog
     * const FailureLog = await prisma.failureLog.create({
     *   data: {
     *     // ... data to create a FailureLog
     *   }
     * })
     * 
     */
    create<T extends FailureLogCreateArgs>(args: SelectSubset<T, FailureLogCreateArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FailureLogs.
     * @param {FailureLogCreateManyArgs} args - Arguments to create many FailureLogs.
     * @example
     * // Create many FailureLogs
     * const failureLog = await prisma.failureLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FailureLogCreateManyArgs>(args?: SelectSubset<T, FailureLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FailureLogs and returns the data saved in the database.
     * @param {FailureLogCreateManyAndReturnArgs} args - Arguments to create many FailureLogs.
     * @example
     * // Create many FailureLogs
     * const failureLog = await prisma.failureLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FailureLogs and only return the `id`
     * const failureLogWithIdOnly = await prisma.failureLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FailureLogCreateManyAndReturnArgs>(args?: SelectSubset<T, FailureLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FailureLog.
     * @param {FailureLogDeleteArgs} args - Arguments to delete one FailureLog.
     * @example
     * // Delete one FailureLog
     * const FailureLog = await prisma.failureLog.delete({
     *   where: {
     *     // ... filter to delete one FailureLog
     *   }
     * })
     * 
     */
    delete<T extends FailureLogDeleteArgs>(args: SelectSubset<T, FailureLogDeleteArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FailureLog.
     * @param {FailureLogUpdateArgs} args - Arguments to update one FailureLog.
     * @example
     * // Update one FailureLog
     * const failureLog = await prisma.failureLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FailureLogUpdateArgs>(args: SelectSubset<T, FailureLogUpdateArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FailureLogs.
     * @param {FailureLogDeleteManyArgs} args - Arguments to filter FailureLogs to delete.
     * @example
     * // Delete a few FailureLogs
     * const { count } = await prisma.failureLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FailureLogDeleteManyArgs>(args?: SelectSubset<T, FailureLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailureLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailureLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FailureLogs
     * const failureLog = await prisma.failureLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FailureLogUpdateManyArgs>(args: SelectSubset<T, FailureLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailureLogs and returns the data updated in the database.
     * @param {FailureLogUpdateManyAndReturnArgs} args - Arguments to update many FailureLogs.
     * @example
     * // Update many FailureLogs
     * const failureLog = await prisma.failureLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FailureLogs and only return the `id`
     * const failureLogWithIdOnly = await prisma.failureLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FailureLogUpdateManyAndReturnArgs>(args: SelectSubset<T, FailureLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FailureLog.
     * @param {FailureLogUpsertArgs} args - Arguments to update or create a FailureLog.
     * @example
     * // Update or create a FailureLog
     * const failureLog = await prisma.failureLog.upsert({
     *   create: {
     *     // ... data to create a FailureLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FailureLog we want to update
     *   }
     * })
     */
    upsert<T extends FailureLogUpsertArgs>(args: SelectSubset<T, FailureLogUpsertArgs<ExtArgs>>): Prisma__FailureLogClient<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FailureLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailureLogCountArgs} args - Arguments to filter FailureLogs to count.
     * @example
     * // Count the number of FailureLogs
     * const count = await prisma.failureLog.count({
     *   where: {
     *     // ... the filter for the FailureLogs we want to count
     *   }
     * })
    **/
    count<T extends FailureLogCountArgs>(
      args?: Subset<T, FailureLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FailureLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FailureLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailureLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FailureLogAggregateArgs>(args: Subset<T, FailureLogAggregateArgs>): Prisma.PrismaPromise<GetFailureLogAggregateType<T>>

    /**
     * Group by FailureLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailureLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FailureLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FailureLogGroupByArgs['orderBy'] }
        : { orderBy?: FailureLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FailureLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailureLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FailureLog model
   */
  readonly fields: FailureLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FailureLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FailureLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uavData<T extends UAVdataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UAVdataDefaultArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FailureLog model
   */
  interface FailureLogFieldRefs {
    readonly id: FieldRef<"FailureLog", 'Int'>
    readonly timestamp: FieldRef<"FailureLog", 'DateTime'>
    readonly type: FieldRef<"FailureLog", 'FailureType'>
    readonly severity: FieldRef<"FailureLog", 'Severity'>
    readonly description: FieldRef<"FailureLog", 'String'>
    readonly isResolved: FieldRef<"FailureLog", 'Boolean'>
    readonly uavDataId: FieldRef<"FailureLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FailureLog findUnique
   */
  export type FailureLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * Filter, which FailureLog to fetch.
     */
    where: FailureLogWhereUniqueInput
  }

  /**
   * FailureLog findUniqueOrThrow
   */
  export type FailureLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * Filter, which FailureLog to fetch.
     */
    where: FailureLogWhereUniqueInput
  }

  /**
   * FailureLog findFirst
   */
  export type FailureLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * Filter, which FailureLog to fetch.
     */
    where?: FailureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailureLogs to fetch.
     */
    orderBy?: FailureLogOrderByWithRelationInput | FailureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailureLogs.
     */
    cursor?: FailureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailureLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailureLogs.
     */
    distinct?: FailureLogScalarFieldEnum | FailureLogScalarFieldEnum[]
  }

  /**
   * FailureLog findFirstOrThrow
   */
  export type FailureLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * Filter, which FailureLog to fetch.
     */
    where?: FailureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailureLogs to fetch.
     */
    orderBy?: FailureLogOrderByWithRelationInput | FailureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailureLogs.
     */
    cursor?: FailureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailureLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailureLogs.
     */
    distinct?: FailureLogScalarFieldEnum | FailureLogScalarFieldEnum[]
  }

  /**
   * FailureLog findMany
   */
  export type FailureLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * Filter, which FailureLogs to fetch.
     */
    where?: FailureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailureLogs to fetch.
     */
    orderBy?: FailureLogOrderByWithRelationInput | FailureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FailureLogs.
     */
    cursor?: FailureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailureLogs.
     */
    skip?: number
    distinct?: FailureLogScalarFieldEnum | FailureLogScalarFieldEnum[]
  }

  /**
   * FailureLog create
   */
  export type FailureLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * The data needed to create a FailureLog.
     */
    data: XOR<FailureLogCreateInput, FailureLogUncheckedCreateInput>
  }

  /**
   * FailureLog createMany
   */
  export type FailureLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FailureLogs.
     */
    data: FailureLogCreateManyInput | FailureLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailureLog createManyAndReturn
   */
  export type FailureLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * The data used to create many FailureLogs.
     */
    data: FailureLogCreateManyInput | FailureLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FailureLog update
   */
  export type FailureLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * The data needed to update a FailureLog.
     */
    data: XOR<FailureLogUpdateInput, FailureLogUncheckedUpdateInput>
    /**
     * Choose, which FailureLog to update.
     */
    where: FailureLogWhereUniqueInput
  }

  /**
   * FailureLog updateMany
   */
  export type FailureLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FailureLogs.
     */
    data: XOR<FailureLogUpdateManyMutationInput, FailureLogUncheckedUpdateManyInput>
    /**
     * Filter which FailureLogs to update
     */
    where?: FailureLogWhereInput
    /**
     * Limit how many FailureLogs to update.
     */
    limit?: number
  }

  /**
   * FailureLog updateManyAndReturn
   */
  export type FailureLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * The data used to update FailureLogs.
     */
    data: XOR<FailureLogUpdateManyMutationInput, FailureLogUncheckedUpdateManyInput>
    /**
     * Filter which FailureLogs to update
     */
    where?: FailureLogWhereInput
    /**
     * Limit how many FailureLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FailureLog upsert
   */
  export type FailureLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * The filter to search for the FailureLog to update in case it exists.
     */
    where: FailureLogWhereUniqueInput
    /**
     * In case the FailureLog found by the `where` argument doesn't exist, create a new FailureLog with this data.
     */
    create: XOR<FailureLogCreateInput, FailureLogUncheckedCreateInput>
    /**
     * In case the FailureLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FailureLogUpdateInput, FailureLogUncheckedUpdateInput>
  }

  /**
   * FailureLog delete
   */
  export type FailureLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    /**
     * Filter which FailureLog to delete.
     */
    where: FailureLogWhereUniqueInput
  }

  /**
   * FailureLog deleteMany
   */
  export type FailureLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailureLogs to delete
     */
    where?: FailureLogWhereInput
    /**
     * Limit how many FailureLogs to delete.
     */
    limit?: number
  }

  /**
   * FailureLog without action
   */
  export type FailureLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
  }


  /**
   * Model UAVdata
   */

  export type AggregateUAVdata = {
    _count: UAVdataCountAggregateOutputType | null
    _avg: UAVdataAvgAggregateOutputType | null
    _sum: UAVdataSumAggregateOutputType | null
    _min: UAVdataMinAggregateOutputType | null
    _max: UAVdataMaxAggregateOutputType | null
  }

  export type UAVdataAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    verticalSpeed: number | null
    airspeed: number | null
    pitch: number | null
    roll: number | null
    gear_status: number | null
    battery_level: number | null
    temperature: number | null
    rssi: number | null
    latency: number | null
  }

  export type UAVdataSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    verticalSpeed: number | null
    airspeed: number | null
    pitch: number | null
    roll: number | null
    gear_status: number | null
    battery_level: number | null
    temperature: number | null
    rssi: number | null
    latency: number | null
  }

  export type UAVdataMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    verticalSpeed: number | null
    airspeed: number | null
    pitch: number | null
    roll: number | null
    gear_status: number | null
    battery_level: number | null
    temperature: number | null
    rssi: number | null
    latency: number | null
  }

  export type UAVdataMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    verticalSpeed: number | null
    airspeed: number | null
    pitch: number | null
    roll: number | null
    gear_status: number | null
    battery_level: number | null
    temperature: number | null
    rssi: number | null
    latency: number | null
  }

  export type UAVdataCountAggregateOutputType = {
    id: number
    timestamp: number
    latitude: number
    longitude: number
    altitude: number
    verticalSpeed: number
    airspeed: number
    pitch: number
    roll: number
    gear_status: number
    battery_level: number
    temperature: number
    rssi: number
    latency: number
    _all: number
  }


  export type UAVdataAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    altitude?: true
    verticalSpeed?: true
    airspeed?: true
    pitch?: true
    roll?: true
    gear_status?: true
    battery_level?: true
    temperature?: true
    rssi?: true
    latency?: true
  }

  export type UAVdataSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    altitude?: true
    verticalSpeed?: true
    airspeed?: true
    pitch?: true
    roll?: true
    gear_status?: true
    battery_level?: true
    temperature?: true
    rssi?: true
    latency?: true
  }

  export type UAVdataMinAggregateInputType = {
    id?: true
    timestamp?: true
    latitude?: true
    longitude?: true
    altitude?: true
    verticalSpeed?: true
    airspeed?: true
    pitch?: true
    roll?: true
    gear_status?: true
    battery_level?: true
    temperature?: true
    rssi?: true
    latency?: true
  }

  export type UAVdataMaxAggregateInputType = {
    id?: true
    timestamp?: true
    latitude?: true
    longitude?: true
    altitude?: true
    verticalSpeed?: true
    airspeed?: true
    pitch?: true
    roll?: true
    gear_status?: true
    battery_level?: true
    temperature?: true
    rssi?: true
    latency?: true
  }

  export type UAVdataCountAggregateInputType = {
    id?: true
    timestamp?: true
    latitude?: true
    longitude?: true
    altitude?: true
    verticalSpeed?: true
    airspeed?: true
    pitch?: true
    roll?: true
    gear_status?: true
    battery_level?: true
    temperature?: true
    rssi?: true
    latency?: true
    _all?: true
  }

  export type UAVdataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UAVdata to aggregate.
     */
    where?: UAVdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAVdata to fetch.
     */
    orderBy?: UAVdataOrderByWithRelationInput | UAVdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UAVdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAVdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAVdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UAVdata
    **/
    _count?: true | UAVdataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UAVdataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UAVdataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UAVdataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UAVdataMaxAggregateInputType
  }

  export type GetUAVdataAggregateType<T extends UAVdataAggregateArgs> = {
        [P in keyof T & keyof AggregateUAVdata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUAVdata[P]>
      : GetScalarType<T[P], AggregateUAVdata[P]>
  }




  export type UAVdataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UAVdataWhereInput
    orderBy?: UAVdataOrderByWithAggregationInput | UAVdataOrderByWithAggregationInput[]
    by: UAVdataScalarFieldEnum[] | UAVdataScalarFieldEnum
    having?: UAVdataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UAVdataCountAggregateInputType | true
    _avg?: UAVdataAvgAggregateInputType
    _sum?: UAVdataSumAggregateInputType
    _min?: UAVdataMinAggregateInputType
    _max?: UAVdataMaxAggregateInputType
  }

  export type UAVdataGroupByOutputType = {
    id: number
    timestamp: Date
    latitude: number
    longitude: number
    altitude: number
    verticalSpeed: number
    airspeed: number
    pitch: number
    roll: number
    gear_status: number
    battery_level: number
    temperature: number
    rssi: number | null
    latency: number | null
    _count: UAVdataCountAggregateOutputType | null
    _avg: UAVdataAvgAggregateOutputType | null
    _sum: UAVdataSumAggregateOutputType | null
    _min: UAVdataMinAggregateOutputType | null
    _max: UAVdataMaxAggregateOutputType | null
  }

  type GetUAVdataGroupByPayload<T extends UAVdataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UAVdataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UAVdataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UAVdataGroupByOutputType[P]>
            : GetScalarType<T[P], UAVdataGroupByOutputType[P]>
        }
      >
    >


  export type UAVdataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    verticalSpeed?: boolean
    airspeed?: boolean
    pitch?: boolean
    roll?: boolean
    gear_status?: boolean
    battery_level?: boolean
    temperature?: boolean
    rssi?: boolean
    latency?: boolean
    logs?: boolean | UAVdata$logsArgs<ExtArgs>
    _count?: boolean | UAVdataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uAVdata"]>

  export type UAVdataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    verticalSpeed?: boolean
    airspeed?: boolean
    pitch?: boolean
    roll?: boolean
    gear_status?: boolean
    battery_level?: boolean
    temperature?: boolean
    rssi?: boolean
    latency?: boolean
  }, ExtArgs["result"]["uAVdata"]>

  export type UAVdataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    verticalSpeed?: boolean
    airspeed?: boolean
    pitch?: boolean
    roll?: boolean
    gear_status?: boolean
    battery_level?: boolean
    temperature?: boolean
    rssi?: boolean
    latency?: boolean
  }, ExtArgs["result"]["uAVdata"]>

  export type UAVdataSelectScalar = {
    id?: boolean
    timestamp?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    verticalSpeed?: boolean
    airspeed?: boolean
    pitch?: boolean
    roll?: boolean
    gear_status?: boolean
    battery_level?: boolean
    temperature?: boolean
    rssi?: boolean
    latency?: boolean
  }

  export type UAVdataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "latitude" | "longitude" | "altitude" | "verticalSpeed" | "airspeed" | "pitch" | "roll" | "gear_status" | "battery_level" | "temperature" | "rssi" | "latency", ExtArgs["result"]["uAVdata"]>
  export type UAVdataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UAVdata$logsArgs<ExtArgs>
    _count?: boolean | UAVdataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UAVdataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UAVdataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UAVdataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UAVdata"
    objects: {
      logs: Prisma.$FailureLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      latitude: number
      longitude: number
      altitude: number
      verticalSpeed: number
      airspeed: number
      pitch: number
      roll: number
      gear_status: number
      battery_level: number
      temperature: number
      rssi: number | null
      latency: number | null
    }, ExtArgs["result"]["uAVdata"]>
    composites: {}
  }

  type UAVdataGetPayload<S extends boolean | null | undefined | UAVdataDefaultArgs> = $Result.GetResult<Prisma.$UAVdataPayload, S>

  type UAVdataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UAVdataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UAVdataCountAggregateInputType | true
    }

  export interface UAVdataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UAVdata'], meta: { name: 'UAVdata' } }
    /**
     * Find zero or one UAVdata that matches the filter.
     * @param {UAVdataFindUniqueArgs} args - Arguments to find a UAVdata
     * @example
     * // Get one UAVdata
     * const uAVdata = await prisma.uAVdata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UAVdataFindUniqueArgs>(args: SelectSubset<T, UAVdataFindUniqueArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UAVdata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UAVdataFindUniqueOrThrowArgs} args - Arguments to find a UAVdata
     * @example
     * // Get one UAVdata
     * const uAVdata = await prisma.uAVdata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UAVdataFindUniqueOrThrowArgs>(args: SelectSubset<T, UAVdataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UAVdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAVdataFindFirstArgs} args - Arguments to find a UAVdata
     * @example
     * // Get one UAVdata
     * const uAVdata = await prisma.uAVdata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UAVdataFindFirstArgs>(args?: SelectSubset<T, UAVdataFindFirstArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UAVdata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAVdataFindFirstOrThrowArgs} args - Arguments to find a UAVdata
     * @example
     * // Get one UAVdata
     * const uAVdata = await prisma.uAVdata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UAVdataFindFirstOrThrowArgs>(args?: SelectSubset<T, UAVdataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UAVdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAVdataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UAVdata
     * const uAVdata = await prisma.uAVdata.findMany()
     * 
     * // Get first 10 UAVdata
     * const uAVdata = await prisma.uAVdata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uAVdataWithIdOnly = await prisma.uAVdata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UAVdataFindManyArgs>(args?: SelectSubset<T, UAVdataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UAVdata.
     * @param {UAVdataCreateArgs} args - Arguments to create a UAVdata.
     * @example
     * // Create one UAVdata
     * const UAVdata = await prisma.uAVdata.create({
     *   data: {
     *     // ... data to create a UAVdata
     *   }
     * })
     * 
     */
    create<T extends UAVdataCreateArgs>(args: SelectSubset<T, UAVdataCreateArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UAVdata.
     * @param {UAVdataCreateManyArgs} args - Arguments to create many UAVdata.
     * @example
     * // Create many UAVdata
     * const uAVdata = await prisma.uAVdata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UAVdataCreateManyArgs>(args?: SelectSubset<T, UAVdataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UAVdata and returns the data saved in the database.
     * @param {UAVdataCreateManyAndReturnArgs} args - Arguments to create many UAVdata.
     * @example
     * // Create many UAVdata
     * const uAVdata = await prisma.uAVdata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UAVdata and only return the `id`
     * const uAVdataWithIdOnly = await prisma.uAVdata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UAVdataCreateManyAndReturnArgs>(args?: SelectSubset<T, UAVdataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UAVdata.
     * @param {UAVdataDeleteArgs} args - Arguments to delete one UAVdata.
     * @example
     * // Delete one UAVdata
     * const UAVdata = await prisma.uAVdata.delete({
     *   where: {
     *     // ... filter to delete one UAVdata
     *   }
     * })
     * 
     */
    delete<T extends UAVdataDeleteArgs>(args: SelectSubset<T, UAVdataDeleteArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UAVdata.
     * @param {UAVdataUpdateArgs} args - Arguments to update one UAVdata.
     * @example
     * // Update one UAVdata
     * const uAVdata = await prisma.uAVdata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UAVdataUpdateArgs>(args: SelectSubset<T, UAVdataUpdateArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UAVdata.
     * @param {UAVdataDeleteManyArgs} args - Arguments to filter UAVdata to delete.
     * @example
     * // Delete a few UAVdata
     * const { count } = await prisma.uAVdata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UAVdataDeleteManyArgs>(args?: SelectSubset<T, UAVdataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UAVdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAVdataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UAVdata
     * const uAVdata = await prisma.uAVdata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UAVdataUpdateManyArgs>(args: SelectSubset<T, UAVdataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UAVdata and returns the data updated in the database.
     * @param {UAVdataUpdateManyAndReturnArgs} args - Arguments to update many UAVdata.
     * @example
     * // Update many UAVdata
     * const uAVdata = await prisma.uAVdata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UAVdata and only return the `id`
     * const uAVdataWithIdOnly = await prisma.uAVdata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UAVdataUpdateManyAndReturnArgs>(args: SelectSubset<T, UAVdataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UAVdata.
     * @param {UAVdataUpsertArgs} args - Arguments to update or create a UAVdata.
     * @example
     * // Update or create a UAVdata
     * const uAVdata = await prisma.uAVdata.upsert({
     *   create: {
     *     // ... data to create a UAVdata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UAVdata we want to update
     *   }
     * })
     */
    upsert<T extends UAVdataUpsertArgs>(args: SelectSubset<T, UAVdataUpsertArgs<ExtArgs>>): Prisma__UAVdataClient<$Result.GetResult<Prisma.$UAVdataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UAVdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAVdataCountArgs} args - Arguments to filter UAVdata to count.
     * @example
     * // Count the number of UAVdata
     * const count = await prisma.uAVdata.count({
     *   where: {
     *     // ... the filter for the UAVdata we want to count
     *   }
     * })
    **/
    count<T extends UAVdataCountArgs>(
      args?: Subset<T, UAVdataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UAVdataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UAVdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAVdataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UAVdataAggregateArgs>(args: Subset<T, UAVdataAggregateArgs>): Prisma.PrismaPromise<GetUAVdataAggregateType<T>>

    /**
     * Group by UAVdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAVdataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UAVdataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UAVdataGroupByArgs['orderBy'] }
        : { orderBy?: UAVdataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UAVdataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUAVdataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UAVdata model
   */
  readonly fields: UAVdataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UAVdata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UAVdataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends UAVdata$logsArgs<ExtArgs> = {}>(args?: Subset<T, UAVdata$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailureLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UAVdata model
   */
  interface UAVdataFieldRefs {
    readonly id: FieldRef<"UAVdata", 'Int'>
    readonly timestamp: FieldRef<"UAVdata", 'DateTime'>
    readonly latitude: FieldRef<"UAVdata", 'Float'>
    readonly longitude: FieldRef<"UAVdata", 'Float'>
    readonly altitude: FieldRef<"UAVdata", 'Float'>
    readonly verticalSpeed: FieldRef<"UAVdata", 'Float'>
    readonly airspeed: FieldRef<"UAVdata", 'Float'>
    readonly pitch: FieldRef<"UAVdata", 'Float'>
    readonly roll: FieldRef<"UAVdata", 'Float'>
    readonly gear_status: FieldRef<"UAVdata", 'Int'>
    readonly battery_level: FieldRef<"UAVdata", 'Float'>
    readonly temperature: FieldRef<"UAVdata", 'Float'>
    readonly rssi: FieldRef<"UAVdata", 'Float'>
    readonly latency: FieldRef<"UAVdata", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * UAVdata findUnique
   */
  export type UAVdataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * Filter, which UAVdata to fetch.
     */
    where: UAVdataWhereUniqueInput
  }

  /**
   * UAVdata findUniqueOrThrow
   */
  export type UAVdataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * Filter, which UAVdata to fetch.
     */
    where: UAVdataWhereUniqueInput
  }

  /**
   * UAVdata findFirst
   */
  export type UAVdataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * Filter, which UAVdata to fetch.
     */
    where?: UAVdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAVdata to fetch.
     */
    orderBy?: UAVdataOrderByWithRelationInput | UAVdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UAVdata.
     */
    cursor?: UAVdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAVdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAVdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UAVdata.
     */
    distinct?: UAVdataScalarFieldEnum | UAVdataScalarFieldEnum[]
  }

  /**
   * UAVdata findFirstOrThrow
   */
  export type UAVdataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * Filter, which UAVdata to fetch.
     */
    where?: UAVdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAVdata to fetch.
     */
    orderBy?: UAVdataOrderByWithRelationInput | UAVdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UAVdata.
     */
    cursor?: UAVdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAVdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAVdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UAVdata.
     */
    distinct?: UAVdataScalarFieldEnum | UAVdataScalarFieldEnum[]
  }

  /**
   * UAVdata findMany
   */
  export type UAVdataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * Filter, which UAVdata to fetch.
     */
    where?: UAVdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAVdata to fetch.
     */
    orderBy?: UAVdataOrderByWithRelationInput | UAVdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UAVdata.
     */
    cursor?: UAVdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAVdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAVdata.
     */
    skip?: number
    distinct?: UAVdataScalarFieldEnum | UAVdataScalarFieldEnum[]
  }

  /**
   * UAVdata create
   */
  export type UAVdataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * The data needed to create a UAVdata.
     */
    data: XOR<UAVdataCreateInput, UAVdataUncheckedCreateInput>
  }

  /**
   * UAVdata createMany
   */
  export type UAVdataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UAVdata.
     */
    data: UAVdataCreateManyInput | UAVdataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UAVdata createManyAndReturn
   */
  export type UAVdataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * The data used to create many UAVdata.
     */
    data: UAVdataCreateManyInput | UAVdataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UAVdata update
   */
  export type UAVdataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * The data needed to update a UAVdata.
     */
    data: XOR<UAVdataUpdateInput, UAVdataUncheckedUpdateInput>
    /**
     * Choose, which UAVdata to update.
     */
    where: UAVdataWhereUniqueInput
  }

  /**
   * UAVdata updateMany
   */
  export type UAVdataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UAVdata.
     */
    data: XOR<UAVdataUpdateManyMutationInput, UAVdataUncheckedUpdateManyInput>
    /**
     * Filter which UAVdata to update
     */
    where?: UAVdataWhereInput
    /**
     * Limit how many UAVdata to update.
     */
    limit?: number
  }

  /**
   * UAVdata updateManyAndReturn
   */
  export type UAVdataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * The data used to update UAVdata.
     */
    data: XOR<UAVdataUpdateManyMutationInput, UAVdataUncheckedUpdateManyInput>
    /**
     * Filter which UAVdata to update
     */
    where?: UAVdataWhereInput
    /**
     * Limit how many UAVdata to update.
     */
    limit?: number
  }

  /**
   * UAVdata upsert
   */
  export type UAVdataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * The filter to search for the UAVdata to update in case it exists.
     */
    where: UAVdataWhereUniqueInput
    /**
     * In case the UAVdata found by the `where` argument doesn't exist, create a new UAVdata with this data.
     */
    create: XOR<UAVdataCreateInput, UAVdataUncheckedCreateInput>
    /**
     * In case the UAVdata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UAVdataUpdateInput, UAVdataUncheckedUpdateInput>
  }

  /**
   * UAVdata delete
   */
  export type UAVdataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
    /**
     * Filter which UAVdata to delete.
     */
    where: UAVdataWhereUniqueInput
  }

  /**
   * UAVdata deleteMany
   */
  export type UAVdataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UAVdata to delete
     */
    where?: UAVdataWhereInput
    /**
     * Limit how many UAVdata to delete.
     */
    limit?: number
  }

  /**
   * UAVdata.logs
   */
  export type UAVdata$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailureLog
     */
    select?: FailureLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailureLog
     */
    omit?: FailureLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailureLogInclude<ExtArgs> | null
    where?: FailureLogWhereInput
    orderBy?: FailureLogOrderByWithRelationInput | FailureLogOrderByWithRelationInput[]
    cursor?: FailureLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FailureLogScalarFieldEnum | FailureLogScalarFieldEnum[]
  }

  /**
   * UAVdata without action
   */
  export type UAVdataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UAVdata
     */
    select?: UAVdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UAVdata
     */
    omit?: UAVdataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAVdataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FailureLogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    type: 'type',
    severity: 'severity',
    description: 'description',
    isResolved: 'isResolved',
    uavDataId: 'uavDataId'
  };

  export type FailureLogScalarFieldEnum = (typeof FailureLogScalarFieldEnum)[keyof typeof FailureLogScalarFieldEnum]


  export const UAVdataScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    latitude: 'latitude',
    longitude: 'longitude',
    altitude: 'altitude',
    verticalSpeed: 'verticalSpeed',
    airspeed: 'airspeed',
    pitch: 'pitch',
    roll: 'roll',
    gear_status: 'gear_status',
    battery_level: 'battery_level',
    temperature: 'temperature',
    rssi: 'rssi',
    latency: 'latency'
  };

  export type UAVdataScalarFieldEnum = (typeof UAVdataScalarFieldEnum)[keyof typeof UAVdataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FailureType'
   */
  export type EnumFailureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FailureType'>
    


  /**
   * Reference to a field of type 'FailureType[]'
   */
  export type ListEnumFailureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FailureType[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FailureLogWhereInput = {
    AND?: FailureLogWhereInput | FailureLogWhereInput[]
    OR?: FailureLogWhereInput[]
    NOT?: FailureLogWhereInput | FailureLogWhereInput[]
    id?: IntFilter<"FailureLog"> | number
    timestamp?: DateTimeFilter<"FailureLog"> | Date | string
    type?: EnumFailureTypeFilter<"FailureLog"> | $Enums.FailureType
    severity?: EnumSeverityFilter<"FailureLog"> | $Enums.Severity
    description?: StringNullableFilter<"FailureLog"> | string | null
    isResolved?: BoolFilter<"FailureLog"> | boolean
    uavDataId?: IntFilter<"FailureLog"> | number
    uavData?: XOR<UAVdataScalarRelationFilter, UAVdataWhereInput>
  }

  export type FailureLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrderInput | SortOrder
    isResolved?: SortOrder
    uavDataId?: SortOrder
    uavData?: UAVdataOrderByWithRelationInput
  }

  export type FailureLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FailureLogWhereInput | FailureLogWhereInput[]
    OR?: FailureLogWhereInput[]
    NOT?: FailureLogWhereInput | FailureLogWhereInput[]
    timestamp?: DateTimeFilter<"FailureLog"> | Date | string
    type?: EnumFailureTypeFilter<"FailureLog"> | $Enums.FailureType
    severity?: EnumSeverityFilter<"FailureLog"> | $Enums.Severity
    description?: StringNullableFilter<"FailureLog"> | string | null
    isResolved?: BoolFilter<"FailureLog"> | boolean
    uavDataId?: IntFilter<"FailureLog"> | number
    uavData?: XOR<UAVdataScalarRelationFilter, UAVdataWhereInput>
  }, "id">

  export type FailureLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrderInput | SortOrder
    isResolved?: SortOrder
    uavDataId?: SortOrder
    _count?: FailureLogCountOrderByAggregateInput
    _avg?: FailureLogAvgOrderByAggregateInput
    _max?: FailureLogMaxOrderByAggregateInput
    _min?: FailureLogMinOrderByAggregateInput
    _sum?: FailureLogSumOrderByAggregateInput
  }

  export type FailureLogScalarWhereWithAggregatesInput = {
    AND?: FailureLogScalarWhereWithAggregatesInput | FailureLogScalarWhereWithAggregatesInput[]
    OR?: FailureLogScalarWhereWithAggregatesInput[]
    NOT?: FailureLogScalarWhereWithAggregatesInput | FailureLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FailureLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"FailureLog"> | Date | string
    type?: EnumFailureTypeWithAggregatesFilter<"FailureLog"> | $Enums.FailureType
    severity?: EnumSeverityWithAggregatesFilter<"FailureLog"> | $Enums.Severity
    description?: StringNullableWithAggregatesFilter<"FailureLog"> | string | null
    isResolved?: BoolWithAggregatesFilter<"FailureLog"> | boolean
    uavDataId?: IntWithAggregatesFilter<"FailureLog"> | number
  }

  export type UAVdataWhereInput = {
    AND?: UAVdataWhereInput | UAVdataWhereInput[]
    OR?: UAVdataWhereInput[]
    NOT?: UAVdataWhereInput | UAVdataWhereInput[]
    id?: IntFilter<"UAVdata"> | number
    timestamp?: DateTimeFilter<"UAVdata"> | Date | string
    latitude?: FloatFilter<"UAVdata"> | number
    longitude?: FloatFilter<"UAVdata"> | number
    altitude?: FloatFilter<"UAVdata"> | number
    verticalSpeed?: FloatFilter<"UAVdata"> | number
    airspeed?: FloatFilter<"UAVdata"> | number
    pitch?: FloatFilter<"UAVdata"> | number
    roll?: FloatFilter<"UAVdata"> | number
    gear_status?: IntFilter<"UAVdata"> | number
    battery_level?: FloatFilter<"UAVdata"> | number
    temperature?: FloatFilter<"UAVdata"> | number
    rssi?: FloatNullableFilter<"UAVdata"> | number | null
    latency?: FloatNullableFilter<"UAVdata"> | number | null
    logs?: FailureLogListRelationFilter
  }

  export type UAVdataOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    verticalSpeed?: SortOrder
    airspeed?: SortOrder
    pitch?: SortOrder
    roll?: SortOrder
    gear_status?: SortOrder
    battery_level?: SortOrder
    temperature?: SortOrder
    rssi?: SortOrderInput | SortOrder
    latency?: SortOrderInput | SortOrder
    logs?: FailureLogOrderByRelationAggregateInput
  }

  export type UAVdataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UAVdataWhereInput | UAVdataWhereInput[]
    OR?: UAVdataWhereInput[]
    NOT?: UAVdataWhereInput | UAVdataWhereInput[]
    timestamp?: DateTimeFilter<"UAVdata"> | Date | string
    latitude?: FloatFilter<"UAVdata"> | number
    longitude?: FloatFilter<"UAVdata"> | number
    altitude?: FloatFilter<"UAVdata"> | number
    verticalSpeed?: FloatFilter<"UAVdata"> | number
    airspeed?: FloatFilter<"UAVdata"> | number
    pitch?: FloatFilter<"UAVdata"> | number
    roll?: FloatFilter<"UAVdata"> | number
    gear_status?: IntFilter<"UAVdata"> | number
    battery_level?: FloatFilter<"UAVdata"> | number
    temperature?: FloatFilter<"UAVdata"> | number
    rssi?: FloatNullableFilter<"UAVdata"> | number | null
    latency?: FloatNullableFilter<"UAVdata"> | number | null
    logs?: FailureLogListRelationFilter
  }, "id">

  export type UAVdataOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    verticalSpeed?: SortOrder
    airspeed?: SortOrder
    pitch?: SortOrder
    roll?: SortOrder
    gear_status?: SortOrder
    battery_level?: SortOrder
    temperature?: SortOrder
    rssi?: SortOrderInput | SortOrder
    latency?: SortOrderInput | SortOrder
    _count?: UAVdataCountOrderByAggregateInput
    _avg?: UAVdataAvgOrderByAggregateInput
    _max?: UAVdataMaxOrderByAggregateInput
    _min?: UAVdataMinOrderByAggregateInput
    _sum?: UAVdataSumOrderByAggregateInput
  }

  export type UAVdataScalarWhereWithAggregatesInput = {
    AND?: UAVdataScalarWhereWithAggregatesInput | UAVdataScalarWhereWithAggregatesInput[]
    OR?: UAVdataScalarWhereWithAggregatesInput[]
    NOT?: UAVdataScalarWhereWithAggregatesInput | UAVdataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UAVdata"> | number
    timestamp?: DateTimeWithAggregatesFilter<"UAVdata"> | Date | string
    latitude?: FloatWithAggregatesFilter<"UAVdata"> | number
    longitude?: FloatWithAggregatesFilter<"UAVdata"> | number
    altitude?: FloatWithAggregatesFilter<"UAVdata"> | number
    verticalSpeed?: FloatWithAggregatesFilter<"UAVdata"> | number
    airspeed?: FloatWithAggregatesFilter<"UAVdata"> | number
    pitch?: FloatWithAggregatesFilter<"UAVdata"> | number
    roll?: FloatWithAggregatesFilter<"UAVdata"> | number
    gear_status?: IntWithAggregatesFilter<"UAVdata"> | number
    battery_level?: FloatWithAggregatesFilter<"UAVdata"> | number
    temperature?: FloatWithAggregatesFilter<"UAVdata"> | number
    rssi?: FloatNullableWithAggregatesFilter<"UAVdata"> | number | null
    latency?: FloatNullableWithAggregatesFilter<"UAVdata"> | number | null
  }

  export type FailureLogCreateInput = {
    timestamp?: Date | string
    type: $Enums.FailureType
    severity: $Enums.Severity
    description?: string | null
    isResolved?: boolean
    uavData: UAVdataCreateNestedOneWithoutLogsInput
  }

  export type FailureLogUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string
    type: $Enums.FailureType
    severity: $Enums.Severity
    description?: string | null
    isResolved?: boolean
    uavDataId: number
  }

  export type FailureLogUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFailureTypeFieldUpdateOperationsInput | $Enums.FailureType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    uavData?: UAVdataUpdateOneRequiredWithoutLogsNestedInput
  }

  export type FailureLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFailureTypeFieldUpdateOperationsInput | $Enums.FailureType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    uavDataId?: IntFieldUpdateOperationsInput | number
  }

  export type FailureLogCreateManyInput = {
    id?: number
    timestamp?: Date | string
    type: $Enums.FailureType
    severity: $Enums.Severity
    description?: string | null
    isResolved?: boolean
    uavDataId: number
  }

  export type FailureLogUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFailureTypeFieldUpdateOperationsInput | $Enums.FailureType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FailureLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFailureTypeFieldUpdateOperationsInput | $Enums.FailureType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    uavDataId?: IntFieldUpdateOperationsInput | number
  }

  export type UAVdataCreateInput = {
    timestamp?: Date | string
    latitude: number
    longitude: number
    altitude: number
    verticalSpeed: number
    airspeed: number
    pitch: number
    roll: number
    gear_status: number
    battery_level: number
    temperature: number
    rssi?: number | null
    latency?: number | null
    logs?: FailureLogCreateNestedManyWithoutUavDataInput
  }

  export type UAVdataUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string
    latitude: number
    longitude: number
    altitude: number
    verticalSpeed: number
    airspeed: number
    pitch: number
    roll: number
    gear_status: number
    battery_level: number
    temperature: number
    rssi?: number | null
    latency?: number | null
    logs?: FailureLogUncheckedCreateNestedManyWithoutUavDataInput
  }

  export type UAVdataUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    verticalSpeed?: FloatFieldUpdateOperationsInput | number
    airspeed?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    gear_status?: IntFieldUpdateOperationsInput | number
    battery_level?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    rssi?: NullableFloatFieldUpdateOperationsInput | number | null
    latency?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: FailureLogUpdateManyWithoutUavDataNestedInput
  }

  export type UAVdataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    verticalSpeed?: FloatFieldUpdateOperationsInput | number
    airspeed?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    gear_status?: IntFieldUpdateOperationsInput | number
    battery_level?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    rssi?: NullableFloatFieldUpdateOperationsInput | number | null
    latency?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: FailureLogUncheckedUpdateManyWithoutUavDataNestedInput
  }

  export type UAVdataCreateManyInput = {
    id?: number
    timestamp?: Date | string
    latitude: number
    longitude: number
    altitude: number
    verticalSpeed: number
    airspeed: number
    pitch: number
    roll: number
    gear_status: number
    battery_level: number
    temperature: number
    rssi?: number | null
    latency?: number | null
  }

  export type UAVdataUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    verticalSpeed?: FloatFieldUpdateOperationsInput | number
    airspeed?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    gear_status?: IntFieldUpdateOperationsInput | number
    battery_level?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    rssi?: NullableFloatFieldUpdateOperationsInput | number | null
    latency?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UAVdataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    verticalSpeed?: FloatFieldUpdateOperationsInput | number
    airspeed?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    gear_status?: IntFieldUpdateOperationsInput | number
    battery_level?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    rssi?: NullableFloatFieldUpdateOperationsInput | number | null
    latency?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumFailureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureType | EnumFailureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFailureTypeFilter<$PrismaModel> | $Enums.FailureType
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UAVdataScalarRelationFilter = {
    is?: UAVdataWhereInput
    isNot?: UAVdataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FailureLogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    isResolved?: SortOrder
    uavDataId?: SortOrder
  }

  export type FailureLogAvgOrderByAggregateInput = {
    id?: SortOrder
    uavDataId?: SortOrder
  }

  export type FailureLogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    isResolved?: SortOrder
    uavDataId?: SortOrder
  }

  export type FailureLogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    isResolved?: SortOrder
    uavDataId?: SortOrder
  }

  export type FailureLogSumOrderByAggregateInput = {
    id?: SortOrder
    uavDataId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumFailureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureType | EnumFailureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFailureTypeWithAggregatesFilter<$PrismaModel> | $Enums.FailureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFailureTypeFilter<$PrismaModel>
    _max?: NestedEnumFailureTypeFilter<$PrismaModel>
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FailureLogListRelationFilter = {
    every?: FailureLogWhereInput
    some?: FailureLogWhereInput
    none?: FailureLogWhereInput
  }

  export type FailureLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UAVdataCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    verticalSpeed?: SortOrder
    airspeed?: SortOrder
    pitch?: SortOrder
    roll?: SortOrder
    gear_status?: SortOrder
    battery_level?: SortOrder
    temperature?: SortOrder
    rssi?: SortOrder
    latency?: SortOrder
  }

  export type UAVdataAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    verticalSpeed?: SortOrder
    airspeed?: SortOrder
    pitch?: SortOrder
    roll?: SortOrder
    gear_status?: SortOrder
    battery_level?: SortOrder
    temperature?: SortOrder
    rssi?: SortOrder
    latency?: SortOrder
  }

  export type UAVdataMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    verticalSpeed?: SortOrder
    airspeed?: SortOrder
    pitch?: SortOrder
    roll?: SortOrder
    gear_status?: SortOrder
    battery_level?: SortOrder
    temperature?: SortOrder
    rssi?: SortOrder
    latency?: SortOrder
  }

  export type UAVdataMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    verticalSpeed?: SortOrder
    airspeed?: SortOrder
    pitch?: SortOrder
    roll?: SortOrder
    gear_status?: SortOrder
    battery_level?: SortOrder
    temperature?: SortOrder
    rssi?: SortOrder
    latency?: SortOrder
  }

  export type UAVdataSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    verticalSpeed?: SortOrder
    airspeed?: SortOrder
    pitch?: SortOrder
    roll?: SortOrder
    gear_status?: SortOrder
    battery_level?: SortOrder
    temperature?: SortOrder
    rssi?: SortOrder
    latency?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UAVdataCreateNestedOneWithoutLogsInput = {
    create?: XOR<UAVdataCreateWithoutLogsInput, UAVdataUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UAVdataCreateOrConnectWithoutLogsInput
    connect?: UAVdataWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumFailureTypeFieldUpdateOperationsInput = {
    set?: $Enums.FailureType
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UAVdataUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UAVdataCreateWithoutLogsInput, UAVdataUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UAVdataCreateOrConnectWithoutLogsInput
    upsert?: UAVdataUpsertWithoutLogsInput
    connect?: UAVdataWhereUniqueInput
    update?: XOR<XOR<UAVdataUpdateToOneWithWhereWithoutLogsInput, UAVdataUpdateWithoutLogsInput>, UAVdataUncheckedUpdateWithoutLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FailureLogCreateNestedManyWithoutUavDataInput = {
    create?: XOR<FailureLogCreateWithoutUavDataInput, FailureLogUncheckedCreateWithoutUavDataInput> | FailureLogCreateWithoutUavDataInput[] | FailureLogUncheckedCreateWithoutUavDataInput[]
    connectOrCreate?: FailureLogCreateOrConnectWithoutUavDataInput | FailureLogCreateOrConnectWithoutUavDataInput[]
    createMany?: FailureLogCreateManyUavDataInputEnvelope
    connect?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
  }

  export type FailureLogUncheckedCreateNestedManyWithoutUavDataInput = {
    create?: XOR<FailureLogCreateWithoutUavDataInput, FailureLogUncheckedCreateWithoutUavDataInput> | FailureLogCreateWithoutUavDataInput[] | FailureLogUncheckedCreateWithoutUavDataInput[]
    connectOrCreate?: FailureLogCreateOrConnectWithoutUavDataInput | FailureLogCreateOrConnectWithoutUavDataInput[]
    createMany?: FailureLogCreateManyUavDataInputEnvelope
    connect?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FailureLogUpdateManyWithoutUavDataNestedInput = {
    create?: XOR<FailureLogCreateWithoutUavDataInput, FailureLogUncheckedCreateWithoutUavDataInput> | FailureLogCreateWithoutUavDataInput[] | FailureLogUncheckedCreateWithoutUavDataInput[]
    connectOrCreate?: FailureLogCreateOrConnectWithoutUavDataInput | FailureLogCreateOrConnectWithoutUavDataInput[]
    upsert?: FailureLogUpsertWithWhereUniqueWithoutUavDataInput | FailureLogUpsertWithWhereUniqueWithoutUavDataInput[]
    createMany?: FailureLogCreateManyUavDataInputEnvelope
    set?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    disconnect?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    delete?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    connect?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    update?: FailureLogUpdateWithWhereUniqueWithoutUavDataInput | FailureLogUpdateWithWhereUniqueWithoutUavDataInput[]
    updateMany?: FailureLogUpdateManyWithWhereWithoutUavDataInput | FailureLogUpdateManyWithWhereWithoutUavDataInput[]
    deleteMany?: FailureLogScalarWhereInput | FailureLogScalarWhereInput[]
  }

  export type FailureLogUncheckedUpdateManyWithoutUavDataNestedInput = {
    create?: XOR<FailureLogCreateWithoutUavDataInput, FailureLogUncheckedCreateWithoutUavDataInput> | FailureLogCreateWithoutUavDataInput[] | FailureLogUncheckedCreateWithoutUavDataInput[]
    connectOrCreate?: FailureLogCreateOrConnectWithoutUavDataInput | FailureLogCreateOrConnectWithoutUavDataInput[]
    upsert?: FailureLogUpsertWithWhereUniqueWithoutUavDataInput | FailureLogUpsertWithWhereUniqueWithoutUavDataInput[]
    createMany?: FailureLogCreateManyUavDataInputEnvelope
    set?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    disconnect?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    delete?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    connect?: FailureLogWhereUniqueInput | FailureLogWhereUniqueInput[]
    update?: FailureLogUpdateWithWhereUniqueWithoutUavDataInput | FailureLogUpdateWithWhereUniqueWithoutUavDataInput[]
    updateMany?: FailureLogUpdateManyWithWhereWithoutUavDataInput | FailureLogUpdateManyWithWhereWithoutUavDataInput[]
    deleteMany?: FailureLogScalarWhereInput | FailureLogScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumFailureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureType | EnumFailureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFailureTypeFilter<$PrismaModel> | $Enums.FailureType
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFailureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FailureType | EnumFailureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FailureType[] | ListEnumFailureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFailureTypeWithAggregatesFilter<$PrismaModel> | $Enums.FailureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFailureTypeFilter<$PrismaModel>
    _max?: NestedEnumFailureTypeFilter<$PrismaModel>
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UAVdataCreateWithoutLogsInput = {
    timestamp?: Date | string
    latitude: number
    longitude: number
    altitude: number
    verticalSpeed: number
    airspeed: number
    pitch: number
    roll: number
    gear_status: number
    battery_level: number
    temperature: number
    rssi?: number | null
    latency?: number | null
  }

  export type UAVdataUncheckedCreateWithoutLogsInput = {
    id?: number
    timestamp?: Date | string
    latitude: number
    longitude: number
    altitude: number
    verticalSpeed: number
    airspeed: number
    pitch: number
    roll: number
    gear_status: number
    battery_level: number
    temperature: number
    rssi?: number | null
    latency?: number | null
  }

  export type UAVdataCreateOrConnectWithoutLogsInput = {
    where: UAVdataWhereUniqueInput
    create: XOR<UAVdataCreateWithoutLogsInput, UAVdataUncheckedCreateWithoutLogsInput>
  }

  export type UAVdataUpsertWithoutLogsInput = {
    update: XOR<UAVdataUpdateWithoutLogsInput, UAVdataUncheckedUpdateWithoutLogsInput>
    create: XOR<UAVdataCreateWithoutLogsInput, UAVdataUncheckedCreateWithoutLogsInput>
    where?: UAVdataWhereInput
  }

  export type UAVdataUpdateToOneWithWhereWithoutLogsInput = {
    where?: UAVdataWhereInput
    data: XOR<UAVdataUpdateWithoutLogsInput, UAVdataUncheckedUpdateWithoutLogsInput>
  }

  export type UAVdataUpdateWithoutLogsInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    verticalSpeed?: FloatFieldUpdateOperationsInput | number
    airspeed?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    gear_status?: IntFieldUpdateOperationsInput | number
    battery_level?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    rssi?: NullableFloatFieldUpdateOperationsInput | number | null
    latency?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UAVdataUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    verticalSpeed?: FloatFieldUpdateOperationsInput | number
    airspeed?: FloatFieldUpdateOperationsInput | number
    pitch?: FloatFieldUpdateOperationsInput | number
    roll?: FloatFieldUpdateOperationsInput | number
    gear_status?: IntFieldUpdateOperationsInput | number
    battery_level?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    rssi?: NullableFloatFieldUpdateOperationsInput | number | null
    latency?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FailureLogCreateWithoutUavDataInput = {
    timestamp?: Date | string
    type: $Enums.FailureType
    severity: $Enums.Severity
    description?: string | null
    isResolved?: boolean
  }

  export type FailureLogUncheckedCreateWithoutUavDataInput = {
    id?: number
    timestamp?: Date | string
    type: $Enums.FailureType
    severity: $Enums.Severity
    description?: string | null
    isResolved?: boolean
  }

  export type FailureLogCreateOrConnectWithoutUavDataInput = {
    where: FailureLogWhereUniqueInput
    create: XOR<FailureLogCreateWithoutUavDataInput, FailureLogUncheckedCreateWithoutUavDataInput>
  }

  export type FailureLogCreateManyUavDataInputEnvelope = {
    data: FailureLogCreateManyUavDataInput | FailureLogCreateManyUavDataInput[]
    skipDuplicates?: boolean
  }

  export type FailureLogUpsertWithWhereUniqueWithoutUavDataInput = {
    where: FailureLogWhereUniqueInput
    update: XOR<FailureLogUpdateWithoutUavDataInput, FailureLogUncheckedUpdateWithoutUavDataInput>
    create: XOR<FailureLogCreateWithoutUavDataInput, FailureLogUncheckedCreateWithoutUavDataInput>
  }

  export type FailureLogUpdateWithWhereUniqueWithoutUavDataInput = {
    where: FailureLogWhereUniqueInput
    data: XOR<FailureLogUpdateWithoutUavDataInput, FailureLogUncheckedUpdateWithoutUavDataInput>
  }

  export type FailureLogUpdateManyWithWhereWithoutUavDataInput = {
    where: FailureLogScalarWhereInput
    data: XOR<FailureLogUpdateManyMutationInput, FailureLogUncheckedUpdateManyWithoutUavDataInput>
  }

  export type FailureLogScalarWhereInput = {
    AND?: FailureLogScalarWhereInput | FailureLogScalarWhereInput[]
    OR?: FailureLogScalarWhereInput[]
    NOT?: FailureLogScalarWhereInput | FailureLogScalarWhereInput[]
    id?: IntFilter<"FailureLog"> | number
    timestamp?: DateTimeFilter<"FailureLog"> | Date | string
    type?: EnumFailureTypeFilter<"FailureLog"> | $Enums.FailureType
    severity?: EnumSeverityFilter<"FailureLog"> | $Enums.Severity
    description?: StringNullableFilter<"FailureLog"> | string | null
    isResolved?: BoolFilter<"FailureLog"> | boolean
    uavDataId?: IntFilter<"FailureLog"> | number
  }

  export type FailureLogCreateManyUavDataInput = {
    id?: number
    timestamp?: Date | string
    type: $Enums.FailureType
    severity: $Enums.Severity
    description?: string | null
    isResolved?: boolean
  }

  export type FailureLogUpdateWithoutUavDataInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFailureTypeFieldUpdateOperationsInput | $Enums.FailureType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FailureLogUncheckedUpdateWithoutUavDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFailureTypeFieldUpdateOperationsInput | $Enums.FailureType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FailureLogUncheckedUpdateManyWithoutUavDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumFailureTypeFieldUpdateOperationsInput | $Enums.FailureType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}