import { FC } from 'react';
import './styles.css';
type AppProps = {
    error: string;
};
const Error: FC<AppProps> = ({ error }) => {
    return (
        <div>
            <h2 className="error-message">{error}</h2>
        </div>
    );
};
export default Error;
