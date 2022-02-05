/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.5.0-SNAPSHOT
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';


// Services

export interface GiveMeDataDef {
    getFromPeer: (data: string, callParams: CallParams<'data'>) => string | Promise<string>;
    returnDataToPeer: (data: string, callParams: CallParams<'data'>) => string | Promise<string>;
    workWithDocker: (data: string, callParams: CallParams<'data'>) => string | Promise<string>;
}
export function registerGiveMeData(service: GiveMeDataDef): void;
export function registerGiveMeData(serviceId: string, service: GiveMeDataDef): void;
export function registerGiveMeData(peer: FluencePeer, service: GiveMeDataDef): void;
export function registerGiveMeData(peer: FluencePeer, serviceId: string, service: GiveMeDataDef): void;
       

export function registerGiveMeData(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "giveMeData",
    "functions" : [
        {
            "functionName" : "getFromPeer",
            "argDefs" : [
                {
                    "name" : "data",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "returnDataToPeer",
            "argDefs" : [
                {
                    "name" : "data",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "workWithDocker",
            "argDefs" : [
                {
                    "name" : "data",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        }
    ]
}
    );
}
      
// Functions
 

export function getFromPeer(
    targetPeerId: string,
    targetRelayPeerId: string,
    data: string,
    config?: {ttl?: number}
): Promise<string>;

export function getFromPeer(
    peer: FluencePeer,
    targetPeerId: string,
    targetRelayPeerId: string,
    data: string,
    config?: {ttl?: number}
): Promise<string>;

export function getFromPeer(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                              (call %init_peer_id% ("getDataSrv" "targetPeerId") [] targetPeerId)
                             )
                             (call %init_peer_id% ("getDataSrv" "targetRelayPeerId") [] targetRelayPeerId)
                            )
                            (call %init_peer_id% ("getDataSrv" "data") [] data)
                           )
                           (call -relay- ("op" "noop") [])
                          )
                          (call targetRelayPeerId ("op" "noop") [])
                         )
                         (xor
                          (call targetPeerId ("giveMeData" "getFromPeer") [data] res)
                          (seq
                           (seq
                            (seq
                             (call targetRelayPeerId ("op" "noop") [])
                             (call -relay- ("op" "noop") [])
                            )
                            (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                           )
                           (call -relay- ("op" "noop") [])
                          )
                         )
                        )
                        (call targetRelayPeerId ("op" "noop") [])
                       )
                       (call -relay- ("op" "noop") [])
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "getFromPeer",
    "returnType" : {
        "tag" : "primitive"
    },
    "argDefs" : [
        {
            "name" : "targetPeerId",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "targetRelayPeerId",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "data",
            "argType" : {
                "tag" : "primitive"
            }
        }
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 

export function workWithDocker(
    data: string,
    config?: {ttl?: number}
): Promise<string>;

export function workWithDocker(
    peer: FluencePeer,
    data: string,
    config?: {ttl?: number}
): Promise<string>;

export function workWithDocker(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                        (call %init_peer_id% ("getDataSrv" "data") [] data)
                       )
                       (call %init_peer_id% ("giveMeData" "workWithDocker") [data] res)
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "workWithDocker",
    "returnType" : {
        "tag" : "primitive"
    },
    "argDefs" : [
        {
            "name" : "data",
            "argType" : {
                "tag" : "primitive"
            }
        }
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 

export function returnDataToPeer(
    targetPeerId: string,
    targetRelayPeerId: string,
    data: string,
    config?: {ttl?: number}
): Promise<string>;

export function returnDataToPeer(
    peer: FluencePeer,
    targetPeerId: string,
    targetRelayPeerId: string,
    data: string,
    config?: {ttl?: number}
): Promise<string>;

export function returnDataToPeer(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                              (call %init_peer_id% ("getDataSrv" "targetPeerId") [] targetPeerId)
                             )
                             (call %init_peer_id% ("getDataSrv" "targetRelayPeerId") [] targetRelayPeerId)
                            )
                            (call %init_peer_id% ("getDataSrv" "data") [] data)
                           )
                           (call -relay- ("op" "noop") [])
                          )
                          (call targetRelayPeerId ("op" "noop") [])
                         )
                         (xor
                          (call targetPeerId ("giveMeData" "returnDataToPeer") [data] res)
                          (seq
                           (seq
                            (seq
                             (call targetRelayPeerId ("op" "noop") [])
                             (call -relay- ("op" "noop") [])
                            )
                            (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                           )
                           (call -relay- ("op" "noop") [])
                          )
                         )
                        )
                        (call targetRelayPeerId ("op" "noop") [])
                       )
                       (call -relay- ("op" "noop") [])
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "returnDataToPeer",
    "returnType" : {
        "tag" : "primitive"
    },
    "argDefs" : [
        {
            "name" : "targetPeerId",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "targetRelayPeerId",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "data",
            "argType" : {
                "tag" : "primitive"
            }
        }
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 

export function main(
    targetPeerId: string,
    targetRelayPeerId: string,
    data: string,
    config?: {ttl?: number}
): Promise<void>;

export function main(
    peer: FluencePeer,
    targetPeerId: string,
    targetRelayPeerId: string,
    data: string,
    config?: {ttl?: number}
): Promise<void>;

export function main(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                                 (call %init_peer_id% ("getDataSrv" "targetPeerId") [] targetPeerId)
                                )
                                (call %init_peer_id% ("getDataSrv" "targetRelayPeerId") [] targetRelayPeerId)
                               )
                               (call %init_peer_id% ("getDataSrv" "data") [] data)
                              )
                              (call -relay- ("op" "noop") [])
                             )
                             (call targetRelayPeerId ("op" "noop") [])
                            )
                            (xor
                             (call targetPeerId ("giveMeData" "getFromPeer") [data] res)
                             (seq
                              (seq
                               (seq
                                (call targetRelayPeerId ("op" "noop") [])
                                (call -relay- ("op" "noop") [])
                               )
                               (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                              )
                              (call -relay- ("op" "noop") [])
                             )
                            )
                           )
                           (call targetRelayPeerId ("op" "noop") [])
                          )
                          (call -relay- ("op" "noop") [])
                         )
                         (call %init_peer_id% ("giveMeData" "workWithDocker") [data] res0)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (call targetRelayPeerId ("op" "noop") [])
                      )
                      (xor
                       (call targetPeerId ("giveMeData" "returnDataToPeer") [data] res1)
                       (seq
                        (seq
                         (seq
                          (call targetRelayPeerId ("op" "noop") [])
                          (call -relay- ("op" "noop") [])
                         )
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                        )
                        (call -relay- ("op" "noop") [])
                       )
                      )
                     )
                     (seq
                      (seq
                       (call targetRelayPeerId ("op" "noop") [])
                       (call -relay- ("op" "noop") [])
                      )
                      (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                     )
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "main",
    "returnType" : {
        "tag" : "void"
    },
    "argDefs" : [
        {
            "name" : "targetPeerId",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "targetRelayPeerId",
            "argType" : {
                "tag" : "primitive"
            }
        },
        {
            "name" : "data",
            "argType" : {
                "tag" : "primitive"
            }
        }
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}
