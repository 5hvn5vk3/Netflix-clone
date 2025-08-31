import axios from '../../axios';

export const Row = ({fetchURL}: {fetchURL: string}) => {
    async function fetchData() {
        const request = await axios.get(fetchURL);
    };
    fetchData();
    return <div className='Row'/>;
};