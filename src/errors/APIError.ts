const errors: Record<string, string> = {
    400: 'Client provided incorrect parameters for the request',
    403: 'Invalid authorization',
    404: 'Not found',
    429: 'Rate-Limited',
    503: 'Service Unavailable'
}

export class APIError extends Error {
    constructor(public status: number) {
        super()
        this.status = status
        this.message = errors[status] || "Unkown error"
    }
}
