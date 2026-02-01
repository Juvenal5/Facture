
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model avoir
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type avoir = $Result.DefaultSelection<Prisma.$avoirPayload>
/**
 * Model commande
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type commande = $Result.DefaultSelection<Prisma.$commandePayload>
/**
 * Model facture
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type facture = $Result.DefaultSelection<Prisma.$facturePayload>
/**
 * Model playing_with_neon
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type playing_with_neon = $Result.DefaultSelection<Prisma.$playing_with_neonPayload>
/**
 * Model produit
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type produit = $Result.DefaultSelection<Prisma.$produitPayload>
/**
 * Model type_produit
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type type_produit = $Result.DefaultSelection<Prisma.$type_produitPayload>
/**
 * Model users
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Avoirs
 * const avoirs = await prisma.avoir.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Avoirs
   * const avoirs = await prisma.avoir.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.avoir`: Exposes CRUD operations for the **avoir** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avoirs
    * const avoirs = await prisma.avoir.findMany()
    * ```
    */
  get avoir(): Prisma.avoirDelegate<ExtArgs>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.commandeDelegate<ExtArgs>;

  /**
   * `prisma.facture`: Exposes CRUD operations for the **facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factures
    * const factures = await prisma.facture.findMany()
    * ```
    */
  get facture(): Prisma.factureDelegate<ExtArgs>;

  /**
   * `prisma.playing_with_neon`: Exposes CRUD operations for the **playing_with_neon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playing_with_neons
    * const playing_with_neons = await prisma.playing_with_neon.findMany()
    * ```
    */
  get playing_with_neon(): Prisma.playing_with_neonDelegate<ExtArgs>;

  /**
   * `prisma.produit`: Exposes CRUD operations for the **produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produits
    * const produits = await prisma.produit.findMany()
    * ```
    */
  get produit(): Prisma.produitDelegate<ExtArgs>;

  /**
   * `prisma.type_produit`: Exposes CRUD operations for the **type_produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_produits
    * const type_produits = await prisma.type_produit.findMany()
    * ```
    */
  get type_produit(): Prisma.type_produitDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    avoir: 'avoir',
    commande: 'commande',
    facture: 'facture',
    playing_with_neon: 'playing_with_neon',
    produit: 'produit',
    type_produit: 'type_produit',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "avoir" | "commande" | "facture" | "playing_with_neon" | "produit" | "type_produit" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      avoir: {
        payload: Prisma.$avoirPayload<ExtArgs>
        fields: Prisma.avoirFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avoirFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avoirFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>
          }
          findFirst: {
            args: Prisma.avoirFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avoirFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>
          }
          findMany: {
            args: Prisma.avoirFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>[]
          }
          create: {
            args: Prisma.avoirCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>
          }
          createMany: {
            args: Prisma.avoirCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.avoirCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>[]
          }
          delete: {
            args: Prisma.avoirDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>
          }
          update: {
            args: Prisma.avoirUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>
          }
          deleteMany: {
            args: Prisma.avoirDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avoirUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.avoirUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avoirPayload>
          }
          aggregate: {
            args: Prisma.AvoirAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvoir>
          }
          groupBy: {
            args: Prisma.avoirGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvoirGroupByOutputType>[]
          }
          count: {
            args: Prisma.avoirCountArgs<ExtArgs>
            result: $Utils.Optional<AvoirCountAggregateOutputType> | number
          }
        }
      }
      commande: {
        payload: Prisma.$commandePayload<ExtArgs>
        fields: Prisma.commandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>
          }
          findFirst: {
            args: Prisma.commandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>
          }
          findMany: {
            args: Prisma.commandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>[]
          }
          create: {
            args: Prisma.commandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>
          }
          createMany: {
            args: Prisma.commandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>[]
          }
          delete: {
            args: Prisma.commandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>
          }
          update: {
            args: Prisma.commandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>
          }
          deleteMany: {
            args: Prisma.commandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandePayload>
          }
          aggregate: {
            args: Prisma.CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommande>
          }
          groupBy: {
            args: Prisma.commandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.commandeCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeCountAggregateOutputType> | number
          }
        }
      }
      facture: {
        payload: Prisma.$facturePayload<ExtArgs>
        fields: Prisma.factureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.factureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.factureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          findFirst: {
            args: Prisma.factureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.factureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          findMany: {
            args: Prisma.factureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>[]
          }
          create: {
            args: Prisma.factureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          createMany: {
            args: Prisma.factureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.factureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>[]
          }
          delete: {
            args: Prisma.factureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          update: {
            args: Prisma.factureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          deleteMany: {
            args: Prisma.factureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.factureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.factureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          aggregate: {
            args: Prisma.FactureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacture>
          }
          groupBy: {
            args: Prisma.factureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactureGroupByOutputType>[]
          }
          count: {
            args: Prisma.factureCountArgs<ExtArgs>
            result: $Utils.Optional<FactureCountAggregateOutputType> | number
          }
        }
      }
      playing_with_neon: {
        payload: Prisma.$playing_with_neonPayload<ExtArgs>
        fields: Prisma.playing_with_neonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playing_with_neonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playing_with_neonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          findFirst: {
            args: Prisma.playing_with_neonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playing_with_neonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          findMany: {
            args: Prisma.playing_with_neonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          create: {
            args: Prisma.playing_with_neonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          createMany: {
            args: Prisma.playing_with_neonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playing_with_neonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>[]
          }
          delete: {
            args: Prisma.playing_with_neonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          update: {
            args: Prisma.playing_with_neonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          deleteMany: {
            args: Prisma.playing_with_neonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playing_with_neonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playing_with_neonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playing_with_neonPayload>
          }
          aggregate: {
            args: Prisma.Playing_with_neonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaying_with_neon>
          }
          groupBy: {
            args: Prisma.playing_with_neonGroupByArgs<ExtArgs>
            result: $Utils.Optional<Playing_with_neonGroupByOutputType>[]
          }
          count: {
            args: Prisma.playing_with_neonCountArgs<ExtArgs>
            result: $Utils.Optional<Playing_with_neonCountAggregateOutputType> | number
          }
        }
      }
      produit: {
        payload: Prisma.$produitPayload<ExtArgs>
        fields: Prisma.produitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>
          }
          findFirst: {
            args: Prisma.produitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>
          }
          findMany: {
            args: Prisma.produitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>[]
          }
          create: {
            args: Prisma.produitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>
          }
          createMany: {
            args: Prisma.produitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>[]
          }
          delete: {
            args: Prisma.produitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>
          }
          update: {
            args: Prisma.produitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>
          }
          deleteMany: {
            args: Prisma.produitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produitPayload>
          }
          aggregate: {
            args: Prisma.ProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit>
          }
          groupBy: {
            args: Prisma.produitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.produitCountArgs<ExtArgs>
            result: $Utils.Optional<ProduitCountAggregateOutputType> | number
          }
        }
      }
      type_produit: {
        payload: Prisma.$type_produitPayload<ExtArgs>
        fields: Prisma.type_produitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.type_produitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.type_produitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>
          }
          findFirst: {
            args: Prisma.type_produitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.type_produitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>
          }
          findMany: {
            args: Prisma.type_produitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>[]
          }
          create: {
            args: Prisma.type_produitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>
          }
          createMany: {
            args: Prisma.type_produitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.type_produitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>[]
          }
          delete: {
            args: Prisma.type_produitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>
          }
          update: {
            args: Prisma.type_produitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>
          }
          deleteMany: {
            args: Prisma.type_produitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.type_produitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.type_produitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_produitPayload>
          }
          aggregate: {
            args: Prisma.Type_produitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType_produit>
          }
          groupBy: {
            args: Prisma.type_produitGroupByArgs<ExtArgs>
            result: $Utils.Optional<Type_produitGroupByOutputType>[]
          }
          count: {
            args: Prisma.type_produitCountArgs<ExtArgs>
            result: $Utils.Optional<Type_produitCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CommandeCountOutputType
   */

  export type CommandeCountOutputType = {
    avoir: number
  }

  export type CommandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avoir?: boolean | CommandeCountOutputTypeCountAvoirArgs
  }

  // Custom InputTypes
  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeCountOutputType
     */
    select?: CommandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountAvoirArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avoirWhereInput
  }


  /**
   * Count Type ProduitCountOutputType
   */

  export type ProduitCountOutputType = {
    avoir: number
  }

  export type ProduitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avoir?: boolean | ProduitCountOutputTypeCountAvoirArgs
  }

  // Custom InputTypes
  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduitCountOutputType
     */
    select?: ProduitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountAvoirArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avoirWhereInput
  }


  /**
   * Count Type Type_produitCountOutputType
   */

  export type Type_produitCountOutputType = {
    produit: number
  }

  export type Type_produitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | Type_produitCountOutputTypeCountProduitArgs
  }

  // Custom InputTypes
  /**
   * Type_produitCountOutputType without action
   */
  export type Type_produitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_produitCountOutputType
     */
    select?: Type_produitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Type_produitCountOutputType without action
   */
  export type Type_produitCountOutputTypeCountProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produitWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    commande: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | UsersCountOutputTypeCountCommandeArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commandeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model avoir
   */

  export type AggregateAvoir = {
    _count: AvoirCountAggregateOutputType | null
    _avg: AvoirAvgAggregateOutputType | null
    _sum: AvoirSumAggregateOutputType | null
    _min: AvoirMinAggregateOutputType | null
    _max: AvoirMaxAggregateOutputType | null
  }

  export type AvoirAvgAggregateOutputType = {
    commande_id: number | null
    produit_id: number | null
    apparaitre: number | null
  }

  export type AvoirSumAggregateOutputType = {
    commande_id: number | null
    produit_id: number | null
    apparaitre: number | null
  }

  export type AvoirMinAggregateOutputType = {
    commande_id: number | null
    produit_id: number | null
    apparaitre: number | null
  }

  export type AvoirMaxAggregateOutputType = {
    commande_id: number | null
    produit_id: number | null
    apparaitre: number | null
  }

  export type AvoirCountAggregateOutputType = {
    commande_id: number
    produit_id: number
    apparaitre: number
    _all: number
  }


  export type AvoirAvgAggregateInputType = {
    commande_id?: true
    produit_id?: true
    apparaitre?: true
  }

  export type AvoirSumAggregateInputType = {
    commande_id?: true
    produit_id?: true
    apparaitre?: true
  }

  export type AvoirMinAggregateInputType = {
    commande_id?: true
    produit_id?: true
    apparaitre?: true
  }

  export type AvoirMaxAggregateInputType = {
    commande_id?: true
    produit_id?: true
    apparaitre?: true
  }

  export type AvoirCountAggregateInputType = {
    commande_id?: true
    produit_id?: true
    apparaitre?: true
    _all?: true
  }

  export type AvoirAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avoir to aggregate.
     */
    where?: avoirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avoirs to fetch.
     */
    orderBy?: avoirOrderByWithRelationInput | avoirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avoirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avoirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avoirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avoirs
    **/
    _count?: true | AvoirCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvoirAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvoirSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvoirMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvoirMaxAggregateInputType
  }

  export type GetAvoirAggregateType<T extends AvoirAggregateArgs> = {
        [P in keyof T & keyof AggregateAvoir]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvoir[P]>
      : GetScalarType<T[P], AggregateAvoir[P]>
  }




  export type avoirGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avoirWhereInput
    orderBy?: avoirOrderByWithAggregationInput | avoirOrderByWithAggregationInput[]
    by: AvoirScalarFieldEnum[] | AvoirScalarFieldEnum
    having?: avoirScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvoirCountAggregateInputType | true
    _avg?: AvoirAvgAggregateInputType
    _sum?: AvoirSumAggregateInputType
    _min?: AvoirMinAggregateInputType
    _max?: AvoirMaxAggregateInputType
  }

  export type AvoirGroupByOutputType = {
    commande_id: number
    produit_id: number
    apparaitre: number
    _count: AvoirCountAggregateOutputType | null
    _avg: AvoirAvgAggregateOutputType | null
    _sum: AvoirSumAggregateOutputType | null
    _min: AvoirMinAggregateOutputType | null
    _max: AvoirMaxAggregateOutputType | null
  }

  type GetAvoirGroupByPayload<T extends avoirGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvoirGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvoirGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvoirGroupByOutputType[P]>
            : GetScalarType<T[P], AvoirGroupByOutputType[P]>
        }
      >
    >


  export type avoirSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commande_id?: boolean
    produit_id?: boolean
    apparaitre?: boolean
    commande?: boolean | commandeDefaultArgs<ExtArgs>
    produit?: boolean | produitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avoir"]>

  export type avoirSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commande_id?: boolean
    produit_id?: boolean
    apparaitre?: boolean
    commande?: boolean | commandeDefaultArgs<ExtArgs>
    produit?: boolean | produitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avoir"]>

  export type avoirSelectScalar = {
    commande_id?: boolean
    produit_id?: boolean
    apparaitre?: boolean
  }

  export type avoirInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | commandeDefaultArgs<ExtArgs>
    produit?: boolean | produitDefaultArgs<ExtArgs>
  }
  export type avoirIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | commandeDefaultArgs<ExtArgs>
    produit?: boolean | produitDefaultArgs<ExtArgs>
  }

  export type $avoirPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avoir"
    objects: {
      commande: Prisma.$commandePayload<ExtArgs>
      produit: Prisma.$produitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      commande_id: number
      produit_id: number
      apparaitre: number
    }, ExtArgs["result"]["avoir"]>
    composites: {}
  }

  type avoirGetPayload<S extends boolean | null | undefined | avoirDefaultArgs> = $Result.GetResult<Prisma.$avoirPayload, S>

  type avoirCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<avoirFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvoirCountAggregateInputType | true
    }

  export interface avoirDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avoir'], meta: { name: 'avoir' } }
    /**
     * Find zero or one Avoir that matches the filter.
     * @param {avoirFindUniqueArgs} args - Arguments to find a Avoir
     * @example
     * // Get one Avoir
     * const avoir = await prisma.avoir.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avoirFindUniqueArgs>(args: SelectSubset<T, avoirFindUniqueArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Avoir that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {avoirFindUniqueOrThrowArgs} args - Arguments to find a Avoir
     * @example
     * // Get one Avoir
     * const avoir = await prisma.avoir.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avoirFindUniqueOrThrowArgs>(args: SelectSubset<T, avoirFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Avoir that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avoirFindFirstArgs} args - Arguments to find a Avoir
     * @example
     * // Get one Avoir
     * const avoir = await prisma.avoir.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avoirFindFirstArgs>(args?: SelectSubset<T, avoirFindFirstArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Avoir that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avoirFindFirstOrThrowArgs} args - Arguments to find a Avoir
     * @example
     * // Get one Avoir
     * const avoir = await prisma.avoir.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avoirFindFirstOrThrowArgs>(args?: SelectSubset<T, avoirFindFirstOrThrowArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Avoirs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avoirFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avoirs
     * const avoirs = await prisma.avoir.findMany()
     * 
     * // Get first 10 Avoirs
     * const avoirs = await prisma.avoir.findMany({ take: 10 })
     * 
     * // Only select the `commande_id`
     * const avoirWithCommande_idOnly = await prisma.avoir.findMany({ select: { commande_id: true } })
     * 
     */
    findMany<T extends avoirFindManyArgs>(args?: SelectSubset<T, avoirFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Avoir.
     * @param {avoirCreateArgs} args - Arguments to create a Avoir.
     * @example
     * // Create one Avoir
     * const Avoir = await prisma.avoir.create({
     *   data: {
     *     // ... data to create a Avoir
     *   }
     * })
     * 
     */
    create<T extends avoirCreateArgs>(args: SelectSubset<T, avoirCreateArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Avoirs.
     * @param {avoirCreateManyArgs} args - Arguments to create many Avoirs.
     * @example
     * // Create many Avoirs
     * const avoir = await prisma.avoir.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avoirCreateManyArgs>(args?: SelectSubset<T, avoirCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avoirs and returns the data saved in the database.
     * @param {avoirCreateManyAndReturnArgs} args - Arguments to create many Avoirs.
     * @example
     * // Create many Avoirs
     * const avoir = await prisma.avoir.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avoirs and only return the `commande_id`
     * const avoirWithCommande_idOnly = await prisma.avoir.createManyAndReturn({ 
     *   select: { commande_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends avoirCreateManyAndReturnArgs>(args?: SelectSubset<T, avoirCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Avoir.
     * @param {avoirDeleteArgs} args - Arguments to delete one Avoir.
     * @example
     * // Delete one Avoir
     * const Avoir = await prisma.avoir.delete({
     *   where: {
     *     // ... filter to delete one Avoir
     *   }
     * })
     * 
     */
    delete<T extends avoirDeleteArgs>(args: SelectSubset<T, avoirDeleteArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Avoir.
     * @param {avoirUpdateArgs} args - Arguments to update one Avoir.
     * @example
     * // Update one Avoir
     * const avoir = await prisma.avoir.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avoirUpdateArgs>(args: SelectSubset<T, avoirUpdateArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Avoirs.
     * @param {avoirDeleteManyArgs} args - Arguments to filter Avoirs to delete.
     * @example
     * // Delete a few Avoirs
     * const { count } = await prisma.avoir.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avoirDeleteManyArgs>(args?: SelectSubset<T, avoirDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avoirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avoirUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avoirs
     * const avoir = await prisma.avoir.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avoirUpdateManyArgs>(args: SelectSubset<T, avoirUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avoir.
     * @param {avoirUpsertArgs} args - Arguments to update or create a Avoir.
     * @example
     * // Update or create a Avoir
     * const avoir = await prisma.avoir.upsert({
     *   create: {
     *     // ... data to create a Avoir
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avoir we want to update
     *   }
     * })
     */
    upsert<T extends avoirUpsertArgs>(args: SelectSubset<T, avoirUpsertArgs<ExtArgs>>): Prisma__avoirClient<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Avoirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avoirCountArgs} args - Arguments to filter Avoirs to count.
     * @example
     * // Count the number of Avoirs
     * const count = await prisma.avoir.count({
     *   where: {
     *     // ... the filter for the Avoirs we want to count
     *   }
     * })
    **/
    count<T extends avoirCountArgs>(
      args?: Subset<T, avoirCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvoirCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avoir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvoirAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvoirAggregateArgs>(args: Subset<T, AvoirAggregateArgs>): Prisma.PrismaPromise<GetAvoirAggregateType<T>>

    /**
     * Group by Avoir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avoirGroupByArgs} args - Group by arguments.
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
      T extends avoirGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avoirGroupByArgs['orderBy'] }
        : { orderBy?: avoirGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, avoirGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvoirGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avoir model
   */
  readonly fields: avoirFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avoir.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avoirClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends commandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, commandeDefaultArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    produit<T extends produitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produitDefaultArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the avoir model
   */ 
  interface avoirFieldRefs {
    readonly commande_id: FieldRef<"avoir", 'Int'>
    readonly produit_id: FieldRef<"avoir", 'Int'>
    readonly apparaitre: FieldRef<"avoir", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * avoir findUnique
   */
  export type avoirFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * Filter, which avoir to fetch.
     */
    where: avoirWhereUniqueInput
  }

  /**
   * avoir findUniqueOrThrow
   */
  export type avoirFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * Filter, which avoir to fetch.
     */
    where: avoirWhereUniqueInput
  }

  /**
   * avoir findFirst
   */
  export type avoirFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * Filter, which avoir to fetch.
     */
    where?: avoirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avoirs to fetch.
     */
    orderBy?: avoirOrderByWithRelationInput | avoirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avoirs.
     */
    cursor?: avoirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avoirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avoirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avoirs.
     */
    distinct?: AvoirScalarFieldEnum | AvoirScalarFieldEnum[]
  }

  /**
   * avoir findFirstOrThrow
   */
  export type avoirFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * Filter, which avoir to fetch.
     */
    where?: avoirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avoirs to fetch.
     */
    orderBy?: avoirOrderByWithRelationInput | avoirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avoirs.
     */
    cursor?: avoirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avoirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avoirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avoirs.
     */
    distinct?: AvoirScalarFieldEnum | AvoirScalarFieldEnum[]
  }

  /**
   * avoir findMany
   */
  export type avoirFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * Filter, which avoirs to fetch.
     */
    where?: avoirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avoirs to fetch.
     */
    orderBy?: avoirOrderByWithRelationInput | avoirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avoirs.
     */
    cursor?: avoirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avoirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avoirs.
     */
    skip?: number
    distinct?: AvoirScalarFieldEnum | AvoirScalarFieldEnum[]
  }

  /**
   * avoir create
   */
  export type avoirCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * The data needed to create a avoir.
     */
    data: XOR<avoirCreateInput, avoirUncheckedCreateInput>
  }

  /**
   * avoir createMany
   */
  export type avoirCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avoirs.
     */
    data: avoirCreateManyInput | avoirCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avoir createManyAndReturn
   */
  export type avoirCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many avoirs.
     */
    data: avoirCreateManyInput | avoirCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * avoir update
   */
  export type avoirUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * The data needed to update a avoir.
     */
    data: XOR<avoirUpdateInput, avoirUncheckedUpdateInput>
    /**
     * Choose, which avoir to update.
     */
    where: avoirWhereUniqueInput
  }

  /**
   * avoir updateMany
   */
  export type avoirUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avoirs.
     */
    data: XOR<avoirUpdateManyMutationInput, avoirUncheckedUpdateManyInput>
    /**
     * Filter which avoirs to update
     */
    where?: avoirWhereInput
  }

  /**
   * avoir upsert
   */
  export type avoirUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * The filter to search for the avoir to update in case it exists.
     */
    where: avoirWhereUniqueInput
    /**
     * In case the avoir found by the `where` argument doesn't exist, create a new avoir with this data.
     */
    create: XOR<avoirCreateInput, avoirUncheckedCreateInput>
    /**
     * In case the avoir was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avoirUpdateInput, avoirUncheckedUpdateInput>
  }

  /**
   * avoir delete
   */
  export type avoirDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    /**
     * Filter which avoir to delete.
     */
    where: avoirWhereUniqueInput
  }

  /**
   * avoir deleteMany
   */
  export type avoirDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avoirs to delete
     */
    where?: avoirWhereInput
  }

  /**
   * avoir without action
   */
  export type avoirDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
  }


  /**
   * Model commande
   */

  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeAvgAggregateOutputType = {
    id: number | null
    users_id: number | null
    montant_total: Decimal | null
  }

  export type CommandeSumAggregateOutputType = {
    id: number | null
    users_id: number | null
    montant_total: Decimal | null
  }

  export type CommandeMinAggregateOutputType = {
    id: number | null
    users_id: number | null
    date_commande: Date | null
    montant_total: Decimal | null
    statut: string | null
  }

  export type CommandeMaxAggregateOutputType = {
    id: number | null
    users_id: number | null
    date_commande: Date | null
    montant_total: Decimal | null
    statut: string | null
  }

  export type CommandeCountAggregateOutputType = {
    id: number
    users_id: number
    date_commande: number
    montant_total: number
    statut: number
    _all: number
  }


  export type CommandeAvgAggregateInputType = {
    id?: true
    users_id?: true
    montant_total?: true
  }

  export type CommandeSumAggregateInputType = {
    id?: true
    users_id?: true
    montant_total?: true
  }

  export type CommandeMinAggregateInputType = {
    id?: true
    users_id?: true
    date_commande?: true
    montant_total?: true
    statut?: true
  }

  export type CommandeMaxAggregateInputType = {
    id?: true
    users_id?: true
    date_commande?: true
    montant_total?: true
    statut?: true
  }

  export type CommandeCountAggregateInputType = {
    id?: true
    users_id?: true
    date_commande?: true
    montant_total?: true
    statut?: true
    _all?: true
  }

  export type CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commande to aggregate.
     */
    where?: commandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commandes to fetch.
     */
    orderBy?: commandeOrderByWithRelationInput | commandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type commandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commandeWhereInput
    orderBy?: commandeOrderByWithAggregationInput | commandeOrderByWithAggregationInput[]
    by: CommandeScalarFieldEnum[] | CommandeScalarFieldEnum
    having?: commandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _avg?: CommandeAvgAggregateInputType
    _sum?: CommandeSumAggregateInputType
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }

  export type CommandeGroupByOutputType = {
    id: number
    users_id: number
    date_commande: Date | null
    montant_total: Decimal | null
    statut: string | null
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends commandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type commandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users_id?: boolean
    date_commande?: boolean
    montant_total?: boolean
    statut?: boolean
    avoir?: boolean | commande$avoirArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    facture?: boolean | commande$factureArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type commandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users_id?: boolean
    date_commande?: boolean
    montant_total?: boolean
    statut?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type commandeSelectScalar = {
    id?: boolean
    users_id?: boolean
    date_commande?: boolean
    montant_total?: boolean
    statut?: boolean
  }

  export type commandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avoir?: boolean | commande$avoirArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    facture?: boolean | commande$factureArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $commandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "commande"
    objects: {
      avoir: Prisma.$avoirPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      facture: Prisma.$facturePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      users_id: number
      date_commande: Date | null
      montant_total: Prisma.Decimal | null
      statut: string | null
    }, ExtArgs["result"]["commande"]>
    composites: {}
  }

  type commandeGetPayload<S extends boolean | null | undefined | commandeDefaultArgs> = $Result.GetResult<Prisma.$commandePayload, S>

  type commandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<commandeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommandeCountAggregateInputType | true
    }

  export interface commandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['commande'], meta: { name: 'commande' } }
    /**
     * Find zero or one Commande that matches the filter.
     * @param {commandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commandeFindUniqueArgs>(args: SelectSubset<T, commandeFindUniqueArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {commandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commandeFindUniqueOrThrowArgs>(args: SelectSubset<T, commandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commandeFindFirstArgs>(args?: SelectSubset<T, commandeFindFirstArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commandeFindFirstOrThrowArgs>(args?: SelectSubset<T, commandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandeWithIdOnly = await prisma.commande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commandeFindManyArgs>(args?: SelectSubset<T, commandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Commande.
     * @param {commandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
     */
    create<T extends commandeCreateArgs>(args: SelectSubset<T, commandeCreateArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Commandes.
     * @param {commandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commandeCreateManyArgs>(args?: SelectSubset<T, commandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commandes and returns the data saved in the database.
     * @param {commandeCreateManyAndReturnArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commandes and only return the `id`
     * const commandeWithIdOnly = await prisma.commande.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commandeCreateManyAndReturnArgs>(args?: SelectSubset<T, commandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Commande.
     * @param {commandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
     */
    delete<T extends commandeDeleteArgs>(args: SelectSubset<T, commandeDeleteArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Commande.
     * @param {commandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commandeUpdateArgs>(args: SelectSubset<T, commandeUpdateArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Commandes.
     * @param {commandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commandeDeleteManyArgs>(args?: SelectSubset<T, commandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commandeUpdateManyArgs>(args: SelectSubset<T, commandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commande.
     * @param {commandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends commandeUpsertArgs>(args: SelectSubset<T, commandeUpsertArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends commandeCountArgs>(
      args?: Subset<T, commandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandeGroupByArgs} args - Group by arguments.
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
      T extends commandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commandeGroupByArgs['orderBy'] }
        : { orderBy?: commandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the commande model
   */
  readonly fields: commandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avoir<T extends commande$avoirArgs<ExtArgs> = {}>(args?: Subset<T, commande$avoirArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    facture<T extends commande$factureArgs<ExtArgs> = {}>(args?: Subset<T, commande$factureArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the commande model
   */ 
  interface commandeFieldRefs {
    readonly id: FieldRef<"commande", 'Int'>
    readonly users_id: FieldRef<"commande", 'Int'>
    readonly date_commande: FieldRef<"commande", 'DateTime'>
    readonly montant_total: FieldRef<"commande", 'Decimal'>
    readonly statut: FieldRef<"commande", 'String'>
  }
    

  // Custom InputTypes
  /**
   * commande findUnique
   */
  export type commandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * Filter, which commande to fetch.
     */
    where: commandeWhereUniqueInput
  }

  /**
   * commande findUniqueOrThrow
   */
  export type commandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * Filter, which commande to fetch.
     */
    where: commandeWhereUniqueInput
  }

  /**
   * commande findFirst
   */
  export type commandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * Filter, which commande to fetch.
     */
    where?: commandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commandes to fetch.
     */
    orderBy?: commandeOrderByWithRelationInput | commandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commandes.
     */
    cursor?: commandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * commande findFirstOrThrow
   */
  export type commandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * Filter, which commande to fetch.
     */
    where?: commandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commandes to fetch.
     */
    orderBy?: commandeOrderByWithRelationInput | commandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commandes.
     */
    cursor?: commandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * commande findMany
   */
  export type commandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * Filter, which commandes to fetch.
     */
    where?: commandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commandes to fetch.
     */
    orderBy?: commandeOrderByWithRelationInput | commandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing commandes.
     */
    cursor?: commandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commandes.
     */
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * commande create
   */
  export type commandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * The data needed to create a commande.
     */
    data: XOR<commandeCreateInput, commandeUncheckedCreateInput>
  }

  /**
   * commande createMany
   */
  export type commandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many commandes.
     */
    data: commandeCreateManyInput | commandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * commande createManyAndReturn
   */
  export type commandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many commandes.
     */
    data: commandeCreateManyInput | commandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * commande update
   */
  export type commandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * The data needed to update a commande.
     */
    data: XOR<commandeUpdateInput, commandeUncheckedUpdateInput>
    /**
     * Choose, which commande to update.
     */
    where: commandeWhereUniqueInput
  }

  /**
   * commande updateMany
   */
  export type commandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update commandes.
     */
    data: XOR<commandeUpdateManyMutationInput, commandeUncheckedUpdateManyInput>
    /**
     * Filter which commandes to update
     */
    where?: commandeWhereInput
  }

  /**
   * commande upsert
   */
  export type commandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * The filter to search for the commande to update in case it exists.
     */
    where: commandeWhereUniqueInput
    /**
     * In case the commande found by the `where` argument doesn't exist, create a new commande with this data.
     */
    create: XOR<commandeCreateInput, commandeUncheckedCreateInput>
    /**
     * In case the commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commandeUpdateInput, commandeUncheckedUpdateInput>
  }

  /**
   * commande delete
   */
  export type commandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    /**
     * Filter which commande to delete.
     */
    where: commandeWhereUniqueInput
  }

  /**
   * commande deleteMany
   */
  export type commandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commandes to delete
     */
    where?: commandeWhereInput
  }

  /**
   * commande.avoir
   */
  export type commande$avoirArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    where?: avoirWhereInput
    orderBy?: avoirOrderByWithRelationInput | avoirOrderByWithRelationInput[]
    cursor?: avoirWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvoirScalarFieldEnum | AvoirScalarFieldEnum[]
  }

  /**
   * commande.facture
   */
  export type commande$factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    where?: factureWhereInput
  }

  /**
   * commande without action
   */
  export type commandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
  }


  /**
   * Model facture
   */

  export type AggregateFacture = {
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  export type FactureAvgAggregateOutputType = {
    id: number | null
    commande_id: number | null
    montant_total: Decimal | null
  }

  export type FactureSumAggregateOutputType = {
    id: number | null
    commande_id: number | null
    montant_total: Decimal | null
  }

  export type FactureMinAggregateOutputType = {
    id: number | null
    numero_facture: string | null
    commande_id: number | null
    date_facture: Date | null
    montant_total: Decimal | null
    statut: string | null
  }

  export type FactureMaxAggregateOutputType = {
    id: number | null
    numero_facture: string | null
    commande_id: number | null
    date_facture: Date | null
    montant_total: Decimal | null
    statut: string | null
  }

  export type FactureCountAggregateOutputType = {
    id: number
    numero_facture: number
    commande_id: number
    date_facture: number
    montant_total: number
    statut: number
    _all: number
  }


  export type FactureAvgAggregateInputType = {
    id?: true
    commande_id?: true
    montant_total?: true
  }

  export type FactureSumAggregateInputType = {
    id?: true
    commande_id?: true
    montant_total?: true
  }

  export type FactureMinAggregateInputType = {
    id?: true
    numero_facture?: true
    commande_id?: true
    date_facture?: true
    montant_total?: true
    statut?: true
  }

  export type FactureMaxAggregateInputType = {
    id?: true
    numero_facture?: true
    commande_id?: true
    date_facture?: true
    montant_total?: true
    statut?: true
  }

  export type FactureCountAggregateInputType = {
    id?: true
    numero_facture?: true
    commande_id?: true
    date_facture?: true
    montant_total?: true
    statut?: true
    _all?: true
  }

  export type FactureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facture to aggregate.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned factures
    **/
    _count?: true | FactureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactureMaxAggregateInputType
  }

  export type GetFactureAggregateType<T extends FactureAggregateArgs> = {
        [P in keyof T & keyof AggregateFacture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacture[P]>
      : GetScalarType<T[P], AggregateFacture[P]>
  }




  export type factureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: factureWhereInput
    orderBy?: factureOrderByWithAggregationInput | factureOrderByWithAggregationInput[]
    by: FactureScalarFieldEnum[] | FactureScalarFieldEnum
    having?: factureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactureCountAggregateInputType | true
    _avg?: FactureAvgAggregateInputType
    _sum?: FactureSumAggregateInputType
    _min?: FactureMinAggregateInputType
    _max?: FactureMaxAggregateInputType
  }

  export type FactureGroupByOutputType = {
    id: number
    numero_facture: string
    commande_id: number
    date_facture: Date | null
    montant_total: Decimal | null
    statut: string | null
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  type GetFactureGroupByPayload<T extends factureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactureGroupByOutputType[P]>
            : GetScalarType<T[P], FactureGroupByOutputType[P]>
        }
      >
    >


  export type factureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_facture?: boolean
    commande_id?: boolean
    date_facture?: boolean
    montant_total?: boolean
    statut?: boolean
    commande?: boolean | commandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type factureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_facture?: boolean
    commande_id?: boolean
    date_facture?: boolean
    montant_total?: boolean
    statut?: boolean
    commande?: boolean | commandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type factureSelectScalar = {
    id?: boolean
    numero_facture?: boolean
    commande_id?: boolean
    date_facture?: boolean
    montant_total?: boolean
    statut?: boolean
  }

  export type factureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | commandeDefaultArgs<ExtArgs>
  }
  export type factureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | commandeDefaultArgs<ExtArgs>
  }

  export type $facturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facture"
    objects: {
      commande: Prisma.$commandePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero_facture: string
      commande_id: number
      date_facture: Date | null
      montant_total: Prisma.Decimal | null
      statut: string | null
    }, ExtArgs["result"]["facture"]>
    composites: {}
  }

  type factureGetPayload<S extends boolean | null | undefined | factureDefaultArgs> = $Result.GetResult<Prisma.$facturePayload, S>

  type factureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<factureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FactureCountAggregateInputType | true
    }

  export interface factureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facture'], meta: { name: 'facture' } }
    /**
     * Find zero or one Facture that matches the filter.
     * @param {factureFindUniqueArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends factureFindUniqueArgs>(args: SelectSubset<T, factureFindUniqueArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Facture that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {factureFindUniqueOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends factureFindUniqueOrThrowArgs>(args: SelectSubset<T, factureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureFindFirstArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends factureFindFirstArgs>(args?: SelectSubset<T, factureFindFirstArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureFindFirstOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends factureFindFirstOrThrowArgs>(args?: SelectSubset<T, factureFindFirstOrThrowArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factures
     * const factures = await prisma.facture.findMany()
     * 
     * // Get first 10 Factures
     * const factures = await prisma.facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factureWithIdOnly = await prisma.facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends factureFindManyArgs>(args?: SelectSubset<T, factureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Facture.
     * @param {factureCreateArgs} args - Arguments to create a Facture.
     * @example
     * // Create one Facture
     * const Facture = await prisma.facture.create({
     *   data: {
     *     // ... data to create a Facture
     *   }
     * })
     * 
     */
    create<T extends factureCreateArgs>(args: SelectSubset<T, factureCreateArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Factures.
     * @param {factureCreateManyArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends factureCreateManyArgs>(args?: SelectSubset<T, factureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factures and returns the data saved in the database.
     * @param {factureCreateManyAndReturnArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends factureCreateManyAndReturnArgs>(args?: SelectSubset<T, factureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Facture.
     * @param {factureDeleteArgs} args - Arguments to delete one Facture.
     * @example
     * // Delete one Facture
     * const Facture = await prisma.facture.delete({
     *   where: {
     *     // ... filter to delete one Facture
     *   }
     * })
     * 
     */
    delete<T extends factureDeleteArgs>(args: SelectSubset<T, factureDeleteArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Facture.
     * @param {factureUpdateArgs} args - Arguments to update one Facture.
     * @example
     * // Update one Facture
     * const facture = await prisma.facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends factureUpdateArgs>(args: SelectSubset<T, factureUpdateArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Factures.
     * @param {factureDeleteManyArgs} args - Arguments to filter Factures to delete.
     * @example
     * // Delete a few Factures
     * const { count } = await prisma.facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends factureDeleteManyArgs>(args?: SelectSubset<T, factureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends factureUpdateManyArgs>(args: SelectSubset<T, factureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facture.
     * @param {factureUpsertArgs} args - Arguments to update or create a Facture.
     * @example
     * // Update or create a Facture
     * const facture = await prisma.facture.upsert({
     *   create: {
     *     // ... data to create a Facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facture we want to update
     *   }
     * })
     */
    upsert<T extends factureUpsertArgs>(args: SelectSubset<T, factureUpsertArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureCountArgs} args - Arguments to filter Factures to count.
     * @example
     * // Count the number of Factures
     * const count = await prisma.facture.count({
     *   where: {
     *     // ... the filter for the Factures we want to count
     *   }
     * })
    **/
    count<T extends factureCountArgs>(
      args?: Subset<T, factureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FactureAggregateArgs>(args: Subset<T, FactureAggregateArgs>): Prisma.PrismaPromise<GetFactureAggregateType<T>>

    /**
     * Group by Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureGroupByArgs} args - Group by arguments.
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
      T extends factureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: factureGroupByArgs['orderBy'] }
        : { orderBy?: factureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, factureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facture model
   */
  readonly fields: factureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__factureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends commandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, commandeDefaultArgs<ExtArgs>>): Prisma__commandeClient<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the facture model
   */ 
  interface factureFieldRefs {
    readonly id: FieldRef<"facture", 'Int'>
    readonly numero_facture: FieldRef<"facture", 'String'>
    readonly commande_id: FieldRef<"facture", 'Int'>
    readonly date_facture: FieldRef<"facture", 'DateTime'>
    readonly montant_total: FieldRef<"facture", 'Decimal'>
    readonly statut: FieldRef<"facture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * facture findUnique
   */
  export type factureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture findUniqueOrThrow
   */
  export type factureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture findFirst
   */
  export type factureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factures.
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * facture findFirstOrThrow
   */
  export type factureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factures.
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * facture findMany
   */
  export type factureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which factures to fetch.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing factures.
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * facture create
   */
  export type factureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * The data needed to create a facture.
     */
    data: XOR<factureCreateInput, factureUncheckedCreateInput>
  }

  /**
   * facture createMany
   */
  export type factureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many factures.
     */
    data: factureCreateManyInput | factureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facture createManyAndReturn
   */
  export type factureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many factures.
     */
    data: factureCreateManyInput | factureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * facture update
   */
  export type factureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * The data needed to update a facture.
     */
    data: XOR<factureUpdateInput, factureUncheckedUpdateInput>
    /**
     * Choose, which facture to update.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture updateMany
   */
  export type factureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update factures.
     */
    data: XOR<factureUpdateManyMutationInput, factureUncheckedUpdateManyInput>
    /**
     * Filter which factures to update
     */
    where?: factureWhereInput
  }

  /**
   * facture upsert
   */
  export type factureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * The filter to search for the facture to update in case it exists.
     */
    where: factureWhereUniqueInput
    /**
     * In case the facture found by the `where` argument doesn't exist, create a new facture with this data.
     */
    create: XOR<factureCreateInput, factureUncheckedCreateInput>
    /**
     * In case the facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<factureUpdateInput, factureUncheckedUpdateInput>
  }

  /**
   * facture delete
   */
  export type factureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter which facture to delete.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture deleteMany
   */
  export type factureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which factures to delete
     */
    where?: factureWhereInput
  }

  /**
   * facture without action
   */
  export type factureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
  }


  /**
   * Model playing_with_neon
   */

  export type AggregatePlaying_with_neon = {
    _count: Playing_with_neonCountAggregateOutputType | null
    _avg: Playing_with_neonAvgAggregateOutputType | null
    _sum: Playing_with_neonSumAggregateOutputType | null
    _min: Playing_with_neonMinAggregateOutputType | null
    _max: Playing_with_neonMaxAggregateOutputType | null
  }

  export type Playing_with_neonAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Playing_with_neonSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type Playing_with_neonMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type Playing_with_neonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type Playing_with_neonCountAggregateOutputType = {
    id: number
    name: number
    value: number
    _all: number
  }


  export type Playing_with_neonAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type Playing_with_neonSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type Playing_with_neonMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type Playing_with_neonMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type Playing_with_neonCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type Playing_with_neonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playing_with_neon to aggregate.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playing_with_neons
    **/
    _count?: true | Playing_with_neonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Playing_with_neonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Playing_with_neonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Playing_with_neonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Playing_with_neonMaxAggregateInputType
  }

  export type GetPlaying_with_neonAggregateType<T extends Playing_with_neonAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaying_with_neon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaying_with_neon[P]>
      : GetScalarType<T[P], AggregatePlaying_with_neon[P]>
  }




  export type playing_with_neonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playing_with_neonWhereInput
    orderBy?: playing_with_neonOrderByWithAggregationInput | playing_with_neonOrderByWithAggregationInput[]
    by: Playing_with_neonScalarFieldEnum[] | Playing_with_neonScalarFieldEnum
    having?: playing_with_neonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Playing_with_neonCountAggregateInputType | true
    _avg?: Playing_with_neonAvgAggregateInputType
    _sum?: Playing_with_neonSumAggregateInputType
    _min?: Playing_with_neonMinAggregateInputType
    _max?: Playing_with_neonMaxAggregateInputType
  }

  export type Playing_with_neonGroupByOutputType = {
    id: number
    name: string
    value: number | null
    _count: Playing_with_neonCountAggregateOutputType | null
    _avg: Playing_with_neonAvgAggregateOutputType | null
    _sum: Playing_with_neonSumAggregateOutputType | null
    _min: Playing_with_neonMinAggregateOutputType | null
    _max: Playing_with_neonMaxAggregateOutputType | null
  }

  type GetPlaying_with_neonGroupByPayload<T extends playing_with_neonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Playing_with_neonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Playing_with_neonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Playing_with_neonGroupByOutputType[P]>
            : GetScalarType<T[P], Playing_with_neonGroupByOutputType[P]>
        }
      >
    >


  export type playing_with_neonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["playing_with_neon"]>

  export type playing_with_neonSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
  }


  export type $playing_with_neonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playing_with_neon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: number | null
    }, ExtArgs["result"]["playing_with_neon"]>
    composites: {}
  }

  type playing_with_neonGetPayload<S extends boolean | null | undefined | playing_with_neonDefaultArgs> = $Result.GetResult<Prisma.$playing_with_neonPayload, S>

  type playing_with_neonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<playing_with_neonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Playing_with_neonCountAggregateInputType | true
    }

  export interface playing_with_neonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playing_with_neon'], meta: { name: 'playing_with_neon' } }
    /**
     * Find zero or one Playing_with_neon that matches the filter.
     * @param {playing_with_neonFindUniqueArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playing_with_neonFindUniqueArgs>(args: SelectSubset<T, playing_with_neonFindUniqueArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Playing_with_neon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {playing_with_neonFindUniqueOrThrowArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playing_with_neonFindUniqueOrThrowArgs>(args: SelectSubset<T, playing_with_neonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Playing_with_neon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindFirstArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playing_with_neonFindFirstArgs>(args?: SelectSubset<T, playing_with_neonFindFirstArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Playing_with_neon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindFirstOrThrowArgs} args - Arguments to find a Playing_with_neon
     * @example
     * // Get one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playing_with_neonFindFirstOrThrowArgs>(args?: SelectSubset<T, playing_with_neonFindFirstOrThrowArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Playing_with_neons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playing_with_neons
     * const playing_with_neons = await prisma.playing_with_neon.findMany()
     * 
     * // Get first 10 Playing_with_neons
     * const playing_with_neons = await prisma.playing_with_neon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playing_with_neonFindManyArgs>(args?: SelectSubset<T, playing_with_neonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Playing_with_neon.
     * @param {playing_with_neonCreateArgs} args - Arguments to create a Playing_with_neon.
     * @example
     * // Create one Playing_with_neon
     * const Playing_with_neon = await prisma.playing_with_neon.create({
     *   data: {
     *     // ... data to create a Playing_with_neon
     *   }
     * })
     * 
     */
    create<T extends playing_with_neonCreateArgs>(args: SelectSubset<T, playing_with_neonCreateArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Playing_with_neons.
     * @param {playing_with_neonCreateManyArgs} args - Arguments to create many Playing_with_neons.
     * @example
     * // Create many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playing_with_neonCreateManyArgs>(args?: SelectSubset<T, playing_with_neonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playing_with_neons and returns the data saved in the database.
     * @param {playing_with_neonCreateManyAndReturnArgs} args - Arguments to create many Playing_with_neons.
     * @example
     * // Create many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playing_with_neons and only return the `id`
     * const playing_with_neonWithIdOnly = await prisma.playing_with_neon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playing_with_neonCreateManyAndReturnArgs>(args?: SelectSubset<T, playing_with_neonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Playing_with_neon.
     * @param {playing_with_neonDeleteArgs} args - Arguments to delete one Playing_with_neon.
     * @example
     * // Delete one Playing_with_neon
     * const Playing_with_neon = await prisma.playing_with_neon.delete({
     *   where: {
     *     // ... filter to delete one Playing_with_neon
     *   }
     * })
     * 
     */
    delete<T extends playing_with_neonDeleteArgs>(args: SelectSubset<T, playing_with_neonDeleteArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Playing_with_neon.
     * @param {playing_with_neonUpdateArgs} args - Arguments to update one Playing_with_neon.
     * @example
     * // Update one Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playing_with_neonUpdateArgs>(args: SelectSubset<T, playing_with_neonUpdateArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Playing_with_neons.
     * @param {playing_with_neonDeleteManyArgs} args - Arguments to filter Playing_with_neons to delete.
     * @example
     * // Delete a few Playing_with_neons
     * const { count } = await prisma.playing_with_neon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playing_with_neonDeleteManyArgs>(args?: SelectSubset<T, playing_with_neonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playing_with_neons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playing_with_neons
     * const playing_with_neon = await prisma.playing_with_neon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playing_with_neonUpdateManyArgs>(args: SelectSubset<T, playing_with_neonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playing_with_neon.
     * @param {playing_with_neonUpsertArgs} args - Arguments to update or create a Playing_with_neon.
     * @example
     * // Update or create a Playing_with_neon
     * const playing_with_neon = await prisma.playing_with_neon.upsert({
     *   create: {
     *     // ... data to create a Playing_with_neon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playing_with_neon we want to update
     *   }
     * })
     */
    upsert<T extends playing_with_neonUpsertArgs>(args: SelectSubset<T, playing_with_neonUpsertArgs<ExtArgs>>): Prisma__playing_with_neonClient<$Result.GetResult<Prisma.$playing_with_neonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Playing_with_neons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonCountArgs} args - Arguments to filter Playing_with_neons to count.
     * @example
     * // Count the number of Playing_with_neons
     * const count = await prisma.playing_with_neon.count({
     *   where: {
     *     // ... the filter for the Playing_with_neons we want to count
     *   }
     * })
    **/
    count<T extends playing_with_neonCountArgs>(
      args?: Subset<T, playing_with_neonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Playing_with_neonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playing_with_neon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playing_with_neonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Playing_with_neonAggregateArgs>(args: Subset<T, Playing_with_neonAggregateArgs>): Prisma.PrismaPromise<GetPlaying_with_neonAggregateType<T>>

    /**
     * Group by Playing_with_neon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playing_with_neonGroupByArgs} args - Group by arguments.
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
      T extends playing_with_neonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playing_with_neonGroupByArgs['orderBy'] }
        : { orderBy?: playing_with_neonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, playing_with_neonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaying_with_neonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playing_with_neon model
   */
  readonly fields: playing_with_neonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playing_with_neon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playing_with_neonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the playing_with_neon model
   */ 
  interface playing_with_neonFieldRefs {
    readonly id: FieldRef<"playing_with_neon", 'Int'>
    readonly name: FieldRef<"playing_with_neon", 'String'>
    readonly value: FieldRef<"playing_with_neon", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * playing_with_neon findUnique
   */
  export type playing_with_neonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon findUniqueOrThrow
   */
  export type playing_with_neonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon findFirst
   */
  export type playing_with_neonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playing_with_neons.
     */
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon findFirstOrThrow
   */
  export type playing_with_neonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Filter, which playing_with_neon to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playing_with_neons.
     */
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon findMany
   */
  export type playing_with_neonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Filter, which playing_with_neons to fetch.
     */
    where?: playing_with_neonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playing_with_neons to fetch.
     */
    orderBy?: playing_with_neonOrderByWithRelationInput | playing_with_neonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playing_with_neons.
     */
    cursor?: playing_with_neonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playing_with_neons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playing_with_neons.
     */
    skip?: number
    distinct?: Playing_with_neonScalarFieldEnum | Playing_with_neonScalarFieldEnum[]
  }

  /**
   * playing_with_neon create
   */
  export type playing_with_neonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * The data needed to create a playing_with_neon.
     */
    data: XOR<playing_with_neonCreateInput, playing_with_neonUncheckedCreateInput>
  }

  /**
   * playing_with_neon createMany
   */
  export type playing_with_neonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playing_with_neons.
     */
    data: playing_with_neonCreateManyInput | playing_with_neonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playing_with_neon createManyAndReturn
   */
  export type playing_with_neonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many playing_with_neons.
     */
    data: playing_with_neonCreateManyInput | playing_with_neonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playing_with_neon update
   */
  export type playing_with_neonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * The data needed to update a playing_with_neon.
     */
    data: XOR<playing_with_neonUpdateInput, playing_with_neonUncheckedUpdateInput>
    /**
     * Choose, which playing_with_neon to update.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon updateMany
   */
  export type playing_with_neonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playing_with_neons.
     */
    data: XOR<playing_with_neonUpdateManyMutationInput, playing_with_neonUncheckedUpdateManyInput>
    /**
     * Filter which playing_with_neons to update
     */
    where?: playing_with_neonWhereInput
  }

  /**
   * playing_with_neon upsert
   */
  export type playing_with_neonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * The filter to search for the playing_with_neon to update in case it exists.
     */
    where: playing_with_neonWhereUniqueInput
    /**
     * In case the playing_with_neon found by the `where` argument doesn't exist, create a new playing_with_neon with this data.
     */
    create: XOR<playing_with_neonCreateInput, playing_with_neonUncheckedCreateInput>
    /**
     * In case the playing_with_neon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playing_with_neonUpdateInput, playing_with_neonUncheckedUpdateInput>
  }

  /**
   * playing_with_neon delete
   */
  export type playing_with_neonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
    /**
     * Filter which playing_with_neon to delete.
     */
    where: playing_with_neonWhereUniqueInput
  }

  /**
   * playing_with_neon deleteMany
   */
  export type playing_with_neonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playing_with_neons to delete
     */
    where?: playing_with_neonWhereInput
  }

  /**
   * playing_with_neon without action
   */
  export type playing_with_neonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playing_with_neon
     */
    select?: playing_with_neonSelect<ExtArgs> | null
  }


  /**
   * Model produit
   */

  export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  export type ProduitAvgAggregateOutputType = {
    id: number | null
    prix_unitaire: Decimal | null
    stock: number | null
    type_produit_id: number | null
  }

  export type ProduitSumAggregateOutputType = {
    id: number | null
    prix_unitaire: Decimal | null
    stock: number | null
    type_produit_id: number | null
  }

  export type ProduitMinAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    prix_unitaire: Decimal | null
    stock: number | null
    image: string | null
    type_produit_id: number | null
  }

  export type ProduitMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    prix_unitaire: Decimal | null
    stock: number | null
    image: string | null
    type_produit_id: number | null
  }

  export type ProduitCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    prix_unitaire: number
    stock: number
    image: number
    type_produit_id: number
    _all: number
  }


  export type ProduitAvgAggregateInputType = {
    id?: true
    prix_unitaire?: true
    stock?: true
    type_produit_id?: true
  }

  export type ProduitSumAggregateInputType = {
    id?: true
    prix_unitaire?: true
    stock?: true
    type_produit_id?: true
  }

  export type ProduitMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prix_unitaire?: true
    stock?: true
    image?: true
    type_produit_id?: true
  }

  export type ProduitMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prix_unitaire?: true
    stock?: true
    image?: true
    type_produit_id?: true
  }

  export type ProduitCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    prix_unitaire?: true
    stock?: true
    image?: true
    type_produit_id?: true
    _all?: true
  }

  export type ProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produit to aggregate.
     */
    where?: produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produits to fetch.
     */
    orderBy?: produitOrderByWithRelationInput | produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produits
    **/
    _count?: true | ProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduitMaxAggregateInputType
  }

  export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit[P]>
      : GetScalarType<T[P], AggregateProduit[P]>
  }




  export type produitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produitWhereInput
    orderBy?: produitOrderByWithAggregationInput | produitOrderByWithAggregationInput[]
    by: ProduitScalarFieldEnum[] | ProduitScalarFieldEnum
    having?: produitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduitCountAggregateInputType | true
    _avg?: ProduitAvgAggregateInputType
    _sum?: ProduitSumAggregateInputType
    _min?: ProduitMinAggregateInputType
    _max?: ProduitMaxAggregateInputType
  }

  export type ProduitGroupByOutputType = {
    id: number
    nom: string
    description: string | null
    prix_unitaire: Decimal
    stock: number | null
    image: string | null
    type_produit_id: number | null
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  type GetProduitGroupByPayload<T extends produitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduitGroupByOutputType[P]>
            : GetScalarType<T[P], ProduitGroupByOutputType[P]>
        }
      >
    >


  export type produitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    prix_unitaire?: boolean
    stock?: boolean
    image?: boolean
    type_produit_id?: boolean
    avoir?: boolean | produit$avoirArgs<ExtArgs>
    type_produit?: boolean | produit$type_produitArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type produitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    prix_unitaire?: boolean
    stock?: boolean
    image?: boolean
    type_produit_id?: boolean
    type_produit?: boolean | produit$type_produitArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type produitSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    prix_unitaire?: boolean
    stock?: boolean
    image?: boolean
    type_produit_id?: boolean
  }

  export type produitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avoir?: boolean | produit$avoirArgs<ExtArgs>
    type_produit?: boolean | produit$type_produitArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type_produit?: boolean | produit$type_produitArgs<ExtArgs>
  }

  export type $produitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produit"
    objects: {
      avoir: Prisma.$avoirPayload<ExtArgs>[]
      type_produit: Prisma.$type_produitPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      description: string | null
      prix_unitaire: Prisma.Decimal
      stock: number | null
      image: string | null
      type_produit_id: number | null
    }, ExtArgs["result"]["produit"]>
    composites: {}
  }

  type produitGetPayload<S extends boolean | null | undefined | produitDefaultArgs> = $Result.GetResult<Prisma.$produitPayload, S>

  type produitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<produitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProduitCountAggregateInputType | true
    }

  export interface produitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produit'], meta: { name: 'produit' } }
    /**
     * Find zero or one Produit that matches the filter.
     * @param {produitFindUniqueArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produitFindUniqueArgs>(args: SelectSubset<T, produitFindUniqueArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Produit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {produitFindUniqueOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produitFindUniqueOrThrowArgs>(args: SelectSubset<T, produitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produitFindFirstArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produitFindFirstArgs>(args?: SelectSubset<T, produitFindFirstArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Produit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produitFindFirstOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produitFindFirstOrThrowArgs>(args?: SelectSubset<T, produitFindFirstOrThrowArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produits
     * const produits = await prisma.produit.findMany()
     * 
     * // Get first 10 Produits
     * const produits = await prisma.produit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produitWithIdOnly = await prisma.produit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produitFindManyArgs>(args?: SelectSubset<T, produitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Produit.
     * @param {produitCreateArgs} args - Arguments to create a Produit.
     * @example
     * // Create one Produit
     * const Produit = await prisma.produit.create({
     *   data: {
     *     // ... data to create a Produit
     *   }
     * })
     * 
     */
    create<T extends produitCreateArgs>(args: SelectSubset<T, produitCreateArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Produits.
     * @param {produitCreateManyArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produitCreateManyArgs>(args?: SelectSubset<T, produitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produits and returns the data saved in the database.
     * @param {produitCreateManyAndReturnArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produits and only return the `id`
     * const produitWithIdOnly = await prisma.produit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produitCreateManyAndReturnArgs>(args?: SelectSubset<T, produitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Produit.
     * @param {produitDeleteArgs} args - Arguments to delete one Produit.
     * @example
     * // Delete one Produit
     * const Produit = await prisma.produit.delete({
     *   where: {
     *     // ... filter to delete one Produit
     *   }
     * })
     * 
     */
    delete<T extends produitDeleteArgs>(args: SelectSubset<T, produitDeleteArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Produit.
     * @param {produitUpdateArgs} args - Arguments to update one Produit.
     * @example
     * // Update one Produit
     * const produit = await prisma.produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produitUpdateArgs>(args: SelectSubset<T, produitUpdateArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Produits.
     * @param {produitDeleteManyArgs} args - Arguments to filter Produits to delete.
     * @example
     * // Delete a few Produits
     * const { count } = await prisma.produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produitDeleteManyArgs>(args?: SelectSubset<T, produitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produitUpdateManyArgs>(args: SelectSubset<T, produitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produit.
     * @param {produitUpsertArgs} args - Arguments to update or create a Produit.
     * @example
     * // Update or create a Produit
     * const produit = await prisma.produit.upsert({
     *   create: {
     *     // ... data to create a Produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit we want to update
     *   }
     * })
     */
    upsert<T extends produitUpsertArgs>(args: SelectSubset<T, produitUpsertArgs<ExtArgs>>): Prisma__produitClient<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produitCountArgs} args - Arguments to filter Produits to count.
     * @example
     * // Count the number of Produits
     * const count = await prisma.produit.count({
     *   where: {
     *     // ... the filter for the Produits we want to count
     *   }
     * })
    **/
    count<T extends produitCountArgs>(
      args?: Subset<T, produitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduitAggregateArgs>(args: Subset<T, ProduitAggregateArgs>): Prisma.PrismaPromise<GetProduitAggregateType<T>>

    /**
     * Group by Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produitGroupByArgs} args - Group by arguments.
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
      T extends produitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produitGroupByArgs['orderBy'] }
        : { orderBy?: produitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produit model
   */
  readonly fields: produitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avoir<T extends produit$avoirArgs<ExtArgs> = {}>(args?: Subset<T, produit$avoirArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avoirPayload<ExtArgs>, T, "findMany"> | Null>
    type_produit<T extends produit$type_produitArgs<ExtArgs> = {}>(args?: Subset<T, produit$type_produitArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the produit model
   */ 
  interface produitFieldRefs {
    readonly id: FieldRef<"produit", 'Int'>
    readonly nom: FieldRef<"produit", 'String'>
    readonly description: FieldRef<"produit", 'String'>
    readonly prix_unitaire: FieldRef<"produit", 'Decimal'>
    readonly stock: FieldRef<"produit", 'Int'>
    readonly image: FieldRef<"produit", 'String'>
    readonly type_produit_id: FieldRef<"produit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produit findUnique
   */
  export type produitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * Filter, which produit to fetch.
     */
    where: produitWhereUniqueInput
  }

  /**
   * produit findUniqueOrThrow
   */
  export type produitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * Filter, which produit to fetch.
     */
    where: produitWhereUniqueInput
  }

  /**
   * produit findFirst
   */
  export type produitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * Filter, which produit to fetch.
     */
    where?: produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produits to fetch.
     */
    orderBy?: produitOrderByWithRelationInput | produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produits.
     */
    cursor?: produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * produit findFirstOrThrow
   */
  export type produitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * Filter, which produit to fetch.
     */
    where?: produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produits to fetch.
     */
    orderBy?: produitOrderByWithRelationInput | produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produits.
     */
    cursor?: produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * produit findMany
   */
  export type produitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * Filter, which produits to fetch.
     */
    where?: produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produits to fetch.
     */
    orderBy?: produitOrderByWithRelationInput | produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produits.
     */
    cursor?: produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produits.
     */
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * produit create
   */
  export type produitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * The data needed to create a produit.
     */
    data: XOR<produitCreateInput, produitUncheckedCreateInput>
  }

  /**
   * produit createMany
   */
  export type produitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produits.
     */
    data: produitCreateManyInput | produitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produit createManyAndReturn
   */
  export type produitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many produits.
     */
    data: produitCreateManyInput | produitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produit update
   */
  export type produitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * The data needed to update a produit.
     */
    data: XOR<produitUpdateInput, produitUncheckedUpdateInput>
    /**
     * Choose, which produit to update.
     */
    where: produitWhereUniqueInput
  }

  /**
   * produit updateMany
   */
  export type produitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produits.
     */
    data: XOR<produitUpdateManyMutationInput, produitUncheckedUpdateManyInput>
    /**
     * Filter which produits to update
     */
    where?: produitWhereInput
  }

  /**
   * produit upsert
   */
  export type produitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * The filter to search for the produit to update in case it exists.
     */
    where: produitWhereUniqueInput
    /**
     * In case the produit found by the `where` argument doesn't exist, create a new produit with this data.
     */
    create: XOR<produitCreateInput, produitUncheckedCreateInput>
    /**
     * In case the produit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produitUpdateInput, produitUncheckedUpdateInput>
  }

  /**
   * produit delete
   */
  export type produitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    /**
     * Filter which produit to delete.
     */
    where: produitWhereUniqueInput
  }

  /**
   * produit deleteMany
   */
  export type produitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produits to delete
     */
    where?: produitWhereInput
  }

  /**
   * produit.avoir
   */
  export type produit$avoirArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avoir
     */
    select?: avoirSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avoirInclude<ExtArgs> | null
    where?: avoirWhereInput
    orderBy?: avoirOrderByWithRelationInput | avoirOrderByWithRelationInput[]
    cursor?: avoirWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvoirScalarFieldEnum | AvoirScalarFieldEnum[]
  }

  /**
   * produit.type_produit
   */
  export type produit$type_produitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    where?: type_produitWhereInput
  }

  /**
   * produit without action
   */
  export type produitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
  }


  /**
   * Model type_produit
   */

  export type AggregateType_produit = {
    _count: Type_produitCountAggregateOutputType | null
    _avg: Type_produitAvgAggregateOutputType | null
    _sum: Type_produitSumAggregateOutputType | null
    _min: Type_produitMinAggregateOutputType | null
    _max: Type_produitMaxAggregateOutputType | null
  }

  export type Type_produitAvgAggregateOutputType = {
    id: number | null
  }

  export type Type_produitSumAggregateOutputType = {
    id: number | null
  }

  export type Type_produitMinAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
  }

  export type Type_produitMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
  }

  export type Type_produitCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    _all: number
  }


  export type Type_produitAvgAggregateInputType = {
    id?: true
  }

  export type Type_produitSumAggregateInputType = {
    id?: true
  }

  export type Type_produitMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
  }

  export type Type_produitMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
  }

  export type Type_produitCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    _all?: true
  }

  export type Type_produitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_produit to aggregate.
     */
    where?: type_produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_produits to fetch.
     */
    orderBy?: type_produitOrderByWithRelationInput | type_produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: type_produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned type_produits
    **/
    _count?: true | Type_produitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Type_produitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Type_produitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_produitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_produitMaxAggregateInputType
  }

  export type GetType_produitAggregateType<T extends Type_produitAggregateArgs> = {
        [P in keyof T & keyof AggregateType_produit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_produit[P]>
      : GetScalarType<T[P], AggregateType_produit[P]>
  }




  export type type_produitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: type_produitWhereInput
    orderBy?: type_produitOrderByWithAggregationInput | type_produitOrderByWithAggregationInput[]
    by: Type_produitScalarFieldEnum[] | Type_produitScalarFieldEnum
    having?: type_produitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_produitCountAggregateInputType | true
    _avg?: Type_produitAvgAggregateInputType
    _sum?: Type_produitSumAggregateInputType
    _min?: Type_produitMinAggregateInputType
    _max?: Type_produitMaxAggregateInputType
  }

  export type Type_produitGroupByOutputType = {
    id: number
    nom: string
    description: string | null
    _count: Type_produitCountAggregateOutputType | null
    _avg: Type_produitAvgAggregateOutputType | null
    _sum: Type_produitSumAggregateOutputType | null
    _min: Type_produitMinAggregateOutputType | null
    _max: Type_produitMaxAggregateOutputType | null
  }

  type GetType_produitGroupByPayload<T extends type_produitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_produitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_produitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_produitGroupByOutputType[P]>
            : GetScalarType<T[P], Type_produitGroupByOutputType[P]>
        }
      >
    >


  export type type_produitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    produit?: boolean | type_produit$produitArgs<ExtArgs>
    _count?: boolean | Type_produitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type_produit"]>

  export type type_produitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
  }, ExtArgs["result"]["type_produit"]>

  export type type_produitSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
  }

  export type type_produitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | type_produit$produitArgs<ExtArgs>
    _count?: boolean | Type_produitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type type_produitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $type_produitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "type_produit"
    objects: {
      produit: Prisma.$produitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      description: string | null
    }, ExtArgs["result"]["type_produit"]>
    composites: {}
  }

  type type_produitGetPayload<S extends boolean | null | undefined | type_produitDefaultArgs> = $Result.GetResult<Prisma.$type_produitPayload, S>

  type type_produitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<type_produitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Type_produitCountAggregateInputType | true
    }

  export interface type_produitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['type_produit'], meta: { name: 'type_produit' } }
    /**
     * Find zero or one Type_produit that matches the filter.
     * @param {type_produitFindUniqueArgs} args - Arguments to find a Type_produit
     * @example
     * // Get one Type_produit
     * const type_produit = await prisma.type_produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends type_produitFindUniqueArgs>(args: SelectSubset<T, type_produitFindUniqueArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Type_produit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {type_produitFindUniqueOrThrowArgs} args - Arguments to find a Type_produit
     * @example
     * // Get one Type_produit
     * const type_produit = await prisma.type_produit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends type_produitFindUniqueOrThrowArgs>(args: SelectSubset<T, type_produitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Type_produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_produitFindFirstArgs} args - Arguments to find a Type_produit
     * @example
     * // Get one Type_produit
     * const type_produit = await prisma.type_produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends type_produitFindFirstArgs>(args?: SelectSubset<T, type_produitFindFirstArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Type_produit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_produitFindFirstOrThrowArgs} args - Arguments to find a Type_produit
     * @example
     * // Get one Type_produit
     * const type_produit = await prisma.type_produit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends type_produitFindFirstOrThrowArgs>(args?: SelectSubset<T, type_produitFindFirstOrThrowArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Type_produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_produitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_produits
     * const type_produits = await prisma.type_produit.findMany()
     * 
     * // Get first 10 Type_produits
     * const type_produits = await prisma.type_produit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const type_produitWithIdOnly = await prisma.type_produit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends type_produitFindManyArgs>(args?: SelectSubset<T, type_produitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Type_produit.
     * @param {type_produitCreateArgs} args - Arguments to create a Type_produit.
     * @example
     * // Create one Type_produit
     * const Type_produit = await prisma.type_produit.create({
     *   data: {
     *     // ... data to create a Type_produit
     *   }
     * })
     * 
     */
    create<T extends type_produitCreateArgs>(args: SelectSubset<T, type_produitCreateArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Type_produits.
     * @param {type_produitCreateManyArgs} args - Arguments to create many Type_produits.
     * @example
     * // Create many Type_produits
     * const type_produit = await prisma.type_produit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends type_produitCreateManyArgs>(args?: SelectSubset<T, type_produitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Type_produits and returns the data saved in the database.
     * @param {type_produitCreateManyAndReturnArgs} args - Arguments to create many Type_produits.
     * @example
     * // Create many Type_produits
     * const type_produit = await prisma.type_produit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Type_produits and only return the `id`
     * const type_produitWithIdOnly = await prisma.type_produit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends type_produitCreateManyAndReturnArgs>(args?: SelectSubset<T, type_produitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Type_produit.
     * @param {type_produitDeleteArgs} args - Arguments to delete one Type_produit.
     * @example
     * // Delete one Type_produit
     * const Type_produit = await prisma.type_produit.delete({
     *   where: {
     *     // ... filter to delete one Type_produit
     *   }
     * })
     * 
     */
    delete<T extends type_produitDeleteArgs>(args: SelectSubset<T, type_produitDeleteArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Type_produit.
     * @param {type_produitUpdateArgs} args - Arguments to update one Type_produit.
     * @example
     * // Update one Type_produit
     * const type_produit = await prisma.type_produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends type_produitUpdateArgs>(args: SelectSubset<T, type_produitUpdateArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Type_produits.
     * @param {type_produitDeleteManyArgs} args - Arguments to filter Type_produits to delete.
     * @example
     * // Delete a few Type_produits
     * const { count } = await prisma.type_produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends type_produitDeleteManyArgs>(args?: SelectSubset<T, type_produitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_produitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_produits
     * const type_produit = await prisma.type_produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends type_produitUpdateManyArgs>(args: SelectSubset<T, type_produitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type_produit.
     * @param {type_produitUpsertArgs} args - Arguments to update or create a Type_produit.
     * @example
     * // Update or create a Type_produit
     * const type_produit = await prisma.type_produit.upsert({
     *   create: {
     *     // ... data to create a Type_produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_produit we want to update
     *   }
     * })
     */
    upsert<T extends type_produitUpsertArgs>(args: SelectSubset<T, type_produitUpsertArgs<ExtArgs>>): Prisma__type_produitClient<$Result.GetResult<Prisma.$type_produitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Type_produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_produitCountArgs} args - Arguments to filter Type_produits to count.
     * @example
     * // Count the number of Type_produits
     * const count = await prisma.type_produit.count({
     *   where: {
     *     // ... the filter for the Type_produits we want to count
     *   }
     * })
    **/
    count<T extends type_produitCountArgs>(
      args?: Subset<T, type_produitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_produitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_produitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Type_produitAggregateArgs>(args: Subset<T, Type_produitAggregateArgs>): Prisma.PrismaPromise<GetType_produitAggregateType<T>>

    /**
     * Group by Type_produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_produitGroupByArgs} args - Group by arguments.
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
      T extends type_produitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: type_produitGroupByArgs['orderBy'] }
        : { orderBy?: type_produitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, type_produitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_produitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the type_produit model
   */
  readonly fields: type_produitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for type_produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__type_produitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produit<T extends type_produit$produitArgs<ExtArgs> = {}>(args?: Subset<T, type_produit$produitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produitPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the type_produit model
   */ 
  interface type_produitFieldRefs {
    readonly id: FieldRef<"type_produit", 'Int'>
    readonly nom: FieldRef<"type_produit", 'String'>
    readonly description: FieldRef<"type_produit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * type_produit findUnique
   */
  export type type_produitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * Filter, which type_produit to fetch.
     */
    where: type_produitWhereUniqueInput
  }

  /**
   * type_produit findUniqueOrThrow
   */
  export type type_produitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * Filter, which type_produit to fetch.
     */
    where: type_produitWhereUniqueInput
  }

  /**
   * type_produit findFirst
   */
  export type type_produitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * Filter, which type_produit to fetch.
     */
    where?: type_produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_produits to fetch.
     */
    orderBy?: type_produitOrderByWithRelationInput | type_produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_produits.
     */
    cursor?: type_produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_produits.
     */
    distinct?: Type_produitScalarFieldEnum | Type_produitScalarFieldEnum[]
  }

  /**
   * type_produit findFirstOrThrow
   */
  export type type_produitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * Filter, which type_produit to fetch.
     */
    where?: type_produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_produits to fetch.
     */
    orderBy?: type_produitOrderByWithRelationInput | type_produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_produits.
     */
    cursor?: type_produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_produits.
     */
    distinct?: Type_produitScalarFieldEnum | Type_produitScalarFieldEnum[]
  }

  /**
   * type_produit findMany
   */
  export type type_produitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * Filter, which type_produits to fetch.
     */
    where?: type_produitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_produits to fetch.
     */
    orderBy?: type_produitOrderByWithRelationInput | type_produitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing type_produits.
     */
    cursor?: type_produitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_produits.
     */
    skip?: number
    distinct?: Type_produitScalarFieldEnum | Type_produitScalarFieldEnum[]
  }

  /**
   * type_produit create
   */
  export type type_produitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * The data needed to create a type_produit.
     */
    data: XOR<type_produitCreateInput, type_produitUncheckedCreateInput>
  }

  /**
   * type_produit createMany
   */
  export type type_produitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many type_produits.
     */
    data: type_produitCreateManyInput | type_produitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_produit createManyAndReturn
   */
  export type type_produitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many type_produits.
     */
    data: type_produitCreateManyInput | type_produitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_produit update
   */
  export type type_produitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * The data needed to update a type_produit.
     */
    data: XOR<type_produitUpdateInput, type_produitUncheckedUpdateInput>
    /**
     * Choose, which type_produit to update.
     */
    where: type_produitWhereUniqueInput
  }

  /**
   * type_produit updateMany
   */
  export type type_produitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update type_produits.
     */
    data: XOR<type_produitUpdateManyMutationInput, type_produitUncheckedUpdateManyInput>
    /**
     * Filter which type_produits to update
     */
    where?: type_produitWhereInput
  }

  /**
   * type_produit upsert
   */
  export type type_produitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * The filter to search for the type_produit to update in case it exists.
     */
    where: type_produitWhereUniqueInput
    /**
     * In case the type_produit found by the `where` argument doesn't exist, create a new type_produit with this data.
     */
    create: XOR<type_produitCreateInput, type_produitUncheckedCreateInput>
    /**
     * In case the type_produit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<type_produitUpdateInput, type_produitUncheckedUpdateInput>
  }

  /**
   * type_produit delete
   */
  export type type_produitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
    /**
     * Filter which type_produit to delete.
     */
    where: type_produitWhereUniqueInput
  }

  /**
   * type_produit deleteMany
   */
  export type type_produitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_produits to delete
     */
    where?: type_produitWhereInput
  }

  /**
   * type_produit.produit
   */
  export type type_produit$produitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produit
     */
    select?: produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produitInclude<ExtArgs> | null
    where?: produitWhereInput
    orderBy?: produitOrderByWithRelationInput | produitOrderByWithRelationInput[]
    cursor?: produitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * type_produit without action
   */
  export type type_produitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_produit
     */
    select?: type_produitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_produitInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    numero: string | null
    adresse: string | null
    mot_de_passe: string | null
    role: string | null
    statut: string | null
    date_de_creation: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    numero: string | null
    adresse: string | null
    mot_de_passe: string | null
    role: string | null
    statut: string | null
    date_de_creation: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    numero: number
    adresse: number
    mot_de_passe: number
    role: number
    statut: number
    date_de_creation: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    numero?: true
    adresse?: true
    mot_de_passe?: true
    role?: true
    statut?: true
    date_de_creation?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    numero?: true
    adresse?: true
    mot_de_passe?: true
    role?: true
    statut?: true
    date_de_creation?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    numero?: true
    adresse?: true
    mot_de_passe?: true
    role?: true
    statut?: true
    date_de_creation?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    numero: string | null
    adresse: string | null
    mot_de_passe: string
    role: string | null
    statut: string | null
    date_de_creation: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    numero?: boolean
    adresse?: boolean
    mot_de_passe?: boolean
    role?: boolean
    statut?: boolean
    date_de_creation?: boolean
    commande?: boolean | users$commandeArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    numero?: boolean
    adresse?: boolean
    mot_de_passe?: boolean
    role?: boolean
    statut?: boolean
    date_de_creation?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    numero?: boolean
    adresse?: boolean
    mot_de_passe?: boolean
    role?: boolean
    statut?: boolean
    date_de_creation?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | users$commandeArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      commande: Prisma.$commandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      numero: string | null
      adresse: string | null
      mot_de_passe: string
      role: string | null
      statut: string | null
      date_de_creation: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends users$commandeArgs<ExtArgs> = {}>(args?: Subset<T, users$commandeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commandePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly nom: FieldRef<"users", 'String'>
    readonly prenom: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly numero: FieldRef<"users", 'String'>
    readonly adresse: FieldRef<"users", 'String'>
    readonly mot_de_passe: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly statut: FieldRef<"users", 'String'>
    readonly date_de_creation: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.commande
   */
  export type users$commandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commande
     */
    select?: commandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandeInclude<ExtArgs> | null
    where?: commandeWhereInput
    orderBy?: commandeOrderByWithRelationInput | commandeOrderByWithRelationInput[]
    cursor?: commandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AvoirScalarFieldEnum: {
    commande_id: 'commande_id',
    produit_id: 'produit_id',
    apparaitre: 'apparaitre'
  };

  export type AvoirScalarFieldEnum = (typeof AvoirScalarFieldEnum)[keyof typeof AvoirScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    id: 'id',
    users_id: 'users_id',
    date_commande: 'date_commande',
    montant_total: 'montant_total',
    statut: 'statut'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


  export const FactureScalarFieldEnum: {
    id: 'id',
    numero_facture: 'numero_facture',
    commande_id: 'commande_id',
    date_facture: 'date_facture',
    montant_total: 'montant_total',
    statut: 'statut'
  };

  export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum]


  export const Playing_with_neonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value'
  };

  export type Playing_with_neonScalarFieldEnum = (typeof Playing_with_neonScalarFieldEnum)[keyof typeof Playing_with_neonScalarFieldEnum]


  export const ProduitScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    prix_unitaire: 'prix_unitaire',
    stock: 'stock',
    image: 'image',
    type_produit_id: 'type_produit_id'
  };

  export type ProduitScalarFieldEnum = (typeof ProduitScalarFieldEnum)[keyof typeof ProduitScalarFieldEnum]


  export const Type_produitScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description'
  };

  export type Type_produitScalarFieldEnum = (typeof Type_produitScalarFieldEnum)[keyof typeof Type_produitScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    numero: 'numero',
    adresse: 'adresse',
    mot_de_passe: 'mot_de_passe',
    role: 'role',
    statut: 'statut',
    date_de_creation: 'date_de_creation'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type avoirWhereInput = {
    AND?: avoirWhereInput | avoirWhereInput[]
    OR?: avoirWhereInput[]
    NOT?: avoirWhereInput | avoirWhereInput[]
    commande_id?: IntFilter<"avoir"> | number
    produit_id?: IntFilter<"avoir"> | number
    apparaitre?: IntFilter<"avoir"> | number
    commande?: XOR<CommandeRelationFilter, commandeWhereInput>
    produit?: XOR<ProduitRelationFilter, produitWhereInput>
  }

  export type avoirOrderByWithRelationInput = {
    commande_id?: SortOrder
    produit_id?: SortOrder
    apparaitre?: SortOrder
    commande?: commandeOrderByWithRelationInput
    produit?: produitOrderByWithRelationInput
  }

  export type avoirWhereUniqueInput = Prisma.AtLeast<{
    commande_id_produit_id?: avoirCommande_idProduit_idCompoundUniqueInput
    AND?: avoirWhereInput | avoirWhereInput[]
    OR?: avoirWhereInput[]
    NOT?: avoirWhereInput | avoirWhereInput[]
    commande_id?: IntFilter<"avoir"> | number
    produit_id?: IntFilter<"avoir"> | number
    apparaitre?: IntFilter<"avoir"> | number
    commande?: XOR<CommandeRelationFilter, commandeWhereInput>
    produit?: XOR<ProduitRelationFilter, produitWhereInput>
  }, "commande_id_produit_id">

  export type avoirOrderByWithAggregationInput = {
    commande_id?: SortOrder
    produit_id?: SortOrder
    apparaitre?: SortOrder
    _count?: avoirCountOrderByAggregateInput
    _avg?: avoirAvgOrderByAggregateInput
    _max?: avoirMaxOrderByAggregateInput
    _min?: avoirMinOrderByAggregateInput
    _sum?: avoirSumOrderByAggregateInput
  }

  export type avoirScalarWhereWithAggregatesInput = {
    AND?: avoirScalarWhereWithAggregatesInput | avoirScalarWhereWithAggregatesInput[]
    OR?: avoirScalarWhereWithAggregatesInput[]
    NOT?: avoirScalarWhereWithAggregatesInput | avoirScalarWhereWithAggregatesInput[]
    commande_id?: IntWithAggregatesFilter<"avoir"> | number
    produit_id?: IntWithAggregatesFilter<"avoir"> | number
    apparaitre?: IntWithAggregatesFilter<"avoir"> | number
  }

  export type commandeWhereInput = {
    AND?: commandeWhereInput | commandeWhereInput[]
    OR?: commandeWhereInput[]
    NOT?: commandeWhereInput | commandeWhereInput[]
    id?: IntFilter<"commande"> | number
    users_id?: IntFilter<"commande"> | number
    date_commande?: DateTimeNullableFilter<"commande"> | Date | string | null
    montant_total?: DecimalNullableFilter<"commande"> | Decimal | DecimalJsLike | number | string | null
    statut?: StringNullableFilter<"commande"> | string | null
    avoir?: AvoirListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
    facture?: XOR<FactureNullableRelationFilter, factureWhereInput> | null
  }

  export type commandeOrderByWithRelationInput = {
    id?: SortOrder
    users_id?: SortOrder
    date_commande?: SortOrderInput | SortOrder
    montant_total?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    avoir?: avoirOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    facture?: factureOrderByWithRelationInput
  }

  export type commandeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commandeWhereInput | commandeWhereInput[]
    OR?: commandeWhereInput[]
    NOT?: commandeWhereInput | commandeWhereInput[]
    users_id?: IntFilter<"commande"> | number
    date_commande?: DateTimeNullableFilter<"commande"> | Date | string | null
    montant_total?: DecimalNullableFilter<"commande"> | Decimal | DecimalJsLike | number | string | null
    statut?: StringNullableFilter<"commande"> | string | null
    avoir?: AvoirListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
    facture?: XOR<FactureNullableRelationFilter, factureWhereInput> | null
  }, "id">

  export type commandeOrderByWithAggregationInput = {
    id?: SortOrder
    users_id?: SortOrder
    date_commande?: SortOrderInput | SortOrder
    montant_total?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    _count?: commandeCountOrderByAggregateInput
    _avg?: commandeAvgOrderByAggregateInput
    _max?: commandeMaxOrderByAggregateInput
    _min?: commandeMinOrderByAggregateInput
    _sum?: commandeSumOrderByAggregateInput
  }

  export type commandeScalarWhereWithAggregatesInput = {
    AND?: commandeScalarWhereWithAggregatesInput | commandeScalarWhereWithAggregatesInput[]
    OR?: commandeScalarWhereWithAggregatesInput[]
    NOT?: commandeScalarWhereWithAggregatesInput | commandeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"commande"> | number
    users_id?: IntWithAggregatesFilter<"commande"> | number
    date_commande?: DateTimeNullableWithAggregatesFilter<"commande"> | Date | string | null
    montant_total?: DecimalNullableWithAggregatesFilter<"commande"> | Decimal | DecimalJsLike | number | string | null
    statut?: StringNullableWithAggregatesFilter<"commande"> | string | null
  }

  export type factureWhereInput = {
    AND?: factureWhereInput | factureWhereInput[]
    OR?: factureWhereInput[]
    NOT?: factureWhereInput | factureWhereInput[]
    id?: IntFilter<"facture"> | number
    numero_facture?: StringFilter<"facture"> | string
    commande_id?: IntFilter<"facture"> | number
    date_facture?: DateTimeNullableFilter<"facture"> | Date | string | null
    montant_total?: DecimalNullableFilter<"facture"> | Decimal | DecimalJsLike | number | string | null
    statut?: StringNullableFilter<"facture"> | string | null
    commande?: XOR<CommandeRelationFilter, commandeWhereInput>
  }

  export type factureOrderByWithRelationInput = {
    id?: SortOrder
    numero_facture?: SortOrder
    commande_id?: SortOrder
    date_facture?: SortOrderInput | SortOrder
    montant_total?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    commande?: commandeOrderByWithRelationInput
  }

  export type factureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero_facture?: string
    commande_id?: number
    AND?: factureWhereInput | factureWhereInput[]
    OR?: factureWhereInput[]
    NOT?: factureWhereInput | factureWhereInput[]
    date_facture?: DateTimeNullableFilter<"facture"> | Date | string | null
    montant_total?: DecimalNullableFilter<"facture"> | Decimal | DecimalJsLike | number | string | null
    statut?: StringNullableFilter<"facture"> | string | null
    commande?: XOR<CommandeRelationFilter, commandeWhereInput>
  }, "id" | "numero_facture" | "commande_id">

  export type factureOrderByWithAggregationInput = {
    id?: SortOrder
    numero_facture?: SortOrder
    commande_id?: SortOrder
    date_facture?: SortOrderInput | SortOrder
    montant_total?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    _count?: factureCountOrderByAggregateInput
    _avg?: factureAvgOrderByAggregateInput
    _max?: factureMaxOrderByAggregateInput
    _min?: factureMinOrderByAggregateInput
    _sum?: factureSumOrderByAggregateInput
  }

  export type factureScalarWhereWithAggregatesInput = {
    AND?: factureScalarWhereWithAggregatesInput | factureScalarWhereWithAggregatesInput[]
    OR?: factureScalarWhereWithAggregatesInput[]
    NOT?: factureScalarWhereWithAggregatesInput | factureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facture"> | number
    numero_facture?: StringWithAggregatesFilter<"facture"> | string
    commande_id?: IntWithAggregatesFilter<"facture"> | number
    date_facture?: DateTimeNullableWithAggregatesFilter<"facture"> | Date | string | null
    montant_total?: DecimalNullableWithAggregatesFilter<"facture"> | Decimal | DecimalJsLike | number | string | null
    statut?: StringNullableWithAggregatesFilter<"facture"> | string | null
  }

  export type playing_with_neonWhereInput = {
    AND?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    OR?: playing_with_neonWhereInput[]
    NOT?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    id?: IntFilter<"playing_with_neon"> | number
    name?: StringFilter<"playing_with_neon"> | string
    value?: FloatNullableFilter<"playing_with_neon"> | number | null
  }

  export type playing_with_neonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type playing_with_neonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    OR?: playing_with_neonWhereInput[]
    NOT?: playing_with_neonWhereInput | playing_with_neonWhereInput[]
    name?: StringFilter<"playing_with_neon"> | string
    value?: FloatNullableFilter<"playing_with_neon"> | number | null
  }, "id">

  export type playing_with_neonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: playing_with_neonCountOrderByAggregateInput
    _avg?: playing_with_neonAvgOrderByAggregateInput
    _max?: playing_with_neonMaxOrderByAggregateInput
    _min?: playing_with_neonMinOrderByAggregateInput
    _sum?: playing_with_neonSumOrderByAggregateInput
  }

  export type playing_with_neonScalarWhereWithAggregatesInput = {
    AND?: playing_with_neonScalarWhereWithAggregatesInput | playing_with_neonScalarWhereWithAggregatesInput[]
    OR?: playing_with_neonScalarWhereWithAggregatesInput[]
    NOT?: playing_with_neonScalarWhereWithAggregatesInput | playing_with_neonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playing_with_neon"> | number
    name?: StringWithAggregatesFilter<"playing_with_neon"> | string
    value?: FloatNullableWithAggregatesFilter<"playing_with_neon"> | number | null
  }

  export type produitWhereInput = {
    AND?: produitWhereInput | produitWhereInput[]
    OR?: produitWhereInput[]
    NOT?: produitWhereInput | produitWhereInput[]
    id?: IntFilter<"produit"> | number
    nom?: StringFilter<"produit"> | string
    description?: StringNullableFilter<"produit"> | string | null
    prix_unitaire?: DecimalFilter<"produit"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"produit"> | number | null
    image?: StringNullableFilter<"produit"> | string | null
    type_produit_id?: IntNullableFilter<"produit"> | number | null
    avoir?: AvoirListRelationFilter
    type_produit?: XOR<Type_produitNullableRelationFilter, type_produitWhereInput> | null
  }

  export type produitOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    prix_unitaire?: SortOrder
    stock?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    type_produit_id?: SortOrderInput | SortOrder
    avoir?: avoirOrderByRelationAggregateInput
    type_produit?: type_produitOrderByWithRelationInput
  }

  export type produitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produitWhereInput | produitWhereInput[]
    OR?: produitWhereInput[]
    NOT?: produitWhereInput | produitWhereInput[]
    nom?: StringFilter<"produit"> | string
    description?: StringNullableFilter<"produit"> | string | null
    prix_unitaire?: DecimalFilter<"produit"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"produit"> | number | null
    image?: StringNullableFilter<"produit"> | string | null
    type_produit_id?: IntNullableFilter<"produit"> | number | null
    avoir?: AvoirListRelationFilter
    type_produit?: XOR<Type_produitNullableRelationFilter, type_produitWhereInput> | null
  }, "id">

  export type produitOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    prix_unitaire?: SortOrder
    stock?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    type_produit_id?: SortOrderInput | SortOrder
    _count?: produitCountOrderByAggregateInput
    _avg?: produitAvgOrderByAggregateInput
    _max?: produitMaxOrderByAggregateInput
    _min?: produitMinOrderByAggregateInput
    _sum?: produitSumOrderByAggregateInput
  }

  export type produitScalarWhereWithAggregatesInput = {
    AND?: produitScalarWhereWithAggregatesInput | produitScalarWhereWithAggregatesInput[]
    OR?: produitScalarWhereWithAggregatesInput[]
    NOT?: produitScalarWhereWithAggregatesInput | produitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produit"> | number
    nom?: StringWithAggregatesFilter<"produit"> | string
    description?: StringNullableWithAggregatesFilter<"produit"> | string | null
    prix_unitaire?: DecimalWithAggregatesFilter<"produit"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableWithAggregatesFilter<"produit"> | number | null
    image?: StringNullableWithAggregatesFilter<"produit"> | string | null
    type_produit_id?: IntNullableWithAggregatesFilter<"produit"> | number | null
  }

  export type type_produitWhereInput = {
    AND?: type_produitWhereInput | type_produitWhereInput[]
    OR?: type_produitWhereInput[]
    NOT?: type_produitWhereInput | type_produitWhereInput[]
    id?: IntFilter<"type_produit"> | number
    nom?: StringFilter<"type_produit"> | string
    description?: StringNullableFilter<"type_produit"> | string | null
    produit?: ProduitListRelationFilter
  }

  export type type_produitOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    produit?: produitOrderByRelationAggregateInput
  }

  export type type_produitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: type_produitWhereInput | type_produitWhereInput[]
    OR?: type_produitWhereInput[]
    NOT?: type_produitWhereInput | type_produitWhereInput[]
    nom?: StringFilter<"type_produit"> | string
    description?: StringNullableFilter<"type_produit"> | string | null
    produit?: ProduitListRelationFilter
  }, "id">

  export type type_produitOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: type_produitCountOrderByAggregateInput
    _avg?: type_produitAvgOrderByAggregateInput
    _max?: type_produitMaxOrderByAggregateInput
    _min?: type_produitMinOrderByAggregateInput
    _sum?: type_produitSumOrderByAggregateInput
  }

  export type type_produitScalarWhereWithAggregatesInput = {
    AND?: type_produitScalarWhereWithAggregatesInput | type_produitScalarWhereWithAggregatesInput[]
    OR?: type_produitScalarWhereWithAggregatesInput[]
    NOT?: type_produitScalarWhereWithAggregatesInput | type_produitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"type_produit"> | number
    nom?: StringWithAggregatesFilter<"type_produit"> | string
    description?: StringNullableWithAggregatesFilter<"type_produit"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    nom?: StringFilter<"users"> | string
    prenom?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    numero?: StringNullableFilter<"users"> | string | null
    adresse?: StringNullableFilter<"users"> | string | null
    mot_de_passe?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    statut?: StringNullableFilter<"users"> | string | null
    date_de_creation?: DateTimeNullableFilter<"users"> | Date | string | null
    commande?: CommandeListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    numero?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    mot_de_passe?: SortOrder
    role?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    date_de_creation?: SortOrderInput | SortOrder
    commande?: commandeOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nom?: StringFilter<"users"> | string
    prenom?: StringFilter<"users"> | string
    numero?: StringNullableFilter<"users"> | string | null
    adresse?: StringNullableFilter<"users"> | string | null
    mot_de_passe?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    statut?: StringNullableFilter<"users"> | string | null
    date_de_creation?: DateTimeNullableFilter<"users"> | Date | string | null
    commande?: CommandeListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    numero?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    mot_de_passe?: SortOrder
    role?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    date_de_creation?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    nom?: StringWithAggregatesFilter<"users"> | string
    prenom?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    numero?: StringNullableWithAggregatesFilter<"users"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"users"> | string | null
    mot_de_passe?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    statut?: StringNullableWithAggregatesFilter<"users"> | string | null
    date_de_creation?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type avoirCreateInput = {
    apparaitre: number
    commande: commandeCreateNestedOneWithoutAvoirInput
    produit: produitCreateNestedOneWithoutAvoirInput
  }

  export type avoirUncheckedCreateInput = {
    commande_id: number
    produit_id: number
    apparaitre: number
  }

  export type avoirUpdateInput = {
    apparaitre?: IntFieldUpdateOperationsInput | number
    commande?: commandeUpdateOneRequiredWithoutAvoirNestedInput
    produit?: produitUpdateOneRequiredWithoutAvoirNestedInput
  }

  export type avoirUncheckedUpdateInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    produit_id?: IntFieldUpdateOperationsInput | number
    apparaitre?: IntFieldUpdateOperationsInput | number
  }

  export type avoirCreateManyInput = {
    commande_id: number
    produit_id: number
    apparaitre: number
  }

  export type avoirUpdateManyMutationInput = {
    apparaitre?: IntFieldUpdateOperationsInput | number
  }

  export type avoirUncheckedUpdateManyInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    produit_id?: IntFieldUpdateOperationsInput | number
    apparaitre?: IntFieldUpdateOperationsInput | number
  }

  export type commandeCreateInput = {
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    avoir?: avoirCreateNestedManyWithoutCommandeInput
    users: usersCreateNestedOneWithoutCommandeInput
    facture?: factureCreateNestedOneWithoutCommandeInput
  }

  export type commandeUncheckedCreateInput = {
    id?: number
    users_id: number
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    avoir?: avoirUncheckedCreateNestedManyWithoutCommandeInput
    facture?: factureUncheckedCreateNestedOneWithoutCommandeInput
  }

  export type commandeUpdateInput = {
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUpdateManyWithoutCommandeNestedInput
    users?: usersUpdateOneRequiredWithoutCommandeNestedInput
    facture?: factureUpdateOneWithoutCommandeNestedInput
  }

  export type commandeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    users_id?: IntFieldUpdateOperationsInput | number
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUncheckedUpdateManyWithoutCommandeNestedInput
    facture?: factureUncheckedUpdateOneWithoutCommandeNestedInput
  }

  export type commandeCreateManyInput = {
    id?: number
    users_id: number
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
  }

  export type commandeUpdateManyMutationInput = {
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commandeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    users_id?: IntFieldUpdateOperationsInput | number
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type factureCreateInput = {
    numero_facture: string
    date_facture?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    commande: commandeCreateNestedOneWithoutFactureInput
  }

  export type factureUncheckedCreateInput = {
    id?: number
    numero_facture: string
    commande_id: number
    date_facture?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
  }

  export type factureUpdateInput = {
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    commande?: commandeUpdateOneRequiredWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_facture?: StringFieldUpdateOperationsInput | string
    commande_id?: IntFieldUpdateOperationsInput | number
    date_facture?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type factureCreateManyInput = {
    id?: number
    numero_facture: string
    commande_id: number
    date_facture?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
  }

  export type factureUpdateManyMutationInput = {
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type factureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_facture?: StringFieldUpdateOperationsInput | string
    commande_id?: IntFieldUpdateOperationsInput | number
    date_facture?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playing_with_neonCreateInput = {
    name: string
    value?: number | null
  }

  export type playing_with_neonUncheckedCreateInput = {
    id?: number
    name: string
    value?: number | null
  }

  export type playing_with_neonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type playing_with_neonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type playing_with_neonCreateManyInput = {
    id?: number
    name: string
    value?: number | null
  }

  export type playing_with_neonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type playing_with_neonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type produitCreateInput = {
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
    avoir?: avoirCreateNestedManyWithoutProduitInput
    type_produit?: type_produitCreateNestedOneWithoutProduitInput
  }

  export type produitUncheckedCreateInput = {
    id?: number
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
    type_produit_id?: number | null
    avoir?: avoirUncheckedCreateNestedManyWithoutProduitInput
  }

  export type produitUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUpdateManyWithoutProduitNestedInput
    type_produit?: type_produitUpdateOneWithoutProduitNestedInput
  }

  export type produitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type_produit_id?: NullableIntFieldUpdateOperationsInput | number | null
    avoir?: avoirUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type produitCreateManyInput = {
    id?: number
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
    type_produit_id?: number | null
  }

  export type produitUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type_produit_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type type_produitCreateInput = {
    nom: string
    description?: string | null
    produit?: produitCreateNestedManyWithoutType_produitInput
  }

  export type type_produitUncheckedCreateInput = {
    id?: number
    nom: string
    description?: string | null
    produit?: produitUncheckedCreateNestedManyWithoutType_produitInput
  }

  export type type_produitUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    produit?: produitUpdateManyWithoutType_produitNestedInput
  }

  export type type_produitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    produit?: produitUncheckedUpdateManyWithoutType_produitNestedInput
  }

  export type type_produitCreateManyInput = {
    id?: number
    nom: string
    description?: string | null
  }

  export type type_produitUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type type_produitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    nom: string
    prenom: string
    email: string
    numero?: string | null
    adresse?: string | null
    mot_de_passe: string
    role?: string | null
    statut?: string | null
    date_de_creation?: Date | string | null
    commande?: commandeCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    numero?: string | null
    adresse?: string | null
    mot_de_passe: string
    role?: string | null
    statut?: string | null
    date_de_creation?: Date | string | null
    commande?: commandeUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commande?: commandeUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commande?: commandeUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    numero?: string | null
    adresse?: string | null
    mot_de_passe: string
    role?: string | null
    statut?: string | null
    date_de_creation?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type CommandeRelationFilter = {
    is?: commandeWhereInput
    isNot?: commandeWhereInput
  }

  export type ProduitRelationFilter = {
    is?: produitWhereInput
    isNot?: produitWhereInput
  }

  export type avoirCommande_idProduit_idCompoundUniqueInput = {
    commande_id: number
    produit_id: number
  }

  export type avoirCountOrderByAggregateInput = {
    commande_id?: SortOrder
    produit_id?: SortOrder
    apparaitre?: SortOrder
  }

  export type avoirAvgOrderByAggregateInput = {
    commande_id?: SortOrder
    produit_id?: SortOrder
    apparaitre?: SortOrder
  }

  export type avoirMaxOrderByAggregateInput = {
    commande_id?: SortOrder
    produit_id?: SortOrder
    apparaitre?: SortOrder
  }

  export type avoirMinOrderByAggregateInput = {
    commande_id?: SortOrder
    produit_id?: SortOrder
    apparaitre?: SortOrder
  }

  export type avoirSumOrderByAggregateInput = {
    commande_id?: SortOrder
    produit_id?: SortOrder
    apparaitre?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type AvoirListRelationFilter = {
    every?: avoirWhereInput
    some?: avoirWhereInput
    none?: avoirWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type FactureNullableRelationFilter = {
    is?: factureWhereInput | null
    isNot?: factureWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type avoirOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commandeCountOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    date_commande?: SortOrder
    montant_total?: SortOrder
    statut?: SortOrder
  }

  export type commandeAvgOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    montant_total?: SortOrder
  }

  export type commandeMaxOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    date_commande?: SortOrder
    montant_total?: SortOrder
    statut?: SortOrder
  }

  export type commandeMinOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    date_commande?: SortOrder
    montant_total?: SortOrder
    statut?: SortOrder
  }

  export type commandeSumOrderByAggregateInput = {
    id?: SortOrder
    users_id?: SortOrder
    montant_total?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type factureCountOrderByAggregateInput = {
    id?: SortOrder
    numero_facture?: SortOrder
    commande_id?: SortOrder
    date_facture?: SortOrder
    montant_total?: SortOrder
    statut?: SortOrder
  }

  export type factureAvgOrderByAggregateInput = {
    id?: SortOrder
    commande_id?: SortOrder
    montant_total?: SortOrder
  }

  export type factureMaxOrderByAggregateInput = {
    id?: SortOrder
    numero_facture?: SortOrder
    commande_id?: SortOrder
    date_facture?: SortOrder
    montant_total?: SortOrder
    statut?: SortOrder
  }

  export type factureMinOrderByAggregateInput = {
    id?: SortOrder
    numero_facture?: SortOrder
    commande_id?: SortOrder
    date_facture?: SortOrder
    montant_total?: SortOrder
    statut?: SortOrder
  }

  export type factureSumOrderByAggregateInput = {
    id?: SortOrder
    commande_id?: SortOrder
    montant_total?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type playing_with_neonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type playing_with_neonSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Type_produitNullableRelationFilter = {
    is?: type_produitWhereInput | null
    isNot?: type_produitWhereInput | null
  }

  export type produitCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix_unitaire?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    type_produit_id?: SortOrder
  }

  export type produitAvgOrderByAggregateInput = {
    id?: SortOrder
    prix_unitaire?: SortOrder
    stock?: SortOrder
    type_produit_id?: SortOrder
  }

  export type produitMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix_unitaire?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    type_produit_id?: SortOrder
  }

  export type produitMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix_unitaire?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    type_produit_id?: SortOrder
  }

  export type produitSumOrderByAggregateInput = {
    id?: SortOrder
    prix_unitaire?: SortOrder
    stock?: SortOrder
    type_produit_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProduitListRelationFilter = {
    every?: produitWhereInput
    some?: produitWhereInput
    none?: produitWhereInput
  }

  export type produitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type type_produitCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
  }

  export type type_produitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type type_produitMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
  }

  export type type_produitMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
  }

  export type type_produitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommandeListRelationFilter = {
    every?: commandeWhereInput
    some?: commandeWhereInput
    none?: commandeWhereInput
  }

  export type commandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    adresse?: SortOrder
    mot_de_passe?: SortOrder
    role?: SortOrder
    statut?: SortOrder
    date_de_creation?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    adresse?: SortOrder
    mot_de_passe?: SortOrder
    role?: SortOrder
    statut?: SortOrder
    date_de_creation?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    numero?: SortOrder
    adresse?: SortOrder
    mot_de_passe?: SortOrder
    role?: SortOrder
    statut?: SortOrder
    date_de_creation?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type commandeCreateNestedOneWithoutAvoirInput = {
    create?: XOR<commandeCreateWithoutAvoirInput, commandeUncheckedCreateWithoutAvoirInput>
    connectOrCreate?: commandeCreateOrConnectWithoutAvoirInput
    connect?: commandeWhereUniqueInput
  }

  export type produitCreateNestedOneWithoutAvoirInput = {
    create?: XOR<produitCreateWithoutAvoirInput, produitUncheckedCreateWithoutAvoirInput>
    connectOrCreate?: produitCreateOrConnectWithoutAvoirInput
    connect?: produitWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type commandeUpdateOneRequiredWithoutAvoirNestedInput = {
    create?: XOR<commandeCreateWithoutAvoirInput, commandeUncheckedCreateWithoutAvoirInput>
    connectOrCreate?: commandeCreateOrConnectWithoutAvoirInput
    upsert?: commandeUpsertWithoutAvoirInput
    connect?: commandeWhereUniqueInput
    update?: XOR<XOR<commandeUpdateToOneWithWhereWithoutAvoirInput, commandeUpdateWithoutAvoirInput>, commandeUncheckedUpdateWithoutAvoirInput>
  }

  export type produitUpdateOneRequiredWithoutAvoirNestedInput = {
    create?: XOR<produitCreateWithoutAvoirInput, produitUncheckedCreateWithoutAvoirInput>
    connectOrCreate?: produitCreateOrConnectWithoutAvoirInput
    upsert?: produitUpsertWithoutAvoirInput
    connect?: produitWhereUniqueInput
    update?: XOR<XOR<produitUpdateToOneWithWhereWithoutAvoirInput, produitUpdateWithoutAvoirInput>, produitUncheckedUpdateWithoutAvoirInput>
  }

  export type avoirCreateNestedManyWithoutCommandeInput = {
    create?: XOR<avoirCreateWithoutCommandeInput, avoirUncheckedCreateWithoutCommandeInput> | avoirCreateWithoutCommandeInput[] | avoirUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutCommandeInput | avoirCreateOrConnectWithoutCommandeInput[]
    createMany?: avoirCreateManyCommandeInputEnvelope
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCommandeInput = {
    create?: XOR<usersCreateWithoutCommandeInput, usersUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommandeInput
    connect?: usersWhereUniqueInput
  }

  export type factureCreateNestedOneWithoutCommandeInput = {
    create?: XOR<factureCreateWithoutCommandeInput, factureUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: factureCreateOrConnectWithoutCommandeInput
    connect?: factureWhereUniqueInput
  }

  export type avoirUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: XOR<avoirCreateWithoutCommandeInput, avoirUncheckedCreateWithoutCommandeInput> | avoirCreateWithoutCommandeInput[] | avoirUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutCommandeInput | avoirCreateOrConnectWithoutCommandeInput[]
    createMany?: avoirCreateManyCommandeInputEnvelope
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
  }

  export type factureUncheckedCreateNestedOneWithoutCommandeInput = {
    create?: XOR<factureCreateWithoutCommandeInput, factureUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: factureCreateOrConnectWithoutCommandeInput
    connect?: factureWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type avoirUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<avoirCreateWithoutCommandeInput, avoirUncheckedCreateWithoutCommandeInput> | avoirCreateWithoutCommandeInput[] | avoirUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutCommandeInput | avoirCreateOrConnectWithoutCommandeInput[]
    upsert?: avoirUpsertWithWhereUniqueWithoutCommandeInput | avoirUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: avoirCreateManyCommandeInputEnvelope
    set?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    disconnect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    delete?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    update?: avoirUpdateWithWhereUniqueWithoutCommandeInput | avoirUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: avoirUpdateManyWithWhereWithoutCommandeInput | avoirUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: avoirScalarWhereInput | avoirScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCommandeNestedInput = {
    create?: XOR<usersCreateWithoutCommandeInput, usersUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommandeInput
    upsert?: usersUpsertWithoutCommandeInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommandeInput, usersUpdateWithoutCommandeInput>, usersUncheckedUpdateWithoutCommandeInput>
  }

  export type factureUpdateOneWithoutCommandeNestedInput = {
    create?: XOR<factureCreateWithoutCommandeInput, factureUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: factureCreateOrConnectWithoutCommandeInput
    upsert?: factureUpsertWithoutCommandeInput
    disconnect?: factureWhereInput | boolean
    delete?: factureWhereInput | boolean
    connect?: factureWhereUniqueInput
    update?: XOR<XOR<factureUpdateToOneWithWhereWithoutCommandeInput, factureUpdateWithoutCommandeInput>, factureUncheckedUpdateWithoutCommandeInput>
  }

  export type avoirUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<avoirCreateWithoutCommandeInput, avoirUncheckedCreateWithoutCommandeInput> | avoirCreateWithoutCommandeInput[] | avoirUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutCommandeInput | avoirCreateOrConnectWithoutCommandeInput[]
    upsert?: avoirUpsertWithWhereUniqueWithoutCommandeInput | avoirUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: avoirCreateManyCommandeInputEnvelope
    set?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    disconnect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    delete?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    update?: avoirUpdateWithWhereUniqueWithoutCommandeInput | avoirUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: avoirUpdateManyWithWhereWithoutCommandeInput | avoirUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: avoirScalarWhereInput | avoirScalarWhereInput[]
  }

  export type factureUncheckedUpdateOneWithoutCommandeNestedInput = {
    create?: XOR<factureCreateWithoutCommandeInput, factureUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: factureCreateOrConnectWithoutCommandeInput
    upsert?: factureUpsertWithoutCommandeInput
    disconnect?: factureWhereInput | boolean
    delete?: factureWhereInput | boolean
    connect?: factureWhereUniqueInput
    update?: XOR<XOR<factureUpdateToOneWithWhereWithoutCommandeInput, factureUpdateWithoutCommandeInput>, factureUncheckedUpdateWithoutCommandeInput>
  }

  export type commandeCreateNestedOneWithoutFactureInput = {
    create?: XOR<commandeCreateWithoutFactureInput, commandeUncheckedCreateWithoutFactureInput>
    connectOrCreate?: commandeCreateOrConnectWithoutFactureInput
    connect?: commandeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type commandeUpdateOneRequiredWithoutFactureNestedInput = {
    create?: XOR<commandeCreateWithoutFactureInput, commandeUncheckedCreateWithoutFactureInput>
    connectOrCreate?: commandeCreateOrConnectWithoutFactureInput
    upsert?: commandeUpsertWithoutFactureInput
    connect?: commandeWhereUniqueInput
    update?: XOR<XOR<commandeUpdateToOneWithWhereWithoutFactureInput, commandeUpdateWithoutFactureInput>, commandeUncheckedUpdateWithoutFactureInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type avoirCreateNestedManyWithoutProduitInput = {
    create?: XOR<avoirCreateWithoutProduitInput, avoirUncheckedCreateWithoutProduitInput> | avoirCreateWithoutProduitInput[] | avoirUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutProduitInput | avoirCreateOrConnectWithoutProduitInput[]
    createMany?: avoirCreateManyProduitInputEnvelope
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
  }

  export type type_produitCreateNestedOneWithoutProduitInput = {
    create?: XOR<type_produitCreateWithoutProduitInput, type_produitUncheckedCreateWithoutProduitInput>
    connectOrCreate?: type_produitCreateOrConnectWithoutProduitInput
    connect?: type_produitWhereUniqueInput
  }

  export type avoirUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<avoirCreateWithoutProduitInput, avoirUncheckedCreateWithoutProduitInput> | avoirCreateWithoutProduitInput[] | avoirUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutProduitInput | avoirCreateOrConnectWithoutProduitInput[]
    createMany?: avoirCreateManyProduitInputEnvelope
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type avoirUpdateManyWithoutProduitNestedInput = {
    create?: XOR<avoirCreateWithoutProduitInput, avoirUncheckedCreateWithoutProduitInput> | avoirCreateWithoutProduitInput[] | avoirUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutProduitInput | avoirCreateOrConnectWithoutProduitInput[]
    upsert?: avoirUpsertWithWhereUniqueWithoutProduitInput | avoirUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: avoirCreateManyProduitInputEnvelope
    set?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    disconnect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    delete?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    update?: avoirUpdateWithWhereUniqueWithoutProduitInput | avoirUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: avoirUpdateManyWithWhereWithoutProduitInput | avoirUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: avoirScalarWhereInput | avoirScalarWhereInput[]
  }

  export type type_produitUpdateOneWithoutProduitNestedInput = {
    create?: XOR<type_produitCreateWithoutProduitInput, type_produitUncheckedCreateWithoutProduitInput>
    connectOrCreate?: type_produitCreateOrConnectWithoutProduitInput
    upsert?: type_produitUpsertWithoutProduitInput
    disconnect?: type_produitWhereInput | boolean
    delete?: type_produitWhereInput | boolean
    connect?: type_produitWhereUniqueInput
    update?: XOR<XOR<type_produitUpdateToOneWithWhereWithoutProduitInput, type_produitUpdateWithoutProduitInput>, type_produitUncheckedUpdateWithoutProduitInput>
  }

  export type avoirUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<avoirCreateWithoutProduitInput, avoirUncheckedCreateWithoutProduitInput> | avoirCreateWithoutProduitInput[] | avoirUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: avoirCreateOrConnectWithoutProduitInput | avoirCreateOrConnectWithoutProduitInput[]
    upsert?: avoirUpsertWithWhereUniqueWithoutProduitInput | avoirUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: avoirCreateManyProduitInputEnvelope
    set?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    disconnect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    delete?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    connect?: avoirWhereUniqueInput | avoirWhereUniqueInput[]
    update?: avoirUpdateWithWhereUniqueWithoutProduitInput | avoirUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: avoirUpdateManyWithWhereWithoutProduitInput | avoirUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: avoirScalarWhereInput | avoirScalarWhereInput[]
  }

  export type produitCreateNestedManyWithoutType_produitInput = {
    create?: XOR<produitCreateWithoutType_produitInput, produitUncheckedCreateWithoutType_produitInput> | produitCreateWithoutType_produitInput[] | produitUncheckedCreateWithoutType_produitInput[]
    connectOrCreate?: produitCreateOrConnectWithoutType_produitInput | produitCreateOrConnectWithoutType_produitInput[]
    createMany?: produitCreateManyType_produitInputEnvelope
    connect?: produitWhereUniqueInput | produitWhereUniqueInput[]
  }

  export type produitUncheckedCreateNestedManyWithoutType_produitInput = {
    create?: XOR<produitCreateWithoutType_produitInput, produitUncheckedCreateWithoutType_produitInput> | produitCreateWithoutType_produitInput[] | produitUncheckedCreateWithoutType_produitInput[]
    connectOrCreate?: produitCreateOrConnectWithoutType_produitInput | produitCreateOrConnectWithoutType_produitInput[]
    createMany?: produitCreateManyType_produitInputEnvelope
    connect?: produitWhereUniqueInput | produitWhereUniqueInput[]
  }

  export type produitUpdateManyWithoutType_produitNestedInput = {
    create?: XOR<produitCreateWithoutType_produitInput, produitUncheckedCreateWithoutType_produitInput> | produitCreateWithoutType_produitInput[] | produitUncheckedCreateWithoutType_produitInput[]
    connectOrCreate?: produitCreateOrConnectWithoutType_produitInput | produitCreateOrConnectWithoutType_produitInput[]
    upsert?: produitUpsertWithWhereUniqueWithoutType_produitInput | produitUpsertWithWhereUniqueWithoutType_produitInput[]
    createMany?: produitCreateManyType_produitInputEnvelope
    set?: produitWhereUniqueInput | produitWhereUniqueInput[]
    disconnect?: produitWhereUniqueInput | produitWhereUniqueInput[]
    delete?: produitWhereUniqueInput | produitWhereUniqueInput[]
    connect?: produitWhereUniqueInput | produitWhereUniqueInput[]
    update?: produitUpdateWithWhereUniqueWithoutType_produitInput | produitUpdateWithWhereUniqueWithoutType_produitInput[]
    updateMany?: produitUpdateManyWithWhereWithoutType_produitInput | produitUpdateManyWithWhereWithoutType_produitInput[]
    deleteMany?: produitScalarWhereInput | produitScalarWhereInput[]
  }

  export type produitUncheckedUpdateManyWithoutType_produitNestedInput = {
    create?: XOR<produitCreateWithoutType_produitInput, produitUncheckedCreateWithoutType_produitInput> | produitCreateWithoutType_produitInput[] | produitUncheckedCreateWithoutType_produitInput[]
    connectOrCreate?: produitCreateOrConnectWithoutType_produitInput | produitCreateOrConnectWithoutType_produitInput[]
    upsert?: produitUpsertWithWhereUniqueWithoutType_produitInput | produitUpsertWithWhereUniqueWithoutType_produitInput[]
    createMany?: produitCreateManyType_produitInputEnvelope
    set?: produitWhereUniqueInput | produitWhereUniqueInput[]
    disconnect?: produitWhereUniqueInput | produitWhereUniqueInput[]
    delete?: produitWhereUniqueInput | produitWhereUniqueInput[]
    connect?: produitWhereUniqueInput | produitWhereUniqueInput[]
    update?: produitUpdateWithWhereUniqueWithoutType_produitInput | produitUpdateWithWhereUniqueWithoutType_produitInput[]
    updateMany?: produitUpdateManyWithWhereWithoutType_produitInput | produitUpdateManyWithWhereWithoutType_produitInput[]
    deleteMany?: produitScalarWhereInput | produitScalarWhereInput[]
  }

  export type commandeCreateNestedManyWithoutUsersInput = {
    create?: XOR<commandeCreateWithoutUsersInput, commandeUncheckedCreateWithoutUsersInput> | commandeCreateWithoutUsersInput[] | commandeUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commandeCreateOrConnectWithoutUsersInput | commandeCreateOrConnectWithoutUsersInput[]
    createMany?: commandeCreateManyUsersInputEnvelope
    connect?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
  }

  export type commandeUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commandeCreateWithoutUsersInput, commandeUncheckedCreateWithoutUsersInput> | commandeCreateWithoutUsersInput[] | commandeUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commandeCreateOrConnectWithoutUsersInput | commandeCreateOrConnectWithoutUsersInput[]
    createMany?: commandeCreateManyUsersInputEnvelope
    connect?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
  }

  export type commandeUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commandeCreateWithoutUsersInput, commandeUncheckedCreateWithoutUsersInput> | commandeCreateWithoutUsersInput[] | commandeUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commandeCreateOrConnectWithoutUsersInput | commandeCreateOrConnectWithoutUsersInput[]
    upsert?: commandeUpsertWithWhereUniqueWithoutUsersInput | commandeUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commandeCreateManyUsersInputEnvelope
    set?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    disconnect?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    delete?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    connect?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    update?: commandeUpdateWithWhereUniqueWithoutUsersInput | commandeUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commandeUpdateManyWithWhereWithoutUsersInput | commandeUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commandeScalarWhereInput | commandeScalarWhereInput[]
  }

  export type commandeUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commandeCreateWithoutUsersInput, commandeUncheckedCreateWithoutUsersInput> | commandeCreateWithoutUsersInput[] | commandeUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commandeCreateOrConnectWithoutUsersInput | commandeCreateOrConnectWithoutUsersInput[]
    upsert?: commandeUpsertWithWhereUniqueWithoutUsersInput | commandeUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commandeCreateManyUsersInputEnvelope
    set?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    disconnect?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    delete?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    connect?: commandeWhereUniqueInput | commandeWhereUniqueInput[]
    update?: commandeUpdateWithWhereUniqueWithoutUsersInput | commandeUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commandeUpdateManyWithWhereWithoutUsersInput | commandeUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commandeScalarWhereInput | commandeScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type commandeCreateWithoutAvoirInput = {
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    users: usersCreateNestedOneWithoutCommandeInput
    facture?: factureCreateNestedOneWithoutCommandeInput
  }

  export type commandeUncheckedCreateWithoutAvoirInput = {
    id?: number
    users_id: number
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    facture?: factureUncheckedCreateNestedOneWithoutCommandeInput
  }

  export type commandeCreateOrConnectWithoutAvoirInput = {
    where: commandeWhereUniqueInput
    create: XOR<commandeCreateWithoutAvoirInput, commandeUncheckedCreateWithoutAvoirInput>
  }

  export type produitCreateWithoutAvoirInput = {
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
    type_produit?: type_produitCreateNestedOneWithoutProduitInput
  }

  export type produitUncheckedCreateWithoutAvoirInput = {
    id?: number
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
    type_produit_id?: number | null
  }

  export type produitCreateOrConnectWithoutAvoirInput = {
    where: produitWhereUniqueInput
    create: XOR<produitCreateWithoutAvoirInput, produitUncheckedCreateWithoutAvoirInput>
  }

  export type commandeUpsertWithoutAvoirInput = {
    update: XOR<commandeUpdateWithoutAvoirInput, commandeUncheckedUpdateWithoutAvoirInput>
    create: XOR<commandeCreateWithoutAvoirInput, commandeUncheckedCreateWithoutAvoirInput>
    where?: commandeWhereInput
  }

  export type commandeUpdateToOneWithWhereWithoutAvoirInput = {
    where?: commandeWhereInput
    data: XOR<commandeUpdateWithoutAvoirInput, commandeUncheckedUpdateWithoutAvoirInput>
  }

  export type commandeUpdateWithoutAvoirInput = {
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutCommandeNestedInput
    facture?: factureUpdateOneWithoutCommandeNestedInput
  }

  export type commandeUncheckedUpdateWithoutAvoirInput = {
    id?: IntFieldUpdateOperationsInput | number
    users_id?: IntFieldUpdateOperationsInput | number
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    facture?: factureUncheckedUpdateOneWithoutCommandeNestedInput
  }

  export type produitUpsertWithoutAvoirInput = {
    update: XOR<produitUpdateWithoutAvoirInput, produitUncheckedUpdateWithoutAvoirInput>
    create: XOR<produitCreateWithoutAvoirInput, produitUncheckedCreateWithoutAvoirInput>
    where?: produitWhereInput
  }

  export type produitUpdateToOneWithWhereWithoutAvoirInput = {
    where?: produitWhereInput
    data: XOR<produitUpdateWithoutAvoirInput, produitUncheckedUpdateWithoutAvoirInput>
  }

  export type produitUpdateWithoutAvoirInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type_produit?: type_produitUpdateOneWithoutProduitNestedInput
  }

  export type produitUncheckedUpdateWithoutAvoirInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type_produit_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type avoirCreateWithoutCommandeInput = {
    apparaitre: number
    produit: produitCreateNestedOneWithoutAvoirInput
  }

  export type avoirUncheckedCreateWithoutCommandeInput = {
    produit_id: number
    apparaitre: number
  }

  export type avoirCreateOrConnectWithoutCommandeInput = {
    where: avoirWhereUniqueInput
    create: XOR<avoirCreateWithoutCommandeInput, avoirUncheckedCreateWithoutCommandeInput>
  }

  export type avoirCreateManyCommandeInputEnvelope = {
    data: avoirCreateManyCommandeInput | avoirCreateManyCommandeInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCommandeInput = {
    nom: string
    prenom: string
    email: string
    numero?: string | null
    adresse?: string | null
    mot_de_passe: string
    role?: string | null
    statut?: string | null
    date_de_creation?: Date | string | null
  }

  export type usersUncheckedCreateWithoutCommandeInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    numero?: string | null
    adresse?: string | null
    mot_de_passe: string
    role?: string | null
    statut?: string | null
    date_de_creation?: Date | string | null
  }

  export type usersCreateOrConnectWithoutCommandeInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommandeInput, usersUncheckedCreateWithoutCommandeInput>
  }

  export type factureCreateWithoutCommandeInput = {
    numero_facture: string
    date_facture?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
  }

  export type factureUncheckedCreateWithoutCommandeInput = {
    id?: number
    numero_facture: string
    date_facture?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
  }

  export type factureCreateOrConnectWithoutCommandeInput = {
    where: factureWhereUniqueInput
    create: XOR<factureCreateWithoutCommandeInput, factureUncheckedCreateWithoutCommandeInput>
  }

  export type avoirUpsertWithWhereUniqueWithoutCommandeInput = {
    where: avoirWhereUniqueInput
    update: XOR<avoirUpdateWithoutCommandeInput, avoirUncheckedUpdateWithoutCommandeInput>
    create: XOR<avoirCreateWithoutCommandeInput, avoirUncheckedCreateWithoutCommandeInput>
  }

  export type avoirUpdateWithWhereUniqueWithoutCommandeInput = {
    where: avoirWhereUniqueInput
    data: XOR<avoirUpdateWithoutCommandeInput, avoirUncheckedUpdateWithoutCommandeInput>
  }

  export type avoirUpdateManyWithWhereWithoutCommandeInput = {
    where: avoirScalarWhereInput
    data: XOR<avoirUpdateManyMutationInput, avoirUncheckedUpdateManyWithoutCommandeInput>
  }

  export type avoirScalarWhereInput = {
    AND?: avoirScalarWhereInput | avoirScalarWhereInput[]
    OR?: avoirScalarWhereInput[]
    NOT?: avoirScalarWhereInput | avoirScalarWhereInput[]
    commande_id?: IntFilter<"avoir"> | number
    produit_id?: IntFilter<"avoir"> | number
    apparaitre?: IntFilter<"avoir"> | number
  }

  export type usersUpsertWithoutCommandeInput = {
    update: XOR<usersUpdateWithoutCommandeInput, usersUncheckedUpdateWithoutCommandeInput>
    create: XOR<usersCreateWithoutCommandeInput, usersUncheckedCreateWithoutCommandeInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommandeInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommandeInput, usersUncheckedUpdateWithoutCommandeInput>
  }

  export type usersUpdateWithoutCommandeInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutCommandeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_de_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type factureUpsertWithoutCommandeInput = {
    update: XOR<factureUpdateWithoutCommandeInput, factureUncheckedUpdateWithoutCommandeInput>
    create: XOR<factureCreateWithoutCommandeInput, factureUncheckedCreateWithoutCommandeInput>
    where?: factureWhereInput
  }

  export type factureUpdateToOneWithWhereWithoutCommandeInput = {
    where?: factureWhereInput
    data: XOR<factureUpdateWithoutCommandeInput, factureUncheckedUpdateWithoutCommandeInput>
  }

  export type factureUpdateWithoutCommandeInput = {
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type factureUncheckedUpdateWithoutCommandeInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commandeCreateWithoutFactureInput = {
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    avoir?: avoirCreateNestedManyWithoutCommandeInput
    users: usersCreateNestedOneWithoutCommandeInput
  }

  export type commandeUncheckedCreateWithoutFactureInput = {
    id?: number
    users_id: number
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    avoir?: avoirUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type commandeCreateOrConnectWithoutFactureInput = {
    where: commandeWhereUniqueInput
    create: XOR<commandeCreateWithoutFactureInput, commandeUncheckedCreateWithoutFactureInput>
  }

  export type commandeUpsertWithoutFactureInput = {
    update: XOR<commandeUpdateWithoutFactureInput, commandeUncheckedUpdateWithoutFactureInput>
    create: XOR<commandeCreateWithoutFactureInput, commandeUncheckedCreateWithoutFactureInput>
    where?: commandeWhereInput
  }

  export type commandeUpdateToOneWithWhereWithoutFactureInput = {
    where?: commandeWhereInput
    data: XOR<commandeUpdateWithoutFactureInput, commandeUncheckedUpdateWithoutFactureInput>
  }

  export type commandeUpdateWithoutFactureInput = {
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUpdateManyWithoutCommandeNestedInput
    users?: usersUpdateOneRequiredWithoutCommandeNestedInput
  }

  export type commandeUncheckedUpdateWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    users_id?: IntFieldUpdateOperationsInput | number
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type avoirCreateWithoutProduitInput = {
    apparaitre: number
    commande: commandeCreateNestedOneWithoutAvoirInput
  }

  export type avoirUncheckedCreateWithoutProduitInput = {
    commande_id: number
    apparaitre: number
  }

  export type avoirCreateOrConnectWithoutProduitInput = {
    where: avoirWhereUniqueInput
    create: XOR<avoirCreateWithoutProduitInput, avoirUncheckedCreateWithoutProduitInput>
  }

  export type avoirCreateManyProduitInputEnvelope = {
    data: avoirCreateManyProduitInput | avoirCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type type_produitCreateWithoutProduitInput = {
    nom: string
    description?: string | null
  }

  export type type_produitUncheckedCreateWithoutProduitInput = {
    id?: number
    nom: string
    description?: string | null
  }

  export type type_produitCreateOrConnectWithoutProduitInput = {
    where: type_produitWhereUniqueInput
    create: XOR<type_produitCreateWithoutProduitInput, type_produitUncheckedCreateWithoutProduitInput>
  }

  export type avoirUpsertWithWhereUniqueWithoutProduitInput = {
    where: avoirWhereUniqueInput
    update: XOR<avoirUpdateWithoutProduitInput, avoirUncheckedUpdateWithoutProduitInput>
    create: XOR<avoirCreateWithoutProduitInput, avoirUncheckedCreateWithoutProduitInput>
  }

  export type avoirUpdateWithWhereUniqueWithoutProduitInput = {
    where: avoirWhereUniqueInput
    data: XOR<avoirUpdateWithoutProduitInput, avoirUncheckedUpdateWithoutProduitInput>
  }

  export type avoirUpdateManyWithWhereWithoutProduitInput = {
    where: avoirScalarWhereInput
    data: XOR<avoirUpdateManyMutationInput, avoirUncheckedUpdateManyWithoutProduitInput>
  }

  export type type_produitUpsertWithoutProduitInput = {
    update: XOR<type_produitUpdateWithoutProduitInput, type_produitUncheckedUpdateWithoutProduitInput>
    create: XOR<type_produitCreateWithoutProduitInput, type_produitUncheckedCreateWithoutProduitInput>
    where?: type_produitWhereInput
  }

  export type type_produitUpdateToOneWithWhereWithoutProduitInput = {
    where?: type_produitWhereInput
    data: XOR<type_produitUpdateWithoutProduitInput, type_produitUncheckedUpdateWithoutProduitInput>
  }

  export type type_produitUpdateWithoutProduitInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type type_produitUncheckedUpdateWithoutProduitInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produitCreateWithoutType_produitInput = {
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
    avoir?: avoirCreateNestedManyWithoutProduitInput
  }

  export type produitUncheckedCreateWithoutType_produitInput = {
    id?: number
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
    avoir?: avoirUncheckedCreateNestedManyWithoutProduitInput
  }

  export type produitCreateOrConnectWithoutType_produitInput = {
    where: produitWhereUniqueInput
    create: XOR<produitCreateWithoutType_produitInput, produitUncheckedCreateWithoutType_produitInput>
  }

  export type produitCreateManyType_produitInputEnvelope = {
    data: produitCreateManyType_produitInput | produitCreateManyType_produitInput[]
    skipDuplicates?: boolean
  }

  export type produitUpsertWithWhereUniqueWithoutType_produitInput = {
    where: produitWhereUniqueInput
    update: XOR<produitUpdateWithoutType_produitInput, produitUncheckedUpdateWithoutType_produitInput>
    create: XOR<produitCreateWithoutType_produitInput, produitUncheckedCreateWithoutType_produitInput>
  }

  export type produitUpdateWithWhereUniqueWithoutType_produitInput = {
    where: produitWhereUniqueInput
    data: XOR<produitUpdateWithoutType_produitInput, produitUncheckedUpdateWithoutType_produitInput>
  }

  export type produitUpdateManyWithWhereWithoutType_produitInput = {
    where: produitScalarWhereInput
    data: XOR<produitUpdateManyMutationInput, produitUncheckedUpdateManyWithoutType_produitInput>
  }

  export type produitScalarWhereInput = {
    AND?: produitScalarWhereInput | produitScalarWhereInput[]
    OR?: produitScalarWhereInput[]
    NOT?: produitScalarWhereInput | produitScalarWhereInput[]
    id?: IntFilter<"produit"> | number
    nom?: StringFilter<"produit"> | string
    description?: StringNullableFilter<"produit"> | string | null
    prix_unitaire?: DecimalFilter<"produit"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"produit"> | number | null
    image?: StringNullableFilter<"produit"> | string | null
    type_produit_id?: IntNullableFilter<"produit"> | number | null
  }

  export type commandeCreateWithoutUsersInput = {
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    avoir?: avoirCreateNestedManyWithoutCommandeInput
    facture?: factureCreateNestedOneWithoutCommandeInput
  }

  export type commandeUncheckedCreateWithoutUsersInput = {
    id?: number
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
    avoir?: avoirUncheckedCreateNestedManyWithoutCommandeInput
    facture?: factureUncheckedCreateNestedOneWithoutCommandeInput
  }

  export type commandeCreateOrConnectWithoutUsersInput = {
    where: commandeWhereUniqueInput
    create: XOR<commandeCreateWithoutUsersInput, commandeUncheckedCreateWithoutUsersInput>
  }

  export type commandeCreateManyUsersInputEnvelope = {
    data: commandeCreateManyUsersInput | commandeCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commandeUpsertWithWhereUniqueWithoutUsersInput = {
    where: commandeWhereUniqueInput
    update: XOR<commandeUpdateWithoutUsersInput, commandeUncheckedUpdateWithoutUsersInput>
    create: XOR<commandeCreateWithoutUsersInput, commandeUncheckedCreateWithoutUsersInput>
  }

  export type commandeUpdateWithWhereUniqueWithoutUsersInput = {
    where: commandeWhereUniqueInput
    data: XOR<commandeUpdateWithoutUsersInput, commandeUncheckedUpdateWithoutUsersInput>
  }

  export type commandeUpdateManyWithWhereWithoutUsersInput = {
    where: commandeScalarWhereInput
    data: XOR<commandeUpdateManyMutationInput, commandeUncheckedUpdateManyWithoutUsersInput>
  }

  export type commandeScalarWhereInput = {
    AND?: commandeScalarWhereInput | commandeScalarWhereInput[]
    OR?: commandeScalarWhereInput[]
    NOT?: commandeScalarWhereInput | commandeScalarWhereInput[]
    id?: IntFilter<"commande"> | number
    users_id?: IntFilter<"commande"> | number
    date_commande?: DateTimeNullableFilter<"commande"> | Date | string | null
    montant_total?: DecimalNullableFilter<"commande"> | Decimal | DecimalJsLike | number | string | null
    statut?: StringNullableFilter<"commande"> | string | null
  }

  export type avoirCreateManyCommandeInput = {
    produit_id: number
    apparaitre: number
  }

  export type avoirUpdateWithoutCommandeInput = {
    apparaitre?: IntFieldUpdateOperationsInput | number
    produit?: produitUpdateOneRequiredWithoutAvoirNestedInput
  }

  export type avoirUncheckedUpdateWithoutCommandeInput = {
    produit_id?: IntFieldUpdateOperationsInput | number
    apparaitre?: IntFieldUpdateOperationsInput | number
  }

  export type avoirUncheckedUpdateManyWithoutCommandeInput = {
    produit_id?: IntFieldUpdateOperationsInput | number
    apparaitre?: IntFieldUpdateOperationsInput | number
  }

  export type avoirCreateManyProduitInput = {
    commande_id: number
    apparaitre: number
  }

  export type avoirUpdateWithoutProduitInput = {
    apparaitre?: IntFieldUpdateOperationsInput | number
    commande?: commandeUpdateOneRequiredWithoutAvoirNestedInput
  }

  export type avoirUncheckedUpdateWithoutProduitInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    apparaitre?: IntFieldUpdateOperationsInput | number
  }

  export type avoirUncheckedUpdateManyWithoutProduitInput = {
    commande_id?: IntFieldUpdateOperationsInput | number
    apparaitre?: IntFieldUpdateOperationsInput | number
  }

  export type produitCreateManyType_produitInput = {
    id?: number
    nom: string
    description?: string | null
    prix_unitaire: Decimal | DecimalJsLike | number | string
    stock?: number | null
    image?: string | null
  }

  export type produitUpdateWithoutType_produitInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUpdateManyWithoutProduitNestedInput
  }

  export type produitUncheckedUpdateWithoutType_produitInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type produitUncheckedUpdateManyWithoutType_produitInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_unitaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commandeCreateManyUsersInput = {
    id?: number
    date_commande?: Date | string | null
    montant_total?: Decimal | DecimalJsLike | number | string | null
    statut?: string | null
  }

  export type commandeUpdateWithoutUsersInput = {
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUpdateManyWithoutCommandeNestedInput
    facture?: factureUpdateOneWithoutCommandeNestedInput
  }

  export type commandeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    avoir?: avoirUncheckedUpdateManyWithoutCommandeNestedInput
    facture?: factureUncheckedUpdateOneWithoutCommandeNestedInput
  }

  export type commandeUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_commande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montant_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CommandeCountOutputTypeDefaultArgs instead
     */
    export type CommandeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommandeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProduitCountOutputTypeDefaultArgs instead
     */
    export type ProduitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProduitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Type_produitCountOutputTypeDefaultArgs instead
     */
    export type Type_produitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Type_produitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use avoirDefaultArgs instead
     */
    export type avoirArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = avoirDefaultArgs<ExtArgs>
    /**
     * @deprecated Use commandeDefaultArgs instead
     */
    export type commandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = commandeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use factureDefaultArgs instead
     */
    export type factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = factureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use playing_with_neonDefaultArgs instead
     */
    export type playing_with_neonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = playing_with_neonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use produitDefaultArgs instead
     */
    export type produitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = produitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use type_produitDefaultArgs instead
     */
    export type type_produitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = type_produitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

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