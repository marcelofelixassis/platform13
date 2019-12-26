# Teste teórico

### CSS

1\) Na sua opinião, quais os melhores recursos para inclusão de imagens em um site/aplicação? 
E o que você acha interessante não utilizar?
Justifique levando em consideração boas práticas, estilização e formato de arquivos.

```js
Em sites básicos (html/css) costumo utilizar a tag img, caso seja necessário redimensionar o tamanho da imagem, uso algumas propriedades do CSS para não perder tanta qualidade em relação a imagem no tamanho original. Em aplicações com React/React native na maioria das vezes SVGs eu transformo em um component:

import { ReactComponent as Logo } from ‘./logo.svg’

Para imagens que não são svg, importo e utilizo dentro de uma tag img. Na minha opinião, não é uma boa prática definir a imagem no CSS.
```




2\) Você conhece algum padrão/metodologia que auxilie a estilização de uma aplicação? 
Explique um pouco através de exemplos;


```js
Já trabalhei com CSS orientado a objeto (OOCSS), na minha opinião é uma boa forma de organização dos arquivos de estilização de um site, seguindo um padrão para nomes de classes, seu código se torna reaproveitável e de forma que qualquer pessoa entenda e possa dar manutenção sem problemas. Em aplicações React costumo usar styled-components, crio um arquivo para cada componente, e reaproveito os componentes.

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```




3\) Se tratando de aplicações responsivas, quais práticas/recursos você costuma utilizar? 
Tem algum exemplo que você não acha interessante?


```js
Hoje em dia eu não acho interessante fazer a parte de responsividade de um site ou aplicação do zero. Existem diversas bibliotecas que podem te ajudar a fazer isso, assim economiza seu tempo. Eu costumo utilizar a biblioteca que mais se adapta ao projeto, como por exemplo: Ant Design, Material UI, Bootstrap.
```




4\) Analisando as tags e estilos abaixo, aponte os principais problemas encontrados e reescreva-os;

**Leve em consideração que as tags abaixo estão no meio de uma página html qualquer**


- HTML:
```
	<div class="lista-grande">
		<h1>Lorem Ipsun Dolor</h1>
			
		<span class="list-item-holder">	
			<ul>
				<li class="item">
					<label class="item__input-radio">
						<input type=radio>
						<span>1 item</span>
					</label>
				</li>
				<li class="item">
					<label  class="item__input-radio item__input-radio--cor-diferente">
						<input type=radio>
						<span>2 item</span>
					</label>
				</li>
				<li class="item" id="ultimo-item">
					<label  class="item__input-radio">
						<input class type=radio>
						<span>3 item</span>
					</label>
				</li>
			</ul>
		</span>
	</div>
  
```


- Estilos:
```
    .lista-grande{
        display: block;
    }

    .lista-grande h1{
        font-size: 18px;
    }

    .list-item-holder .item{
        list-style-type: decimal-leading-zero !important;
        padding: 1rem;
        width: 100%;
    }


    .list-item-holder ul li{
        list-style-type: thai;
    }

    .list-item-holder .item .item__input-radio{
        padding: 25px;
            border: solid 1px orange;
        display: flex;
        border: solid 1px #eadabd;
        background: aliceblue;
    }

    .item__input-radio--cor-diferente{
        border: solid 1px #eadabd;
        background: #a0abb5;
    }


    .item__input-radio--cor-diferente {
        @media (min-width: 480px) {
            background: #a0abb5;
        }
    }
    .item__input-radio--cor-diferente {
        @media (max-width: 480px) {
            background: transparent;
        }

    }

```

```
Tags erradas ou desnecessárias, input type radio sem name, media query errada, propriedades CSS a mais ou sobrepostas.

<style>
.lista-grande{
    display: block;
}
 
.lista-grande h1{
    font-size: 18px;
}
 
#list-item-holder .item{
    padding: 1rem;
}
 
#list-item-holder li{
    list-style-type: decimal-leading-zero;
}
 
#list-item-holder .item .item__input-radio{
    padding: 25px;
    border: solid 1px orange;
    display: flex;
    background-color: aliceblue;
}
 
#list-item-holder li:nth-child(2) .item__input-radio{
    border: solid 1px #eadabd !important;
    background-color: #a0abb5 !important;
}
 
@media (max-width: 480px) {
    #list-item-holder li:nth-child(2) .item__input-radio{
        background-color: transparent !important;
    }
}
</style>
 
<div class="lista-grande">
    <h1>Lorem Ipsun Dolor</h1>
    <ul id="list-item-holder">
        <li class="item">
            <label class="item__input-radio">
                <input type="radio" name="itens">
                <span>1 item</span>
            </label>
        </li>
        <li class="item">
            <label  class="item__input-radio">
                <input type="radio" name="itens">
                <span>2 item</span>
            </label>
        </li>
        <li class="item" id="ultimo-item">
            <label  class="item__input-radio">
                <input class type="radio" name="itens">
                <span>3 item</span>
            </label>
        </li>
    </ul>
</div>

```





