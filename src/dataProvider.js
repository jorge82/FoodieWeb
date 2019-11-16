import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';
import jsonServerProvider from 'ra-data-json-server';
const API_URL = 'https://polar-stream-82449.herokuapp.com/api';
//const API_URL='http://localhost:5000/api';
/**
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
    
    let url = '';
    const options = {
        headers : new Headers({
            Accept: 'application/json',
 
        }),
    };
 
    console.log("tipo, recurso y parametros:",type, resource,params)

    const token = localStorage.getItem('token');
    options.headers.set('token', token);
    console.log('token:')
    console.log(token)
    switch (type) {
    case GET_LIST: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        return {
            url: `${API_URL}/${resource}/`,
            options: { method: 'GET',  headers: new Headers({"token" : token})},
    
        };
       //return { url: `http://localhost:5000/api/user` };
        //return { url:  'https://polar-stream-82449.herokuapp.com/api/user'};
    }
    case GET_ONE:
        return { url: `${API_URL}/${resource}/${params.id}` };
    case GET_MANY: {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        //return { url: `${API_URL}/${resource}?${stringify(query)}` };
        return { url: `http://localhost:5000/api//${resource}` };
    }
    case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
            filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
        };
        return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case UPDATE:
        return {
            url: `${API_URL}/${resource}/${params.id}`,
            options: { method: 'PUT', body: JSON.stringify(params.data),  headers: new Headers({"token" : token})},
    
        };
    case CREATE:
        return {
            url: `${API_URL}/${resource}/register`,
            options: { method: 'POST', body: JSON.stringify(params.data) },
        };
    case DELETE:
        return {
            url: `${API_URL}/${resource}/${params.id}`,
            options: { method: 'DELETE', body: JSON.stringify({'id' : params.id}),headers: new Headers({"token" : token}) },
        };
    default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    const { headers, json } = response;
    console.log(response)
    switch (type) {
    case GET_LIST:
            if(resource==='comercio'){
        return {
           //data: json.data.map(x => x),
           data: json.data.map(resource => ({ ...resource, id: resource.com_id })), 
           total:1,
          
           // total: parseInt(headers.get('content-range').split('/').pop(), 10),
        };
        }else{
            return {
                data: json.data.map(x => x),
                
                total:1,
               
                // total: parseInt(headers.get('content-range').split('/').pop(), 10),
             };
        }
        
       
    case CREATE:
        return { data: { ...params.data, id: json.id } };
    case UPDATE:
        return { data:{ ...params.data, id: params.data.id }  };
    default:
        return { data: json };
    }
};
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
   
}
/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
    const { fetchJson } = fetchUtils;
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
  
    
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};
