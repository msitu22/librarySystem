import winston, {transports, format} from "winston"
import {DateTime} from "luxon"

const LoggerLevel = ['info', 'debug', 'error', 'warn']

const logFormat = format.printf(({level, message}) => {
    const timeStamp = DateTime.now().toUTC()
    return `time: ${timeStamp} level: ${level} message: ${message} `
})

export const getLoggerInstance = () => {
    const logger = winston.createLogger({
        level: 'info',
        format: format.json(),
        defaultMeta: { service: 'sfbu_course-services' },
        transports: [
            new transports.Console({format: format.combine(format.colorize(), logFormat)}),
        ]
    })
    return logger;
}
