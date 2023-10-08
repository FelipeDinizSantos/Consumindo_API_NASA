export function print_isSentry_objects(neos)
{
    const ul = document.querySelector('.sentry_objects_list');
    const counter_objects = document.getElementById('counter_objects');

    counter_objects.innerText = 'Quantidade de objetos: ' + neos.length;

    neos.forEach(neo => 
        {
            const li = document.createElement('li');

            li.innerText = `ID do objeto: ${neo.sentryId} | Nome do objeto: ${neo.name} | Impacto previsto entre: ${neo.year_range_min} e ${neo.year_range_max}`;

            ul.appendChild(li);
        })
} 