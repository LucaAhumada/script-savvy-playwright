import winston from 'winston'
import { format } from 'winston'

const logFormat = format.combine(format.timestamp(), format.json())

const logger = winston.createLogger({
    format: logFormat,
    transports: [
        new winston.transports.File({
            filename: './logs/trace.log',
            maxsize: 5242880, // 5MB log file max size
            maxFiles: 5, // Retain up to 5 log files
        }),
    ],
})

export default logger
