
const MODULE_PREFIX = "AUTH_MODULE"
const SAGA_PREFIX = MODULE_PREFIX + "__SAGA__"
const REDUCER_PREFIX = MODULE_PREFIX + "__REDUCER__"

export const SAGA_ACTION_TYPES = {
    AUTH_LOGIN: `${SAGA_PREFIX}_LOGIN_ACTION`,
    AUTH_LOGOUT: `${SAGA_PREFIX}_AUTH_LOGOUT`,
}

export const REDUCER_ACTION_TYPES = {
    SET_PROCESSING: `${REDUCER_PREFIX}_TRANSACTION_PROCESSING`,
    AUTH_LOGIN_COMPLETED: `${REDUCER_PREFIX}_LOGIN_ACTION_COMPLETE`,
    AUTH_LOGOUT_COMPLETED: `${REDUCER_PREFIX}_AUTH_LOGOUT_COMPLETE`,
}