5\) Analisando os estilos em `Nesting` do código abaixo, descreva, caso exista, os problemas gerados e as possíveis soluções;

```
    .form-holder {
        width: 100%;
        margin-bottom: 25px;

        .form-item {
            .item-name,
            .item-lastname,
            .item-genre,
            .item-email,
            .item-document-type,
            .item-document-number,
            .item-expiration-date,
            .item-country {
                input, select, textarea {
                    border: none;
                    padding: none;
                    box-shadow: none !important;

                    &.error{
                    background: red;
                    }
                }
                input[disabled], select[disabled], input[readonly], select[readonly] {
                    background-color: #FFF;
                }
            }
            
        }
    }

```

```js
Removeria as classes de cada input, e passaria a usar as tags que estão dentro do meu form.

.form-holder {
    width: 100%;
    margin-bottom: 25px;
 
    .form-item {    
      input, select, textarea {
        border: none;
        padding: none;
        box-shadow: none !important;
 
        &.error{
          background: red;
        }
      }
      input[disabled], select[disabled], input[readonly], select[readonly] {
        background-color: #000;
      } 
    }
}
```



---


### Javascript

1\) Cite dois recursos do javascript para o tratamento de processamentos assíncronos e explique as diferenças entre eles.

```js
Callbacks, Promises e Async functions
Callbacks - é uma função que vai ser passada como parâmetro para outra função, dessa forma ela só vai ser executada quando um evento específico ocorrer.

Promises - as promisses diferente dos callbacks consegue organizar de forma melhor o fluxo de uma requisição assíncrona, lidando com tratamento de erros, finalização do processo e etc... Promises são funções que te prometem retornar um determinado valor ao final de seu processamento.

Async functions - Fazem o mesmo trabalho das Promises de uma forma mais organizada.
```




2\) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```
    function doSomething() {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    }

    function doSomethingElse() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }

    somePromise()
        .then(() => {
            doSomething()
            doSomethingElse()
        })
        .then(() => {
            console.log('finished')
        })

```

```js
0 segundos, quando a promise que chega para somePromise é resolve, o codigo nos 2 then é executado. Uma solução seria usar async await.
await doSomething()
await doSomethingElse()
console.log(‘finished’)
```




3\) O que o código a seguir imprime? (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```	
	somePromise()
	    .then(() => {
		throw new Error('uh oh!')
	    }, err => {
		console.log(err.message)
	    })
	    .then(() => {
		console.log('ok now!')
	    })

```

```js
Um log de error com a mensagem uh oh!
```



4\) Melhore a função a seguir:

```
	function getTransactions() {
	    return $q((resolve, reject) => {
		$http.get(BASE_URL + '/api/transacoes')
		    .then(response => {
		        if (!response.data.error) {
		            const transactions = response.data

		            var _transactions = []

		            for (var i in transactions) {
		                if (transactions[i].realizada)  {
		                    _transactions.push({
		                        id: transactions[i].id,
		                        value: transactions[i].valor,
		                        type: transactions[i].valor < 0 ? 'transference' : 'deposit',
		                    })
		                }
		            }

		            resolve(_transactions)
		        } else {
		            reject(response.data.error)
		        }
		    })
		    .catch(e => reject(e))
	    })
    }

```


```js
getTransactions = async () => {
    try {
        const response = await $http.get(BASE_URL + '/api/transacoes')
        if (!response.data.error) {
            let transactions = []
            reponse.data.map(item => {
                if (item.realizada)  { 
                    transactions.push({
                        id: item.id,
                        value: item.valor,
                        type: item.valor < 0 ? 'transference' : 'deposit',
                    })
                }
            })
            return transactions
        }
        throw new Error(response.data.error)
    } catch (err) {
        return err
    }
}
```



5\) Dado um array de objetos, no qual cada objeto representa uma pessoa e possui as propriedades `name` e `age`, por exemplo:
```
    [
        { name: 'Rick Sanchez', age: 70 } ,
        { name: 'Morty Smith', age: 14 }
    ]

```

Crie funções para:
1. Retornar uma o array ordenado alfabeticamente pelos nomes;
2. Fazer o somatório das idades;
3. Verificar se alguma pessoa tem a idade maior que 50 (espera-se um retorno booleano).
4. Verificar se todas pessoas tem a idade menor que 20 (espera-se um retorno booleano).
5. Remover o primeiro nome de todas as pessoas.
6. Dado um determinado nome, retornar o primeiro objeto que corresponda a este nome.

*Obs.: As funções criadas devem atender arrays de qualquer tamanho.*


