function login(e) {
    e.preventDefault();

    $("#loginButton").addClass('is-loading');

    let data = {};
    new FormData(e.target).forEach((value, key) => data[key] = value);

    query(
        e.target.action,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }  
        },
        true // retorna response.json()
    )
    .then(result => {
        Object.keys(result).forEach(key => {
            localStorage.setItem(key, result[key]);
        });
        location.href = './area-candidato/index.html'
    })
    .catch(({ error, status }) => showMessage(`Falha no login (${status})`, error.message || 'Erro não identificado', 'd'))
    .finally(() => $("#loginButton").removeClass('is-loading'));
}

function cadastro(e) {
    e.preventDefault();

    $("#enviar").addClass('is-loading');

    let data = new FormData(e.target);

    query(e.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(() =>
        showMessage("Inscrição efetudada com sucesso", 
            `Uma mensagem informativa foi enviada para ${data.get('email')} contendo o número de sua inscrição. Utilize-a junto de sua senha para acessar a área do candidato.`,
            false,
            () => location.href = '/')
    ) // Tenta obter o resultado de sucesso na requisição
    .catch(result => showMessage(`Falha ao enviar formulário (${result.status})`, result.error.message || 'Erro não identificado', 'd'))
    .finally(() => $("#enviar").removeClass('is-loading'));
}

function query(url, options, json) {
    return new Promise((resolve, reject) => {
        let resCopy;
        fetch(url, options)
            .then(response => {
                resCopy = response;
                return json ? response.json() : response;
            }) // Tenta obter o resultado de sucesso na requisição
            .then(value => { // Ao obter o resultado (Sucesso na requisição)
                if (resCopy.ok) {
                    resolve(value);
                } else {
                    reject({ status: 1, error: value });
                }
            }).catch(err => { // Ao não obter o resultado (Falha na requisição)
                if (resCopy.ok)
                    resolve();
                else
                    reject({ status: 2, error: resCopy ? resCopy.statusText : err });
                console.log(2, err);
            });
    })
}

function getUsers(fase=0) {
    return new Promise((resolve, reject) => {
        query(
            `http://stac-prd.us-east-1.elasticbeanstalk.com/adm/fase/${fase}`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + localStorage.token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            },
            true // retorna response.json()
        ).then(resolve).catch(reject);
    });
}

function logOut() {
    if (confirm("Você será desconectado. Deseja continuar?")) {
        localStorage.clear();
        location.href = '../';
    }
}

function confirmForm(e) {
    e.preventDefault();

    if (confirm("Você está prestes a realizar o envio do formulário. Essa ação não poderá ser desfeita. Deseja continuar?")){
        if (window.preAction) {
            window.preAction();
            window.preAction = null;
        }
        $('#loading').show();
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

    query(
        form.action,
        {
            method: form.getAttribute('method'),
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.token
            }
        },
        true // retorna response.json()
    )
    .then(result => showMessage("Pronto", result ? result : "Realizado com sucesso", 's', () => window.reload ? location.reload() : null)) // Tenta obter o resultado de sucesso na requisição
    .catch(result => showMessage(`Falha no envio (${result.status})`, result.error.message || 'Erro não identificado', 'd'))
    .finally(() => {
        $(form).find('[type=submit]').removeClass('is-loading');
        $("#loading").hide();
    });
}

function showMessage(titulo, msg, type, cb, time) {
    $("#message .message-header p").text(titulo);
    $('#message .message-body').html(msg);
    $("#message .message").removeClass('is-danger').addClass('is-success');
    $("#message .delete").off().on('click', () => toggleModal('#message'));
    switch (type) {
        case 'success':
        case 's':
            $("#message .message").removeClass().addClass('message is-success');
            break;
        case 'warning':
        case 'w':
            $("#message .message").removeClass().addClass('message is-warning');
            break;
        case 'danger':
        case 'd':
            $("#message .message").removeClass().addClass('message is-danger');
            break;
        case 'primary':
        case 'p':
            $("#message .message").removeClass().addClass('message is-primary');
            break;
        default:
            $("#message .message").removeClass().addClass('message is-info');

    }
        
    if (cb)
        $("#message .delete").on('click', cb);
    if (time)
        setTimeout(() => $("#message .delete").click(), time);
    toggleModal('#message');
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