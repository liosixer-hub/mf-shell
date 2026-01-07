
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Provider';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Provider' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Provider') :any;