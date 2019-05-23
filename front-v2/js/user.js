function login(e) {
    e.preventDefault();

    $("#loginButton").addClass('is-loading');

    let data = {};
    new FormData(e.target).forEach((value, key) => data[key] = value);

    fetch(e.target.action, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(getBody) // Tenta obter o resultado de sucesso na requisição
    .catch(result => { // Falha na requisição ou na obtenção dos valores de sucesso no getBody
        if (!result.isGetBody) // Checa se é uma resposta da requisição ou da função getBody chamada no primeiro then
            return getBody(result); // Tenta obter o resultado de falha na requisição
        else { // Ao não obter o resultado (Sucesso na requisição)
            alert("Não foi possível obter os dados");
        }
    })
    .then(response => { // Ao obter o resultado (Sucesso na requisição)
        let jsonObj = JSON.parse(response.value);
        if (response.ok) {
            alert("Sessão iniciada com sucesso");
            Object.keys(jsonObj).forEach(key => {
                localStorage.setItem(key, jsonObj[key]);
            });
            location.href = 'area-candidato/';
        } else {
            console.log(jsonObj.error);
            alert(jsonObj.message);
        }
    }).catch(response => { // Ao não obter o resultado (Falha na requisição)
          console.log(response.statusText);
          alert("Um erro ocorreu. Tente novemente mais tarde.");
    })
    .finally(() => {
        $("#loginButton").removeClass('is-loading');
    });
}

function cadastro(e) {
    e.preventDefault();

    $("#enviar").addClass('is-loading');

    let data = new FormData(e.target);

    fetch(e.target.action, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/form-data'
      }
    })
    .then(getBody) // Tenta obter o resultado de sucesso na requisição
    .catch(result => { // Falha na requisição ou na obtenção dos valores de sucesso no getBody
        if (!result.isGetBody) // Checa se é uma resposta da requisição ou da função getBody chamada no primeiro then
            return getBody(result); // Tenta obter o resultado de falha na requisição
        else { // Ao não obter o resultado (Sucesso na requisição)
            showMessage("Falha", "Não foi possível confirmar o envio dos dados", true);
        }
    })
    .then(response => { // Ao obter o resultado (Sucesso na requisição)
        let jsonObj = JSON.parse(response.value);
        if (response.ok) {
            showMessage("Inscrição efetudada com sucesso", 
                `Uma mensagem informativa foi enviada para ${data.get('email')} contendo o número de sua inscrição. Utilize-a junto de sua senha para acessar a área do candidato.`,
                false,
                () => location.href = '/');
        } else {
            console.log(jsonObj.error);
            showMessage('Falha no envio', jsonObj.message);
        }
    }).catch(response => { // Ao não obter o resultado (Falha na requisição)
          console.log(response.statusText);
          showMessage("Erro", "Um erro ocorreu. Tente novemente mais tarde.", true);
    })
    .finally(() => {
        $("#enviar").removeClass('is-loading');
    });
}

function query(url, options) {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(getBody) // Tenta obter o resultado de sucesso na requisição
            .catch(result => { // Falha na requisição ou na obtenção dos valores de sucesso no getBody
                if (!result.isGetBody) // Checa se é uma resposta da requisição ou da função getBody chamada no primeiro then
                    return getBody(result); // Tenta obter o resultado de falha na requisição
                else { // Ao não obter o resultado (Sucesso na requisição)
                    reject({ status: 1, error: "Não foi possível obter os resultados de envio" });
                    console.log(1);
                }
            })
            .then(response => { // Ao obter o resultado (Sucesso na requisição)
                let jsonObj = JSON.parse(response.value);
                if (response.ok) {
                    resolve(value);
                } else {
                    reject({ status: 2, error: jsonObj.message });
                    console.log(2, jsonObj.message);
                }
            }).catch(response => { // Ao não obter o resultado (Falha na requisição)
                reject({ status: 3, error: response.statusText });
                console.log(3, response.statusText);
            });
    })
}

