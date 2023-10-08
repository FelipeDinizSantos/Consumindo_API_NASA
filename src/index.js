import { print_isSentry_objects } from './components/view_neos_isSentry';
import { filter_API_data } from './modules/filterAPI';

async function Main()
{
    try
    {
        const neos = await filter_API_data();
        print_isSentry_objects(neos);
    }
    catch(e)
    {
        alert('Ocorreu um erro: ' + e);
    }
}

Main();