const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};

export default {
    connectionString: process.env.DATABASE_URL,
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};