function getUsers() {
    return new Promise((resolve, reject) => {
        query('http://stac-prd.us-east-1.elasticbeanstalk.com/adm/fase/0', {
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(resolve).catch(reject);
    });
}

// function loadUserOptions() {
//     let optionsTemplate = {
//         template: '<button class="dropdown-item" onclick="access(\'link\')">value</button>',
//         with(options) {
//             return this.template.replace('value', options.value).replace('link', options.link || '#');
//         }
//     }

//     fetch('/user/action/status', {
//         headers: new Headers({
//             "Authorization": "Bearer " + localStorage.getItem('token')
//         })
//     })
//     .then(getBody)
//     .catch((result) => {
//         if (!result.isGetBody) // Checa se é uma resposta da requisição ou da função getBody chamada no primeiro then
//             return getBody(result);
//         else $("#user-options").html(optionsTemplate.with({value: "Falha ao carregar as opções"}));
//     })
//     .then(response => {
//         let status = JSON.parse(response.value);
//         if (typeof status == 'object') {
//             console.log(status.message);
//             $("#user-options").html(optionsTemplate.with({value: "Falha ao carregar as opções"}));
//         } else {
//             $("#user-options").html(`
//                 ${status.map(str =>
//                     optionsTemplate.with({value: str, link: str})
//                 ).join('')}
//             `);
//         }
//     })
//     .catch(response => {
//         console.log(response.statusText);
//         $("#user-options").html(optionsTemplate.with({value: "Falha ao carregar as opções"}))
//     })
//     .finally(() => {
//         $("#user-options").html($("#user-options").html() + '<button class="dropdown-item" onclick="logOut()">Sair</button>')
//     });
// }

function logOut() {
    if (confirm("Você será desconectado. Deseja continuar?")) {
        localStorage.clear();
        location.href = '../';
    }
}

// function access(link) {
//     let processedLink = link.split(' ')[link.split(' ').length-1];
//     switch(processedLink) {
//         case 'resultados':
//             break;
//         case 'indisponível':
//             break;
//         default:
//             loadModal(processedLink);
//     }
// }

// function loadModal(service) {
//     $("#serviceModal")
//         .find('.modal-content')
//         .html(modalsTemplates[service]);

//     if (service == 'cadastrais') {
//         $("#serviceModal").on('show.bs.modal', setForm);
//     }

//     $("#serviceModal").modal('show');
// }

// function setForm() {
//     let form = $("#serviceModal").find('form');

//     fetch('http://stac-prd.us-east-1.elasticbeanstalk.com/adm/cadastros/', {
//         method: 'GET',
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem('token')
//         }
//     })
//         .then(getBody) // Tenta obter o resultado de sucesso na requisição
//         .catch(result => { // Falha na requisição ou na obtenção dos valores de sucesso no getBody
//             if (!result.isGetBody) {// Checa se é uma resposta da requisição ou da função getBody chamada no primeiro then
//                 return getBody(result); // Tenta obter o resultado de falha na requisição
//             }
//             else { // Ao não obter o resultado (Sucesso na requisição)
//                 showMessage('Não foi possível obter os dados atuais');
//             }
//         })
//         .then(response => { // Ao obter o resultado (Sucesso na requisição)
//             let jsonObj = JSON.parse(response.value);
//             if (response.ok) {
//                 $(form) // Nome completo
//                     .find('input[name=nomeCompleto]')
//                     .val(jsonObj.nomeCompleto);
//                 $(form) // Telefone
//                     .find('input[name=celular]')
//                     .val(jsonObj.celular);
//                 $(form) // E-mail
//                     .find('input[name=email]')
//                     .val(jsonObj.email);
//                 $(form) // Data de nascimento
//                     .find('input[name=dataDeNascimento]')
//                     .val(jsonObj.dataDeNascimento);
//                 $(form) // RG
//                     .find('input[name=rg]')
//                     .val(jsonObj.rg);
//                 $(form) // CEP
//                     .find('input[name=cep]')
//                     .val(jsonObj.cep);
//                 $(form) // Nome social
//                     .find('input[name=nomeSocial]')
//                     .val(jsonObj.nomeSocial);
//             } else {
//                 console.log(jsonObj.error);
//                 showMessage("Não foi possível obter os dados atuais");
//             }
//         })
//         .catch(response => { // Ao não obter o resultado (Falha na requisição)
//             console.log(response.statusText);
//             showMessage("Não foi possível obter os dados atuais");
//         })
// }

function confirmForm(e) {
    e.preventDefault();

    if (confirm("Você está prestes a realizar o envio do formulário. Essa ação não poderá ser desfeita. Deseja continuar?")){
        if ($(e.target).data("validation")){
            validate(e.target)
                .then(processedValues => sendForm(e.target, processedValues))
                .catch(() => alert('Há campos inválidos'));
        } else {
            sendForm(e.target);
        }
    }
}

function validate(form) {
    return new Promise((resolve, reject) => {
        switch($(form).data('validation')) {
            case 1:
                let respostas = $(form) // junta as respostas em um array único
                    .serialize()
                    .split('&')
                    .reduce(
                        (arr, m) => 
                            arr.concat(m.substring(m.indexOf('=')+1, m.length)),
                        []
                    );
                resolve({ respostas });
                break;
        }
    });
}

function sendForm(form, values) {
    let data = {};
    if (values) data = values;
    else {
        new FormData(form).forEach((value, key) => data[key] = value);
    }

    $(form).find('[type=submit]').addClass('is-loading');

    fetch(form.action, {
        method: form.method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.token
        }
    })
        .then(getBody) // Tenta obter o resultado de sucesso na requisição
        .catch(result => { // Falha na requisição ou na obtenção dos valores de sucesso no getBody
            if (!result.isGetBody) { // Checa se é uma resposta da requisição ou da função getBody chamada no primeiro then
                return getBody(result); // Tenta obter o resultado de falha na requisição
            }
            else { // Ao não obter o resultado (Sucesso na requisição)
                showMessage('Requisição não finalizada', 'Falha ao obter resultados de envio.', true);
            }
        })
        .then(response => { // Ao obter o resultado (Sucesso na requisição)
            let jsonObj = JSON.parse(response.value);
            if (response.ok) {
                showMessage("Pronto", jsonObj.message);
            } else {
                console.log(jsonObj.error);
                showMessage("Falha no envio", jsonObj.message, true);
            }
        })
        .catch(response => { // Ao não obter o resultado (Falha na requisição)
            console.log(response.statusText);
            showMessage("Erro", "Um erro ocorreu. Tente novemente mais tarde.", true);
        })
        .finally(() => $(form).find('[type=submit]').removeClass('is-loading'));
}

function showMessage(titulo, msg, error, cb) {
    $("#message .message-header p").text(titulo);
    $('#message .message-body').text(msg);
    $("#message .message").removeClass('is-danger').addClass('is-success');
    $("#message .delete").off().on('click', () => toggleModal('#message'));
    if (error) {
        $("#message .message").removeClass('is-success').addClass('is-danger');
    }
    if (cb) {
        $("#message .delete").on('click', cb);
    }
    toggleModal('#message');
}

function getBody(response) {
    return new Promise((resolve, reject) => {
            if(response.body)
                response.body.getReader().read().then(({value}) => {
                    if (value) {
                        response.value = value.reduce((arr, n) => arr += String.fromCharCode(n), '');
                        resolve(response);
                    } else {
                        response.isGetBody = true;
                        reject(response);
                    }
                });
            else {
                response.isGetBody = true;
                reject(response);
            }
        }
    );
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}