import SecureLS from 'secure-ls';

// const localStorage = new SecureLS({ encodingType: 'aes' });

class BaseService {
  static getHeaders = (isFile:boolean = false):Headers => {
    const headers = new Headers();
    if (!isFile) {
      headers.append('Content-Type', 'application/json');
    }
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Origin', '*');
    headers.append('Credentials', 'same-origin');

    const lang = 'en';
    headers.append('Accept-Language', lang);
    headers.append('lang', lang);
    return headers;
  };

  static getHeadersAuth = (isFile:boolean = false):Headers => {
    const headers = BaseService.getHeaders(isFile);
    const access_token = localStorage?.getItem('token')
      ? localStorage?.getItem('token')?.toString()
      : null;

    if (access_token === '') {
      window.location.reload();
      // const router = useRouter();
      // router.history.push('/auth');
    }
    headers.append('Authorization', `Bearer ${String(access_token) || ""}`);
    return headers;
  };

  static getToken = ():string => {
    return (localStorage?.getItem('token') || '').toString();
  };

  static postRequest = async (url:string, body:object, required_auth:boolean):Promise<Response> => {
    const head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    const headers: RequestInit = {
      method: 'POST',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };

    return await fetch(url, headers)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };

  static postFileRequest = async (url:string, body:BodyInit, required_auth:boolean):Promise<Response> => {
    const head = required_auth
      ? BaseService.getHeadersAuth(true)
      : BaseService.getHeaders(true);

    const headers:RequestInit = {
      method: 'POST',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body
    };
    return await fetch(url, headers)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };

  static putFileRequest = async (url:string, body:BodyInit, required_auth:boolean):Promise<Response> => {
    const head = required_auth
      ? BaseService.getHeadersAuth(true)
      : BaseService.getHeaders(true);

    const headers:RequestInit = {
      method: 'PUT',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body
    };
    return await fetch(url, headers)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };

  static putRequest = async (url:string, body:object, required_auth:boolean):Promise<Response> => {
    const head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    const headers:RequestInit = {
      method: 'PUT',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };
    return await fetch(url, headers)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };

  static patchRequest = async (url:string, body:object, required_auth:boolean):Promise<Response> => {
    const head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    const headers:RequestInit = {
      method: 'PATCH',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };
    return await fetch(url, headers)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };

  static deleteRequest = async (url:string, body: object, required_auth: boolean):Promise<Response> => {
    const head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    const headers:RequestInit = {
      method: 'DELETE',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };
    return await fetch(url, headers)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };

  static getRequest = async (url:string, required_auth:boolean):Promise<Response> => {
    const head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    const headers:RequestInit = {
      method: 'GET',
      headers: head,
      mode: 'cors',
      cache: 'default'
    };
    return await fetch(url, headers)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  };
}

export default BaseService;
