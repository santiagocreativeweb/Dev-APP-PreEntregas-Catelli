const input = "aksjdk123123X!#"

//Solo numeros
const expression = /^[0-9]*$/

//Solo letras
const expression2 = /^[a-zA-Z]+$/

//Solo letras y numeros
const expression3 = /^[a-zA-Z0-9]*$/

const evaluation = expression.test(input)

const evaluation2 = expression2.test(input)

const evaluation3 = expression3.test(input)