```js
1)
orderNames = () => {
    return test.sort((first, second) => {
        const firstName = first.name.toUpperCase();
        const secondName = second.name.toUpperCase();
 
        let comparison = 0;
        if (firstName > secondName) {
            comparison = 1;
        } else if (firstName < secondName) {
            comparison = -1;
        }
        return comparison;
    })
}
--------------
2)
sumOfAges = () => {
    let count = 0
    test.map(item => count += item.age)
    return count
}
--------------------
3)
checkAge = () => {
    let result = test.some(item => item.age > 50)
    return result
}
----------------
4) 
checkAge2 = () => {
    let result = test.find(item => item.age < 20)
    return result ? true : false
}
---------------
5)
removeFirstName = (test) => {
    test.map(item => {
        item.name = item.name.split(" ")[1]
    })
    return test
}
------------------
6)
GetOneByName = (test, name) => {
    const upperCaseName = name.toUpperCase();
    let result = test.find(item => item.name.toUpperCase() === upperCaseName)
    return result
}
```



6\)Dado o seguinte trecho de código:

```
	const getDiscountTicket = (ticket, discount) => {
		const discountTicket = { ...ticket };
  		discountTicket.prices.vip = discountTicket.prices.vip * discount;
		discountTicket.prices.stands = discountTicket.prices.stands * discount;
		return discountTicket;
	}

	const regularTicket = { band: 'Metallica', city: 'Belo Horizonte', prices: { vip: 800, stands: 600 } }
	const discountTicket = getDiscountTicket(regularTicket, 0.5);

	console.log('discountTicket: ', discountTicket.prices);
	console.log('regularTicket: ', regularTicket.prices);

```
Explique o porquê dos preços estarem com o mesmo valor. E o que precisa ser alterado para que os preços sejam diferentes?


```js
const getDiscountTicket = (ticket, discount) => {
    return { 
        ...ticket, 
        prices: { 
            vip: ticket.prices.vip * discount, 
            stands: ticket.prices.stands * discount
        } 
    };
}
```

---


### AngularJs

1\) Explique os tipos de Data Binding no AngularJS; 

```js
// Resposta
```

2\) Liste quais são os Dispatchers e Listeners que existem no AngularJs, as diferenças entre eles, vantagens e desvantagens no uso dos mesmos;

```js
// Resposta
```

3\) O que são e como funcionam os lifecycles no AngularJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
// Resposta
```

4\) Qual recurso angularJs pode ser usado para aumentar a performance de campos de formulários que realizam algum processamento ao alterar o texto?

```js
// Resposta
```

5\) Dado o `Nesting` de componentes abaixo, indique a melhor forma do componente `<fourth-component>` se comunicar com `<first-component>`;

```
	<first-component>
		<second-component>
			<third-component>
				<fourth-component>
				</fourth-component>
			</third-component>
		</second-component>
	</first-component>

```

```js
// Resposta
```
---

### React

1\) Cite tipos de componentes que existem no ReactJs e a melhor forma de utilização de cada um.

```js
Statefull Component: Usado quando precisamos manipular estados dentro do componente.
Stateless Component: Usado quando não precisamos manipular estados, somente apresentar dados na tela.
```

2\) O que são e como funcionam os lifecycles no ReactJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
componentDidMount, componentDidUpdate
Com hooks podemos exemplificar esses 2 lifecycles do React da seguinte forma:

import React, { useEffect } from 'react'
useEffect(() => {
    //código
});
```

3\) Atualmente nosso sistema possui um componente chamado Button que possui a seguinte estrutura:

```
    import React from 'react';
    import styled from 'styled-components';

    const ButtonLayout = styled.button`
    cursor: pointer;
    color: '#FFF';
    background-color: '#707070';
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .45rem 2.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover{
        background-color: ${props => props.backgroundColor + 'cc'};
    }
    `;

    const Button = (props) => {
    const { label, onClick = () => { }, type = 'button' } = props;
    return (
        <React.Fragment>
        <ButtonLayout type={type} onClick={onClick}>{label}</ButtonLayout>
        </React.Fragment>
    );
    };

    export default Button;
```

Atualmente, os nossos botões podem variar na cor, texto e ação que é executada ao ser clicado. 
No entanto, para uma nova atividade, foi solicitado seja criado um botão que contém também um ícone. 
O que você pode fazer para criar um botão que atenda essa demanda?


```js
import React from 'react';
import styled from 'styled-components';
import Exemple from 'react-icons';

    const ButtonLayout = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: '#FFF';
    background-color: '#707070';
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .45rem 2.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover{
        background-color: ${props => props.backgroundColor + 'cc'};
    }
    `;

    const selectIcon = (iconName) => {
      switch (iconName) {
        case 'exemple':
          return <Exemple />
      
        default:
          return <></>
      }
    }

    const Button = ({props, iconName}) => {
    const { label, onClick = () => { }, type = 'button' } = props;
    return (
        <React.Fragment>
          <ContainerButton>
            <ButtonLayout type={type} onClick={onClick}> {selectIcon(iconName)}{label}</ButtonLayout>
          </ContainerButton>
        </React.Fragment>
    );
    };

    export default Button;
```


